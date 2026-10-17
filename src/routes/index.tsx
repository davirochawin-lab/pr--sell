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
          <a href="https://wa.me/5521920416136?text=Eu%20quero%20aprender%20a%20ganhar%20dinheiro%20com%20Intelig%C3%AAncia%20Artificial.">Continuar <ArrowRight aria-hidden="true" /></a>
        </Button>
      </div>
    </main>
  );
}
