import React, { FC } from 'react';
import { IconBox } from './SocialIcon.styled';

interface ISocialIcon {
    name: string;
    icon: JSX.Element;
    link: string;
}
const SocialIcon: FC<ISocialIcon> = ({ name, icon, link }) => {
    return <IconBox size={30}>{icon}</IconBox>;
};

export default SocialIcon;
