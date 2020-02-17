import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginCard from './LoginCard/LoginCard';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    bgImg: {
        backgroundImage:
            'url("https://images.unsplash.com/photo-1499257398700-43669759a540?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")',
        backgroundSize: 'cover',
        // width: '100vw',
        // height: '100vh',
        [theme.breakpoints.down('md')]: {
            backgroundPosition: 'center'
        },
        zIndex: -1,
        filter: 'blur(5px)',
        boxSizing: 'border-box',
        display: 'block',
        left: -10,
        top: -10,
        bottom: -10,
        right: -10,
        position: 'fixed',
        margin: -10
    },
    card: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 100
    },
    loading: {
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    }
}));

function Authentication() {
    const classes = useStyles();
    const [loading,setLoading] = React.useState(false);

    return (
        <div>
            <div className={classes.bgImg}></div>
            <div className={classes.card}>
                <LoginCard setLoading={setLoading}/>
            </div>
            {loading ?
                <div className={classes.loading}> <CircularProgress disableShrink /> </div>
            : null}
        </div>
    );
}

export default Authentication;
