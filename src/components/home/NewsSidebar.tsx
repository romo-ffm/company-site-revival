import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag, Newspaper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Placeholder posts - will be replaced with database content
const latestPosts = [
  {
    id: "1",
    title: "Die GIMA stellt sich vor",
    date: "2024-01-15",
    category: "Über uns",
    slug: "gima-stellt-sich-vor",
  },
  {
    id: "2",
    title: "Wie funktioniert sozialverträglicher Verkauf?",
    date: "2024-01-10",
    category: "Wissen",
    slug: "sozialvertraeglicher-verkauf",
  },
  {
    id: "3",
    title: "Neue Partnerschaft mit Wohnungsgenossenschaft",
    date: "2024-01-05",
    category: "Neuigkeiten",
    slug: "neue-partnerschaft",
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Informationsabend: Gemeinschaftliches Wohnen",
    date: "2025-02-15",
    slug: "infoabend-gemeinschaftliches-wohnen",
  },
  {
    id: "2",
    title: "Workshop: Hausgemeinschaft gründen",
    date: "2025-03-08",
    slug: "workshop-hausgemeinschaft",
  },
];

const NewsSidebar = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <aside className="space-y-6">
      {/* Latest News */}
      <Card className="border-2">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Newspaper className="h-5 w-5 text-primary" />
            Neuigkeiten
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {latestPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex items-start gap-3">
                <div className="text-xs text-muted-foreground whitespace-nowrap pt-0.5">
                  {formatDate(post.date)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>
            </Link>
          ))}
          <Button variant="ghost" size="sm" asChild className="w-full mt-2">
            <Link to="/blog" className="flex items-center justify-center">
              Alle Beiträge
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="border-2 border-primary/20 bg-accent/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-primary" />
            Veranstaltungen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event) => (
            <Link 
              key={event.id} 
              to={`/blog/${event.slug}`}
              className="block group"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded px-2 py-1 text-xs font-medium whitespace-nowrap">
                  {formatDate(event.date)}
                </div>
                <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                  {event.title}
                </p>
              </div>
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild className="w-full mt-2">
            <Link to="/veranstaltungen" className="flex items-center justify-center">
              Alle Termine
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default NewsSidebar;