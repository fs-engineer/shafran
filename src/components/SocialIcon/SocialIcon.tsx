import React, { FC } from 'react';
import { IconLink } from './SocialIcon.styled';

interface ISocialIcon {
    name: string;
    icon: JSX.Element;
    link: string;
}
const SocialIcon: FC<ISocialIcon> = ({ name, icon, link }) => {
    return (
        <IconLink to={link} size={30} target="_blank">
            {icon}
        </IconLink>
    );
};

export default SocialIcon;
