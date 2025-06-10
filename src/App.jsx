import React from 'react';
import Hero from './components/sections/Hero.jsx';
import ShowcaseSection from "./components/sections/ShowcaseSection.jsx";
import LogoSection from "./components/sections/LogoSection.jsx";
import FeatureCards from "./components/sections/FeatureCards.jsx";
import ExperienceSection from "./components/sections/ExperienceSection.jsx";
import NavBar from "./components/HeroModels/NavBar.jsx";
import TechStack from "./components/sections/TechStack.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/sections/Footer.jsx";
const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection/>
            <TechStack/>
            <Testimonials/>
            <Contact/>
            <Footer/>


        </>
    )

}
export default App;