import React, { FC, useEffect, useCallback, useState } from 'react';

import { ItemValuesInterfaces } from './interfaces/item';
import { useFilterContext } from '../context/FIlterContext';

import Button from '../../../components/Button';
import Card from '../../../components/Card';

import Filter from '../Filter';
import Table from './Table';

import { styWrapperTitle } from './styles';

const ContainerList: FC = () => {
    const { searchValue, pagination, sizes, daerah } = useFilterContext();

    const [data, setData] = useState<Array<ItemValuesInterfaces>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasNext, setHasNext] = useState<boolean>(false);

    const getList = useCallback(async () => {
        setIsLoading(true);
        const { city, province } = daerah;
        const paramsSearch = JSON.stringify({
            ...(searchValue && { komoditas: searchValue }),
            ...(sizes && { size: sizes }),
            ...(city && { area_kota: city }),
            ...(province && { area_provinsi: province }),
        });

        const result = await fetch(`https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?limit=${20}&offset=${pagination}&search=${paramsSearch}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).then(result => {
            const isNext = result.length > 19 ? true : false;

            setIsLoading(false);
            if (searchValue || sizes || city || province) {
                setData(result);
            } else {
                setData(prev => {
                    if (result.length > 0) {
                        return [...prev, ...result];
                    }
    
                    return result;
                });
            }

            setHasNext(isNext);
        })

        return result;
    }, [daerah, pagination, searchValue, sizes]);

    useEffect(() => {
        getList();
    }, [getList]);

    return (
        <Card>
            <div className={styWrapperTitle}>
                <h4>List Harga</h4>
                <Button primary>Tambah Harga</Button>
            </div>

            {/* Filter */}
            <Filter />

            {/* Table */}
            <Table listData={data} isLoading={isLoading} hasNext={hasNext} />
        </Card>
    )
}

export default ContainerList;