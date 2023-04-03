import styled from 'styled-components';
import { FlexMediaWrapper } from '../../../common/FlexMediaWrapper';
import { devSize } from '../../../assets/devices';

export const MediaWrapper = styled(FlexMediaWrapper)`
    @media (min-width: ${devSize.laptop}px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    order: 0;

    @media (min-width: ${devSize.tablet}px) {
        margin-right: 30px;
        order: -1;
    }

    @media (min-width: ${devSize.laptop}px) {
        margin-right: 60px;
    }
`;
export const ListItem = styled.li``;
