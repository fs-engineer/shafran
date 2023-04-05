import styled from 'styled-components';
import { Title } from '../Description/Description.styled';
import { devSize } from '../../../assets/devices';

export const TitleStyled = styled(Title)`
    max-width: 800px;
`;
export const SliderWrapper = styled.div`
    position: relative;
    max-width: 280px;

    @media (min-width: ${devSize.mobilePro}px) {
        max-width: 400px;
    }

    @media (min-width: ${devSize.tablet}px) {
        max-width: 300px;
    }

    @media (min-width: ${devSize.laptop}px) {
        max-width: 500px;
    }
`;
export const MediaWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 200px 0 0;

    @media (min-width: ${devSize.tablet}px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
export const ImageWrapper = styled.div`
    width: 100px;
    border: 10px solid ${({ theme }) => theme.background.white};
`;
export const TextWrapper = styled.div`
    max-width: 400px;

    @media (min-width: ${devSize.laptop}px) {
        max-width: 600px;
    }
`;
