import React, { FC } from 'react';
import JsonToForm from 'json-reactform';
import { SizeListInterface, DaerahListInterface } from './interfaces/item';
import Modal from '../../../components/Modal';

interface ModalProps {
    dataSizes: SizeListInterface[];
    dataDaerah: DaerahListInterface[];
    onClose: () => void;
    display?: boolean;
}

interface SubmitDataInterface {
    daerah: {
        label: string;
        value: string;
    },
    harga: string;
    komoditas: string;
    size: {
        label: string;
        value: string;
    }
}

const ModalAdd: FC<ModalProps> = ({ onClose, display, dataSizes, dataDaerah }) => {
    const handleSubmit = ({daerah, harga, komoditas, size}: SubmitDataInterface) => {
        // need api to add data
        onClose();
    }

    return (
        <Modal title="Tambah List Ikan" onClose={onClose} display={display}>
            {display && (
                <JsonToForm onSubmit={handleSubmit} model={{
                    "komoditas": {
                        "type": "text",
                        "required": true
                    },
                    "size": {
                        "type": "select",
                        "required": true,  
                        "options": dataSizes.map(val => ({
                            value: val.size,
                            label: val.size
                        })),
                    },
                    "harga": {
                        "type": "number",
                        "required": true
                    },
                    "daerah": {
                        "type": "select",
                        "required": true,
                        "options": dataDaerah.map(val => ({
                            value: `${val.city} - ${val.province}`,
                            label: `${val.city} - ${val.province}`,
                        })),
                    },
                    "Simpan": {
                        "type": "submit"
                    },
                }} />
            )}
        </Modal>
    )
}

export default ModalAdd;