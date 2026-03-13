import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
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
      {/* Background Image / Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10"></div>
        {/* landing page hero scenic mountain landscape */}
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract tech background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 grid-pattern z-10 opacity-30"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[150px] mix-blend-screen z-10 animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight mb-4"
          >
            Hi, I'm <br />
            <span className="text-gradient">{PORTFOLIO_DATA.personal.name}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted-foreground font-medium h-12 mb-8"
          >
            I am a <span className="text-foreground">{typedText}</span>
            <span className="inline-block w-[3px] h-8 bg-primary ml-1 animate-pulse align-middle"></span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a 
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </a>
            
            <button 
              onClick={onDownloadCV}
              disabled={isDownloading}
              className="px-8 py-4 rounded-xl font-semibold glass hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
              ) : (
                <Download className="w-5 h-5" />
              )}
              {isDownloading ? 'Generating PDF...' : 'Download CV'}
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Github className="w-6 h-6" />
            </a>
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
