import React, { FC } from "react";
import { SizeListInterface } from '../Lists/interfaces/item';
import { useFilterContext } from '../context/FIlterContext';

interface Props {
    dataSizes: SizeListInterface[];
}

const SizeFilter: FC<Props> = ({ dataSizes }) => {
    const { setSizes } = useFilterContext();

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
            {/* <label>Ukuran</label> */}
            <select name="" id="" placeholder="Pilih Ukuran" onChange={handleChangeSize}>
                <option>Pilih Ukuran</option>
                {renderItem()}
            </select>
        </div>
    )
}

export default SizeFilter;
