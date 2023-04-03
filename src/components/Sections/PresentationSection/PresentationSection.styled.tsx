import styled from 'styled-components';
import { SectionStyled } from '../../../common/Section/Section.styled';
import { devSize } from '../../../assets/devices';

export const Section = styled(SectionStyled)`
    display: flex;
    justify-content: center;
`;
export const SliderWrapper = styled.div`
    max-width: 260px;

    @media (min-width: ${devSize.tablet}px) {
        max-width: 400px;
    }

    @media (min-width: ${devSize.laptop}px) {
        max-width: 600px;
    }
`;
export const Image = styled.img`
    border: 10px solid transparent;
`;
export const MediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${devSize.laptop}px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
