import styled from 'styled-components';
import { SectionStyled } from '../../common/Section/Section.styled';
import { devSize } from '../../assets/devices';

export const Title = styled.h2`
    font-family: BadScript, sans-serif;
    font-size: 2rem;
    max-width: 300px;
    margin-bottom: 30px;
`;
export const Description = styled.div`
    max-width: 400px;
    margin-bottom: 30px;

    @media (min-width: ${devSize.laptop}px) {
        margin-bottom: 0;
    }
`;
export const DecoratedSection = styled(SectionStyled)`
    display: flex;
    justify-content: center;
`;

export const AccentName = styled.span`
    font-family: BadScript, sans-serif;
    font-size: 2rem;
    font-style: normal;
    color: #ffa600;
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
