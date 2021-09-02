import React, { FC } from "react";
import { DaerahListInterface } from '../Lists/interfaces/item';
import { useFilterContext } from '../context/FIlterContext';

interface Props {
    dataDaerah: DaerahListInterface[];
}

const DaerahFilter: FC<Props> = ({ dataDaerah }) => {
    const { setDaerah } = useFilterContext();

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
            {/* <label>Daerah</label> */}
            <select name="" id="" placeholder="Pilih Daerah" onChange={handleChangeDaerah}>
                <option>Pilih Daerah</option>
                {renderItem()}
            </select>
        </div>
    )
}

export default DaerahFilter;
