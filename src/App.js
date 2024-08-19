import React from 'react';
import HeaderAndHeroSection from './components/HeaderAndHeroSection';
import CardsSection from './components/CardsSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';

function App() {
    return (
        <div className="relative">
            <HeaderAndHeroSection />
            <CardsSection />
            <AboutSection />
            <CoursesSection />
        </div>
    );
}

export default App;