import React, { FC, useState, useCallback } from "react";
import { useFilterContext } from '../context/FIlterContext';
import { SizeListInterface, DaerahListInterface } from '../Lists/interfaces/item';

import Button from "../../../components/Button";
import DaerahFilter from './DaerahFilter';
import SizesFilter from './SizesFilter';
import { styWrapFilter } from './styles';

interface Props {
    dataSizes: SizeListInterface[];
    dataDaerah: DaerahListInterface[];
}

const Filter: FC<Props> = ({ dataSizes, dataDaerah }) => {
    const { setSearchValue, resetFilter } = useFilterContext();
    const [valueSearch, setValueSearch] = useState<string>('');

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    }

    const handleDoSearch = useCallback(() => {
        setSearchValue(valueSearch);
    }, [setSearchValue, valueSearch]);

    const handleKeyPress = useCallback(e => {
        if (e.key === 'Enter') {
            handleDoSearch()
        }
    }, [handleDoSearch]);

    const handleOnClickButton = useCallback(() => {
        handleDoSearch();
    }, [handleDoSearch]);

    const handleResetFilter = () => {
        resetFilter();
        setValueSearch('');
    }

    return (
        <div className={styWrapFilter}>
            <div className="wrapper-input">
                <input type="text" placeholder="Cari Nama Ikan" onChange={handleChangeSearch} value={valueSearch} onKeyPress={handleKeyPress} />
                <Button primary onClick={handleOnClickButton}>Cari</Button>
            </div>

            <DaerahFilter dataDaerah={dataDaerah} />

            <SizesFilter dataSizes={dataSizes} />

            <div className="wrapper-reset">
                <Button onClick={handleResetFilter} secondary>Reset Filter</Button>
            </div>
        </div>
    )
}

export default Filter;
