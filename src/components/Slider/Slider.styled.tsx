import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 0 30px 0;
`;
export const SlideBox = styled.div`
    position: relative;
`;
export const Title = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.font.light};
    font-size: 5rem;
    font-family: OpenSans, sans-serif;
    font-style: italic;
    text-align: center;
    width: 100%;
    //text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
`;
