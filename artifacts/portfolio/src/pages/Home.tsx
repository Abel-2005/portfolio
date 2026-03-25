import { useRef, useState } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { CVTemplate } from '@/components/ui/CVTemplate';
import { StarField } from '@/components/ui/StarField';
import { generateAndDownloadCV } from '@/lib/downloadCV';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    toast({
      title: "Generating PDF...",
      description: "Please wait while your CV is being prepared.",
    });
    
    const success = await generateAndDownloadCV(cvRef);
    
    if (success) {
      toast({
        title: "CV Downloaded!",
        description: "Abel_B_Varughese_CV.pdf saved successfully.",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to generate CV. Please try again.",
        variant: "destructive"
      });
    }
    setIsDownloading(false);
  };

  return (
    <div className="min-h-screen relative selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* Persistent animated starfield */}
      <StarField />

      {/* Nebula background orbs — fixed, always visible */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="nebula-orb-cyan absolute -top-40 -left-40 w-[700px] h-[700px]" />
        <div className="nebula-orb-violet absolute top-1/3 -right-60 w-[600px] h-[600px]" />
        <div className="nebula-orb-gold absolute bottom-0 left-1/3 w-[500px] h-[500px]" />
        <div className="nebula-orb-cyan absolute bottom-1/4 -left-40 w-[400px] h-[400px] opacity-40" />
        <div className="nebula-orb-violet absolute -bottom-40 right-1/4 w-[450px] h-[450px] opacity-50" />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0 opacity-25" />

      <Navbar />
      
      <main className="relative z-10">
        <Hero onDownloadCV={handleDownloadCV} isDownloading={isDownloading} />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Hidden CV Template for PDF Generation */}
      <div className="overflow-hidden h-0 w-0 absolute -z-50 opacity-0 pointer-events-none">
        <CVTemplate ref={cvRef} />
      </div>
    </div>
  );
}
