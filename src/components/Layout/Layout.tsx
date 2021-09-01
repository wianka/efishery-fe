import React, { FC, ReactNode } from 'react';
import { styWrapper } from './styles';

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={styWrapper}>{children}</div>
    )
}

export default Layout;
