import React, { PureComponent} from 'react';

import HeaderSection from './Header';
import ContentSection from './Content';
import FooterSection from '../Footer';
import LoginComponent from './Login';

import '../css/home.css';

class Home extends PureComponent {
    render() {
        return (
            <div>
                {/* <LoginComponent /> */}
                {/* <HeaderSection />
                <ContentSection />
                <FooterSection /> */}
            </div>
        );
    }
}

export default Home;
