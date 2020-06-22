import React from 'react';

import Container from '@material-ui/core/Container';

import MenuSection from './Menu';
import HomeCarousel from './HomeCarousel';
import ContentSection from './Content';
import FooterSection from './Footer';

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
