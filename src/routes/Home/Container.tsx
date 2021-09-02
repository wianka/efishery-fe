import React, { FC } from 'react';
import FilterProvider from './context/FIlterContext';
import Lists from './Lists';

const Container: FC = () => {
    return (
        <div>
            <h5 style={{ marginBottom: '22px' }}>Harga Perikanan Indonesia</h5>

            <FilterProvider>
                <Lists />
            </FilterProvider>
        </div>
    )
}

export default Container;
