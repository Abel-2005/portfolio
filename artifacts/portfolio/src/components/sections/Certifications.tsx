import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Award, BadgeCheck, X, ExternalLink, Calendar, Building2, Tag, Sparkles } from 'lucide-react';

type Cert = typeof PORTFOLIO_DATA.certifications[number];

const COLOR_MAP: Record<string, { border: string; iconBg: string; icon: string; badge: string; glow: string; tag: string }> = {
  cyan:   { border: 'border-cyan-400/25',   iconBg: 'bg-cyan-400/10',   icon: 'text-cyan-400',   badge: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/25',   glow: 'rgba(0,229,255,0.12)',   tag: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20' },
  violet: { border: 'border-violet-400/25', iconBg: 'bg-violet-400/10', icon: 'text-violet-400', badge: 'bg-violet-400/15 text-violet-300 border-violet-400/25', glow: 'rgba(168,85,247,0.12)', tag: 'bg-violet-400/10 text-violet-300 border-violet-400/20' },
  amber:  { border: 'border-amber-400/25',  iconBg: 'bg-amber-400/10',  icon: 'text-amber-400',  badge: 'bg-amber-400/15 text-amber-300 border-amber-400/25',  glow: 'rgba(251,191,36,0.12)',  tag: 'bg-amber-400/10 text-amber-300 border-amber-400/20' },
};

function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  const c = COLOR_MAP[cert.color] ?? COLOR_MAP.cyan;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className={`relative w-full max-w-lg rounded-2xl border ${c.border} bg-[#08091a] overflow-hidden`}
          style={{ boxShadow: `0 0 60px ${c.glow}, 0 0 120px ${c.glow}` }}
          onClick={e => e.stopPropagation()}
        >
          {/* Top accent bar */}
          <div className={`h-1 w-full ${c.iconBg.replace('/10', '/60')}`}
            style={{ background: `linear-gradient(90deg, transparent, ${cert.color === 'cyan' ? '#00e5ff' : cert.color === 'violet' ? '#a855f7' : '#fbbf24'}, transparent)` }}
          />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-muted-foreground hover:text-white hover:bg-white/10 transition-all z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-8">
            {/* Icon + verified */}
            <div className="flex items-start justify-between mb-6">
              <div className={`p-4 rounded-2xl ${c.iconBg}`}>
                <Award className={`w-10 h-10 ${c.icon}`} />
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${c.badge}`}>
                <BadgeCheck className="w-3.5 h-3.5" />
                Verified
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-1 leading-snug">{cert.title}</h3>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-5 mt-3">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>{cert.issuer}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>{cert.date}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {cert.description}
            </p>

            {/* Skills covered */}
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-3">
                <Tag className="w-3.5 h-3.5" />
                Skills Covered
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((s, i) => (
                  <span key={i} className={`px-3 py-1 rounded-lg border text-xs font-medium ${c.tag}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={`${import.meta.env.BASE_URL}${cert.viewLink}`}
              target="_blank"
              rel="noreferrer"
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${c.iconBg} ${c.icon} border ${c.border} hover:brightness-125`}
            >
              <ExternalLink className="w-4 h-4" />
              View Certificate
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Certifications() {
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <section className="py-24 relative z-20" id="certifications">
      <div className="cosmic-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-accent text-sm font-mono uppercase tracking-widest">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
          <p className="text-muted-foreground mt-4">
            Click any certificate to view details and access the credential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => {
            const c = COLOR_MAP[cert.color] ?? COLOR_MAP.cyan;
            return (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                onClick={() => setSelected(cert)}
                className={`text-left glass-card p-6 relative overflow-hidden group cursor-pointer border ${c.border} hover:border-opacity-60 transition-all duration-300`}
                style={{ '--glow': c.glow } as React.CSSProperties}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${c.glow}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                {/* Glow blob */}
                <div
                  className="absolute -right-8 -top-8 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: c.glow.replace('0.12', '0.35') }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl ${c.iconBg}`}>
                    <Award className={`w-7 h-7 ${c.icon}`} />
                  </div>
                  <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wide ${c.badge}`}>
                    <BadgeCheck className="w-3 h-3" />
                    Verified
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-foreground transition-colors">
                  {cert.title}
                </h3>

                {/* Meta */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    {cert.date}
                  </div>
                </div>

                {/* Skills preview */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((s, i) => (
                    <span key={i} className={`px-2 py-0.5 rounded-md border text-[10px] font-medium ${c.tag}`}>{s}</span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md border border-white/10 text-[10px] text-muted-foreground">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* View hint */}
                <div className={`flex items-center gap-1.5 text-xs font-semibold ${c.icon} mt-auto pt-3 border-t border-white/5`}>
                  <ExternalLink className="w-3.5 h-3.5" />
                  Click to view certificate
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
