import React, { FC, useEffect, useState } from 'react';
import { Text } from '../index';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './Paragraphs.styled';

interface IParagraphsProps {
    quantity: number;
    localPath: string;
    marginBottom: number;
}

const Paragraphs: FC<IParagraphsProps> = ({
    quantity,
    localPath,
    marginBottom,
}) => {
    const [iterations, setIterations] = useState<number[]>([]);
    const { width } = useWindowSize();
    const { t } = useTranslation();

    useEffect(() => {
        const numbers = [];
        for (let i = 0; i < quantity; i++) {
            numbers.push(i);
        }

        setIterations(numbers);
    }, [quantity]);

    return (
        <>
            {iterations.map(num => (
                <Wrapper marginBottom={marginBottom} key={num}>
                    <Text fontStyle={'italic'} size={width > 767 ? 1.5 : 1}>
                        {t(`${localPath}.${num}`)}
                    </Text>
                </Wrapper>
            ))}
        </>
    );
};

export default Paragraphs;
