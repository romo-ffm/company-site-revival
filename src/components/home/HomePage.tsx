import { Link } from "react-router-dom";
import { ArrowRight, Home, Users, Building2, Heart, HandHeart, ShieldCheck, Eye, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewsSection from "./NewsSection";

import buildingStreet2 from "@/assets/building-street-2.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-28 lg:py-36">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${buildingStreet2})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Heart className="h-4 w-4" />
            <span>Gemeinwohlorientiert seit der Gründung</span>
          </div>
          
          <h1 className="text-balance">
            Häuser in <span className="text-primary">gute Hände</span> geben
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Die GIMA Frankfurt vermittelt Immobilien sozialverträglich – 
            für Eigentümer:innen, die Verantwortung übernehmen wollen, 
            und für Menschen, die langfristig sicher wohnen möchten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/kontakt">
                Beratungsgespräch vereinbaren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-background/80 backdrop-blur-sm">
              <Link to="/ueber-uns">
                Mehr erfahren
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TargetGroupSection = () => {
  const groups = [
    {
      icon: Home,
      title: "Für Eigentümer:innen",
      description: "Sie möchten Ihr Haus verkaufen, aber in gute Hände geben? Wir vermitteln an gemeinwohlorientierte Käufer.",
      link: "/eigentuemer",
      linkText: "Mehr erfahren",
    },
    {
      icon: Users,
      title: "Für Hausgemeinschaften",
      description: "Ihr Haus steht zum Verkauf? Erfahren Sie, wie Sie als Gemeinschaft Ihr Zuhause selbst übernehmen können.",
      link: "/hausgemeinschaften",
      linkText: "Mehr erfahren",
    },
    {
      icon: Building2,
      title: "Für Wohnungsunternehmen",
      description: "Genossenschaften, Stiftungen und selbstverwaltete Projekte – werden Sie Mitglied der GIMA.",
      link: "/wohnungsunternehmen",
      linkText: "Mehr erfahren",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container-wide">
        <div className="max-w-2xl mb-8 md:mb-12">
          <h2 className="mb-3">Unsere Angebote</h2>
          <p className="text-lg text-muted-foreground">
            Die GIMA richtet sich an verschiedene Zielgruppen –
            alle verbunden durch das Ziel, Wohnen langfristig zu sichern.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {groups.map((group, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent text-primary">
                  <group.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">{group.title}</CardTitle>
                <CardDescription className="text-base">
                  {group.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="group/btn p-0 h-auto">
                  <Link to={group.link} className="inline-flex items-center text-primary font-medium">
                    {group.linkText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    { icon: HandHeart, title: "Keine Rendite mit Wohnen", description: "Mensch vor Profit." },
    { icon: ShieldCheck, title: "Langfristige Sicherheit", description: "Dauerhaft bezahlbares Wohnen." },
    { icon: Eye, title: "Transparenz", description: "Offen und fair im Prozess." },
    { icon: Sprout, title: "Gemeinschaftliches Eigentum", description: "Häuser im Dienst des Gemeinwohls." },
  ];

  return (
    <section className="py-12 md:py-20 bg-background border-t">
      <div className="container-wide">
        <div className="max-w-2xl mb-8 md:mb-10">
          <h2 className="mb-3">Unsere Werte</h2>
          <p className="text-lg text-muted-foreground">
            Sozial verantwortlich und nachhaltig – kurz gesagt.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-4 md:p-5 rounded-lg border bg-secondary/30"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-accent text-primary">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold leading-tight">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container-wide text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-primary-foreground">
            Lassen Sie uns ins Gespräch kommen
          </h2>
          <p className="text-xl opacity-90">
            Ob Sie verkaufen, kaufen oder sich engagieren möchten – 
            wir beraten Sie gerne unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link to="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/faq">
                Häufige Fragen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <TargetGroupSection />
      <ValuesSection />
      <CTASection />
    </>
  );
};

export default HomePage;
