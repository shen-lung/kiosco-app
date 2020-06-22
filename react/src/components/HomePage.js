import React from 'react';

import Container from '@material-ui/core/Container';

import MenuSection from './utils/Menu';
import HomeCarousel from './utils/HomeCarousel';
import ContentSection from './utils/Content';
import FooterSection from './utils/Footer';

import '../css/header.css';

export default function HomePage() {

    return (
        <div>
            <Container>
                <MenuSection />
                <HomeCarousel />
                <ContentSection />
                <FooterSection />
            </Container>
        </div>
    );
}
