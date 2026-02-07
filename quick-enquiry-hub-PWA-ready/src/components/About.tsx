import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Precision in every calculation and financial report we deliver.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We tailor solutions to your needs.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Transparent, honest, and ethical in all our dealings.',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented',
      description: 'We help you make informed decisions for sustainable growth.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              About Us
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted{' '}
              <span className="gradient-text">Financial Partner</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              KFI Accounting Solutions is a reliable and trustworthy company in the 
              financial consultancy industry. We provide competitive and effective 
              accounting and payroll services that cater to both businesses and individuals.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced professionals is dedicated to helping you navigate 
              the complexities of financial management, tax compliance, and business growth. 
              With personalized service and attention to detail, we ensure your financial 
              health is in capable hands.
            </p>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border card-hover animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
