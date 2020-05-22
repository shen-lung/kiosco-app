import React, { PureComponent} from 'react';
import Container from '@material-ui/core/Container';

import HeaderSection from './material_ui/Header';
// import HeaderSection from './Header';
import ContentSection from './Content';
import FooterSection from './Footer';
import LoginComponent from './Login';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Container>
                    <HeaderSection />
                    {/* <LoginComponent /> */}
                    {/* <ContentSection /> */}
                    {/* <FooterSection /> */}
                </Container>
            </div>
        );
    }
}

export default Home;
