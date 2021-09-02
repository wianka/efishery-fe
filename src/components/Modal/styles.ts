import { css } from 'react-emotion';

export const styWrap = css`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;

    &.active {
        visibility: visible;
        opacity: 1;
    }

    .modal__content {
        background-color: white;
        width: 500px;
        margin: 50px auto;
        padding: 20px;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -ms-border-radius: 8px;
        -o-border-radius: 8px;
    }

    .content__header{
        position: relative;

        p {
            margin: 0;
            text-align: center;
            font-weight: bold;
        }

        span {
            position: absolute;
            right: 0;
            top: 0;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
        }
    }

    .content__children {
        margin-top: 16px;
    }
`;
