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
export const DecorationImg = styled.img<{ align: 'right' | 'left' }>`
    position: absolute;
    top: ${({ align }) => (align === 'right' ? 0 : 'auto')}px;
    right: ${({ align }) => (align === 'right' ? -40 : 'auto')}px;
    bottom: ${({ align }) => (align === 'right' ? 'auto' : 0)}px;
    left: ${({ align }) => (align === 'right' ? 'auto' : -40)}px;
    width: 300px;
`;
