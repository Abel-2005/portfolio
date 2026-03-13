import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card group overflow-hidden flex flex-col"
            >
              {/* Project Header */}
              <div className="p-8 border-b border-white/5 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-xl text-primary">
                    <Code2 className="w-8 h-8" />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm font-mono text-primary/80">{project.period}</p>
              </div>

              {/* Project Content */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6 space-y-2">
                  <span className="text-sm font-semibold text-white block">Key Highlights:</span>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4 marker:text-primary">
                    {project.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-muted-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
