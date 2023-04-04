import styled, { DefaultTheme } from 'styled-components';
import { IContainerProps } from './Container';

interface IBoxProps extends IContainerProps {
    theme: DefaultTheme;
    flexDirection?: boolean;
}
export const Box = styled.div<IBoxProps>`
    position: relative;
    flex-basis: 1200px;
    padding: ${({ padding }) => padding};
`;
