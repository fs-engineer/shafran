import styled, { DefaultTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IIconBox {
    theme: DefaultTheme;
    size: number;
}

export const IconLink = styled(NavLink)<IIconBox>`
    color: ${({ theme }) => theme.font.dark};
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
