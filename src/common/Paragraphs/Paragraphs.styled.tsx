import styled from 'styled-components';

export const Wrapper = styled.div<{ marginBottom: number }>`
    width: 100%;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;
