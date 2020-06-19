import React, { PureComponent } from 'react';
import Carousel from 'react-elastic-carousel';
import {
    Paper,
    Grid,
} from '@material-ui/core';


class HorizontalCarousel extends PureComponent {
    
    render () {
        const carouselItems = [
            {
                id: 1,
                image: (<img className="carousel__image" src="./src/image/carousel/1.jpg" height="248" width="600"/>)
            },
            {
                id: 2,
                image: (<img className="carousel__image" src="./src/image/carousel/2.jpg" height="248" width="600"/>)
            },
            {
                id: 3,
                image: (<img className="carousel__image" src="./src/image/carousel/3.jpg" height="248" width="600"/>)
            },
            {
                id: 4,
                image: (<img className="carousel__image" src="./src/image/carousel/3.jpg" height="248" width="600"/>)
            },
            {
                id: 5,
                image: (<img className="carousel__image" src="./src/image/carousel/2.jpg" height="248" width="600"/>)
            },
            {
                id: 6,
                image: (<img className="carousel__image" src="./src/image/carousel/1.jpg" height="248" width="600"/>)
            },
        ];
    
        const Items = (props) => {
            return (
                <Paper className="horizontal-carousel__section">
                   {props.item.image}
                </Paper>
            )
        };

        return (
            <Carousel
                enableAutoPlay
                transitionMs={1000}
                autoPlaySpeed={8000}
                showArrows={true}
                enableMouseSwipe={true}
                itemsToShow={3}
                itemPadding={[10, 5]}
            >
                {
                    carouselItems.map((item, index) => <Items key={index} item={item} />)
                }
            </Carousel>
        )
    }
}

export default HorizontalCarousel;