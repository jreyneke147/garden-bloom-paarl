import { Scissors, Sprout, Bug, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Garden Maintenance",
      description: "Complete lawn mowing, trimming, and weeding services to keep your garden pristine year-round.",
      features: ["Lawn mowing", "Hedge trimming", "Weed removal", "Regular maintenance"]
    },
    {
      icon: Sprout,
      title: "Plant Nutrition",
      description: "Expert fertilization and nutrition programs for lawns and plant beds.",
      features: [
        "Lawn fertilization",
        "Plant bed nutrition",
        "Soil analysis",
        "Growth optimization",
        "Irrigation & Fertigation 2003 & 2006",
        "National Fertilizer Advisor Course, BASOS 2004"
      ],
      optional: true
    },
    {
      icon: Bug,
      title: "Pest Control",
      description: "Pest management for weeds, fungi, and insects using professional techniques.",
      features: [
        "Weed control",
        "Fungal treatment",
        "Insect management",
        "Preventive care",
        "Crop Protection Certification 2018"
      ],
      optional: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Professional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Garden care solutions tailored to transform and maintain 
              your outdoor spaces with professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-5xl justify-center">
            {services.map((service, index) => (
              <Card key={index} className="service-card hover-lift animate-fade-in-up relative">
                {service.optional && (
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 z-10 bg-accent text-accent-foreground"
                  >
                    Optional
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Service Level Agreement Required
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All garden services require a signed Service Level Agreement with agreed payment terms 
                to ensure clear expectations and professional service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
