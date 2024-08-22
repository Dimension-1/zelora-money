import React from 'react';
import HeaderAndHeroSection from '../components/HeaderAndHeroSection';
import CardsSection from '../components/CardsSection';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import OurValuesAndStories from '../components/OurValuesAndStoriesSection';
import CommunityAndCryptoSection from '../components/CommunityAndCryptoSection';
import JoinCommunitySection from '../components/JoinCommunitySection';
import CitizenPassSection from '../components/CitizenPassSection';
import ResourceHubSection from '../components/ResourceHubSection';
import VideosToLearnSection from '../components/VideosToLearnSection';
import FAQSection from '../components/FAQSection';
import RequestInviteSection from '../components/InviteSection';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="relative">
            <HeaderAndHeroSection />
            <CardsSection />
            <AboutSection />
            <CoursesSection />
            <OurValuesAndStories />
            <CommunityAndCryptoSection />
            <JoinCommunitySection />
            <CitizenPassSection />
            <ResourceHubSection />
            <VideosToLearnSection />
            <FAQSection />
            <RequestInviteSection />
            <Footer />
        </div>
    );
}

export default Home;