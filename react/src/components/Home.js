import React, { PureComponent} from 'react';

import HeaderSection from './Header';
import ContentSection from './Content';
import FooterSection from './Footer';

import '../css/home.css';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <HeaderSection />
                <ContentSection />
                <FooterSection />
            </div>
        );
    }
}

export default Home;
