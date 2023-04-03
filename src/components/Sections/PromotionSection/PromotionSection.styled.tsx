import styled from 'styled-components';

export const MediaWrapper = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;
export const ListItem = styled.li`
    padding: 10px;
`;
