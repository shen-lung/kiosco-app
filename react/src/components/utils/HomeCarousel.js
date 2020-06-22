import React, { PureComponent } from 'react';
import Carousel from 'react-elastic-carousel';
import {
    Paper,
    Grid,
} from '@material-ui/core';


class HomeCarousel extends PureComponent {
    
    render () {
        const carouselItems = [
            {
                id: 1,
                image: (
                    <img className="carousel__image" src="./src/image/carousel/1.jpg" height="500"/>
                )
            },
            {
                id: 2,
                image: (
                    <img className="carousel__image" src="./src/image/carousel/2.jpg" height="500"/>
                )
            },
            {
                id: 3,
                image: (
                    <img className="carousel__image" src="./src/image/carousel/3.jpg" height="500"/>
                )
            },
        ];
    
        const Items = (props) => {
            return (
                <Paper>
                   {props.item.image}
                </Paper>
            )
        };

        return (
            <Grid container item xs={12} justify="center" alignItems="center">
                <Carousel
                    className="carousel"
                    enableAutoPlay
                    transitionMs={1000}
                    autoPlaySpeed={6000}
                    showArrows={true}
                    enableMouseSwipe={true}
                >
                    {
                        carouselItems.map((item, index) => <Items key={index} item={item} />)
                    }
                </Carousel>
            </Grid>
        )
    }
}

export default HomeCarousel;