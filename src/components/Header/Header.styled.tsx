import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.background.greyTrans};
    z-index: 9999;
`;
export const SocialList = styled.ul`
    display: flex;
`;
export const SocialItem = styled.li`
    :not(:last-child) {
        margin-right: 10px;
    }
`;
