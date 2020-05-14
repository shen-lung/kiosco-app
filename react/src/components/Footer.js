import React, {PureComponent} from 'react';

import {
    Row,
    Col,
    Layout,
} from 'antd';

const { Footer } = Layout;

class FooterSection extends PureComponent {
    render() {
        return (
            <Layout>
                <Footer className="footer">
                    <Row className="footer-section">
                        <Col span={8}>
                            <div className="footer-section__content-position-left">
                                <img className="image-logo__footer" src="./src/image/logo.png" />
                                © 2020
                            </div>
                        </Col>
                        <Col span={8} className="footer-section__center">
                            <div className="footer-section__content-position-center">
                                <p className="footer-section__center-direccion">Lunes a Sábado 8 a 20 hs, Av. San Martín, Mendoza, Argentina</p>
                                <p className="footer-section__center-tel">
                                    <img className="icon" src="./src/image/telephone-icon.svg" />
                                    <img className="icon" src="./src/image/whatsapp-icon.svg" />
                                    261-1698-567
                                    <img className="facebook-icon icon" src="./src/image/facebook-icon.svg" />
                                    <a className="facebook-page-text">
                                        Virtual Magazine
                                    </a>
                                </p>
                            </div>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </Footer>
            </Layout>
        );
    }
}

export default FooterSection;