import React, { PureComponent } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
    Paper,
    Grid,
} from '@material-ui/core';


class HorizontalCarousel extends PureComponent {
    
    render () {
        const items = [
            {
                image: (
                    <div className="horizontal-carousel__slide">
                        <Grid container justify="space-between">
                            <a href="#"><img src="./src/image/over_carousel/collection_1.png" height="160" width="280" /></a>
                            <a href="#"><img src="./src/image/over_carousel/collection_2.png" height="160" width="280" /></a>
                            <a href="#"><img src="./src/image/over_carousel/collection_1.png" height="160" width="280" /></a>
                        </Grid>
                    </div>
                )
            },
            {
                image: (
                    <div className="horizontal-carousel__slide">
                        <Grid container justify="space-between">
                            <a href="#"><img src="./src/image/over_carousel/collection_2.png" height="160" width="280" /></a>
                            <a href="#"><img src="./src/image/over_carousel/collection_1.png" height="160" width="280" /></a>
                            <a href="#"><img src="./src/image/over_carousel/collection_2.png" height="160" width="280" /></a>
                        </Grid>
                    </div>
                )
            },
            {
                image: (
                    <div className="horizontal-carousel__slide">
                        <Grid container justify="space-between">
                            <a href="#"><img src="./src/image/over_carousel/collection_1.png" height="160" width="280" /></a>
                            <a href="#"><img src="./src/image/over_carousel/collection_2.png" height="160" width="280" /></a>
                            <a href="#"><img src="./src/image/over_carousel/collection_1.png" height="160" width="280" /></a>
                        </Grid>
                    </div>
                )
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
            <Carousel className="carousel" interval={6000} timeout={500} indicators={false} animation="fade">
                {
                    items.map((item, index) => <Items key={index} item={item} />)
                }
            </Carousel>
        )
    }
}

export default HorizontalCarousel;