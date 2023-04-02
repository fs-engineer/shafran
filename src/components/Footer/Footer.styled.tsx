import styled from 'styled-components';

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.background.greyTrans};
`;
