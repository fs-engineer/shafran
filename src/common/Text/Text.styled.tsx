import styled from 'styled-components';
import { IText } from './Text';

export const Content = styled.p<Omit<IText, 'content'>>`
    color: ${({ color }) => color};
    font-size: ${({ size }) => size}rem;
`;
