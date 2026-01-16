import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const KontaktPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="text-primary">Kontakt</span> aufnehmen
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sie haben Fragen oder möchten ein Beratungsgespräch vereinbaren? 
              Wir freuen uns, von Ihnen zu hören. Schreiben Sie uns oder rufen 
              Sie an – wir sind für Sie da.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Kontaktformular */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Schreiben Sie uns</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 ..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Betreff *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Worum geht es?"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Ihre Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Wie können wir Ihnen helfen?"
                    rows={6}
                  />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Kontaktdaten */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Kontaktdaten</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <a 
                      href="mailto:kontakt@gima-frankfurt.de" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kontakt@gima-frankfurt.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a 
                      href="tel:+4969123456789" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +49 69 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">
                      GIMA Frankfurt eG<br />
                      Frankfurt am Main
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold mb-3">Was passiert nach Ihrer Anfrage?</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Wir bestätigen den Eingang Ihrer Nachricht per E-Mail.</li>
                  <li>2. Ein:e Mitarbeiter:in meldet sich innerhalb weniger Tage bei Ihnen.</li>
                  <li>3. Wir vereinbaren einen Termin für ein unverbindliches Erstgespräch.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Hinweis */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-wide text-center">
          <h2 className="mb-4">Haben Sie allgemeine Fragen?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            In unseren FAQ finden Sie Antworten auf häufig gestellte Fragen 
            rund um die GIMA, sozialverträglichen Verkauf und mehr.
          </p>
          <Button variant="outline" asChild>
            <Link to="/faq">
              Zu den FAQ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default KontaktPage;
