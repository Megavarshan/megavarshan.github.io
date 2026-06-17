export function NeuralBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full bg-[radial-gradient(closest-side,_var(--neon-soft),_transparent)] blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,_oklch(0.7_0.22_295_/_0.3),_transparent)] blur-3xl animate-float" />
      <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,_oklch(0.85_0.16_210_/_0.25),_transparent)] blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.82 0.19 195)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.82 0.19 195)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
