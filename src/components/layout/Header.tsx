import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import gimaLogo from "@/assets/gima-herz-logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const zielgruppenLinks = [
    { href: "/eigentuemer", label: "Für Eigentümer:innen", description: "Ihr Haus sozialverträglich verkaufen" },
    { href: "/hausgemeinschaften", label: "Für Hausgemeinschaften", description: "Gemeinsam das eigene Haus kaufen" },
    { href: "/wohnungsunternehmen", label: "Für Wohnungsunternehmen", description: "Mitgliedschaft & Zusammenarbeit" },
  ];

  const ueberUnsLinks = [
    { href: "/ueber-uns", label: "Über die GIMA", description: "Mission, Geschichte & Werte" },
    { href: "/mitglieder", label: "Mitglieder", description: "Unsere Mitgliedsorganisationen" },
    { href: "/vorstand", label: "Vorstand & Aufsichtsrat", description: "Unsere Gremien" },
    { href: "/projekte", label: "Projekte", description: "Erfolgreich vermittelte Häuser" },
    { href: "/partner", label: "Partner & Netzwerke", description: "Unsere Kooperationen" },
  ];

  const wissenLinks = [
    { href: "/wissen", label: "Wissen", description: "Alle Themen im Überblick" },
    { href: "/wege-des-verkaufs", label: "Wege des Verkaufs", description: "Stiftung, Genossenschaft & mehr" },
    { href: "/blog", label: "Blog & Neuigkeiten", description: "Aktuelle Beiträge" },
    { href: "/veranstaltungen", label: "Veranstaltungen", description: "Termine & Events" },
    { href: "/faq", label: "FAQ", description: "Häufig gestellte Fragen" },
    { href: "/ressourcen", label: "Ressourcen & Links", description: "Dokumente & weiterführende Informationen" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wide flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <img
              src={gimaLogo}
              alt="GIMA Frankfurt Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="ml-2 text-xl font-semibold text-foreground">
              GIMA<span className="text-primary"> Frankfurt</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Zielgruppen */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Angebote
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {zielgruppenLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(link.href) && "bg-accent"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{link.label}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Über uns */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Über uns
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {ueberUnsLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(link.href) && "bg-accent"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{link.label}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Wissen */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Wissen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {wissenLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              isActive(link.href) && "bg-accent"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{link.label}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/kontakt"
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
              isActive("/kontakt") && "text-primary"
            )}
          >
            Kontakt
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild>
            <Link to="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container-wide py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Angebote</p>
              {zielgruppenLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-2 text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Über uns</p>
              {ueberUnsLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-2 text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Wissen</p>
              {wissenLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-2 text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t">
              <Button asChild className="w-full">
                <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
