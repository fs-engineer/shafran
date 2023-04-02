import React, { FC } from 'react';
import { Content } from './Text.styled';
import { theme } from '../../assets/themes/theme';

export interface IText {
    size?: number;
    children: string;
    color?: string;
    transform?: 'upperCase' | 'lowerCase';
}

const Text: FC<IText> = ({ children, color = theme.font.dark, size = 1 }) => {
    return (
        <Content color={color} size={size}>
            {children}
        </Content>
    );
};

export default Text;
