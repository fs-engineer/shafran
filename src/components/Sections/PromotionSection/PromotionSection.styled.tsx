import styled from 'styled-components';
import { devSize } from '../../../assets/devices';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;
export const ListItem = styled.li`
    padding: 10px;
`;
export const DecorationImg = styled.img<{ align: 'right' | 'left' }>`
    position: absolute;
    top: ${({ align }) => (align === 'right' ? -90 : 'auto')}px;
    right: ${({ align }) => (align === 'right' ? -40 : 'auto')}px;
    bottom: ${({ align }) => (align === 'right' ? 'auto' : -80)}px;
    left: ${({ align }) => (align === 'right' ? 'auto' : -40)}px;
    width: 150px;

    @media (min-width: ${devSize.tablet}px) {
        width: 200px;
    }

    @media (min-width: ${devSize.laptop}px) {
        width: 250px;
    }

    @media (min-width: ${devSize.monitor}px) {
        width: 300px;
    }
`;
