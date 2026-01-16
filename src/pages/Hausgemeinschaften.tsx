import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, CheckCircle2, Shield, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const HausgemeinschaftenPage = () => {
  const benefits = [
    "Sicherheit: Ihr Zuhause bleibt Ihr Zuhause",
    "Bezahlbare Mieten dauerhaft garantiert",
    "Mitbestimmung bei wichtigen Entscheidungen",
    "Gemeinschaftliches Eigentum statt Spekulation",
    "Professionelle Begleitung durch die GIMA",
  ];

  const models = [
    {
      title: "Genossenschaft",
      description: "Sie werden Mitglied einer bestehenden Wohnungsgenossenschaft, die Ihr Haus kauft.",
    },
    {
      title: "Selbstverwaltetes Projekt",
      description: "Als Hausgemeinschaft gründen Sie ein eigenes Wohnprojekt mit professioneller Unterstützung.",
    },
    {
      title: "Stiftungsmodell",
      description: "Eine gemeinnützige Stiftung übernimmt das Haus und garantiert langfristig bezahlbares Wohnen.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              <span>Für Hausgemeinschaften</span>
            </div>
            <h1 className="mb-6">
              Ihr Haus steht zum Verkauf? <span className="text-primary">Handeln Sie jetzt.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Wenn Ihr Mietshaus verkauft wird, ist das oft mit Unsicherheit verbunden. 
              Doch es gibt Alternativen: Als Hausgemeinschaft können Sie Ihr Zuhause 
              selbst übernehmen – mit unserer Unterstützung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/kontakt">
                  Beratung anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/faq">
                  Häufige Fragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Situation */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Wir verstehen Ihre Situation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ein Hausverkauf kann Ihr Leben auf den Kopf stellen: 
                Neue Eigentümer, steigende Mieten, vielleicht sogar 
                Eigenbedarfskündigungen. Viele Hausgemeinschaften fühlen 
                sich in dieser Situation machtlos.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Doch Sie haben Möglichkeiten! Die GIMA unterstützt Sie dabei, 
                Ihr Haus gemeinsam zu übernehmen oder einen gemeinwohlorientierten 
                Käufer zu finden, der Ihre Interessen schützt.
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
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Unser Versprechen</p>
                    <p className="font-semibold">Wir stehen auf Ihrer Seite</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Als gemeinwohlorientierte Genossenschaft arbeiten wir nicht 
                  für Investoren, sondern für Menschen, die ein sicheres 
                  Zuhause brauchen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelle */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Welche Wege gibt es?</h2>
            <p className="text-lg text-muted-foreground">
              Je nach Situation kommen verschiedene Modelle in Frage – 
              wir finden gemeinsam die beste Lösung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((model, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg p-6 border"
              >
                <h3 className="text-xl font-semibold mb-3">{model.title}</h3>
                <p className="text-muted-foreground">{model.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/wege-des-verkaufs">
                Alle Verkaufswege im Detail
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Handshake className="h-12 w-12 mx-auto opacity-80" />
            <h2 className="text-primary-foreground">
              Der erste Schritt ist ein Gespräch
            </h2>
            <p className="text-xl opacity-90">
              Erzählen Sie uns von Ihrer Situation – 
              wir beraten Sie unverbindlich und vertraulich.
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

export default HausgemeinschaftenPage;
