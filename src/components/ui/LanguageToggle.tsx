'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export function LanguageToggle() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('locale='))
      ?.split('=')[1] || 'en';
    setLocale(storedLocale);
  }, []);

  const changeLocale = (newLocale: string) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    setLocale(newLocale);
    setIsOpen(false);
    router.refresh();
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2.5 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
        aria-label="Change language"
      >
        <GlobeAltIcon className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium uppercase">{locale}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-2 py-2 w-32 bg-card border border-border rounded-lg shadow-lg z-50"
        >
          <button
            onClick={() => changeLocale('en')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/10 transition-colors ${
              locale === 'en' ? 'text-primary font-medium' : 'text-foreground'
            }`}
          >
            English
          </button>
          <button
            onClick={() => changeLocale('es')}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/10 transition-colors ${
              locale === 'es' ? 'text-primary font-medium' : 'text-foreground'
            }`}
          >
            Espanol
          </button>
        </motion.div>
      )}
    </div>
  );
}
