import React, { FC, createContext, ReactNode, useState, useCallback, useContext } from "react";

interface ProviderInterface {
    children: ReactNode;
}

interface DaerahInterface {
    city: string;
    province: string;
}

interface ContextInterface {
    daerah: DaerahInterface;
    sizes: string;
    pagination: number,
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    setPagination: () => void;
    setSizes: React.Dispatch<React.SetStateAction<string>>;
    setDaerah: React.Dispatch<React.SetStateAction<DaerahInterface>>;
    resetFilter: () => void;
}

const defaultDaerah = {
    city: '',
    province: '',
}

export const FilterContext = createContext<ContextInterface>({
    daerah: defaultDaerah,
    sizes: '',
    pagination: 0,
    searchValue: '',
    setSearchValue: () => {},
    setPagination: () => {},
    setSizes: () => {},
    setDaerah: () => {},
    resetFilter: () => {},
});

const FIlterProvider: FC<ProviderInterface> = ({ children }) => {
    const [search, setSearch] = useState<string>('');
    const [pagination, setPagination] = useState<number>(0);
    const [sizes, setSizes] = useState<string>('');
    const [daerah, setDaerah] = useState<DaerahInterface>(defaultDaerah);

    const handleSearch = useCallback(val => {
        setPagination(0);
        if (val) {
            setSearch(val);
        } else {
            setSearch('');
        }
    }, []);
    
    const handlePagination = useCallback(() => {
        setPagination(prev => prev + 1);
    }, []);

    const handleSizes = useCallback(val => {
        if (val) {
            setSizes(val)
        } else {
            setSizes('');
        }
    }, []);

    const handleDaerah = useCallback(val => {
        if (val) {
            setDaerah(val)
        } else {
            setDaerah(defaultDaerah);
        }
    }, []);

    const resetFilter = () => {
        setSearch('');
        setPagination(0);
        setSizes('');
        setDaerah(defaultDaerah);
    }

    const state = {
        daerah,
        sizes,
        pagination,
        searchValue: search,
        setSearchValue: handleSearch,
        setPagination: handlePagination,
        setSizes: handleSizes,
        setDaerah: handleDaerah,
        resetFilter,
    }
    return <FilterContext.Provider value={state}>{children}</FilterContext.Provider>
}

export const useFilterContext = () => useContext(FilterContext);

export default FIlterProvider;