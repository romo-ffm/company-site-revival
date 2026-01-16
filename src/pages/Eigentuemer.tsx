import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, CheckCircle2, Home, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const EigentuemerPage = () => {
  const benefits = [
    "Ihr Haus geht in verantwortungsvolle Hände",
    "Langfristig bezahlbares Wohnen für die Bewohner:innen",
    "Faire Preise statt Höchstgeboten",
    "Steuerliche Vorteile bei Stiftungsmodellen möglich",
    "Begleitung durch den gesamten Prozess",
  ];

  const process = [
    {
      step: "1",
      title: "Erstgespräch",
      description: "Wir lernen Sie und Ihre Situation kennen und besprechen Ihre Wünsche und Möglichkeiten.",
    },
    {
      step: "2",
      title: "Prüfung & Beratung",
      description: "Gemeinsam prüfen wir, welcher Weg für Sie und Ihr Haus am besten passt.",
    },
    {
      step: "3",
      title: "Käufersuche",
      description: "Wir finden einen passenden gemeinwohlorientierten Käufer aus unserem Netzwerk.",
    },
    {
      step: "4",
      title: "Vermittlung",
      description: "Wir begleiten den Verkaufsprozess transparent und fair bis zum Abschluss.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="h-4 w-4" />
              <span>Für Eigentümer:innen</span>
            </div>
            <h1 className="mb-6">
              Ihr Haus verdient eine <span className="text-primary">gute Zukunft</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sie möchten Ihr Haus verkaufen – aber nicht an den Meistbietenden? 
              Die GIMA vermittelt an gemeinwohlorientierte Käufer, die langfristig 
              bezahlbares und sicheres Wohnen garantieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/kontakt">
                  Unverbindlich anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/wege-des-verkaufs">
                  Verkaufswege kennenlernen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warum sozialverträglich */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Warum sozialverträglich verkaufen?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Der Immobilienmarkt ist oft von Renditedenken geprägt. 
                Doch viele Eigentümer:innen wünschen sich, dass ihr Haus 
                auch in Zukunft ein gutes Zuhause für Menschen bleibt – 
                nicht nur eine Kapitalanlage.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Mit der GIMA können Sie sicherstellen, dass Ihr Haus 
                in die Hände von Genossenschaften, Stiftungen oder 
                selbstverwalteten Wohnprojekten gelangt, die 
                langfristig bezahlbares Wohnen garantieren.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingDown className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Unsere Philosophie</p>
                    <p className="font-semibold">Keine Rendite mit Wohnen</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Wir arbeiten nicht gewinnorientiert. Unser Ziel ist es, 
                  Wohnraum dem Spekulationsmarkt zu entziehen und 
                  dauerhaft für Menschen zu sichern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Wie funktioniert der Verkauf?</h2>
            <p className="text-lg text-muted-foreground">
              Wir begleiten Sie Schritt für Schritt – 
              transparent, fair und ohne Zeitdruck.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg p-6 border relative"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Heart className="h-12 w-12 mx-auto opacity-80" />
            <h2 className="text-primary-foreground">
              Bereit für ein Gespräch?
            </h2>
            <p className="text-xl opacity-90">
              Wir beraten Sie unverbindlich und kostenfrei zu Ihren Möglichkeiten.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontakt">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EigentuemerPage;
