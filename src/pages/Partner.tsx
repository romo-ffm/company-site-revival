import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ExternalLink, Building, Scale, Users2, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PartnerPage = () => {
  const partners = [
    {
      category: "Finanzierung",
      items: [
        {
          name: "GLS Bank",
          description: "Nachhaltige Bank, die soziale und ökologische Projekte finanziert.",
          url: "https://www.gls.de",
        },
      ],
    },
    {
      category: "Prüfung & Beratung",
      items: [
        {
          name: "Prüfungsverband",
          description: "Genossenschaftliche Prüfung nach höchsten Standards.",
          url: "#",
        },
      ],
    },
    {
      category: "Netzwerke",
      items: [
        {
          name: "Netzwerk ImmoPhiliens",
          description: "Bundesweites Netzwerk für gemeinwohlorientierte Immobilienvermittlung.",
          url: "#",
        },
        {
          name: "Netzwerk Mieten und Wohnen",
          description: "Zusammenschluss für eine soziale Wohnungspolitik.",
          url: "#",
        },
      ],
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "Initiative Transparente Zivilgesellschaft",
      description: "Wir streben das Zertifikat für maximale Transparenz an.",
      status: "In Vorbereitung",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              Partner & <span className="text-primary">Netzwerke</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die GIMA ist Teil eines breiten Netzwerks von Organisationen, 
              die sich für bezahlbares und gemeinwohlorientiertes Wohnen 
              einsetzen. Gemeinsam sind wir stärker.
            </p>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="space-y-12">
            {partners.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((partner, i) => (
                    <Card key={i} className="hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          {partner.name}
                          {partner.url !== "#" && (
                            <a 
                              href={partner.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </CardTitle>
                        <CardDescription>{partner.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zertifizierungen */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4">Zertifizierungen & Standards</h2>
            <p className="text-lg text-muted-foreground">
              Transparenz und Vertrauen sind uns wichtig – 
              deshalb arbeiten wir an höchsten Standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {cert.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerPage;
