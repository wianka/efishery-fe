import React, { FC, useCallback, useEffect, useState, useRef } from "react";
import ItemCard from './ItemCard';
import { ItemValuesInterfaces } from '../interfaces/item';
import LoaderItem from './LoaderItem';
import { styHeader, styBody } from './styles';

const TableContainer: FC = () => {
    const observer = useRef<null | IntersectionObserver>(null);
    const pagination = useRef(-1);
    const [data, setData] = useState<Array<ItemValuesInterfaces>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getList = useCallback(async () => {
        pagination.current += 1;
        setIsLoading(true);
        const result = await fetch(`https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?limit=${20}&offset=${pagination.current}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).then(result => {
            setIsLoading(false);
            setData(prev => {
                if (prev.length > 0) {
                    return [...prev, ...result];
                }

                return result;
            });
        })

        return result;
    }, []);

    useEffect(() => {
        getList();
    }, [getList]);

    const lastElementRef = useCallback(node => {
        if (isLoading) return
    
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
          if (entries[0]?.isIntersecting) {
              getList();
          }
        })
    
        if (node) observer.current.observe(node);
    }, [getList, isLoading]);

    const renderItemCard = () => {
        if (data.length > 0) {
            return data.map((item, key) => {
                let refProps = {};
                if (key + 1 === data.length) {
                    refProps = {
                        'data-testid': 'baba', 
                        ref: lastElementRef,
                    }
                }

                return (
                    <div {...refProps} key={key}>
                        <ItemCard
                            komoditas={item.komoditas}
                            provinsi={item.area_provinsi}
                            kota={item.area_kota}
                            size={item.size}
                            price={item.price}
                        />
                    </div>
                )
            })
        }

        return null;
    }

    return (
        <div>
            <div className={styHeader}>
                <div className="col-header">Komoditas</div>
                <div className="col-header">Daerah</div>
                <div className="col-header">Ukuran</div>
                <div className="col-header">Harga</div>
            </div>

            <div className={styBody}>
                {renderItemCard()}
                {isLoading && <LoaderItem />}
            </div>
        </div>
    );
}

export default TableContainer;
