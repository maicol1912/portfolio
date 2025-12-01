'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChartBarIcon, ArrowTopRightOnSquareIcon, BriefcaseIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

const workProjects = [
  {
    title: 'Core Banking Optimization',
    description: 'Optimized critical banking infrastructure achieving 60% performance improvement through reactive programming, distributed caching, and bottleneck elimination in financial processes.',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'AWS'],
    metrics: ['60% faster', '500K+ credits', '99.9% uptime'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Credit Migration System',
    description: 'Orchestrated migration of 500,000 credits and 700,000 customer profiles from legacy to modern banking core with zero data loss and 100% integrity validation.',
    technologies: ['Node.js', 'PostgreSQL', 'RabbitMQ', 'Event Sourcing'],
    metrics: ['500K credits', '700K profiles', 'Zero downtime'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Batch Processing Engine',
    description: 'Event-driven batch system for automated interest calculations across 500K+ credits, featuring retry mechanisms, dead letter queues, and comprehensive monitoring.',
    technologies: ['NestJS', 'RabbitMQ', 'Temporal', 'AWS Lambda'],
    metrics: ['80% efficiency', 'Fully automated', '500K daily'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Credit Origination Platform',
    description: 'Full-stack credit management platform handling complete lifecycle from evaluation to payment, serving 5,000+ stores across Colombia.',
    technologies: ['Node.js', 'Angular', 'PostgreSQL', 'AWS'],
    metrics: ['5K+ stores', '40% faster', 'Real-time decisions'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Real-Time Risk Engine',
    description: 'Credit risk evaluation engine providing instant decisions in under 2 seconds, integrating credit bureaus and ML models to increase approvals by 35%.',
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'GraphQL'],
    metrics: ['35% more approvals', '<2s response', 'ML powered'],
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Trade Finance Workflows',
    description: 'Complex workflow orchestration for factoring and trade finance using Temporal, handling onboarding, risk assessment, and compliance with saga patterns.',
    technologies: ['Node.js', 'Temporal', 'Snowflake', 'AWS'],
    metrics: ['Automated onboarding', 'International trade', 'Complex workflows'],
    gradient: 'from-teal-500 to-cyan-500',
  },
];

const personalProjects = [
  {
    title: 'Jobber - Freelance Marketplace',
    description: 'Full-stack freelance marketplace application with real-time messaging, payment processing, and search functionality. Built with microservices architecture and modern frontend technologies.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Stripe', 'Elasticsearch', 'Socket.IO', 'Docker'],
    features: ['Real-time chat', 'Payment integration', 'Full-text search', 'Microservices'],
    github: 'https://github.com/maicol1912/jobber-shared',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Inventrix - Distributed Inventory',
    description: 'Distributed inventory management system designed for scalability and high availability. Implements event-driven architecture for real-time stock updates across multiple locations.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Kubernetes'],
    features: ['Distributed system', 'Event-driven', 'Real-time sync', 'High availability'],
    github: 'https://github.com/maicol1912/inventrix-distributed-inventory',
    gradient: 'from-emerald-500 to-teal-500',
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

type TabType = 'work' | 'personal';

export function Projects() {
  const t = useTranslations('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<TabType>('work');

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-card border border-border rounded-xl">
              <button
                onClick={() => setActiveTab('work')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'work'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                <BriefcaseIcon className="w-5 h-5" />
                {t('workTab')}
              </button>
              <button
                onClick={() => setActiveTab('personal')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'personal'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                <CodeBracketIcon className="w-5 h-5" />
                {t('personalTab')}
              </button>
            </div>
          </motion.div>

          {/* Work Projects */}
          {activeTab === 'work' && (
            <motion.div
              key="work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-card border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-200"
                  >
                    {/* Gradient Header */}
                    <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                    <div className="p-6">
                      {/* Title & Description */}
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                          >
                            <ChartBarIcon className="w-3 h-3" />
                            {metric}
                          </span>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-background border border-border text-xs text-muted rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Personal Projects */}
          {activeTab === 'personal' && (
            <motion.div
              key="personal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {personalProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-card border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-200"
                  >
                    {/* Gradient Header */}
                    <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                    <div className="p-8">
                      {/* Title */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-background border border-border hover:border-primary/50 hover:text-primary transition-all"
                          aria-label="View on GitHub"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>

                      {/* Description */}
                      <p className="text-muted mb-6">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-background border border-border text-xs text-muted rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* GitHub Link */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        {t('viewGithub')}
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
