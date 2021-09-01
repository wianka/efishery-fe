import React, { FC } from "react";
import Button from "../../../components/Button";
import { styWrapFilter } from './styles';

const Filter: FC = () => {
    return (
        <div className={styWrapFilter}>
            <div className="wrapper-input">
                <input type="text" placeholder="Cari Nama Ikan" />
                <Button primary>Cari</Button>
            </div>
        </div>
    )
}

export default Filter;
