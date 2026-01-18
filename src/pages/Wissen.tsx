import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Home, Building2, Scale, Landmark, FileText, Users, PiggyBank, Leaf, Key, Gavel, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WissenPage = () => {
  const topics = [
    {
      icon: Home,
      title: "Hausverkauf",
      description: "Für Eigentümer:innen ist ein Hausverkauf oft einmalig im Leben. Die GIMA begleitet Sie von der Erstberatung bis zum Kaufvertrag.",
      slug: "hausverkauf",
    },
    {
      icon: Key,
      title: "Alternativen zum Verkauf",
      description: "Erbbaurecht, Leibrente, Nießbrauch – es gibt viele Alternativen zur vollständigen Übertragung des Eigentums.",
      slug: "alternativen",
    },
    {
      icon: Building2,
      title: "Genossenschaften",
      description: "Eine Genossenschaft fördert die wirtschaftlichen oder sozialen Verhältnisse ihrer Mitglieder durch einen gemeinschaftlichen Geschäftsbetrieb.",
      slug: "genossenschaften",
    },
    {
      icon: Landmark,
      title: "Stiftungen",
      description: "Boden- und Immobilienstiftungen sorgen für eine langfristige Zweckbindung des Eigentums und Entkoppelung vom Markt.",
      slug: "stiftungen",
    },
    {
      icon: Users,
      title: "Ein-Haus-Modelle",
      description: "Manchmal ist eine eigene Rechtsform für das individuelle Grundstück sinnvoll – Ein-Haus-Genossenschaft oder Ein-Haus-GmbH.",
      slug: "ein-haus-modelle",
    },
    {
      icon: Handshake,
      title: "Mietshäuser Syndikat",
      description: "Das Modell des Mietshäuser Syndikats entstand in den 1980er Jahren. Bis heute sind bundesweit knapp 200 Hausprojekte realisiert worden.",
      slug: "mhs",
    },
    {
      icon: Scale,
      title: "Rechtsformen",
      description: "Das gemeinschaftliche Eigentum kann mit verschiedenen Rechtsformen realisiert werden – alle ausgerichtet auf langfristige Eigentumsbindung.",
      slug: "rechtsformen",
    },
    {
      icon: PiggyBank,
      title: "Finanzierung",
      description: "Im Zentrum der Finanzierung stehen bei Mietshäusern die Mieten. Die GIMA erstellt für jedes Haus eine Wirtschaftlichkeitsbetrachtung.",
      slug: "finanzierung",
    },
    {
      icon: FileText,
      title: "Wertermittlung",
      description: "Die GIMA führt eine Bestandserfassung und wirtschaftliche Gesamtbetrachtung durch und liefert eine ausgewogene Wertermittlung.",
      slug: "wertermittlung",
    },
    {
      icon: Gavel,
      title: "Mietrecht",
      description: "Kauf bricht Miete nicht – die bestehenden Mietverhältnisse werden bei einem Verkauf von der Kaufpartei übernommen.",
      slug: "mietrecht",
    },
    {
      icon: Gavel,
      title: "Vorkaufsrecht",
      description: "Das kommunale Vorkaufsrecht und das Mietervorkaufsrecht – zwei wichtige Instrumente im Immobilienrecht.",
      slug: "vorkaufsrecht",
    },
    {
      icon: Leaf,
      title: "Energieeffizienz",
      description: "Der Gebäudesektor verursacht 30-40% der Treibhausgas-Emissionen. Die GIMA berät zu energetischer Sanierung.",
      slug: "energieeffizienz",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="text-primary">Wissen</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die GIMA ist – anders als viele konventionelle Makler – daran interessiert, 
              Eigentümer:innen, Kaufinteressierte und Mietparteien gleichermaßen zu beraten. 
              Hier geben wir einen Überblick über die Themen, die für diese Beratung eine 
              Rolle spielen.
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Hinweis: Diese Erläuterungen stellen keine steuerrechtliche oder anderweitig 
              juristische Beratung dar und ersetzen nicht die Beratung durch Rechtsanwält:innen 
              oder Steuerberater:innen.
            </p>
          </div>
        </div>
      </section>

      {/* Themen Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-colors cursor-pointer"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-colors">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {topic.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-sm text-primary font-medium">
                    Mehr erfahren
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gemeinwohlorientierung */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2>Gemeinwohlorientierung</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Die GIMA vermittelt ausschließlich an Unternehmen, die gemeinwohlorientiert 
                wirtschaften. In der Rechtsform eines Unternehmens werden die 
                Ausgangsbedingungen für die Gemeinwohlorientierung geschaffen.
              </p>
              <p>
                Gemeinwohlorientierte Immobilienunternehmen richten sich nach dem Wohl 
                der Gemeinschaft und der Allgemeinheit. Sie wirtschaften nicht für 
                privaten, sondern gemeinschaftlichen Nutzen.
              </p>
              <p>
                Gemeinwohlorientierte Mietshäuser sind nutzerfreundlich, werden energetisch 
                nachhaltig und sozial verträglich bewirtschaftet und haben durch langfristig 
                erschwingliche Mieten einen Mehrwert für die Stadt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-primary-foreground">Jetzt starten!</h2>
            <p className="text-xl opacity-90">
              Klären Sie Ihre Fragen und besprechen Sie die nächsten Schritte 
              mit uns in einem unverbindlichen Beratungsgespräch.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontakt">
                Beratungstermin anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WissenPage;
