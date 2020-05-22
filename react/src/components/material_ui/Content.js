import React, {PureComponent} from 'react';
import HorizontalCarousel from './HorizontalCarousel';

import {
    Row,
    Col,
    Layout,
} from 'antd';

const { Content } = Layout;

class ContentSection extends PureComponent {
    render() {
        return (
            <Layout>
                <Content>
                    <Row>
                        <Col span={24}>
                            <div className="horizontal-carousel">
                                <h1 className="horizontal-carousel__title">Productos Nuevos</h1>
                                <HorizontalCarousel />
                                <h1 className="horizontal-carousel__title">Productos mas populares</h1>
                                <HorizontalCarousel />
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default ContentSection;