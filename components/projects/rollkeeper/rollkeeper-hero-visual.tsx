export function RollKeeperHeroVisual() {
  return (
    <div
      className="mx-auto w-full max-w-[360px] overflow-hidden shadow-[0px_8px_51.1px_-12px_rgba(0,0,0,0.25)]"
      style={{ borderRadius: "18.5% / 8.5%" }}
    >
      <video
        src="/videos/projects/rollkeeper-demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls
        className="block h-auto w-full scale-[1.015]"
      />
    </div>
  );
}
