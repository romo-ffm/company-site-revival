import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Scale, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VorstandPage = () => {
  const vorstand = [
    {
      name: "Vorstand 1",
      role: "Vorstandsmitglied",
      description: "Beschreibung der Aufgaben und Hintergrund.",
    },
    {
      name: "Vorstand 2",
      role: "Vorstandsmitglied",
      description: "Beschreibung der Aufgaben und Hintergrund.",
    },
  ];

  const aufsichtsrat = [
    {
      name: "Aufsichtsrat 1",
      role: "Vorsitzende:r des Aufsichtsrats",
      description: "Vertritt die Mitglieder und überwacht die Geschäftsführung.",
    },
    {
      name: "Aufsichtsrat 2",
      role: "Stellvertretende:r Vorsitzende:r",
      description: "Unterstützt die Arbeit des Aufsichtsrats.",
    },
    {
      name: "Aufsichtsrat 3",
      role: "Mitglied des Aufsichtsrats",
      description: "Bringt Expertise aus der Wohnungswirtschaft ein.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              Vorstand & <span className="text-primary">Aufsichtsrat</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die GIMA Frankfurt wird ehrenamtlich geführt. Vorstand und 
              Aufsichtsrat setzen sich für die Ziele der Genossenschaft ein 
              und werden von der Generalversammlung gewählt.
            </p>
          </div>
        </div>
      </section>

      {/* Struktur */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-6 border text-center">
              <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Generalversammlung</h3>
              <p className="text-sm text-muted-foreground">
                Oberstes Organ der Genossenschaft. Alle Mitglieder haben 
                eine Stimme.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 border text-center">
              <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Aufsichtsrat</h3>
              <p className="text-sm text-muted-foreground">
                Überwacht die Geschäftsführung und berät den Vorstand.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 border text-center">
              <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Vorstand</h3>
              <p className="text-sm text-muted-foreground">
                Führt die laufenden Geschäfte der Genossenschaft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vorstand */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <h2 className="mb-8">Der Vorstand</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {vorstand.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-muted mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic">
            * Die Namen und Informationen werden nach der Eintragung der 
            Genossenschaft ergänzt.
          </p>
        </div>
      </section>

      {/* Aufsichtsrat */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <h2 className="mb-8">Der Aufsichtsrat</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {aufsichtsrat.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-background mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic">
            * Die Namen und Informationen werden nach der Eintragung der 
            Genossenschaft ergänzt.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-primary-foreground">Fragen an die Gremien?</h2>
            <p className="text-xl opacity-90">
              Bei Fragen zu unserer Organisation oder Interesse an einer 
              Zusammenarbeit wenden Sie sich gerne an uns.
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

export default VorstandPage;
