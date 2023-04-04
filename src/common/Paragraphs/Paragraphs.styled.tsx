import styled from 'styled-components';

export const Wrapper = styled.div<{ marginBottom: number }>`
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;
