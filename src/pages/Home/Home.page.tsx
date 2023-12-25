import React from 'react';
import Hero from "./components/Hero/Hero.home.tsx";
import Info from "./components/Info/Info.home.tsx";
import Contact from "./components/Contact/Contact.home.tsx";

const Home:React.FC = () => {
    return (
        <div className="h-screen relative overflow-y-auto scroll-smooth snap-mandatory snap-y hide-scrollbar glow-container">
            <Hero/>
            <Info/>
            <Contact/>
        </div>
    );
};

export default Home;
