'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const education = [
  {
    title: 'Software Engineering',
    institution: 'Politecnico Grancolombiano',
    type: "Bachelor's Degree",
  },
  {
    title: 'Information Systems Analysis & Development',
    institution: 'SENA',
    type: 'Technology Degree',
  },
];

const certifications = [
  {
    name: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Cybersecurity & Computer Forensics',
    issuer: 'SENA',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'RPA Process Automation',
    issuer: 'EAFIT',
    color: 'from-blue-500 to-indigo-500',
  },
];

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

export function Education() {
  const t = useTranslations('education');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 lg:py-32 bg-section-bg">
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
              My academic background and professional certifications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('educationTitle')}
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
                  >
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                      {item.type}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted text-sm">{item.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrophyIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('certificationsTitle')}
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="relative overflow-hidden p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cert.color}`}
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-muted text-sm">Issued by {cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
