import styled from 'styled-components';

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.font.light};
    color: ${({ theme }) => theme.font.light};
    cursor: pointer;
    background: transparent;

    :hover {
        background-color: rgba(255, 255, 255, 0.46);
    }
`;
