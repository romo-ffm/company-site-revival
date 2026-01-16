import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Gift, Users, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WegeDesVerkaufsPage = () => {
  const paths = [
    {
      icon: Gift,
      title: "Teilstiftung an eine Stiftung",
      description: "Sie übertragen Ihr Haus ganz oder teilweise an eine gemeinnützige Stiftung. Das Haus wird dauerhaft dem Gemeinwohl gewidmet.",
      benefits: [
        "Steuerliche Vorteile durch Gemeinnützigkeit",
        "Ihr Haus dient dauerhaft dem Gemeinwohl",
        "Möglichkeit der Erbschaftssteuer-Optimierung",
        "Lebenslanges Wohnrecht möglich",
      ],
    },
    {
      icon: Users,
      title: "Verkauf an eine Genossenschaft",
      description: "Eine Wohnungsgenossenschaft kauft Ihr Haus und bewirtschaftet es gemeinwohlorientiert für ihre Mitglieder.",
      benefits: [
        "Fairer Kaufpreis für Sie",
        "Bezahlbare Mieten für Bewohner:innen",
        "Professionelle Bewirtschaftung",
        "Demokratische Mitbestimmung der Bewohner:innen",
      ],
    },
    {
      icon: Building,
      title: "Verkauf an ein selbstverwaltetes Projekt",
      description: "Die Hausgemeinschaft oder ein neues Hausprojekt übernimmt das Haus selbst – mit unserer Unterstützung bei Finanzierung und Organisation.",
      benefits: [
        "Die Bewohner:innen bestimmen selbst",
        "Gemeinschaftliches Eigentum",
        "Langfristige Sicherheit für alle",
        "Kreative Wohnformen möglich",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              Die <span className="text-primary">Wege des Verkaufs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Es gibt verschiedene Möglichkeiten, Ihr Haus sozialverträglich 
              zu verkaufen oder zu übertragen. Wir erklären die wichtigsten 
              Modelle und helfen Ihnen, den passenden Weg zu finden.
            </p>
          </div>
        </div>
      </section>

      {/* Verkaufswege */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="space-y-12">
            {paths.map((path, index) => (
              <Card key={index} className="border-2 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  <CardHeader className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                        <path.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{path.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {path.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-muted/50 p-6 flex flex-col justify-center">
                    <p className="font-medium mb-3">Vorteile:</p>
                    <ul className="space-y-2 text-sm">
                      {path.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wie wir rechnen */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">Wie wir rechnen</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Gemeinwohlorientierte Käufer können oft keine Höchstpreise zahlen – 
                denn sie verzichten bewusst auf Rendite. Dafür garantieren sie 
                langfristig bezahlbare Mieten und eine verantwortungsvolle 
                Bewirtschaftung.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Der Kaufpreis orientiert sich an der nachhaltigen Ertragskraft 
                des Hauses – also daran, was bei fairen Mieten dauerhaft 
                erwirtschaftet werden kann.
              </p>
              <p className="text-lg text-muted-foreground">
                Wir beraten Sie transparent zu realistischen Preiserwartungen 
                und den verschiedenen Modellen.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 border">
              <h3 className="font-semibold mb-4">Unsere Grundsätze:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">1.</span>
                  <div>
                    <p className="font-medium">Keine Rendite mit dem Leben anderer</p>
                    <p className="text-sm text-muted-foreground">Wohnen ist ein Grundbedürfnis, keine Kapitalanlage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">2.</span>
                  <div>
                    <p className="font-medium">Grundsolide Bewirtschaftung</p>
                    <p className="text-sm text-muted-foreground">Dauerhaft tragfähige Finanzierung statt kurzfristiger Gewinne.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">3.</span>
                  <div>
                    <p className="font-medium">Menschen im Mittelpunkt</p>
                    <p className="text-sm text-muted-foreground">Die Bedürfnisse der Bewohner:innen haben Vorrang.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-primary-foreground">
              Welcher Weg passt zu Ihnen?
            </h2>
            <p className="text-xl opacity-90">
              Lassen Sie uns gemeinsam herausfinden, welches Modell 
              für Ihre Situation am besten geeignet ist.
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

export default WegeDesVerkaufsPage;
