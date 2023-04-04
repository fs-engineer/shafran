import React from 'react';
import { GoogleMap } from '../../components/GoogleMap';
import { AboutSection } from '../../components/Sections/AboutSection';
import HistorySection from '../../components/Sections/HistorySection/HistorySection';

const About = () => {
    return (
        <div>
            <AboutSection />
            <HistorySection />
            <GoogleMap />
        </div>
    );
};

export default About;
