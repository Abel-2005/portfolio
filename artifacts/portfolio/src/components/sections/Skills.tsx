import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Cpu, Layers, Terminal } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/20',
    bgColor: 'bg-cyan-400/5',
    iconBg: 'bg-cyan-400/10',
    glowColor: 'rgba(0,229,255,0.08)',
    skills: [
      { name: 'Python', emoji: '🐍' },
      { name: 'Java', emoji: '☕' },
      { name: 'C / C++', emoji: '⚡' },
      { name: 'HTML & CSS', emoji: '🌐' },
      { name: 'SQL', emoji: '🗄️' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    color: 'text-violet-400',
    borderColor: 'border-violet-400/20',
    bgColor: 'bg-violet-400/5',
    iconBg: 'bg-violet-400/10',
    glowColor: 'rgba(168,85,247,0.08)',
    skills: [
      { name: 'Django', emoji: '🦄' },
      { name: 'FastAPI', emoji: '⚡' },
      { name: 'NumPy', emoji: '🔢' },
      { name: 'Pandas', emoji: '🐼' },
      { name: 'Scikit-learn', emoji: '🤖' },
      { name: 'Matplotlib', emoji: '📊' },
      { name: 'Seaborn', emoji: '📈' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'text-amber-400',
    borderColor: 'border-amber-400/20',
    bgColor: 'bg-amber-400/5',
    iconBg: 'bg-amber-400/10',
    glowColor: 'rgba(251,191,36,0.08)',
    skills: [
      { name: 'Git & GitHub', emoji: '🐙' },
      { name: 'MySQL', emoji: '🐬' },
      { name: 'Power BI', emoji: '📉' },
      { name: 'MS Excel', emoji: '📋' },
      { name: 'Jupyter', emoji: '📓' },
    ],
  },
  {
    title: 'Core CS Fundamentals',
    icon: Cpu,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    bgColor: 'bg-emerald-400/5',
    iconBg: 'bg-emerald-400/10',
    glowColor: 'rgba(52,211,153,0.08)',
    skills: [
      { name: 'OOPs', emoji: '🧩' },
      { name: 'DBMS', emoji: '🗃️' },
      { name: 'Operating Systems', emoji: '💻' },
      { name: 'Computer Networks', emoji: '🌐' },
      { name: 'Data Structures', emoji: '🌲' },
    ],
  },
  {
    title: 'Data Science & ML',
    icon: Database,
    color: 'text-pink-400',
    borderColor: 'border-pink-400/20',
    bgColor: 'bg-pink-400/5',
    iconBg: 'bg-pink-400/10',
    glowColor: 'rgba(244,114,182,0.08)',
    skills: [
      { name: 'Machine Learning', emoji: '🧠' },
      { name: 'Feature Engineering', emoji: '🔧' },
      { name: 'Data Preprocessing', emoji: '🔍' },
      { name: 'EDA', emoji: '🔭' },
      { name: 'Regression & Classification', emoji: '📐' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Terminal,
    color: 'text-sky-400',
    borderColor: 'border-sky-400/20',
    bgColor: 'bg-sky-400/5',
    iconBg: 'bg-sky-400/10',
    glowColor: 'rgba(56,189,248,0.08)',
    skills: [
      { name: 'Problem-Solving', emoji: '🧩' },
      { name: 'Quick Learner', emoji: '⚡' },
      { name: 'Adaptability', emoji: '🔄' },
      { name: 'Time Management', emoji: '⏱️' },
      { name: 'Communication', emoji: '💬' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-20">
      <div className="cosmic-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-6 h-6 text-primary" />
            <span className="text-primary text-sm font-mono uppercase tracking-widest">Arsenal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Technologies and tools I use to turn ideas into reality — from data pipelines to full-stack applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08 }}
                className={`relative rounded-2xl border ${cat.borderColor} ${cat.bgColor} p-6 group overflow-hidden transition-all duration-300 hover:-translate-y-1`}
                style={{
                  boxShadow: `0 0 0 0 ${cat.glowColor}`,
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px 8px ${cat.glowColor}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${cat.glowColor}`;
                }}
              >
                {/* Background glow blob */}
                <div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: cat.glowColor.replace('0.08', '0.3') }}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${cat.iconBg}`}>
                    <Icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <h3 className={`font-bold text-base ${cat.color}`}>{cat.title}</h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.06 + skillIdx * 0.04 }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${cat.borderColor} bg-white/3 hover:bg-white/8 transition-all cursor-default group/chip`}
                    >
                      <span className="text-sm leading-none">{skill.emoji}</span>
                      <span className="text-sm text-foreground/80 group-hover/chip:text-foreground transition-colors font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="cosmic-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
