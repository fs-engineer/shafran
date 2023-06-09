import styled from 'styled-components';
import { devSize } from '../../assets/devices';

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    background-color: ${({ theme }) => theme.background.greyTrans};
`;
export const List = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${devSize.tablet}px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    :not(:last-child) {
        margin-bottom: 20px;
    }

    @media (min-width: ${devSize.tablet}px) {
        text-align: left;
        :not(:last-child) {
            margin-bottom: 0;
        }
    }
`;
