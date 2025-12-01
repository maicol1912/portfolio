'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { CodeBracketIcon, CloudIcon, CpuChipIcon, CircleStackIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: CodeBracketIcon,
    titleKey: 'Backend Development',
    descKey: 'Building scalable RESTful and GraphQL APIs with Node.js, NestJS, and TypeScript.',
  },
  {
    icon: CloudIcon,
    titleKey: 'Cloud Architecture',
    descKey: 'Designing cloud-native solutions on AWS with Terraform and serverless architectures.',
  },
  {
    icon: CpuChipIcon,
    titleKey: 'System Design',
    descKey: 'Event-driven architectures with message brokers, CQRS, and saga patterns.',
  },
  {
    icon: CircleStackIcon,
    titleKey: 'Database Design',
    descKey: 'Performance tuning and data modeling for PostgreSQL, MongoDB, and Redis.',
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

export function About() {
  const t = useTranslations('about');
  const tServices = useTranslations('services');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-32 bg-section-bg">
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
            <p className="text-xl text-primary font-medium">
              {t('intro')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-muted text-lg leading-relaxed">
                {t('paragraph1')}
              </p>
              <p className="text-muted text-lg leading-relaxed">
                {t('paragraph2')}
              </p>
              <p className="text-muted text-lg leading-relaxed">
                {t('paragraph3')}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-card border border-border rounded-xl">
                  <p className="text-sm text-muted mb-1">Location</p>
                  <p className="font-semibold text-foreground">Medellin, Colombia</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-xl">
                  <p className="text-sm text-muted mb-1">Experience</p>
                  <p className="font-semibold text-foreground">4+ Years</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-xl">
                  <p className="text-sm text-muted mb-1">Specialization</p>
                  <p className="font-semibold text-foreground">Fintech & Backend</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-xl">
                  <p className="text-sm text-muted mb-1">Languages</p>
                  <p className="font-semibold text-foreground">Spanish, English</p>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6">{tServices('title')}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all cursor-default"
                  >
                    <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-foreground mb-2">
                      {service.titleKey}
                    </h4>
                    <p className="text-sm text-muted">
                      {service.descKey}
                    </p>
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
