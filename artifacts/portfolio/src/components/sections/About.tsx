import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Terminal, Code2, Database } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass p-2 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              {/* Using generated avatar image */}
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                alt="Abel B. Varughese" 
                className="w-full h-auto rounded-xl object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Engineering solutions through code and data.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-white font-semibold mb-2">Software Dev</h4>
                <p className="text-sm text-muted-foreground">Building robust applications with modern stacks.</p>
              </div>
              <div className="glass-card p-6">
                <Database className="w-8 h-8 text-secondary mb-4" />
                <h4 className="text-white font-semibold mb-2">Data Science</h4>
                <p className="text-sm text-muted-foreground">Extracting insights and training predictive models.</p>
              </div>
              <div className="glass-card p-6">
                <Code2 className="w-8 h-8 text-accent mb-4" />
                <h4 className="text-white font-semibold mb-2">Algorithms</h4>
                <p className="text-sm text-muted-foreground">Solving complex problems with optimized logic.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
