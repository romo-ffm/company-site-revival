import Layout from "@/components/layout/Layout";

const AGBPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-8">Allgemeine Geschäftsbedingungen</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">§ 1 Geltungsbereich</h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Vermittlungsleistungen 
                  der GIMA Frankfurt eG (nachfolgend "GIMA") im Bereich der sozialverträglichen 
                  Immobilienvermittlung.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">§ 2 Leistungen der GIMA</h2>
                <p>
                  Die GIMA vermittelt Immobilien zwischen Eigentümer:innen und gemeinwohlorientierten 
                  Wohnungsunternehmen. Die Vermittlung erfolgt nach den Grundsätzen der 
                  Gemeinnützigkeit und Sozialverträglichkeit.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">§ 3 Mitgliedschaft</h2>
                <p>
                  Die Mitgliedschaft in der GIMA eG steht gemeinwohlorientierten 
                  Wohnungsunternehmen offen, die die Satzung und Selbstverpflichtung anerkennen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">§ 4 Vergütung</h2>
                <p>
                  Die Vergütung für Vermittlungsleistungen wird individuell vereinbart und 
                  orientiert sich an gemeinnützigen Grundsätzen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">§ 5 Haftung</h2>
                <p>
                  Die GIMA haftet für Vorsatz und grobe Fahrlässigkeit. Die Haftung für 
                  leichte Fahrlässigkeit ist auf den typischen vorhersehbaren Schaden begrenzt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">§ 6 Schlussbestimmungen</h2>
                <p>
                  Es gilt deutsches Recht. Gerichtsstand ist Frankfurt am Main, soweit 
                  gesetzlich zulässig.
                </p>
              </div>

              <p className="text-sm mt-8">
                [Diese AGB sind ein Entwurf und müssen noch rechtlich geprüft werden.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AGBPage;
