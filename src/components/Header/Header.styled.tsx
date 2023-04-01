import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.background.greyTrans};
`;
