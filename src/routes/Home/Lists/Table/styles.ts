import { css } from 'react-emotion';

const columnWidth = `
    &:nth-child(1) {
        width: 250px;
    }
    &:nth-child(2) {
        width: 150px;
    }
    &:nth-child(3) {
        width: 100px;
    }
    &:nth-child(4) {
        width: 150px;
    }
`;

export const styHeader = css`
    border-bottom: thin solid #E5E7E9;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .col-header {
        font-size: 12px;
        color: #31353BAD;
        text-transform: uppercase;
        font-weight: bold;
        ${columnWidth}
    }
`;

export const styBody = css`
    padding: 12px 0 0;
`;

export const styItem = css`
    border-bottom: thin solid #F3F4F5;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .col-item {
        font-size: 14px;
        color: #31353BAD;
        ${columnWidth}
    }
`;