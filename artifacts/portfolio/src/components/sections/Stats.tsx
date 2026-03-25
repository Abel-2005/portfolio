import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { FolderOpen, Briefcase, Award, GraduationCap } from 'lucide-react';

function Counter({ value, isDecimal = false }: { value: number, isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(2) : Math.floor(count)}
    </span>
  );
}

const STAT_ICONS = [FolderOpen, Briefcase, Award, GraduationCap];
const STAT_SUFFIXES = ['+', '', '+', ''];
const STAT_COLORS = ['text-primary', 'text-secondary', 'text-accent', 'text-emerald-400'];
const STAT_BG = ['bg-primary/10 border-primary/20', 'bg-secondary/10 border-secondary/20', 'bg-accent/10 border-accent/20', 'bg-emerald-400/10 border-emerald-400/20'];

export function Stats() {
  return (
    <section className="py-16 relative z-20">
      <div className="cosmic-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {PORTFOLIO_DATA.stats.map((stat, idx) => {
              const Icon = STAT_ICONS[idx];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="text-center flex flex-col items-center gap-3"
                >
                  <div className={`p-3 rounded-xl border ${STAT_BG[idx]}`}>
                    <Icon className={`w-6 h-6 ${STAT_COLORS[idx]}`} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-display font-extrabold ${STAT_COLORS[idx]}`}>
                    <Counter value={stat.value} isDecimal={stat.isDecimal} />
                    <span className="text-xl">{STAT_SUFFIXES[idx]}</span>
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="cosmic-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
