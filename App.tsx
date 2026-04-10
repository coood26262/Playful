import React from 'react';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0a] font-sans antialiased selection:bg-brand selection:text-white overflow-x-hidden">
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
