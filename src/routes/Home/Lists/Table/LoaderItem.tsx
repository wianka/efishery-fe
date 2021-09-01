import React, { FC } from "react";
import { styItem } from './styles';

const LoaderItem: FC = () => {
    const renderLoader = () => {
        return [0,1,2].map(val => {
            return (
                <div className={styItem} key={val}>
                    <div className="col-item">
                        <div className="loader" />
                    </div>
                    <div className="col-item">
                        <div className="loader" />
                    </div>
                    <div className="col-item">
                        <div className="loader" />
                    </div>
                    <div className="col-item">
                        <div className="loader" />
                    </div>
                </div>
            )
        })
    }

    return <>{renderLoader()}</>;
}

export default LoaderItem;
