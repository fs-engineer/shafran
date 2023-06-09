import styled from 'styled-components';
import { devSize } from '../../../assets/devices';

export const MenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    place-items: center;
    align-items: start;

    @media (min-width: ${devSize.tablet}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${devSize.laptop}px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: ${devSize.monitor}px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;
