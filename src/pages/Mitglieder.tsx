import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import peopleMeeting4 from "@/assets/people-meeting-4.jpg";
import buildingLarge1 from "@/assets/building-large-1.jpg";

const MitgliederPage = () => {
  const memberTypes = [
    {
      icon: Building2,
      title: "Genossenschaften",
      description: "Wohnungsbaugenossenschaften, die langfristig bezahlbaren Wohnraum schaffen und erhalten.",
    },
    {
      icon: Shield,
      title: "Stiftungen",
      description: "Bodenstiftungen und gemeinnützige Stiftungen, die Grundstücke dauerhaft dem Markt entziehen.",
    },
    {
      icon: Users,
      title: "Selbstverwaltete Projekte",
      description: "Hausprojekte und Wohnprojekte, die von ihren Bewohner:innen selbst organisiert werden.",
    },
  ];

  const memberBenefits = [
    "Zugang zu vermittelten Immobilien",
    "Netzwerk und Austausch mit anderen Mitgliedern",
    "Mitsprache bei der Weiterentwicklung der GIMA",
    "Unterstützung bei der Akquise von Immobilien",
    "Beratung und Know-how-Transfer",
    "Gemeinsame Öffentlichkeitsarbeit",
  ];

  const requirements = [
    "Gemeinwohlorientierte Ausrichtung",
    "Verzicht auf Gewinnausschüttung",
    "Langfristige Mietpreisbindung",
    "Demokratische Strukturen",
    "Transparente Geschäftsführung",
    "Unterzeichnung der Selbstverpflichtung",
  ];

  return (
    <Layout>
      {/* Hero with background image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${peopleMeeting4})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              Unsere <span className="text-primary">Mitglieder</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die GIMA Frankfurt ist eine Genossenschaft aus gemeinwohlorientierten 
              Wohnungsunternehmen. Unsere Mitglieder verpflichten sich zu sozialen 
              Standards und arbeiten gemeinsam für bezahlbares Wohnen.
            </p>
          </div>
        </div>
      </section>

      {/* Mitgliedertypen */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <h2 className="mb-8 text-center">Wer kann Mitglied werden?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {memberTypes.map((type, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile & Voraussetzungen with image */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingLarge1})` }}
        />
        <div className="absolute inset-0 bg-background/95" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Vorteile der Mitgliedschaft</h2>
              <ul className="space-y-3">
                {memberBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6">Voraussetzungen</h2>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selbstverpflichtung */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Unsere Selbstverpflichtung</h2>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-lg leading-relaxed mb-4">
                Alle Mitglieder der GIMA verpflichten sich zu einer gemeinsamen 
                Selbstverpflichtung. Diese definiert die Standards für 
                gemeinwohlorientiertes Wirtschaften:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Keine Rendite mit Wohnen – Gewinne werden reinvestiert</li>
                <li>• Dauerhaft bezahlbare Mieten unterhalb des Marktdurchschnitts</li>
                <li>• Demokratische Mitbestimmung der Bewohner:innen</li>
                <li>• Transparente und nachhaltige Bewirtschaftung</li>
                <li>• Langfristige Bindung des Eigentums an soziale Zwecke</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-primary-foreground">Mitglied werden</h2>
            <p className="text-xl opacity-90">
              Ihre Organisation passt zu unseren Werten? Dann freuen wir uns 
              auf Ihre Anfrage zur Mitgliedschaft.
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

export default MitgliederPage;
