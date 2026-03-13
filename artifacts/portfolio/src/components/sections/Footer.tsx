import { PORTFOLIO_DATA } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 text-center relative z-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          Designed with <span className="text-red-500 animate-pulse">❤</span> in India
        </p>
      </div>
    </footer>
  );
}
