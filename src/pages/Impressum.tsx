import Layout from "@/components/layout/Layout";

const ImpressumPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-8">Impressum</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
                <p>
                  GIMA Frankfurt eG<br />
                  Genossenschaftliche Immobilienagentur Frankfurt<br />
                  Frankfurt am Main
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Vertreten durch</h2>
                <p>
                  Vorstand der GIMA Frankfurt eG
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
                <p>
                  E-Mail: kontakt@gima-frankfurt.de<br />
                  Telefon: +49 69 123 456 789
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Registereintrag</h2>
                <p>
                  Eintragung im Genossenschaftsregister<br />
                  Registergericht: Amtsgericht Frankfurt am Main<br />
                  Registernummer: [folgt]
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Prüfungsverband</h2>
                <p>
                  [Prüfungsverband wird ergänzt]
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                  GIMA Frankfurt eG<br />
                  Frankfurt am Main
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  https://ec.europa.eu/consumers/odr/<br /><br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ImpressumPage;
