import styled, { DefaultTheme } from 'styled-components';

interface IIconBox {
    theme: DefaultTheme;
    size: number;
}

export const IconBox = styled.div<IIconBox>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: white;
    border-radius: 50%;
    :not(:last-child) {
        margin-right: 10px;
    }
`;
