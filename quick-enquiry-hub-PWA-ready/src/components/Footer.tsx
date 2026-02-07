import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import kfiLogo from '@/assets/kfi-logo.png';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'Bookkeeping',
    'Tax Returns',
    'VAT Registration',
    'Company Registration',
    'Payroll Services',
  ];

  return (
    <footer className="bg-kfi-charcoal pt-16 pb-8">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={kfiLogo} alt="KFI Accounting Solutions" className="h-16 w-auto mb-4 bg-card rounded-lg p-2" />
            <p className="text-muted-foreground text-sm mb-6">
              A reliable & trustworthy company in the financial consultancy industry 
              providing competitive accounting and payroll services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-serif font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-serif font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@KFIaccounting.co.za" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@KFIaccounting.co.za
              </a>
              <a 
                href="tel:+27834624135" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                +27 83 462 4135
              </a>
            </div>
            
            <div className="mt-6">
              <h5 className="text-primary-foreground font-medium mb-3">Follow Us</h5>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com/KFIAccountingServices" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://twitter.com/SolutionsKfi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="https://instagram.com/KFI_Accounting_Solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} KFI Accounting Solutions. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs">
              Professional Accounting & Financial Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
