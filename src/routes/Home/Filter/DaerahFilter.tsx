import React, { FC, useState, useCallback, useEffect } from "react";
import { useFilterContext } from '../context/FIlterContext';

interface DaerahListInterface {
    city?: string;
    province?: string;
}

const DaerahFilter: FC = () => {
    const { setDaerah } = useFilterContext();
    const [dataDaerah, setDataDaerah] = useState<Array<DaerahListInterface>>([]);

    const getListDaerah = useCallback(async() => {
        await fetch('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_area', {
            method: 'GET',
            headers: {
                'Content-Types': 'application/json',
            },
        }).then(response => response.json()).then(result => {
            setDataDaerah(result);
        });
    }, []);

    useEffect(() => {
        getListDaerah();
    }, [getListDaerah]);

    const handleChangeDaerah = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const splitValue = value.split(' - ') || '';

        setDaerah({
            city: splitValue[0] || '',
            province: splitValue[1] || '',
        });
    }

    const renderItem = () => {
        return dataDaerah.map((item, key) => {
            return (
                <option key={key}>{item.city} - {item.province}</option>
            )
        })
    }

    return (

        <div className="wrapper-select">
            <label>Daerah</label>
            <select name="" id="" placeholder="Pilih Daerah" onChange={handleChangeDaerah}>
                <option>Pilih Daerah</option>
                {renderItem()}
            </select>
        </div>
    )
}

export default DaerahFilter;
