import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Placeholder events - will be replaced with database content
const placeholderEvents = [
  {
    id: "1",
    title: "Informationsabend: Gemeinschaftliches Wohnen",
    description: "Lernen Sie die verschiedenen Modelle gemeinschaftlichen Wohnens kennen und erfahren Sie, wie die GIMA Sie unterstützen kann.",
    date: "2025-02-15",
    time: "18:00",
    location: "GIMA Geschäftsstelle, Frankfurt",
    category: "Veranstaltung",
    slug: "infoabend-gemeinschaftliches-wohnen",
    isPast: false,
  },
  {
    id: "2",
    title: "Workshop: Hausgemeinschaft gründen",
    description: "Praxisworkshop für Mieter:innen, die ihr Haus gemeinsam übernehmen möchten.",
    date: "2025-03-08",
    time: "10:00",
    location: "Bürgerhaus Bornheim",
    category: "Veranstaltung",
    slug: "workshop-hausgemeinschaft",
    isPast: false,
  },
  {
    id: "3",
    title: "Netzwerktreffen Wohnungsgenossenschaften",
    description: "Austausch zwischen Genossenschaften und gemeinwohlorientierten Wohnungsunternehmen.",
    date: "2025-04-22",
    time: "15:00",
    location: "Online (Zoom)",
    category: "Veranstaltung",
    slug: "netzwerktreffen-genossenschaften",
    isPast: false,
  },
];

const VeranstaltungenPage = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const upcomingEvents = placeholderEvents.filter(e => !e.isPast);
  const pastEvents = placeholderEvents.filter(e => e.isPast);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              <span>Termine & Veranstaltungen</span>
            </div>
            <h1 className="mb-6">
              <span className="text-primary">Veranstaltungen</span> der GIMA
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Informationsabende, Workshops und Netzwerktreffen – 
              hier finden Sie alle kommenden Termine der GIMA Frankfurt.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <h2 className="mb-8">Kommende Veranstaltungen</h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Badge variant="secondary">
                        <Tag className="h-3 w-3 mr-1" />
                        {event.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-6 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time} Uhr</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to={`/blog/${event.slug}`}>
                        Details & Anmeldung
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Aktuell sind keine Veranstaltungen geplant. 
                Schauen Sie bald wieder vorbei!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 md:py-24 bg-muted">
          <div className="container-wide">
            <h2 className="mb-8">Vergangene Veranstaltungen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-primary-foreground">
              Keine Veranstaltung verpassen
            </h2>
            <p className="text-xl opacity-90">
              Abonnieren Sie unseren Newsletter und erhalten Sie 
              alle Termine direkt in Ihr Postfach.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontakt">
                Newsletter abonnieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VeranstaltungenPage;