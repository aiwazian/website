'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Language, Translations, translations, MetaTranslations } from './dictionary';

export type { Language, Translations, MetaTranslations };
export { translations };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);
  const pathname = usePathname();

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('aiwazian_lang', newLang);
        document.cookie = `aiwazian_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
        document.documentElement.lang = newLang;
      } catch {
        // ignore storage errors
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const hasCookie = document.cookie.includes('aiwazian_lang=');
        if (!hasCookie) {
          document.cookie = `aiwazian_lang=${initialLang}; path=/; max-age=31536000; SameSite=Lax`;
          localStorage.setItem('aiwazian_lang', initialLang);
        }
      } catch {
        // ignore storage errors
      }
    }
  }, [initialLang]);

  // Synchronize document title, meta tags, and open graph in real time across page routes and language toggles
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const currentMeta = translations[lang].meta;
      let title = currentMeta.homeTitle;
      let desc = currentMeta.homeDescription;

      if (pathname === '/privacy') {
        title = currentMeta.privacyTitle;
        desc = currentMeta.privacyDescription;
      } else if (pathname === '/tos') {
        title = currentMeta.tosTitle;
        desc = currentMeta.tosDescription;
      }

      document.title = title;
      document.documentElement.lang = lang;

      const setMetaTag = (selector: string, attrName: string, attrKey: string, attrVal: string, value: string) => {
        let el = document.querySelector(selector);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attrKey, attrVal);
          document.head.appendChild(el);
        }
        el.setAttribute(attrName, value);
      };

      setMetaTag('meta[name="description"]', 'content', 'name', 'description', desc);
      setMetaTag('meta[name="keywords"]', 'content', 'name', 'keywords', currentMeta.homeKeywords);
      setMetaTag('meta[property="og:title"]', 'content', 'property', 'og:title', title);
      setMetaTag('meta[property="og:description"]', 'content', 'property', 'og:description', desc);
      setMetaTag('meta[property="og:locale"]', 'content', 'property', 'og:locale', lang === 'ru' ? 'ru_RU' : 'en_US');
      setMetaTag('meta[name="twitter:title"]', 'content', 'name', 'twitter:title', title);
      setMetaTag('meta[name="twitter:description"]', 'content', 'name', 'twitter:description', desc);
    } catch {
      // ignore DOM manipulation error
    }
  }, [lang, pathname]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
