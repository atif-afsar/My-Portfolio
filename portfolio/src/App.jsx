import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="cursor-none">
        <CustomCursor />
        <Navbar />
        <main className="relative">
          <Home />
          <About />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
