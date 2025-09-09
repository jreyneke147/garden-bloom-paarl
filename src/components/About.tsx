import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const credentials = [
  {
    icon: Award,
    title: "Award Winner",
    description: "Recognized for excellence in gardening.",
  },
  {
    icon: GraduationCap,
    title: "Certified Expert",
    description: "Certified horticulturist with years of experience.",
  },
  // Add more credentials here if needed
];
];
return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 animate-slide-in-right max-w-4xl mx-auto">
              {credentials.map((credential, index) => (
                <Card 
                  key={index} 
                  className="service-card hover-lift"
                >
                  <CardContent className="p-6">
                    <credential.icon className="h-8 w-8 mb-4 text-muted-foreground" />
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