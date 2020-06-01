import React, { PureComponent} from 'react';
import Container from '@material-ui/core/Container';

import HeaderSection from './Header';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Container>
                    <HeaderSection />
                </Container>
            </div>
        );
    }
}

export default Home;
