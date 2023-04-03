import styled from 'styled-components';
import { SectionStyled } from '../../common/Section/Section.styled';

export const Title = styled.h2`
    font-family: BadScript, sans-serif;
    font-size: 2rem;
    max-width: 300px;
    margin-bottom: 30px;
`;
export const Description = styled.div`
    max-width: 400px;
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
    max-width: 600px;
`;

export const Image = styled.img`
    border: 10px solid transparent;
`;
