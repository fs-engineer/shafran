import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav``;
export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;
export const MenuItem = styled.li`
    position: relative;

    :not(:last-child) {
        margin-right: 20px;
    }
    :before,
    :after {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid ${({ theme }) => theme.background.white};
        border-width: 0 0 3px 3px;
        border-radius: 5px;
        transition: 0.5s;
        opacity: 0;
    }
    :before {
        bottom: 0;
        left: 0;
    }
    :hover:before {
        bottom: -8px;
        left: -8px;
        opacity: 1;
    }
    :after {
        top: 0;
        right: 0;
        border-width: 3px 3px 0 0;
    }
    :hover:after {
        top: -8px;
        right: -8px;
        opacity: 1;
    }
`;
export const MenuLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.font.light};
    text-transform: uppercase;
`;
