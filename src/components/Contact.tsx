import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+27 82 452 7252",
      action: "tel:+27824527252",
      primary: true
    },
    {
      icon: Mail,
      title: "Email",
      value: "raathneville@gmail.com",
      action: "mailto:raathneville@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Paarl, Western Cape, SA"
    },
    {
      icon: Clock,
      title: "Service Hours",
      value: "Mon - Fri: 08:00 - 17:00"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your garden? Contact Neville Raath today for professional 
              garden maintenance services in Paarl and surrounding areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up">
              {contactInfo.map((info, index) => (
                <Card key={index} className="service-card hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${info.primary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-primary hover:text-primary/80 font-medium transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-nature text-primary-foreground rounded-2xl p-8 shadow-hero">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Start?
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Get in touch with Neville Raath for professional garden maintenance 
                  services. We'll discuss your needs and provide a customized solution 
                  for your outdoor space.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-6"
                    onClick={() => window.location.href = 'tel:+27824527252'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +27 82 452 7252
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-6"
                    onClick={() => window.location.href = 'mailto:raathneville@gmail.com?subject=Garden Services Inquiry'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </div>
              </div>

              <div className="mt-8 bg-card rounded-xl p-6 shadow-soft border border-border">
                <h4 className="font-bold text-card-foreground mb-3">
                  What Happens Next?
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Initial consultation and site assessment</li>
                  <li>• Customized service plan and quote</li>
                  <li>• Service Level Agreement discussion</li>
                  <li>• Schedule your first service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;