
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen antialiased">
      <Header />
      <main>
        <Hero />
        <Story />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
