import { css } from "react-emotion";

export const styWrapFilter = css`
    border-bottom: thin solid #E5E7E9;
    padding: 0 0 12px;
    display: flex;

    .wrapper-input {
        position: relative;
        display: inline-block;
        margin-right: 22px;

        input {
            border: thin solid #E5E7E9;
            border-radius: 8px;
            padding: 8px 50px 8px 8px;
            font-size: 14px;
            border-right: none;
        }

        button {
            font-size: 14px;
            position: absolute;
            right: 0;
            padding: 8px;
            border: thin solid transparent;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }

    .wrapper-select {
        display: flex;
        align-items: center;
        margin-right: 22px;

        label {
            font-size: 12px;
            margin-right: 12px;
            color: #31353BAD;
        }

        select {
            border: thin solid #E5E7E9;
            border-radius: 6px;
            padding: 8px 8px 8px 8px;
            max-width: 150px;
        }
    }

    .wrapper-reset {
        button {
            font-size: 12px;
        }
    }

    @media (max-width: 425px), (max-width: 768px) {
        display: block;
        
        .wrapper-input {
            width: 100%;

            input {
                width: 100%;
            }
        }

        .wrapper-select {
            width: 100%;
            display: block;
            margin-top: 12px;

            label {
                margin-bottom: 4px;
                display: block;
            }

            select {
                width: 100%;
                max-width: 100%;
            }
        }

        .wrapper-reset {
            margin-top: 8px;
        }
    }
`;
