import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';

function SkillBar({ name, level, index }: { name: string, level: number, index: number }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-bold text-primary">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
        >
          {/* Shine effect */}
          <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
        </motion.div>
      </div>
    </div>
  );
}

function SkillChips({ title, skills }: { title: string, skills: { name: string }[] }) {
  return (
    <div className="glass-card p-6 h-full">
      <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { languages, frameworks, tools, core } = PORTFOLIO_DATA.skills;

  return (
    <section id="skills" className="py-24 relative z-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Progress Bars Section */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <div className="w-8 h-px bg-primary"></div>
                Programming Languages
              </h3>
              {languages.map((skill, idx) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={idx} />
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <div className="w-8 h-px bg-secondary"></div>
                Libraries & Frameworks
              </h3>
              {frameworks.slice(0, 4).map((skill, idx) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={idx} />
              ))}
            </div>
          </div>

          {/* Chips Section */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <SkillChips title="Core Computer Science" skills={core} />
            </div>
            <SkillChips title="Tools & Platforms" skills={tools} />
            <SkillChips title="Other Frameworks" skills={frameworks.slice(4)} />
          </div>
        </div>
      </div>
    </section>
  );
}
