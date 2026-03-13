import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary" /> 
                Work <span className="text-gradient">Experience</span>
              </h2>
            </motion.div>

            <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary ring-4 ring-background"></div>
                  <div className="glass-card p-6">
                    <span className="text-sm font-mono text-primary mb-2 block">{exp.period}</span>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-muted-foreground mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div id="education">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="text-secondary" /> 
                <span className="text-gradient-cyan">Education</span>
              </h2>
            </motion.div>

            <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-secondary ring-4 ring-background"></div>
                  <div className="glass-card p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-mono text-secondary block">{edu.period}</span>
                      <span className="font-bold text-white bg-white/10 px-3 py-1 rounded-full text-sm">
                        {edu.score}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <h4 className="text-muted-foreground mb-2">{edu.institution}</h4>
                    {edu.highlight && (
                      <p className="text-sm text-secondary/80 flex items-center gap-2 mt-3">
                        <CheckCircle className="w-4 h-4" /> {edu.highlight}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
