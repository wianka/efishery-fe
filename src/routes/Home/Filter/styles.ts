import { css } from "react-emotion";

export const styWrapFilter = css`
    border-bottom: thin solid #E5E7E9;
    padding: 0 0 12px;

    .wrapper-input {
        position: relative;
        display: inline-block;

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
`;
