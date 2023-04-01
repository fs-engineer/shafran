import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.background.greyTrans};
`;
