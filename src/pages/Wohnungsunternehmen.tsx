import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, Users2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WohnungsunternehmenPage = () => {
  const memberTypes = [
    {
      title: "Wohnungsgenossenschaften",
      description: "Genossenschaften, die bezahlbaren Wohnraum für ihre Mitglieder schaffen und erhalten.",
    },
    {
      title: "Gemeinnützige Stiftungen",
      description: "Stiftungen, die Immobilien dauerhaft dem Gemeinwohl widmen.",
    },
    {
      title: "Selbstverwaltete Wohnprojekte",
      description: "Hausprojekte und Wohngruppen, die kollektiv und selbstverwaltet wohnen.",
    },
    {
      title: "Gemeinwohlorientierte Vereine",
      description: "Vereine und Initiativen mit dem Ziel, Wohnraum dem Markt zu entziehen.",
    },
  ];

  const benefits = [
    "Zugang zu Immobilien von sozial engagierten Verkäufer:innen",
    "Netzwerk mit anderen gemeinwohlorientierten Akteuren",
    "Unterstützung bei der Akquise und Finanzierung",
    "Gemeinsame Interessenvertretung",
    "Transparente und faire Vermittlung",
  ];

  const obligations = [
    "Verpflichtung zu dauerhaft bezahlbaren Mieten",
    "Kein spekulativer Weiterverkauf der Immobilien",
    "Transparente Bewirtschaftung und Kommunikation",
    "Mitbestimmungsrechte für Bewohner:innen gewährleisten",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              <span>Für Wohnungsunternehmen</span>
            </div>
            <h1 className="mb-6">
              Werden Sie <span className="text-primary">Mitglied</span> der GIMA
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Die GIMA ist ein Netzwerk gemeinwohlorientierter Wohnungsunternehmen. 
              Als Mitglied erhalten Sie Zugang zu Immobilien, die von sozial 
              engagierten Eigentümer:innen verkauft werden – zu fairen Konditionen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/kontakt">
                  Mitgliedschaft anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/ueber-uns">
                  Mehr über die GIMA
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wer kann Mitglied werden */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Wer kann Mitglied werden?</h2>
            <p className="text-lg text-muted-foreground">
              Die Mitgliedschaft steht allen Wohnungsunternehmen offen, 
              die sich dem Gemeinwohl verpflichtet fühlen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {memberTypes.map((type, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile und Verpflichtungen */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vorteile */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users2 className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Vorteile der Mitgliedschaft</h2>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Verpflichtungen */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Unsere Selbstverpflichtung</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Alle Mitglieder verpflichten sich zu gemeinsamen Standards, 
                die das Vertrauen der Verkäufer:innen gewährleisten:
              </p>
              <ul className="space-y-4">
                {obligations.map((obligation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{obligation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wie wird man Mitglied */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Wie wird man Mitglied?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Die Mitgliedschaft in der GIMA eG erfolgt durch den Erwerb 
              von Genossenschaftsanteilen. Der Prozess ist unkompliziert:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
              <div className="bg-muted rounded-lg p-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Kontakt aufnehmen</h3>
                <p className="text-sm text-muted-foreground">
                  Sprechen Sie mit uns über Ihre Organisation und Ihre Ziele.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Antrag stellen</h3>
                <p className="text-sm text-muted-foreground">
                  Füllen Sie den Mitgliedsantrag aus und zeichnen Sie Anteile.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Teil des Netzwerks werden</h3>
                <p className="text-sm text-muted-foreground">
                  Nach Aufnahme sind Sie Teil der GIMA-Gemeinschaft.
                </p>
              </div>
            </div>
            
            <Button size="lg" asChild>
              <Link to="/kontakt">
                Jetzt Mitgliedschaft anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WohnungsunternehmenPage;
