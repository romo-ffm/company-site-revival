import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Users, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjektePage = () => {
  const projects = [
    {
      title: "Beispielprojekt 1",
      location: "Frankfurt-Bornheim",
      year: "2024",
      units: 12,
      buyer: "Wohnungsgenossenschaft XY",
      status: "Abgeschlossen",
      description: "Ein Mehrfamilienhaus aus den 1920er Jahren wurde an eine junge Genossenschaft vermittelt. Die Bewohner:innen sind jetzt Mitglieder und mitbestimmungsberechtigt.",
    },
    {
      title: "Beispielprojekt 2",
      location: "Frankfurt-Nordend",
      year: "2023",
      units: 8,
      buyer: "Stiftung Trias",
      status: "Abgeschlossen",
      description: "Das Grundstück wurde an eine Bodenstiftung übertragen. Die Mieter:innen profitieren von dauerhaft günstigen Mieten durch das Erbbaurecht.",
    },
    {
      title: "Beispielprojekt 3",
      location: "Frankfurt-Sachsenhausen",
      year: "2023",
      units: 18,
      buyer: "Selbstverwaltetes Hausprojekt",
      status: "Abgeschlossen",
      description: "Die Hausgemeinschaft hat ihr Haus selbst gekauft und in ein gemeinschaftliches Eigentum überführt.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
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
                <div className="grid md:grid-cols-[300px,1fr] gap-0">
                  {/* Placeholder für Bild */}
                  <div className="bg-muted h-64 md:h-full flex items-center justify-center">
                    <Home className="h-16 w-16 text-muted-foreground/30" />
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
              Die GIMA Frankfurt befindet sich im Aufbau. Diese Beispielprojekte 
              zeigen, wie unsere Vermittlung in der Praxis aussehen kann. 
              Konkrete Projekte werden hier nach erfolgreicher Vermittlung 
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
