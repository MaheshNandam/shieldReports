import React from 'react';
import { IntroBanner, AboutUs, OurServices, Scanners } from '../components';

const Container = () => {
    return (
        <div>
            <IntroBanner />
            <AboutUs />
            <OurServices />
            <Scanners />
        </div>
    );
};

export { Container };