import { useEffect, useState } from "react";
import { GLASS } from "@/components/player/parts";

const formatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export function Clock() {
  const [parts, setParts] = useState<{ hour: string; minute: string; period: string } | null>(
    null,
  );

  useEffect(() => {
    const tick = () => {
      const p = formatter.formatToParts(new Date());
      setParts({
        hour: p.find((x) => x.type === "hour")?.value ?? "",
        minute: p.find((x) => x.type === "minute")?.value ?? "",
        period: (p.find((x) => x.type === "dayPeriod")?.value ?? "").toUpperCase(),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={`rounded-full px-3 py-1.5 ${GLASS}`}>
      <span className="text-[13px] font-medium tabular-nums text-foreground">
        {parts ? (
          <>
            {parts.hour}
            <span className="blink">:</span>
            {parts.minute} <span className="text-white/60">{parts.period} IST</span>
          </>
        ) : (
          <span className="text-white/60">— IST</span>
        )}
      </span>
    </div>
  );
}

export function ListenerCount({ count }: { count: number }) {
  return (
    <div className={`rounded-full px-3 py-1.5 ${GLASS}`}>
      <span className="flex items-center gap-2 text-[12px] text-white/75">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)]" />
        {count.toLocaleString("en-IN")} listening
      </span>
    </div>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thakurrachit_?igsh=MTNjMWJoZHhqdW9zaQ==&igsi=MTNjMWJoZHhqdW9zaQ==",
  },
  { label: "GitHub", href: "https://github.com/Rachitthakurr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rachit-rana-b10a34324" },

];

export function SocialLinks() {
  return (
    <div className={`flex items-center gap-1 rounded-full px-2 py-1.5 ${GLASS}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full px-2 py-0.5 text-[11.5px] text-white/70 transition-colors hover:text-foreground"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
