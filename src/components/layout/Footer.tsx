import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Über GIMA */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg 
                viewBox="0 0 40 40" 
                className="h-8 w-8"
                aria-label="GIMA Logo"
              >
                <circle cx="20" cy="20" r="18" fill="hsl(174, 58%, 39%)" />
                <path 
                  d="M12 20 L20 12 L28 20 L20 28 Z" 
                  fill="white" 
                  opacity="0.9"
                />
                <circle cx="20" cy="20" r="4" fill="hsl(174, 65%, 28%)" />
              </svg>
              <span className="ml-2 text-lg font-semibold">
                GIMA Frankfurt
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Genossenschaftliche Immobilienagentur Frankfurt eG – 
              Wir vermitteln Häuser in gute Hände und setzen uns für 
              sozialverträgliches Wohnen ein.
            </p>
          </div>

          {/* Angebote */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Angebote</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/eigentuemer" className="text-muted-foreground hover:text-primary transition-colors">
                  Für Eigentümer:innen
                </Link>
              </li>
              <li>
                <Link to="/hausgemeinschaften" className="text-muted-foreground hover:text-primary transition-colors">
                  Für Hausgemeinschaften
                </Link>
              </li>
              <li>
                <Link to="/wohnungsunternehmen" className="text-muted-foreground hover:text-primary transition-colors">
                  Für Wohnungsunternehmen
                </Link>
              </li>
              <li>
                <Link to="/wege-des-verkaufs" className="text-muted-foreground hover:text-primary transition-colors">
                  Wege des Verkaufs
                </Link>
              </li>
            </ul>
          </div>

          {/* Wissen & Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Wissen & Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ueber-uns" className="text-muted-foreground hover:text-primary transition-colors">
                  Über die GIMA
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog & Neuigkeiten
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/ressourcen" className="text-muted-foreground hover:text-primary transition-colors">
                  Ressourcen & Links
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-muted-foreground hover:text-primary transition-colors">
                  Partner & Netzwerke
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Frankfurt am Main
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:kontakt@gima-frankfurt.de" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  kontakt@gima-frankfurt.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+4969123456789" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +49 69 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} GIMA Frankfurt eG. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6">
              <Link to="/impressum" className="hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <Link to="/agb" className="hover:text-primary transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
