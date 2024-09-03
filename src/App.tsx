// Add 'm-0 p-0' to the body style globally or use Tailwind's 'overflow-hidden' on the div if content overflow is the issue

import React from 'react';
import CurrentDateTimeDisplay from './components/CurrentDateTimeDisplay';
import World from './components/World';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-black relative">
      <h1 className="absolute top-0 left-0 right-0 z-10 text-white text-6xl font-bold text-center drop-shadow-lg">
        Orbit Radar
      </h1>
      <World />
      <CurrentDateTimeDisplay />
    </div>
  );
};

export default App;