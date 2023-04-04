import styled from 'styled-components';
import { devSize } from '../../assets/devices';

export const HeaderStyled = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    background-color: ${({ theme }) => theme.background.greyTrans};
    z-index: 9999;
`;
export const ContactDetailsWrapper = styled.div`
    margin-bottom: 20px;

    @media (min-width: ${devSize.tablet}px) {
        margin-bottom: 0;
    }
`;
