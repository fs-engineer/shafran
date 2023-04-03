import styled, { DefaultTheme } from 'styled-components';
import { IContainerProps } from './Container';

interface IBoxProps extends IContainerProps {
    theme: DefaultTheme;
    flexDirection?: boolean;
}
export const Box = styled.div<IBoxProps>`
    display: flex;
    justify-content: ${props =>
        props.flexDirectionV ? 'center' : 'space-between'};
    align-items: center;
    flex-direction: ${props => (props.flexDirectionV ? 'column' : 'row')};
    flex-basis: 1200px;
    padding: ${({ padding }) => padding};
`;
