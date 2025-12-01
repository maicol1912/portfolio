'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-foreground">
                Maicol<span className="text-primary">.</span>
              </span>
            </a>
            <span className="text-sm text-muted">
              © {new Date().getFullYear()} {t('rights')}
            </span>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>Built with</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
            <span>using Next.js, React & Tailwind</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/maicol1912"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/maicolarcila1/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-muted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
