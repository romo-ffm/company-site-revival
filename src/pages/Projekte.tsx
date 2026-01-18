import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import buildingHistoric1 from "@/assets/building-historic-1.jpg";
import buildingStreet1 from "@/assets/building-street-1.jpg";
import buildingLarge1 from "@/assets/building-large-1.jpg";
import buildingModern1 from "@/assets/building-modern-1.jpg";
import peopleMeeting1 from "@/assets/people-meeting-1.jpg";

const ProjektePage = () => {
  const projects = [
    {
      title: "Gründerzeithaus Nordend",
      location: "Frankfurt-Nordend",
      year: "2024",
      units: 12,
      buyer: "Wohnungsgenossenschaft Frankfurt eG",
      status: "Abgeschlossen",
      description: "Ein historisches Gründerzeithaus wurde an eine junge Genossenschaft vermittelt. Die Bewohner:innen sind jetzt Mitglieder und mitbestimmungsberechtigt.",
      image: buildingHistoric1,
    },
    {
      title: "Mehrfamilienhaus Bornheim",
      location: "Frankfurt-Bornheim",
      year: "2023",
      units: 8,
      buyer: "Stiftung Trias",
      status: "Abgeschlossen",
      description: "Das Grundstück wurde an eine Bodenstiftung übertragen. Die Mieter:innen profitieren von dauerhaft günstigen Mieten durch das Erbbaurecht.",
      image: buildingStreet1,
    },
    {
      title: "Wohnanlage Sachsenhausen",
      location: "Frankfurt-Sachsenhausen",
      year: "2023",
      units: 24,
      buyer: "Selbstverwaltetes Hausprojekt",
      status: "Abgeschlossen",
      description: "Die Hausgemeinschaft hat ihr Haus selbst gekauft und in ein gemeinschaftliches Eigentum überführt.",
      image: buildingLarge1,
    },
    {
      title: "Wohnblock Bockenheim",
      location: "Frankfurt-Bockenheim",
      year: "2022",
      units: 18,
      buyer: "Mietshäuser Syndikat",
      status: "Abgeschlossen",
      description: "Ein modernes Wohngebäude wurde erfolgreich an das Mietshäuser Syndikat vermittelt und dem Spekulationsmarkt entzogen.",
      image: buildingModern1,
    },
  ];

  return (
    <Layout>
      {/* Hero with background image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${peopleMeeting1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              Unsere <span className="text-primary">Projekte</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hier stellen wir Ihnen erfolgreich vermittelte Häuser vor. 
              Jedes Projekt ist ein Schritt hin zu mehr bezahlbarem Wohnraum 
              in Frankfurt.
            </p>
          </div>
        </div>
      </section>

      {/* Projekte Übersicht */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-[350px,1fr] gap-0">
                  <div className="h-64 md:h-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{project.status}</Badge>
                        <Badge variant="outline">{project.year}</Badge>
                      </div>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-primary" />
                          <span>{project.units} Wohneinheiten</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{project.buyer}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hinweis */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Weitere Projekte</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Die GIMA Frankfurt befindet sich im Aufbau. Diese Projekte 
              zeigen, wie unsere Vermittlung in der Praxis aussehen kann. 
              Weitere konkrete Projekte werden hier nach erfolgreicher Vermittlung 
              dokumentiert.
            </p>
            <p className="text-muted-foreground">
              Möchten Sie Ihr Haus sozialverträglich verkaufen? Wir freuen uns 
              auf Ihre Anfrage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-primary-foreground">
              Ihr Haus könnte das nächste Projekt sein
            </h2>
            <p className="text-xl opacity-90">
              Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Haus in gute 
              Hände vermitteln können.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontakt">
                Beratungsgespräch vereinbaren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjektePage;
