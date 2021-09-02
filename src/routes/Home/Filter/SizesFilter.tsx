import React, { FC, useState, useCallback, useEffect } from "react";
import { useFilterContext } from '../context/FIlterContext';

interface SizeListInterface {
    size?: string;
}

const SizeFilter: FC = () => {
    const { setSizes } = useFilterContext();
    const [dataSizes, setDataSizes] = useState<Array<SizeListInterface>>([]);

    const getListSizes = useCallback(async() => {
        await fetch('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_size', {
            method: 'GET',
            headers: {
                'Content-Types': 'application/json',
            },
        }).then(response => response.json()).then(result => {
            setDataSizes(result);
        });
    }, []);

    useEffect(() => {
        getListSizes();
    }, [getListSizes]);

    const handleChangeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSizes(e.target.value);
    }

    const renderItem = () => {
        return dataSizes.map((item, key) => {
            return (
                <option key={key}>{item.size}</option>
            )
        })
    }

    return (

        <div className="wrapper-select">
            <label>Ukuran</label>
            <select name="" id="" placeholder="Pilih Ukuran" onChange={handleChangeSize}>
                <option>Pilih Ukuran</option>
                {renderItem()}
            </select>
        </div>
    )
}

export default SizeFilter;
