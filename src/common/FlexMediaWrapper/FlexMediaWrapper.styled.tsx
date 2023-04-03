import styled from 'styled-components';
import { devSize } from '../../assets/devices';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${devSize.tablet}px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
