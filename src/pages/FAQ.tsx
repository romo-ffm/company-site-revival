import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqCategories = [
    {
      title: "Allgemeine Fragen",
      items: [
        {
          question: "Was ist die GIMA Frankfurt?",
          answer: "Die GIMA Frankfurt (Genossenschaftliche Immobilienagentur Frankfurt eG) ist eine gemeinnützige Genossenschaft, die Immobilien sozialverträglich vermittelt. Wir bringen Verkäufer:innen, die ihr Haus in gute Hände geben wollen, mit gemeinwohlorientierten Käufern wie Genossenschaften, Stiftungen oder selbstverwalteten Wohnprojekten zusammen.",
        },
        {
          question: "Wie finanziert sich die GIMA?",
          answer: "Die GIMA finanziert sich durch Mitgliedsbeiträge, Vermittlungsgebühren und Fördermittel. Als Genossenschaft arbeiten wir nicht gewinnorientiert – alle Überschüsse fließen zurück in unsere Arbeit für bezahlbares Wohnen.",
        },
        {
          question: "Ist die GIMA ein Makler?",
          answer: "Nein, die GIMA ist kein klassischer Makler. Wir sind eine gemeinnützige Genossenschaft, die Immobilien nur an gemeinwohlorientierte Käufer vermittelt. Unser Ziel ist nicht der höchste Preis, sondern eine nachhaltige Nutzung im Sinne der Bewohner:innen.",
        },
      ],
    },
    {
      title: "Für Eigentümer:innen",
      items: [
        {
          question: "Was bedeutet 'sozialverträglicher Verkauf'?",
          answer: "Ein sozialverträglicher Verkauf bedeutet, dass das Haus an Käufer verkauft wird, die langfristig bezahlbare Mieten garantieren und die Interessen der Bewohner:innen schützen. Das können Genossenschaften, Stiftungen oder selbstverwaltete Wohnprojekte sein.",
        },
        {
          question: "Bekomme ich weniger Geld als beim Verkauf an einen normalen Käufer?",
          answer: "Gemeinwohlorientierte Käufer können oft keine Höchstpreise zahlen, da sie auf Rendite verzichten. Dafür garantieren sie eine verantwortungsvolle Nutzung Ihres Hauses. Je nach Modell (z.B. Stiftung) können jedoch steuerliche Vorteile den Unterschied ausgleichen.",
        },
        {
          question: "Wie lange dauert der Verkaufsprozess?",
          answer: "Der Prozess kann je nach Situation mehrere Monate dauern. Wir nehmen uns die Zeit, die richtige Lösung für Sie und Ihr Haus zu finden. Es gibt keinen Zeitdruck – wir begleiten Sie in Ihrem Tempo.",
        },
      ],
    },
    {
      title: "Für Hausgemeinschaften",
      items: [
        {
          question: "Unser Haus wird verkauft – was können wir tun?",
          answer: "Kontaktieren Sie uns so früh wie möglich! Je früher wir einbezogen werden, desto mehr Optionen haben wir. Wir beraten Sie zu Ihren Möglichkeiten – vom gemeinsamen Kauf bis zur Vermittlung an einen gemeinwohlorientierten Käufer.",
        },
        {
          question: "Können wir als Mieter:innen unser Haus selbst kaufen?",
          answer: "Ja, das ist grundsätzlich möglich. Es gibt verschiedene Modelle: Sie können eine eigene Genossenschaft gründen, sich einem bestehenden Wohnprojekt anschließen oder über eine Stiftung eine Lösung finden. Wir unterstützen Sie bei der Umsetzung.",
        },
        {
          question: "Was kostet die Beratung?",
          answer: "Die erste Beratung ist für Hausgemeinschaften kostenlos. Wir besprechen Ihre Situation und zeigen Möglichkeiten auf. Erst wenn wir aktiv vermitteln, fallen Kosten an.",
        },
      ],
    },
    {
      title: "Für Wohnungsunternehmen",
      items: [
        {
          question: "Wer kann Mitglied der GIMA werden?",
          answer: "Mitglied können gemeinwohlorientierte Wohnungsunternehmen werden: Genossenschaften, Stiftungen, selbstverwaltete Wohnprojekte und gemeinnützige Vereine, die sich der Bereitstellung von bezahlbarem Wohnraum verpflichten.",
        },
        {
          question: "Welche Verpflichtungen gehe ich als Mitglied ein?",
          answer: "Alle Mitglieder verpflichten sich zu unserer Selbstverpflichtung: dauerhaft bezahlbare Mieten, kein spekulativer Weiterverkauf, transparente Bewirtschaftung und Mitbestimmungsrechte für Bewohner:innen.",
        },
        {
          question: "Wie werden Immobilien an Mitglieder vermittelt?",
          answer: "Wenn wir eine passende Immobilie erhalten, informieren wir interessierte Mitglieder. Wir prüfen, welches Mitglied am besten zur Immobilie und zu den Wünschen der Verkäufer:innen passt, und begleiten den Vermittlungsprozess.",
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
              Häufig gestellte <span className="text-primary">Fragen</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um 
              die GIMA, sozialverträglichen Verkauf und unsere Arbeit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`item-${index}-${i}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide text-center">
          <h2 className="mb-4">Keine Antwort gefunden?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kontaktieren Sie uns gerne – wir beantworten Ihre Fragen 
            persönlich und unverbindlich.
          </p>
          <Button size="lg" asChild>
            <Link to="/kontakt">
              Kontakt aufnehmen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
