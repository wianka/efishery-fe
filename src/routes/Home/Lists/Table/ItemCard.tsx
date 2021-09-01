import React, { FC } from "react";
import toIDR from '../../../../helpers/toIDR';

import { ItemValuesReadInterfaces } from '../interfaces/item';
import { styItem } from './styles';

const ItemCard: FC<ItemValuesReadInterfaces> = ({ komoditas, kota, provinsi, size, price }) => {
    return (
        <div className={styItem}>
            <div className="col-item">{komoditas}</div>
            <div className="col-item">{kota} - {provinsi}</div>
            <div className="col-item">{size}</div>
            <div className="col-item">{toIDR(Number(price))}</div>
        </div>
    )
}

export default ItemCard;
