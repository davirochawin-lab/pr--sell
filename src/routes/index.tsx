import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tudo pronto! | Continuar" },
      { name: "description", content: "Tudo pronto! Clique em continuar para acessar." },
      { property: "og:title", content: "Tudo pronto! | Continuar" },
      { property: "og:description", content: "Tudo pronto! Clique em continuar para acessar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="access-page">
      <div className="access-content">
        <div className="access-check" aria-hidden="true"><Check /></div>
        <h1>Tudo pronto! <span>Clique em continuar para acessar.</span></h1>
        <Button asChild variant="continue" size="continue">
          <a href="https://metodoslucrando.netlify.app">Continuar <ArrowRight aria-hidden="true" /></a>
        </Button>
      </div>
    </main>
  );
}
