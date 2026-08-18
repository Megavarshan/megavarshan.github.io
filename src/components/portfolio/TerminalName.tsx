import { motion } from "motion/react";

export function TerminalName({ text }: { text: string }) {
  return (
    <div className="relative inline-block py-2">
      <h1 
        id="hero-name"
        className="font-display font-bold leading-tight text-[clamp(2.5rem,6vw,6rem)] text-foreground tracking-tight"
      >
        {text}
      </h1>
    </div>
  );
}
