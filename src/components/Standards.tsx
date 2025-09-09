import { Shield, Clock, AlertCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Standards = () => {
  const standards = [
    {
      icon: Users,
      title: "Professional Staff",
      description: "All team members wear branded clothing for easy identification and professionalism.",
      time: "Always maintained"
    },
    {
      icon: Clock,
      title: "4-Hour Response Time",
      description: "We respond to all service requests within 4 working hours during business hours.",
      time: "Within 4 hours"
    },
    {
      icon: AlertCircle,
      title: "24-Hour Complaint Resolution",
      description: "Any complaints or issues are addressed and resolved within 24 hours of notification.",
      time: "Within 24 hours"
    },
    {
      icon: Shield,
      title: "Professional Service Hours",
      description: "Consistent service delivery during established working hours for your convenience.",
      time: "08:00 - 17:00 weekdays"
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Professional Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of service delivery to ensure your complete 
              satisfaction and peace of mind with every interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <Card key={index} className="service-card hover-lift animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 rounded-full p-4 flex-shrink-0">
                      <standard.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">
                        {standard.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {standard.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-primary/5 rounded-full px-4 py-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {standard.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Standards;