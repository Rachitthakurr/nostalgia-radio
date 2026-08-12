import { createFileRoute } from "@tanstack/react-router";
import { Player } from "@/components/player/Player";
import { Clock, ListenerCount, SocialLinks } from "@/components/TopRow";
import { Ambience } from "@/components/Ambience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { title: "Melodies Music Centre — Nostalgia Radio" },
      {
        name: "description",
        content:
          "A single-page nostalgia radio: golden-hour playlists streamed from the rights holders' own uploads, wrapped in a glass player.",
      },
      { property: "og:title", content: "Melodies Music Centre — Nostalgia Radio" },
      {
        property: "og:description",
        content: "Golden-hour playlists on a cassette-shop street corner. Press play.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      <div className="hero-bg fixed inset-0 -z-20 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/80" />
      </div>
      <Ambience />
      <div className="grain fixed inset-0 -z-10" />

      <div
        className="fixed inset-x-0 top-0 z-10 flex items-start justify-between gap-3"
        style={{
          paddingTop: "max(1rem, env(safe-area-inset-top))",
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <Clock />
        <ListenerCount count={1284} />
        <SocialLinks />
      </div>

      <header className="pointer-events-none px-6 pt-28 text-center sm:pt-32">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] sm:text-4xl">
          Melodies Music Centre
        </h1>
        <p className="mt-2 text-sm text-white/70">Cassettes · Records · Radios — since 1978</p>
      </header>

      <div
        className="z-10 w-full px-4"
        style={{
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <div className="mx-auto flex w-full max-w-xl justify-center">
          <Player />
        </div>
      </div>
    </main>
  );
}
