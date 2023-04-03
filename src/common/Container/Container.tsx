import React, { FC } from 'react';
import { ChildrenProp } from '../../types';
import { Box } from './Container.styled';

export interface IContainerProps extends ChildrenProp {
    flexDirectionV?: boolean;
    padding?: string;
}

const Container: FC<IContainerProps> = ({
    children,
    padding = '0 20px 0 20px',
}) => {
    return <Box padding={padding}>{children}</Box>;
};

export default Container;
