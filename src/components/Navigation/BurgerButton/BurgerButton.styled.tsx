import styled from 'styled-components';

export const BurgerBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
`;
export const Lines = styled.span`
    position: relative;
    width: 40px;
    height: 4px;
    background-color: ${({ theme }) => theme.background.white};

    :before,
    :after {
        content: '';
        position: absolute;
        left: 0;
        display: block;
        width: 40px;
        height: 4px;
        background-color: ${({ theme }) => theme.background.white};
    }
    :before {
        top: -12px;
    }

    :after {
        bottom: -12px;
    }
`;
