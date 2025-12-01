'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from 'next-themes';
import {
  SiTypescript, SiNodedotjs, SiNestjs, SiExpress, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiSnowflake,
  SiAmazonwebservices, SiDocker, SiKubernetes, SiTerraform, SiGithubactions,
  SiAngular, SiReact, SiCypress,
  SiRabbitmq
} from 'react-icons/si';

const skillCategories = [
  {
    key: 'backend',
    title: 'Backend',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Express', icon: SiExpress, color: '#000000', darkColor: '#FFFFFF' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    ],
  },
  {
    key: 'databases',
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },
    ],
  },
  {
    key: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
      { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
    ],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Cypress', icon: SiCypress, color: '#17202C', darkColor: '#69D3A7' },
    ],
  },
];

const patterns = [
  'Event Sourcing',
  'CQRS',
  'Saga Pattern',
  'Outbox Pattern',
  'Clean Architecture',
  'Hexagonal Architecture',
  'DDD',
  'Microservices',
  'Event-Driven',
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

export function Skills() {
  const t = useTranslations('skills');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section id="skills" className="py-20 lg:py-32 bg-section-bg">
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
              Technologies and tools I use to build robust, scalable systems
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category) => (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  {t(category.key)}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                    >
                      <skill.icon
                        className="w-5 h-5"
                        style={{ color: isDark && skill.darkColor ? skill.darkColor : skill.color }}
                      />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Patterns & Architecture */}
          <motion.div variants={itemVariants} className="p-6 bg-card border border-border rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-foreground">
              {t('patterns')} & {t('architecture')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {patterns.map((pattern) => (
                <motion.span
                  key={pattern}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium"
                >
                  {pattern}
                </motion.span>
              ))}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium"
              >
                <SiRabbitmq className="w-4 h-4" />
                RabbitMQ
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
