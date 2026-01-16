import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ExternalLink, FileText, BookOpen, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RessourcenPage = () => {
  const documents = [
    {
      title: "Satzung der GIMA Frankfurt eG",
      description: "Die vollständige Satzung unserer Genossenschaft.",
      type: "PDF",
    },
    {
      title: "Selbstverpflichtung der Mitglieder",
      description: "Die Standards, zu denen sich alle Mitglieder verpflichten.",
      type: "PDF",
    },
    {
      title: "Wirtschaftsplan",
      description: "Unser aktueller Wirtschaftsplan für Transparenz.",
      type: "PDF",
    },
  ];

  const links = [
    {
      category: "Wohnungspolitik",
      items: [
        {
          title: "Netzwerk Mieten und Wohnen",
          description: "Zusammenschluss für eine soziale Wohnungspolitik",
          url: "#",
        },
        {
          title: "Deutscher Mieterbund",
          description: "Interessenvertretung der Mieter:innen",
          url: "https://www.mieterbund.de",
        },
      ],
    },
    {
      category: "Genossenschaften & Stiftungen",
      items: [
        {
          title: "GLS Bank",
          description: "Nachhaltige Bank für soziale Projekte",
          url: "https://www.gls.de",
        },
        {
          title: "Stiftung trias",
          description: "Stiftung für gemeinschaftliches Wohnen",
          url: "https://www.stiftung-trias.de",
        },
      ],
    },
    {
      category: "Wissen & Information",
      items: [
        {
          title: "Wohnprojekte-Portal",
          description: "Informationen zu gemeinschaftlichem Wohnen",
          url: "#",
        },
        {
          title: "Bundesverband der Wohnungsunternehmen",
          description: "Dachverband der Wohnungswirtschaft",
          url: "#",
        },
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
              Wissen & <span className="text-primary">Ressourcen</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hier finden Sie wichtige Dokumente, weiterführende Links und 
              Informationen rund um sozialverträgliches Wohnen und die Arbeit 
              der GIMA.
            </p>
          </div>
        </div>
      </section>

      {/* Dokumente */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Dokumente zum Download</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {doc.title}
                    <span className="text-xs bg-muted px-2 py-1 rounded">{doc.type}</span>
                  </CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" disabled>
                    Bald verfügbar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Linkssammlung */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <LinkIcon className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Weiterführende Links</h2>
          </div>
          
          <div className="space-y-8">
            {links.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors group"
                    >
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {link.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geschichte */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Geschichte der GIMA</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Die GIMA Frankfurt wurde gegründet, um dem wachsenden Problem 
                der Spekulation mit Wohnraum etwas entgegenzusetzen. In einer 
                Stadt, in der die Mieten stetig steigen und Wohnraum immer mehr 
                zur Kapitalanlage wird, wollten wir eine Alternative schaffen.
              </p>
              <p>
                Als Genossenschaft sind wir unseren Mitgliedern verpflichtet – 
                gemeinwohlorientierten Wohnungsunternehmen, die sich für 
                bezahlbares Wohnen einsetzen. Gemeinsam arbeiten wir daran, 
                Häuser dem Spekulationsmarkt zu entziehen und für Menschen 
                zu sichern.
              </p>
              <p>
                Unsere Vision: Eine Stadt, in der Wohnen keine Ware ist, 
                sondern ein Menschenrecht.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RessourcenPage;
