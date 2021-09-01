import React, { FC, ReactNode } from "react";
import { styWrapper } from './styles';

interface Props {
    children: ReactNode;
}

const Card: FC<Props> = ({ children }) => {
    return (
        <div className={styWrapper}>
            {children}
        </div>
    )
}

export default Card;