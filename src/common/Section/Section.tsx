import React, { FC } from 'react';
import { ChildrenProp } from '../../types';

const Section: FC<ChildrenProp> = ({ children }) => {
    return <section>{children}</section>;
};

export default Section;
