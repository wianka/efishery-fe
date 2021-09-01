import React, { FC } from 'react';

import Button from '../../../components/Button';
import Card from '../../../components/Card';

import Filter from '../Filter';

import { styWrapperTitle } from './styles';

const ContainerList: FC = () => {
    return (
        <Card>
            <div className={styWrapperTitle}>
                <h4>List Harga</h4>
                <Button primary>Tambah Harga</Button>
            </div>

            {/* Filter */}
            <Filter />
        </Card>
    )
}

export default ContainerList;