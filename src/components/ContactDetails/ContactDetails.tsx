import React from 'react';
import { socialIcons } from '../../assets/socialIconsData';
import { SocialItem, SocialList } from './ContactDetails.styled';
import { Tooltip } from '../Tooltip';
import { SocialIcon } from '../SocialIcon';
import { LangSwitcher } from '../LangSwitcher';
import { useTranslation } from 'react-i18next';

const ContactDetails = () => {
    const { t } = useTranslation();
    return (
        <SocialList>
            {socialIcons.map(({ name, icon, link }) => (
                <SocialItem key={name}>
                    <Tooltip text={name}>
                        <SocialIcon
                            key={name}
                            name={name}
                            icon={icon}
                            link={link}
                        />
                    </Tooltip>
                </SocialItem>
            ))}
            <SocialItem>
                <Tooltip text={t('lang')}>
                    <LangSwitcher />
                </Tooltip>
            </SocialItem>
        </SocialList>
    );
};

export default ContactDetails;
