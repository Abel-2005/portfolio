import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Phone, Rocket } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/data';
import { useTypewriter } from '@/hooks/use-typewriter';

interface HeroProps {
  onDownloadCV: () => void;
  isDownloading: boolean;
}

export function Hero({ onDownloadCV, isDownloading }: HeroProps) {
  const typedText = useTypewriter(PORTFOLIO_DATA.personal.titles);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Orbital decoration rings */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none pr-0 md:pr-20 z-0">
        <div className="relative w-[500px] h-[500px] opacity-20 hidden lg:block">
          <div className="orbit-ring absolute inset-0" style={{ animationDuration: '30s' }} />
          <div className="orbit-ring absolute inset-8" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
          <div className="orbit-ring absolute inset-16" style={{ animationDuration: '18s' }} />
          {/* Planets on orbits */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'orbit-spin 30s linear infinite' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-primary glow-cyan -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute inset-8 flex items-center justify-center" style={{ animation: 'orbit-spin 22s linear infinite reverse' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-secondary -translate-x-1/2 -translate-y-1/2" style={{ boxShadow: '0 0 10px rgba(168,85,247,0.8)' }} />
          </div>
          {/* Center rocket icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Rocket className="w-10 h-10 text-primary/40" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight mb-4"
          >
            Hi, I'm{' '}
            <br />
            <span className="text-gradient">{PORTFOLIO_DATA.personal.name}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl md:text-3xl text-muted-foreground font-medium h-12 mb-4 flex items-center gap-2"
          >
            <span>I am a</span>
            <span className="text-gradient-cyan font-bold">{typedText}</span>
            <span className="inline-block w-[2px] h-8 bg-primary ml-1 animate-pulse align-middle rounded-full" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl leading-relaxed"
          >
            CS Engineering student @ LPU · CGPA 8.66 · Building intelligent systems that matter
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onDownloadCV}
              disabled={isDownloading}
              className="px-8 py-4 rounded-xl font-semibold glass hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <span className="animate-spin h-5 w-5 border-2 border-primary/40 border-t-primary rounded-full" />
              ) : (
                <Download className="w-5 h-5 text-primary" />
              )}
              <span>{isDownloading ? 'Generating PDF...' : 'Download CV'}</span>
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center gap-4"
          >
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone}`}
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">Call</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-primary/60">Explore</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-primary/60 to-transparent overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 56] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="w-full h-1/2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
