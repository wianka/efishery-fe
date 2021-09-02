import React, { FC } from 'react';
import FilterProvider from './context/FIlterContext';
import Lists from './Lists';

const Container: FC = () => {
    return (
        <div>
            <h3>Harga Perikanan Indonesia</h3>

            <FilterProvider>
                <Lists />
            </FilterProvider>
        </div>
    )
}

export default Container;
