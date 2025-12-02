'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import en from '@/messages/en.json';
import es from '@/messages/es.json';

type Locale = 'en' | 'es';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const messages = { en, es };

const defaultContextValue: LocaleContextType = {
  locale: 'en',
  setLocale: () => {},
};

const LocaleContext = createContext<LocaleContextType>(defaultContextValue);

export function useLocale() {
  return useContext(LocaleContext);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale;
    if (stored && (stored === 'en' || stored === 'es')) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
  };

  const contextValue: LocaleContextType = mounted
    ? { locale, setLocale }
    : defaultContextValue;

  return (
    <LocaleContext.Provider value={contextValue}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
