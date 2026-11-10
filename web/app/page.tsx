import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Users, ArrowRight } from "lucide-react";

// Données fictives respectant les formats du cahier des charges
const MOCK_TOURNAMENTS = [
  {
    id: "1",
    name: "Lille Smash Ultimate - Winter",
    game: "Super Smash Bros Ultimate",
    status: "Inscriptions ouvertes",
    format: "Double Élimination",
    date: "15 Décembre 2026",
    participants: "45/64",
  },
  {
    id: "2",
    name: "Mario Kart 8 Deluxe - Grand Prix",
    game: "Mario Kart 8 Deluxe",
    status: "En cours",
    format: "FFA (Chacun pour soi)",
    date: "10 Novembre 2026",
    participants: "12/12",
  },
  {
    id: "3",
    name: "Tournoi d'Échecs Epitech",
    game: "Échecs",
    status: "Terminé",
    format: "Ronde Suisse",
    date: "25 Octobre 2026",
    participants: "32/32",
  },
];

export default function Home() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-2 text-foreground">
          Tournois à la une
        </h1>
        <p className="text-muted-foreground text-lg">
          Découvrez les compétitions, inscrivez-vous ou faites vos pronostics en
          direct.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TOURNAMENTS.map((tournament) => (
          <Card
            key={tournament.id}
            className="group relative flex flex-col border-border/50 bg-card/50 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 overflow-hidden"
          >
            {/* Ligne d'accentuation animée en haut de la carte */}
            <div className="absolute top-0 left-0 h-1 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />

            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-3">
                <Badge
                  variant={
                    tournament.status === "En cours"
                      ? "default"
                      : tournament.status === "Terminé"
                        ? "outline"
                        : "secondary"
                  }
                  className={
                    tournament.status === "En cours"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : ""
                  }
                >
                  {tournament.status}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded-md">
                  {tournament.format}
                </span>
              </div>
              <CardTitle className="text-xl leading-tight">
                {tournament.name}
              </CardTitle>
              <CardDescription className="text-sm mt-1">
                {tournament.game}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2 text-primary/70" />
                {tournament.date}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="w-4 h-4 mr-2 text-primary/70" />
                {tournament.participants} joueurs
              </div>
            </CardContent>

            <CardFooter className="pt-4 border-t border-border/30 bg-muted/10">
              <Link href={`/tournaments/${tournament.id}`} className="w-full">
                <Button
                  className="w-full transition-transform active:scale-95"
                  variant={
                    tournament.status === "Terminé" ? "secondary" : "default"
                  }
                >
                  {tournament.status === "Terminé"
                    ? "Voir les résultats"
                    : "Accéder au tournoi"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
