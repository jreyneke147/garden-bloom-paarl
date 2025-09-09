import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "M.Sc. Agriculture",
      description: "University of Stellenbosch",
      highlight: true
    },
    {
      icon: Award,
      title: "Crop Protection Certification",
      description: "AVCASA, 2018"
    },
    {
      icon: Award,
      title: "Irrigation & Fertigation",
      description: "Basic & Intermediate - Fertigation Academy"
    },
    {
      icon: Award,
      title: "Intensive Plant Production Principles",
      description: "AIPP, 2005"
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 animate-slide-in-right max-w-4xl mx-auto">
              {credentials.map((credential, index) => (
                <Card 
                  key={index} 
                  className={`service-card hover-lift ${credential.highlight ? 'ring-2 ring-primary' : ''}`}
                >
                  <CardContent className="p-6">
                    <credential.icon className={`h-8 w-8 mb-4 ${credential.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h4 className="font-semibold text-card-foreground mb-2">
                      {credential.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {credential.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;