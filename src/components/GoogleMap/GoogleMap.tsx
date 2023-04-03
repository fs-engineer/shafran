import React from 'react';
import { MapFrame } from './GoogleMap.styled';

const GoogleMap = () => {
    return (
        <MapFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.8352003629796!2d28.661098130518415!3d50.25719408897739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6494367369c3%3A0x795e6aaa793ba7e6!2z0JvRjNCy0L7QstGB0LrQuNC5INC_0LXRgC4sIDPQsCwg0JbQuNGC0L7QvNC40YAsINCW0LjRgtC-0LzQuNGA0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCAxMDAwMA!5e0!3m2!1sru!2spl!4v1680439310786!5m2!1sru!2spl"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></MapFrame>
    );
};

export default GoogleMap;
