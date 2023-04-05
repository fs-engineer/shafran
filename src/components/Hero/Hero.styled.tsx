import styled from 'styled-components';
import { devSize } from '../../assets/devices';

export const SlideBox = styled.div`
    position: relative;
`;
export const SliderTitle = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.font.light};
    font-size: 1.2rem;
    line-height: 1.3;
    font-family: OpenSans, sans-serif;
    font-style: italic;
    text-align: center;
    width: 90%;

    @media (min-width: ${devSize.mobilePro}px) {
        font-size: 1.7rem;
    }

    @media (min-width: ${devSize.tablet}px) {
        font-size: 2rem;
    }

    @media (min-width: ${devSize.laptop}px) {
        font-size: 2.5rem;
    }

    @media (min-width: ${devSize.monitor}px) {
        font-size: 4rem;
    }
`;
