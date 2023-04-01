import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;
export const SlideBox = styled.div`
    position: relative;
`;
export const SliderTitle = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.font.light};

    font-size: 1rem;
    font-family: OpenSans, sans-serif;
    font-style: italic;
    text-align: center;
    width: 80%;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media (min-width: 1200px) {
        font-size: 5rem;
    }
`;
