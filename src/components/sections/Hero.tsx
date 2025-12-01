'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const stats = [
  { value: '4+', label: 'years' },
  { value: '500K+', label: 'credits' },
  { value: '60%', label: 'performance' },
  { value: '5K+', label: 'stores' },
];

export function Hero() {
  const t = useTranslations('hero');
  const tStats = useTranslations('stats');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Available Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {t('available')}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div variants={itemVariants} className="space-y-2">
                <p className="text-muted text-lg lg:text-xl">
                  {t('greeting')}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  <span className="text-foreground">{t('name')}</span>
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                  <span className="gradient-text">{t('titleHighlight')}</span>
                  <br />
                  <span className="text-foreground">{t('titleNormal')}</span>
                </h2>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-muted text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0"
              >
                {t('subtitle')}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary/25"
                >
                  {t('cta')}
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl transition-colors"
                >
                  {t('ctaSecondary')}
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/maicol1912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/maicolarcila1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Stats / Visual Element */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Profile Image */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/maicol-profile.png"
                      alt="Maicol Arcila"
                      width={320}
                      height={320}
                      className="object-cover object-top scale-110"
                      priority
                    />
                  </div>

                  {/* Floating Stats Cards */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 px-4 py-3 bg-card border border-border rounded-xl shadow-lg"
                  >
                    <p className="text-2xl font-bold text-primary">4+</p>
                    <p className="text-xs text-muted">{tStats('years')}</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-4 px-4 py-3 bg-card border border-border rounded-xl shadow-lg"
                  >
                    <p className="text-2xl font-bold text-accent">60%</p>
                    <p className="text-xs text-muted">{tStats('performance')}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Stats */}
          <motion.div
            variants={itemVariants}
            className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-card border border-border rounded-xl text-center"
              >
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted">{tStats(stat.label)}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
              aria-label="Scroll to About"
            >
              <ArrowDownIcon className="w-5 h-5 text-muted" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
