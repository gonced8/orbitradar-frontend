import React from "react";
import World from "./components/World";

const App: React.FC = () => {
  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/80 to-transparent px-4 pb-10 pt-[max(1rem,env(safe-area-inset-top))] text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90">
          Orbit Radar
        </p>
        <h1 className="mt-1 text-2xl font-black drop-shadow-lg sm:text-4xl">
          Satellite Tracker
        </h1>
      </header>
      <World />
    </main>
  );
};

export default App;
