'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { EnvelopeIcon, MapPinIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Contact() {
  const t = useTranslations('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Email Card */}
              <motion.a
                href="mailto:maicoldev05@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <EnvelopeIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">{t('email')}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    maicoldev05@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPinIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">{t('location')}</p>
                  <p className="font-semibold text-foreground">
                    Medellin, Colombia
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-muted mb-4">{t('social')}</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/maicol1912"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="font-medium">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/maicolarcila1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <div className="relative space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">👋</span>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Ready to start a project?
                  </h3>
                  <p className="text-muted">
                    Let&apos;s discuss how I can help bring your ideas to life
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.a
                    href="mailto:maicoldev05@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary/25"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    {t('cta')}
                  </motion.a>
                  <motion.a
                    href="/resume_maicol_arcila.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl transition-colors"
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    {t('ctaSecondary')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
