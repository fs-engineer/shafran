import styled from 'styled-components';
import { devSize } from '../../../assets/devices';

export const Title = styled.h2`
    font-family: BadScript, sans-serif;
    font-size: 2rem;
    max-width: 300px;
    margin-bottom: 30px;
`;
export const DescriptionStyled = styled.div`
    max-width: 400px;
    margin-bottom: 30px;

    @media (min-width: ${devSize.laptop}px) {
        margin-bottom: 0;
    }
`;
export const AccentName = styled.span`
    font-family: BadScript, sans-serif;
    font-size: 2rem;
    font-style: normal;
    color: #ffa600;
`;
