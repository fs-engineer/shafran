import React, { FC } from 'react';
import { ChildrenProp } from '../../types';
import { SectionStyled } from './Section.styled';

const Section: FC<ChildrenProp> = ({ children }) => {
    return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
