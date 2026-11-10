import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Users,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

// Données fictives des matchs groupés par tours
const MOCK_ROUNDS = [
  {
    name: "Demi-finales",
    matches: [
      {
        id: "m1",
        player1: "Locklear",
        player2: "Squeezie",
        score1: 3,
        score2: 1,
        status: "Terminé",
      },
      {
        id: "m2",
        player1: "Gotaga",
        player2: "Doigby",
        score1: 2,
        score2: 2,
        status: "En cours",
      },
    ],
  },
  {
    name: "Finale",
    matches: [
      {
        id: "m3",
        player1: "Locklear",
        player2: "Gotaga",
        score1: null,
        score2: null,
        status: "À venir",
      },
    ],
  },
];

export default function TournamentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const tournament = {
    id: params.id,
    name: "Lille Smash Ultimate - Winter",
    game: "Super Smash Bros Ultimate",
    status: "En cours",
    format: "Double Élimination",
    date: "15 Décembre 2026",
    participants: "45/64",
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* En-tête du tournoi */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Retour aux tournois
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-primary text-primary-foreground">
                {tournament.status}
              </Badge>
              <span className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded-md">
                {tournament.format}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">
              {tournament.name}
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              {tournament.game}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-primary" />{" "}
              {tournament.date}
            </span>
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" />{" "}
              {tournament.participants} Joueurs
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 min-w-50">
          <Button size="lg" className="w-full text-base">
            Faire mes pronostics
          </Button>
          <Button size="lg" variant="outline" className="w-full text-base">
            S&apos;inscrire
          </Button>
        </div>
      </div>

      {/* Système d'onglets */}
      <Tabs defaultValue="matches" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-150">
          <TabsTrigger value="tree">Arbre Graphique</TabsTrigger>
          <TabsTrigger value="matches">Matchs (Accessible)</TabsTrigger>
          <TabsTrigger value="participants">Participants</TabsTrigger>
          <TabsTrigger value="pickem">Pick&apos;em</TabsTrigger>
        </TabsList>

        {/* Contenu : Arbre Graphique */}
        <TabsContent value="tree" className="mt-6">
          <Card className="border-border/50 bg-card/30 min-h-100 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-primary/50" />
              <p>
                L&apos;intégration de la librairie d&apos;arbre graphique (ex:
                react-tournament-bracket) se fera ici.
              </p>
            </div>
          </Card>
        </TabsContent>

        {/* Contenu : Liste des matchs (Accessibilité WCAG) */}
        <TabsContent value="matches" className="mt-6 space-y-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Liste des matchs</h2>
            <p className="text-muted-foreground">
              Vue textuelle optimisée pour la navigation au clavier et les
              lecteurs d&apos;écran.
            </p>
          </div>

          {MOCK_ROUNDS.map((round) => (
            <section
              key={round.name}
              className="space-y-4"
              aria-labelledby={`heading-${round.name}`}
            >
              {/* Titre de niveau 3 pour structurer la page pour les lecteurs d'écran */}
              <h3
                id={`heading-${round.name}`}
                className="text-xl font-semibold border-b border-border/50 pb-2 text-primary"
              >
                {round.name}
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {round.matches.map((match) => (
                  <Card
                    key={match.id}
                    className="border-border/50 bg-card/50 hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-4 flex flex-col justify-between h-full gap-4">
                      {/* En-tête du match : Statut */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-muted-foreground">
                          Match #{match.id}
                        </span>
                        <Badge
                          variant={
                            match.status === "En cours"
                              ? "default"
                              : match.status === "Terminé"
                                ? "outline"
                                : "secondary"
                          }
                          className={
                            match.status === "En cours"
                              ? "bg-primary text-primary-foreground animate-pulse"
                              : ""
                          }
                        >
                          {match.status}
                        </Badge>
                      </div>

                      {/* Les joueurs et le score */}
                      <div className="space-y-2 my-2">
                        <div
                          className={`flex justify-between items-center p-2 rounded-md ${match.score1 !== null && match.score1 > (match.score2 || 0) ? "bg-primary/10 text-primary font-bold" : ""}`}
                        >
                          <span>{match.player1}</span>
                          <span className="font-mono text-lg">
                            {match.score1 ?? "-"}
                          </span>
                        </div>
                        <div
                          className={`flex justify-between items-center p-2 rounded-md ${match.score2 !== null && match.score2 > (match.score1 || 0) ? "bg-primary/10 text-primary font-bold" : ""}`}
                        >
                          <span>{match.player2}</span>
                          <span className="font-mono text-lg">
                            {match.score2 ?? "-"}
                          </span>
                        </div>
                      </div>

                      {/* Action accessible au clavier */}
                      <Button
                        variant="ghost"
                        className="w-full mt-auto justify-between group"
                        aria-label={`Voir les détails du match entre ${match.player1} et ${match.player2}`}
                      >
                        Voir les détails
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </TabsContent>

        <TabsContent value="participants" className="mt-6">
          <Card className="border-border/50 bg-card/30 p-8 text-center text-muted-foreground">
            Liste des participants inscrits.
          </Card>
        </TabsContent>

        <TabsContent value="pickem" className="mt-6">
          <Card className="border-border/50 bg-card/30 p-8 text-center text-muted-foreground">
            Questions Pick&apos;em personnalisées par l&apos;administrateur.
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
