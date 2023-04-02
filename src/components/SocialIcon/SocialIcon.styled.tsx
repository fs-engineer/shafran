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
    border: 1px solid ${({ theme }) => theme.background.white};
    color: ${({ theme }) => theme.background.white};
    border-radius: 50%;
`;
