import { Link } from "react-router-dom";
import { Mail, Phone, Rss } from "lucide-react";
import gimaLogo from "@/assets/gima-herz-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Marke */}
          <div className="space-y-4">
            <img
              src={gimaLogo}
              alt="GIMA Frankfurt"
              className="h-20 w-auto object-contain"
            />
            <p className="text-sm font-semibold text-foreground leading-snug">
              Immobilien sozialverträglich<br />verkaufen
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
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <a
                  href="mailto:info@gima-frankfurt.de"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@gima-frankfurt.de
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                <a
                  href="tel:+496995928082"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +49 69 9592 8082
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Mastodon */}
            <a
              href="https://mastodon.social/@gimafrankfurt"
              target="_blank"
              rel="noopener noreferrer me"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Mastodon"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.668 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
              </svg>
            </a>
            {/* BlueSky */}
            <a
              href="https://bsky.app/profile/gimafrankfurt.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="BlueSky"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/gima-frankfurt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/gima_frankfurt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com/gimafrankfurt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* RSS Feed */}
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="RSS Feed"
            >
              <Rss className="h-5 w-5" />
            </a>
          </div>
          
          {/* Bottom Bar */}
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
