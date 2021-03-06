import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

export const langs = ['en', 'ru']

const resources = {
    en: {
        translation: {
            "Teams list": "Teams list",
            "Profile": "Profile"

        }
    },
    ru: {
        translation: {
            "Teams list": "Список Команд",
            "Profile": "Профиль"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        debug: true,
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;
