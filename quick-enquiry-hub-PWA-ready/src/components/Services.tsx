import { Calculator, FileText, Building2, Users, ClipboardList, BadgeCheck } from 'lucide-react';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

const Services = ({ onNavigate }: ServicesProps) => {
  const financialServices = [
    'Bookkeeping',
    'Income Tax Returns',
    'VAT Registration',
    'Import and export license registration',
    'CSD registrations',
    'Personal Income Tax returns',
    'VAT returns',
    'Company Registration',
  ];

  const managementServices = [
    'Payroll preparation',
    'Payslips',
    'Financial Statement Reviews',
    'Company Amendment',
    'Management Accounting',
    'Financial statements',
    'Business Accountant',
    'Company Secretary',
    'CIPC Management',
    'Fixed asset management',
    'Business Plan',
  ];

  const serviceCategories = [
    {
      icon: Calculator,
      title: 'Financial Services',
      description: 'Comprehensive financial management and tax compliance services.',
      services: financialServices,
      color: 'bg-primary/10',
    },
    {
      icon: ClipboardList,
      title: 'Management Services',
      description: 'Business administration and management accounting solutions.',
      services: managementServices,
      color: 'bg-accent/10',
    },
  ];

  const quickServices = [
    {
      icon: FileText,
      title: 'Tax Compliance',
      description: 'Stay compliant with all tax regulations and filings.',
    },
    {
      icon: Building2,
      title: 'Company Registration',
      description: 'Complete company registration and CIPC services.',
    },
    {
      icon: Users,
      title: 'Payroll Services',
      description: 'Efficient payroll processing and management.',
    },
    {
      icon: BadgeCheck,
      title: 'Audit Support',
      description: 'Financial statement preparation and review.',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive{' '}
            <span className="gradient-text">Accounting Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of financial and management services tailored to meet 
            the unique needs of businesses and individuals.
          </p>
        </div>

        {/* Quick Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickServices.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-xl border border-border card-hover text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="grid lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              <div className={`${category.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="grid grid-cols-1 gap-3">
                  {category.services.map((service, sIndex) => (
                    <li key={sIndex} className="flex items-center gap-3 text-foreground/80">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => onNavigate('contact')}
            className="btn-primary"
          >
            Request a Service Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
