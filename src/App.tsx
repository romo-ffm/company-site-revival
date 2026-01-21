import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Eigentuemer from "./pages/Eigentuemer";
import Hausgemeinschaften from "./pages/Hausgemeinschaften";
import Wohnungsunternehmen from "./pages/Wohnungsunternehmen";
import UeberUns from "./pages/UeberUns";
import Mitglieder from "./pages/Mitglieder";
import Vorstand from "./pages/Vorstand";
import Projekte from "./pages/Projekte";
import WegeDesVerkaufs from "./pages/WegeDesVerkaufs";
import Partner from "./pages/Partner";
import Wissen from "./pages/Wissen";
import Blog from "./pages/Blog";
import Veranstaltungen from "./pages/Veranstaltungen";
import FAQ from "./pages/FAQ";
import Ressourcen from "./pages/Ressourcen";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eigentuemer" element={<Eigentuemer />} />
          <Route path="/hausgemeinschaften" element={<Hausgemeinschaften />} />
          <Route path="/wohnungsunternehmen" element={<Wohnungsunternehmen />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/mitglieder" element={<Mitglieder />} />
          <Route path="/vorstand" element={<Vorstand />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/wege-des-verkaufs" element={<WegeDesVerkaufs />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/wissen" element={<Wissen />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/veranstaltungen" element={<Veranstaltungen />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ressourcen" element={<Ressourcen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
