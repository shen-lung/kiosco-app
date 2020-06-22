import React, {PureComponent} from 'react';
import HorizontalCarousel from './HorizontalCarousel';

import {
    Grid,
} from '@material-ui/core';

import '../../css/content.css';

class ContentSection extends PureComponent {
    render() {
        return (
            <Grid container item xs={12} justify="center" alignItems="center">
                <div className="horizontal-carousel">
                    <h1 className="horizontal-carousel__title">Productos Nuevos</h1>
                    <HorizontalCarousel />
                    <h1 className="horizontal-carousel__title">Productos mas populares</h1>
                    <HorizontalCarousel />
                </div>
            </Grid>
        );
    }
}

export default ContentSection;