import React, { useCallback, useRef } from "react";
import ItemCard from './ItemCard';
import { useFilterContext } from '../../context/FIlterContext';
import { ItemValuesInterfaces } from '../interfaces/item';
import LoaderItem from './LoaderItem';
import { styHeader, styBody } from './styles';

interface Props {
    listData: ItemValuesInterfaces[];
    isLoading?: boolean;
    hasNext?: boolean;
}

function TableContainer ({ listData, isLoading, hasNext }: Props) {
    const { setPagination } = useFilterContext();
    const observer = useRef<null | IntersectionObserver>(null);


    const lastElementRef = useCallback(node => {
        if (isLoading) return
    
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
          if (entries[0]?.isIntersecting && hasNext) {
                setPagination();
          }
        })
    
        if (node) observer.current.observe(node);
    }, [hasNext, isLoading, setPagination]);

    const renderItemCard = () => {
        if (listData.length > 0) {
            return listData.map((item, key) => {
                let refProps = {};
                if (key + 1 === listData.length) {
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
    }

    const renderEmptyResult = () => {
        return (
            <div className="empty-result">
                <h5>Hasil pencarian tidak ditemukan</h5>
            </div>
        )
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
                {Boolean(listData.length) && renderItemCard()}
                {!isLoading && Boolean(!listData.length) && renderEmptyResult()}
                {isLoading && <LoaderItem />}
            </div>
        </div>
    );
}

export default TableContainer;
