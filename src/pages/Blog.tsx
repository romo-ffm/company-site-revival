import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// Placeholder blog posts - will be replaced with database content
const placeholderPosts = [
  {
    id: "1",
    title: "Die GIMA stellt sich vor",
    excerpt: "Erfahren Sie mehr über unsere Arbeit und wie wir Häuser in gute Hände vermitteln.",
    date: "2024-01-15",
    category: "Über uns",
    slug: "gima-stellt-sich-vor",
  },
  {
    id: "2",
    title: "Wie funktioniert sozialverträglicher Verkauf?",
    excerpt: "Ein Überblick über die verschiedenen Wege, Ihr Haus an gemeinwohlorientierte Käufer zu verkaufen.",
    date: "2024-01-10",
    category: "Wissen",
    slug: "sozialvertraeglicher-verkauf",
  },
  {
    id: "3",
    title: "Neue Partnerschaft mit Wohnungsgenossenschaft",
    excerpt: "Wir freuen uns über ein neues Mitglied in unserem Netzwerk.",
    date: "2024-01-05",
    category: "Neuigkeiten",
    slug: "neue-partnerschaft",
  },
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = placeholderPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              Blog & <span className="text-primary">Neuigkeiten</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Aktuelles von der GIMA: Berichte über unsere Arbeit, 
              Wissenswertes rund um sozialverträgliches Wohnen und 
              Neuigkeiten aus unserem Netzwerk.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          {/* Search */}
          <div className="max-w-md mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Beiträge durchsuchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Tag className="h-3 w-3" />
                      <span>{post.category}</span>
                      <span className="mx-1">•</span>
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="p-0 h-auto group/btn" asChild>
                      <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-medium">
                        Weiterlesen
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Keine Beiträge gefunden für "{searchQuery}"
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Suche zurücksetzen
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide text-center">
          <h2 className="mb-4">Bleiben Sie informiert</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Erhalten Sie Updates über unsere Arbeit, neue Beiträge und 
            Entwicklungen im Bereich sozialverträgliches Wohnen.
          </p>
          <Button size="lg" asChild>
            <Link to="/kontakt">
              Newsletter abonnieren
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
