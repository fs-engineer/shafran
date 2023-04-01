import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translationEN.json';
import translationUA from './translationUA.json';
import translationRU from './translationRU.json';

i18n.use(initReactI18next).init({
    lng: 'ua', // if you're using a language detector, do not define the lng option
    fallbackLng: 'ua',
    // debug: true,
    resources: {
        en: {
            translation: translationEN,
        },
        ua: {
            translation: translationUA,
        },
        ru: {
            translation: translationRU,
        },
    },
});

export default i18n;
