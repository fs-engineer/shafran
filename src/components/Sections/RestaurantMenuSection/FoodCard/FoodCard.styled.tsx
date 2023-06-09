import styled from 'styled-components';

export const MenuItem = styled.li`
    display: flex;
    flex-direction: column;
    max-width: 320px;
`;

export const Title = styled.h3`
    font-size: 2rem;
    margin-bottom: 20px;
`;

export const ImgWrapper = styled.div`
    width: 320px;
    border-radius: 7px;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    font-style: italic;
    margin-bottom: 20px;
`;

export const PriceWeightBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BoldText = styled.span`
    font-weight: 900;
`;
