import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBarStyled = styled.nav`
    position: fixed;
    width: 100%;
    background-color: ${({ theme }) => theme.background.greyTrans};
`;
export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 20px;
`;
export const MenuItem = styled.li`
    :not(:last-child) {
        margin-right: 20px;
    }
`;
export const MenuLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.font.light};
    text-transform: uppercase;
`;

export const Logo = styled.h2`
    font-family: BadScript, sans-serif;
    color: ${({ theme }) => theme.font.light};
`;
