import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Github, Code2, Star, Rocket } from 'lucide-react';

const PROJECT_ICONS = [Rocket, Code2, Code2, Star, Code2, Code2];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-20">
      {/* Cosmic divider top */}
      <div className="cosmic-divider absolute top-0 left-12 right-12" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Rocket className="w-6 h-6 text-primary" />
            <span className="text-primary text-sm font-mono uppercase tracking-widest">Mission Log</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A collection of projects from my GitHub — spanning ML, full-stack web development, data analysis, and algorithm design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const Icon = PROJECT_ICONS[idx] ?? Code2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card group overflow-hidden flex flex-col relative"
              >
                {/* Glow spot */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: idx % 2 === 0 ? 'rgba(0,229,255,0.12)' : 'rgba(168,85,247,0.12)' }}
                />

                {/* Header */}
                <div className="p-6 border-b border-white/5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/10"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-primary/70">{project.period}</p>
                </div>

                {/* Body */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4 space-y-1.5">
                    {project.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary mt-0.5 shrink-0">◆</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-xl text-primary font-semibold hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
