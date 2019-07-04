import i18next from 'i18next';
import { initReactI18next as reactModule } from 'react-i18next';
import translationsLoadModule from 'i18next-xhr-backend';
import langDetectModule from 'i18next-browser-languagedetector';

import { VERSION } from './version';

// prettier-ignore
i18next
  .use(langDetectModule)
  .use(translationsLoadModule)
  .use(reactModule)
  .init({
    interpolation: { escapeValue: false },
    defaultNS: 'seller',
    fallbackLng: 'en',
    preload: ['en'],
    whitelist: ['en', 'es'],
    nonExplicitWhitelist: false,
    load: 'languageOnly',
    lowerCaseLng: true,
    react: {
      wait: true,
    },
    detection: {
      order: ['navigator', 'localStorage'],
      lookupLocalStorage: 'alameda:lang',
      caches: ['localStorage']
    },
    backend: {
      // eslint-disable-next-line no-undef
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
      queryStringParams: { v: VERSION }
    }
  });

export default i18next;
