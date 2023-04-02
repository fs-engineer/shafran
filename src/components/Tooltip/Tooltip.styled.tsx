import styled from 'styled-components';
import { ChildrenProp } from '../../types';

interface ITextProps {
    children: ChildrenProp;
    isShown: boolean;
}
export const Wrapper = styled.div`
    position: relative;
`;
export const Text = styled.span<ITextProps>`
    color: ${({ theme }) => theme.font.light};
    font-size: 0.8rem;
    position: absolute;
    top: -20px;
    left: -50%;
    opacity: ${({ isShown }) => (isShown ? 1 : 0)};
    transition: all 500ms ease-out;
`;
