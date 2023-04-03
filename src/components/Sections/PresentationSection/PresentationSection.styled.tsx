import styled from 'styled-components';
import { devSize } from '../../../assets/devices';
import { FlexMediaWrapper } from '../../../common/FlexMediaWrapper';

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
export const MediaWrapper = styled(FlexMediaWrapper)`
    @media (min-width: ${devSize.laptop}px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
