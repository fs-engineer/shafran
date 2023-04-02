import React, { FC, useState } from 'react';
import { Text, Wrapper } from './Tooltip.styled';

export interface ITooltipProps {
    text: string;
    children: React.ReactNode;
}

const Tooltip: FC<ITooltipProps> = ({ children, text }) => {
    const [isShown, setIsShown] = useState(false);

    const toggleIsShown = () => {
        setIsShown(prevState => !prevState);
    };

    return (
        <>
            <Wrapper onMouseEnter={toggleIsShown} onMouseLeave={toggleIsShown}>
                {children}
                {isShown ? <Text isShown={isShown}>{text}</Text> : null}
            </Wrapper>
        </>
    );
};

export default Tooltip;
