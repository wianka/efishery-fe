import React, { FC } from 'react';
import FilterProvider from './context/FIlterContext';
import Lists from './Lists';

const Container: FC = () => {
    return (
        <div>
            <h5>Harga Perikanan Indonesia</h5>

            <FilterProvider>
                <Lists />
            </FilterProvider>
        </div>
    )
}

export default Container;
