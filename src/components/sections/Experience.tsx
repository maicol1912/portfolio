'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    company: 'Mundi',
    role: 'Software Engineer Senior',
    period: 'Oct 2025 - Present',
    location: 'New York, USA (Remote)',
    description: [
      'Orchestrating backend workflows for factoring and trade finance products using Temporal',
      'Optimizing Snowflake queries and materialized views for credit risk analysis',
      'Implementing credit evaluation rules for exporter and buyer onboarding',
    ],
    technologies: ['Node.js', 'Temporal', 'Snowflake', 'PostgreSQL', 'AWS'],
    current: true,
  },
  {
    company: 'Sumas',
    role: 'Fullstack Developer Semi-Senior',
    period: 'May 2024 - Sep 2025',
    location: 'Medellin, Colombia (Remote)',
    description: [
      'Optimized Core banking platform by 60% using reactive programming and distributed caching',
      'Led migration of 500K credits and 700K customer profiles with zero data loss',
      'Built batch processing system with message brokers achieving 80% efficiency improvement',
      'Developed credit platform used by 5,000+ stores, reducing placement time by 40%',
    ],
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Angular'],
    current: false,
  },
  {
    company: 'Sumas',
    role: 'Fullstack Developer Junior',
    period: 'May 2022 - Apr 2024',
    location: 'Medellin, Colombia (Remote)',
    description: [
      'Built real-time credit risk engine increasing successful transactions by 35%',
      'Reduced digital onboarding time by 40% through flow optimization',
      'Automated regulatory reporting to credit bureaus with zero manual reprocessing',
      'Integrated multiple payment gateways increasing system availability by 30%',
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Angular', 'AWS'],
    current: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Experience() {
  const t = useTranslations('experience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 lg:py-32">
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
              My professional journey in building scalable financial solutions
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 lg:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full border-4 border-background z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-8 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
                    >
                      {/* Header */}
                      <div className={`flex flex-wrap items-start gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">
                            {t('present')}
                          </span>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <BriefcaseIcon className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Role */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>

                      {/* Meta */}
                      <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted text-sm flex items-start gap-2">
                            <span className={`text-primary mt-1.5 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for timeline alignment */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
