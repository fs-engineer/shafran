import { BsInstagram, BsPhone } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import React from 'react';

export const socialIcons = [
    {
        name: 'instagram',
        icon: <BsInstagram />,
        link: 'https://www.instagram.com/shafran_zt/',
    },
    {
        name: 'facebook',
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/shafranzt/',
    },
    {
        name: 'phone',
        icon: <BsPhone />,
        link: 'tel:+380682894490',
    },
    {
        name: 'map',
        icon: <IoLocationOutline />,
        link: 'https://goo.gl/maps/NRGaWpnmpgsfoNw8A',
    },
];
