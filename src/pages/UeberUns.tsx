import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

import peopleMeeting3 from "@/assets/people-meeting-3.jpg";
import buildingHistoric2 from "@/assets/building-historic-2.jpg";

const UeberUnsPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Gemeinwohl vor Profit",
      description: "Wir arbeiten nicht gewinnorientiert. Alle Überschüsse fließen zurück in unsere Mission.",
    },
    {
      icon: Users,
      title: "Solidarität",
      description: "Wir verbinden Menschen und Organisationen, die gemeinsam für bezahlbares Wohnen kämpfen.",
    },
    {
      icon: Target,
      title: "Langfristigkeit",
      description: "Unsere Lösungen sind auf Dauer angelegt – für Generationen, nicht für schnelle Gewinne.",
    },
    {
      icon: BookOpen,
      title: "Transparenz",
      description: "Offene Kommunikation und nachvollziehbare Prozesse sind Grundlage unserer Arbeit.",
    },
  ];

  return (
    <Layout>
      {/* Hero with background image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${peopleMeeting3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              Über die <span className="text-primary">GIMA Frankfurt</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die Genossenschaftliche Immobilienagentur Frankfurt eG (GIMA) 
              ist eine gemeinnützige Genossenschaft, die Immobilien 
              sozialverträglich vermittelt. Wir bringen Verkäufer:innen, 
              die Verantwortung übernehmen wollen, mit gemeinwohlorientierten 
              Käufern zusammen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Unsere Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wohnen ist ein Grundbedürfnis – und sollte keine Ware sein. 
                Doch der Immobilienmarkt ist oft von Spekulation und 
                Gewinnstreben geprägt. Häuser werden verkauft, Mieten steigen, 
                Menschen verlieren ihr Zuhause.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Die GIMA setzt dem etwas entgegen: Wir vermitteln Immobilien 
                an Genossenschaften, Stiftungen und selbstverwaltete Projekte, 
                die langfristig bezahlbares Wohnen garantieren.
              </p>
              <p className="text-lg text-muted-foreground">
                So entziehen wir Häuser dem Spekulationsmarkt – für immer.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={buildingHistoric2} 
                alt="Historisches Gebäude in Frankfurt"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <blockquote className="text-xl md:text-2xl font-medium text-primary-foreground leading-relaxed">
                  "Wohnen ist keine Ware, sondern ein Menschenrecht."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Unsere Werte</h2>
            <p className="text-lg text-muted-foreground">
              Diese Grundsätze leiten unser Handeln – 
              in jeder Vermittlung und in jeder Entscheidung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg p-6 border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genossenschaft */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Die GIMA als Genossenschaft</h2>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Die GIMA ist als eingetragene Genossenschaft (eG) organisiert. 
              Das bedeutet: Wir gehören unseren Mitgliedern – und nicht 
              anonymen Investoren.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-3">Mitglieder</h3>
                <p className="text-muted-foreground text-sm">
                  Unsere Mitglieder sind gemeinwohlorientierte Wohnungsunternehmen: 
                  Genossenschaften, Stiftungen, selbstverwaltete Projekte und Vereine.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-3">Demokratie</h3>
                <p className="text-muted-foreground text-sm">
                  Jedes Mitglied hat eine Stimme – unabhängig von der Anzahl 
                  der Anteile. Entscheidungen werden gemeinsam getroffen.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-3">Transparenz</h3>
                <p className="text-muted-foreground text-sm">
                  Unsere Satzung, Geschäftsberichte und Selbstverpflichtung 
                  sind öffentlich einsehbar.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-3">Prüfung</h3>
                <p className="text-muted-foreground text-sm">
                  Wir werden regelmäßig von einem Prüfungsverband 
                  nach genossenschaftlichen Standards geprüft.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/ressourcen">
                  Satzung & Dokumente einsehen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-primary-foreground">
              Haben Sie Fragen?
            </h2>
            <p className="text-xl opacity-90">
              Wir freuen uns, von Ihnen zu hören – 
              egal ob Sie verkaufen, kaufen oder einfach mehr erfahren möchten.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUnsPage;
