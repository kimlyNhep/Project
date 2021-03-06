import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faGoogle,
    faGithub,
    faDiscord
} from '@fortawesome/free-brands-svg-icons';

const useStyle = makeStyles(theme => ({
    container: {
        backgroundColor: '#f8bbd0',
        borderRadius: '10px',
        padding: '16px',
        margin: '10px'
    },
    root: {
        flexGrow: 1
    },
    paper: {
        userSelect: 'none',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2)
    },
    block: {
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid #616161',
        margin: '1rem',
        userSelect: 'none'
    },
    social: {
        margin: theme.spacing(2),
        cursor: 'pointer',
        padding: '1px',
        '&:hover': {
            padding: '0px'
        },
        '&:active': {
            padding: '1px'
        }
    }
}));

function Footer() {
    const classes = useStyle();
    return (
        <footer>
            <div className={classes.container}>
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
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className={classes.social}
                                    />
                                    <FontAwesomeIcon
                                        icon={faDiscord}
                                        className={classes.social}
                                    />
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className={classes.block}>
                            <div>
                                &#169; 2019 Food Order All Right Reserved.
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
