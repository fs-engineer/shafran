import styled, { DefaultTheme } from 'styled-components';

interface IBoxProps {
    theme: DefaultTheme;
    directionV?: boolean;
}
export const Box = styled.div<IBoxProps>`
    display: flex;
    justify-content: ${props =>
        props.directionV ? 'center' : 'space-between'};
    align-items: center;
    flex-direction: ${props => (props.directionV ? 'column' : 'row')};
    flex-basis: 1200px;
`;
