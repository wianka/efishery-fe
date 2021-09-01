import React, { FC } from "react";

import { styHeader, styBody, styItem } from './styles';

const TableContainer: FC = () => {
    return (
        <div>
            <div className={styHeader}>
                <div className="col-header">Komoditas</div>
                <div className="col-header">Daerah</div>
                <div className="col-header">Ukuran</div>
                <div className="col-header">Harga</div>
            </div>

            <div className={styBody}>
                <div className={styItem}>
                    <div className="col-item">Pari</div>
                    <div className="col-item">Jawa Barat</div>
                    <div className="col-item">100</div>
                    <div className="col-item">Rp. 10.000</div>
                </div>
            </div>
        </div>
    );
}

export default TableContainer;
