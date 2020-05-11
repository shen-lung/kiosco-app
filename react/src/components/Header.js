import React, {PureComponent} from 'react';

// import Carousel from 'react-bootstrap/Carousel'

import {
    Row,
    Col,
    Layout,
    Carousel,
    Menu,
    Button,
    Input,
    Badge,
    Space,
    Dropdown,
} from 'antd';
import {
    SmileOutlined,
    CloseOutlined,
    MenuOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

const {Header} = Layout;
const {SubMenu} = Menu;
const {Search} = Input;

import '../css/home.css';

class HeaderPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const menu = (
            <div className="user-section">
                <Row>
                    <Col span={24}>
                        <div className="user-section__regards">
                            <h2 className="user-section__hello-text">Hola</h2>
                            <h3>Pepe</h3>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="user-section__menu">
                            <Menu>
                                <Menu.Divider />
                                <Menu.Item key="0" className="user-section__fields">
                                    <SettingOutlined className="user-section__menu_imagen icon-color" />
                                    <a href="http://www.alipay.com/">Mi cuenta</a>
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item key="1" className="user-section__fields">
                                    <ShoppingCartOutlined className="user-section__menu_imagen icon-color" />
                                    <a href="http://www.taobao.com/">Compras</a>
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item key="2" className="user-section__fields">
                                    <LogoutOutlined className="user-section__menu_imagen icon-color" />
                                    <a href="http://www.taobao.com/">Salir</a>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </div>
        );

        return (
            <Layout>
                <Header className="header">
                    <div className="menu">
                        <div className="menu-section">
                            <Row>
                                <Col span={9}>
                                    <div className="menu-section__left">
                                        <a className="icon-color menu_imagen" href="#" onClick={this.toggleCollapsed}>
                                            {!this.state.collapsed ? <MenuOutlined /> : <CloseOutlined />}
                                        </a>
                                           
                                        {this.state.collapsed && <div className="menu-section__content"><Menu
                                            mode="inline"
                                            theme="light"
                                        >
                                            <Menu.Item key="1">
                                                <SmileOutlined className="user-section__menu_imagen icon-color" />
                                                <span>Option 1</span>
                                            </Menu.Item>
                                            <SubMenu
                                                key="sub1"
                                                title={
                                                <span>
                                                    <SmileOutlined className="user-section__menu_imagen icon-color" />
                                                    <span>Navigation One</span>
                                                </span>
                                                }
                                            >
                                                <Menu.Item key="5">Option 5</Menu.Item>
                                                <Menu.Item key="6">Option 6</Menu.Item>
                                                <Menu.Item key="7">Option 7</Menu.Item>
                                                <Menu.Item key="8">Option 8</Menu.Item>
                                            </SubMenu>
                                        </Menu></div>}
                                    </div>
                                </Col>
                                <Col className="image-logo__align" span={6}>
                                    <Space align="center">
                                        <img className="image-logo" src="./src/image/logo.png" />
                                    </Space>
                                </Col>
                                <Col span={9} className="menu-section__right">
                                    <Space align="center" size="middle">
                                        <Search
                                            className="find-sesction"
                                            placeholder="Colecciones, revistas ..."
                                            onSearch={value => console.log(value)}
                                        />
                                        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                                            <a className="icon-color" href="#">
                                                <UserOutlined className="menu_imagen icon-color" />
                                            </a>
                                        </Dropdown>
                                        <a className="icon-color" href="#">
                                            <Badge count={0} showZero>
                                                <ShoppingCartOutlined className="menu_imagen icon-color" />
                                            </Badge>
                                        </a>
                                    </Space>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="carousel">
                        <Carousel autoplay effect="fade">
                            <img src="./src/image/collection_1.png" height="500" width="1024"/>
                            <img src="./src/image/collection_2.png" height="500" width="1024"/>
                            <img src="./src/image/collection_3.png" height="500" width="1024"/>
                            <img src="./src/image/collection_4.png" height="500" width="1024"/>
                            <img src="./src/image/collection_5.png" height="500" width="1024"/>
                            <img src="./src/image/collection_6.png" height="500" width="1024"/>
                        </Carousel>
                    </div>
                </Header>
            </Layout>
        );
    }
}

export default HeaderPage;