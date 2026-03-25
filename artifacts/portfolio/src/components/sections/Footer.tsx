import { PORTFOLIO_DATA } from '@/lib/data';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-primary/10">
      {/* Cosmic divider */}
      <div className="cosmic-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-xl font-display font-bold">
                Abel<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CS Engineering Student & Data Science Enthusiast.<br />
              Building intelligent systems from deep space.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigate</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['about', 'skills', 'projects', 'experience', 'contact'].map(s => (
                <a
                  key={s}
                  href={`#${s}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors capitalize"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex md:justify-end gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl glass hover:border-primary/30 hover:text-primary text-muted-foreground transition-all hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl glass hover:border-primary/30 hover:text-primary text-muted-foreground transition-all hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-3 rounded-xl glass hover:border-primary/30 hover:text-primary text-muted-foreground transition-all hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="cosmic-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} {PORTFOLIO_DATA.personal.name} · All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
            Exploring the universe of code
          </p>
        </div>
      </div>
    </footer>
  );
}
