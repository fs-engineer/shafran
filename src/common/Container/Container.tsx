import React, { FC } from 'react';
import { ChildrenProp } from '../../types';
import { Box } from './Container.styled';

interface IProps extends ChildrenProp {
    directionV?: boolean;
}
const Container: FC<IProps> = ({ children }) => {
    return <Box>{children}</Box>;
};

export default Container;
