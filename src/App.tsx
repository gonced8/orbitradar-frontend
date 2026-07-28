import React from "react";
import CurrentDateTimeDisplay from "./components/CurrentDateTimeDisplay";
import World from "./components/World";

const App: React.FC = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/80 to-transparent px-4 pb-12 pt-5 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-200/90">
          Orbit Radar
        </p>
        <h1 className="mt-2 text-4xl font-black drop-shadow-lg sm:text-6xl">
          Satellite Tracker
        </h1>
      </header>
      <World />
      <CurrentDateTimeDisplay />
    </main>
  );
};

export default App;
