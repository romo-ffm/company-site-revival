import Layout from "@/components/layout/Layout";

const DatenschutzPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-medium text-foreground mb-2">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Verantwortliche Stelle</h2>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  GIMA Frankfurt eG<br />
                  Frankfurt am Main<br /><br />
                  E-Mail: kontakt@gima-frankfurt.de
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-medium text-foreground mb-2">Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                  gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Ihre Rechte</h2>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
                  und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
                  außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Hosting</h2>
                <p>
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                  Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                </p>
              </div>

              <p className="text-sm mt-8">
                [Diese Datenschutzerklärung ist ein Entwurf und muss noch rechtlich geprüft werden.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DatenschutzPage;
