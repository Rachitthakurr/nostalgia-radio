/**
 * Ambient background life: drifting dust motes, a slow warm haze that breathes,
 * a raking "headlight" sweep, and a flickering neon sign glow.
 * All values are static (no Math.random at render) so SSR and hydration match.
 * Pointer position is published as --mx/--my on the root for layered parallax.
 */
import { useEffect } from "react";


type Mote = { left: number; size: number; delay: number; duration: number; drift: number };

const MOTES: Mote[] = [
  { left: 4, size: 3, delay: 0, duration: 26, drift: 40 },
  { left: 11, size: 2, delay: 7, duration: 34, drift: -30 },
  { left: 19, size: 4, delay: 3, duration: 22, drift: 60 },
  { left: 27, size: 2, delay: 12, duration: 30, drift: -50 },
  { left: 34, size: 3, delay: 18, duration: 38, drift: 25 },
  { left: 42, size: 2, delay: 5, duration: 28, drift: -70 },
  { left: 49, size: 5, delay: 15, duration: 42, drift: 35 },
  { left: 56, size: 2, delay: 9, duration: 24, drift: -20 },
  { left: 63, size: 3, delay: 21, duration: 36, drift: 55 },
  { left: 71, size: 2, delay: 2, duration: 32, drift: -45 },
  { left: 78, size: 4, delay: 14, duration: 27, drift: 30 },
  { left: 85, size: 2, delay: 19, duration: 40, drift: -35 },
  { left: 92, size: 3, delay: 6, duration: 25, drift: 50 },
  { left: 97, size: 2, delay: 11, duration: 33, drift: -25 },
];

export function Ambience() {
  // Subtle pointer parallax: normalised -1..1 written to CSS custom properties.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      root.style.setProperty("--mx", cx.toFixed(4));
      root.style.setProperty("--my", cy.toFixed(4));
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      root.style.removeProperty("--mx");
      root.style.removeProperty("--my");
    };
  }, []);

  return (

    <div aria-hidden className="ambience pointer-events-none fixed inset-0 -z-10">
      {/* warm evening haze, breathing */}
      <div className="haze haze-a absolute inset-0" />
      <div className="haze haze-b absolute inset-0" />

      {/* raking light sweep, like a scooter passing the shopfront */}
      <div className="light-sweep absolute inset-0" />

      {/* neon shop-sign flicker, top-left of the frame */}
      <div className="neon-flicker absolute inset-0" />


      {/* dust in the projector beam */}

      {MOTES.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={{
            left: `${m.left}%`,
            width: m.size,
            height: m.size,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            ["--drift" as string]: `${m.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
