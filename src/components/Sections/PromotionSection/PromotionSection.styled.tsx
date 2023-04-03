import styled from 'styled-components';
import { SectionStyled } from '../../../common/Section/Section.styled';

export const Section = styled(SectionStyled)`
    display: flex;
    justify-content: center;
`;
export const MediaWrapper = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const List = styled.ul`
    display: flex;
`;
export const ListItem = styled.li`
    padding: 10px;
`;
