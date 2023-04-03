import styled from 'styled-components';
import { IProps } from './PrevNextArrow';

export const Button = styled.button<IProps>`
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.font.dark};
    cursor: pointer;
`;
