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
        title: "Success",
        description: "CV downloaded successfully.",
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
    <div className="min-h-screen relative selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main>
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
