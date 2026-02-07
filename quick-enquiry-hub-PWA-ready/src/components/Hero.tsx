import { ArrowRight, CheckCircle } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const highlights = [
    'Professional Accounting',
    'Tax Compliance',
    'Business Advisory',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Trusted Financial Partner
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Expert{' '}
              <span className="gradient-text">Accounting</span>
              <br />
              Solutions for Your Business
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              A reliable & trustworthy company in the financial consultancy industry 
              providing competitive and effective accounting and payroll services for 
              businesses and individuals.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="btn-primary flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="btn-outline"
              >
                Our Services
              </button>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
