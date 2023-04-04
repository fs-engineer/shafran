import styled from 'styled-components';
import { IProps } from './BurgerMenu';

export const MenuWrapper = styled.div<Omit<IProps, 'closeMenu'>>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: ${({ isMenuOpen }) => (isMenuOpen ? 0 : -100)}px;
    width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : 0)};
    height: 100vh;
    background-color: transparent;
    transition: all 400ms ease-out;
    z-index: 10000;
`;
export const CloseBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.font.light};
    background-color: transparent;
    border-radius: 50%;
    font-size: 2rem;
    border: none;
    animation: rotate360 4s linear infinite;
    animation-delay: 6s;

    @keyframes rotate360 {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(0deg);
        }
        80% {
            transform: rotate(0deg);
        }
        85% {
            transform: rotate(90deg);
        }
        90% {
            transform: rotate(180deg);
        }
        95% {
            transform: rotate(270deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
export const MenuList = styled.ul`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: 80vh;
    padding: 30px 10px 0 40px;
    background-color: ${({ theme }) => theme.background.greyTrans};
`;
export const MenuItem = styled.li``;
