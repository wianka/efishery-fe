import React, { FC, ReactNode } from "react";
import { cx } from "react-emotion";
import { styWrapper, styPrimary, styBlock, stySecondary } from './styles';

interface Props {
    children: ReactNode;
    primary?: boolean;
    secondary?: boolean;
    block?: boolean;
    onClick?: () => void;
}

const Button: FC<Props> = ({ children, primary, secondary, block, onClick }) => {
    return (
        <button type="button" className={cx(styWrapper, { [styPrimary]: primary }, { [stySecondary]: secondary }, { [styBlock]: block})} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;