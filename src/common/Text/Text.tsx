import React, { FC } from 'react';
import { Content } from './Text.styled';

export interface IText {
    size?: number;
    content: string;
    color?: string;
    transform?: 'upperCase' | 'lowerCase';
}

const Text: FC<IText> = ({ content, color, size }) => {
    return (
        <Content color={color} size={size}>
            {content}
        </Content>
    );
};

export default Text;
