// Add 'm-0 p-0' to the body style globally or use Tailwind's 'overflow-hidden' on the div if content overflow is the issue

import React from 'react';
import World from './components/World';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      <h1 className="text-white text-6xl font-bold text-center">
        Orbit Radar
      </h1>
      <World />
    </div>
  );
};

export default App;