import React, { PureComponent } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';


class HorizontalCarousel extends PureComponent {

    componentDidMount() {
        const paginations = document.getElementsByClassName('rec rec-pagination');
        const pagination = paginations[0]
        pagination.remove()

    }

    myArrow = ({ type, onClick }) => {
        const pointer = type === consts.PREV ? <LeftOutlined className="menu_imagen icon-color horizontal-carousel__button-icon" /> : <RightOutlined className="menu_imagen icon-color horizontal-carousel__button-icon" />

        return <span className="horizontal-carousel__button" onClick={onClick}>{pointer}</span>
    }
    
    render () {
        const items = [
            {id: 1, title: (<img src="./src/image/over_carousel/collection_1.png" height="160" width="280"/>)},
            {id: 2, title: (<img src="./src/image/over_carousel/collection_2.png" height="160" width="280"/>)},
            {id: 3, title: (<img src="./src/image/over_carousel/collection_1.png" height="160" width="280"/>)},
            {id: 4, title: (<img src="./src/image/over_carousel/collection_2.png" height="160" width="280"/>)},
            {id: 5, title: (<img src="./src/image/over_carousel/collection_1.png" height="160" width="280"/>)},
            {id: 6, title: (<img src="./src/image/over_carousel/collection_2.png" height="160" width="280"/>)},
            {id: 7, title: (<img src="./src/image/over_carousel/collection_1.png" height="160" width="280"/>)},
            {id: 8, title: (<img src="./src/image/over_carousel/collection_2.png" height="160" width="280"/>)},
        ]

        return (
            <Carousel
                enableAutoPlay
                autoPlaySpeed={3000}
                itemsToShow={3}
                itemsToScroll={1}
                renderArrow={this.myArrow}
            >
                {items.map(item => <div key={item.id}><a href="#">{item.title}</a></div>)}
            </Carousel>
        )
    }
}

export default HorizontalCarousel;