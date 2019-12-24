import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import FastFood from '../../Assets/Icons/Hamburger.png';
import Soup from '../../Assets/Icons/soup.png';
import IceScream from '../../Assets/Icons/icescream.png';
import DrinkCocktail from '../../Assets/Icons/drink-cocktail.png';
import Button from '../../UI/Button/Button';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2)
    },
    block: {
        display: 'flex',
        justifyContent: 'center'
    },
    SignIn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderTop: '1px solid black'
    },
    social: {
        margin: theme.spacing(2),
        cursor: 'pointer'
    }
}));

function Footer() {
    const classes = useStyle();
    return (
        <footer>
            <div className='container'>
                <div className={classes.root}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper className={classes.paper}>
                                <div>
                                    <h2>Our Service</h2>
                                    <p>
                                        We provide the service to our customer
                                        to order food or drink throw the website
                                    </p>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper className={classes.paper}>
                                <div>
                                    <h2>Address</h2>
                                    <p>
                                        St #519, Preak Tapov, Sangkat Dermmean,
                                        Krong Takhmao, Kandal, Cambodia
                                    </p>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Paper className={classes.paper}>
                                <div>
                                    <h2>Social Media</h2>
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        className={classes.social}
                                    />

                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className={classes.social}
                                    />
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className={classes.social}
                                    />
                                    <FontAwesomeIcon
                                        icon={faGoogle}
                                        className={classes.social}
                                    />
                                </div>
                            </Paper>
                        </Grid>

                        {/* <Grid item xs={6} sm={3} className={classes.block}>
                            <div className='preIcon'>
                                <img
                                    src={FastFood}
                                    alt='Fast Food'
                                    className='iconItem'
                                />
                            </div>
                        </Grid>

                        <Grid item xs={6} sm={3} className={classes.block}>
                            <div className='preIcon'>
                                <img
                                    src={Soup}
                                    alt='Fast Food'
                                    className='iconItem'
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={3} className={classes.block}>
                            <div className='preIcon'>
                                <img
                                    src={IceScream}
                                    alt='Fast Food'
                                    className='iconItem'
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={3} className={classes.block}>
                            <div className='preIcon'>
                                <img
                                    src={DrinkCocktail}
                                    alt='Fast Food'
                                    className='iconItem'
                                />
                            </div>
                        </Grid> */}
                        <Grid item xs={12} className={classes.block}>
                            <div className={classes.SignIn}>
                                <div>Register for Free</div>
                                <Button
                                    text='Sign In'
                                    variant='contained'
                                    color='secondary'
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
