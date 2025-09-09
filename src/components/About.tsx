import { Award, GraduationCap, Clock, MapPin } from "lucide-react";
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
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Your Garden Expert
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With over three decades of experience and advanced qualifications, Neville Raath 
              brings unmatched expertise to every garden transformation project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Experience Highlight */}
            <div className="animate-fade-in-up">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-8 shadow-elegant">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-12 w-12" />
                  <div>
                    <h3 className="text-3xl font-bold">30+ Years</h3>
                    <p className="text-primary-foreground/80">Professional Experience</p>
                  </div>
                </div>
                <p className="text-primary-foreground/90">
                  Three decades of hands-on gardening and landscaping expertise, 
                  serving the Paarl community with excellence and dedication.
                </p>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground mb-6">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Based in Paarl, Western Cape, South Africa</span>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 animate-slide-in-right">
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
      </div>
    </section>
  );
};

export default About;