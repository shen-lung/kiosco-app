import React, {PureComponent} from 'react';

import { Grid } from '@material-ui/core';

class FooterSection extends PureComponent {
    render() {
        return (
            <Grid container item xs={12} justify="center" alignItems="center">
                <Grid container className="footer">
                    <Grid container item xs={3} justify="center" alignItems="center">
                        <div className="footer-section__content-position-left">
                            <Grid container justify="center" alignItems="center">
                                <img className="image-logo__footer" src="./src/image/logo.png" />
                                <span>© 2020</span>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={6} className="footer-section__center">
                        <p>Lunes a Sábado 8 a 20 hs, Av. San Martín, Mendoza, Argentina</p>
                        <Grid container justify="center" alignItems="center">
                            <img className="icon" src="./src/image/telephone-icon.svg" />
                            <img className="icon" src="./src/image/whatsapp-icon.svg" />
                            261-1698-567
                            <img className="facebook-icon icon" src="./src/image/facebook-icon.svg" />
                            <a className="facebook-page-text" href="#">
                                Virtual Magazine
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid className="footer-empty" container item xs={12}></Grid>
                </Grid>
            </Grid>
        );
    }
}

export default FooterSection;