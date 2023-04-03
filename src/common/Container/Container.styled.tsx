import styled, { DefaultTheme } from 'styled-components';
import { IContainerProps } from './Container';
import { devSize } from '../../assets/devices';

interface IBoxProps extends IContainerProps {
    theme: DefaultTheme;
    flexDirection?: boolean;
}
export const Box = styled.div<IBoxProps>`
    //display: flex;
    //flex-direction: column;
    //justify-content: space-between;
    //align-items: center;
    //flex-basis: 1240px;
    flex-basis: 1200px;
    padding: ${({ padding }) => padding};

    // @media (min-width: ${devSize.tablet}px) {
    //     flex-direction: row;
    //     justify-content: space-between;
    //     align-items: center;
    // }
`;
