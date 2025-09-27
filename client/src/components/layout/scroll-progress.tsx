import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform-gpu z-50"
      style={{
        transform: `scaleX(${progress})`,
        transformOrigin: "0%",
      }}
      data-testid="scroll-progress"
    />
  );
}
