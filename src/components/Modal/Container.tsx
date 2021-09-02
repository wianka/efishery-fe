import React, { FC, ReactNode } from "react";
import { cx } from 'react-emotion';
import { styWrap } from './styles';

interface ModalProps {
    display?: boolean;
    onClose?: () => void;
    title?: string;
    children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ display, onClose, title, children}) => {
    return (
        <div className={cx(styWrap, { active: display })}>
            <div className="modal__content">
            <div className="content__header">
                <p>{title}</p>

                <span onClick={onClose}>X</span>
            </div>
            <div className="content__children">
                {children}
            </div>
            </div>
        </div>
    )
}

export default Modal;
