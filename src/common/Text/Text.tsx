import React, { FC } from 'react';
import { Content } from './Text.styled';
import { theme } from '../../assets/themes/theme';

export interface IText {
    size?: number;
    children: React.ReactNode;
    color?: string;
    transform?: 'upperCase' | 'lowerCase';
    fontStyle?: 'normal' | 'italic';
}

const Text: FC<IText> = ({
    children,
    color = theme.font.dark,
    size = 1,
    fontStyle = 'normal',
}) => {
    return (
        <Content color={color} size={size} fontStyle={fontStyle}>
            {children}
        </Content>
    );
};

export default Text;
