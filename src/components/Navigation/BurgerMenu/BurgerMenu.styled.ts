import styled from 'styled-components';
import { IProps } from './BurgerMenu';
import { MenuLink } from '../NavBar/NavBar.styled';
import { devSize } from '../../../assets/devices';

export const MenuWrapper = styled.div<Omit<IProps, 'closeMenu'>>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: ${({ isMenuOpen }) => (isMenuOpen ? 0 : -100)}px;
    width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : 0)};
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.68);
    transition: all 400ms ease-out;
    z-index: 10000;
`;
export const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.font.light};
    background-color: transparent;
    border-radius: 50%;
    font-size: 2rem;
    border: none;
`;
export const MenuList = styled.ul`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    padding: 40px 20px;
    background-color: ${({ theme }) => theme.background.greyTrans};
    border: 1px solid white;

    @media (min-width: 430px) {
        padding: 40px 40px;
    }

    @media (min-width: ${devSize.mobilePro}px) {
        padding: 40px 60px;
    }
`;
export const MenuItem = styled.li`
    :not(:last-child) {
        margin-bottom: 20px;
    }
`;
export const BurgerLink = styled(MenuLink)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;

    @media (min-width: ${devSize.mobilePro}px) {
        font-size: 1.5rem;
    }
`;
export const ImageWrapper = styled.div`
    width: 80px;
`;
