import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Award, BadgeCheck } from 'lucide-react';

export function Certifications() {
  return (
    <section className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 relative overflow-hidden group hover:border-accent/50"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl transition-all group-hover:bg-accent/30"></div>
              
              <Award className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{cert.title}</h3>
              
              <div className="mt-auto pt-4 flex justify-between items-end border-t border-white/5">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
                <BadgeCheck className="w-5 h-5 text-green-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
