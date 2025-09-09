import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">GardenCare Paarl</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Where Expertise Meets Nature.
            </p>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+27824527252" className="hover:text-secondary transition-colors">
                    +27 82 452 7252
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:raathneville@gmail.com" className="hover:text-secondary transition-colors">
                    raathneville@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span>Paarl, Western Cape, SA</span>
                </div>
              </div>
            </div>

            {/* Service Hours & Standards */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Standards</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>• Service Hours: Mon-Fri 08:00-17:00</li>
                <li>• 4-hour response to service requests</li>
                <li>• 24-hour complaint resolution</li>
                <li>• Trained staff with branded clothing</li>
                <li>• Service Level Agreement required</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/70">
              © 2024 GardenCare Paarl. All rights reserved. | Neville Raath - Professional Garden Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;