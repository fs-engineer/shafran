import styled from 'styled-components';
import { devSize } from '../../assets/devices';

export const Title = styled.h2`
    font-family: BadScript, sans-serif;
    color: ${({ theme }) => theme.font.light};
    font-size: 2rem;
`;
export const LogoWrapper = styled.div`
    margin-bottom: 20px;

    @media (min-width: ${devSize.tablet}px) {
        margin-bottom: 0;
    }
`;
