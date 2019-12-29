import React from 'react';
import LoginForm from './LoginForm/LayoutCard';
import Footer from '../../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import FoodBack from '../../../Assets/Images/food-back.jpg';

const useStyles = makeStyles(theme => ({
    layout: {
        backgroundImage: `url(${FoodBack})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
    }
}));
function Authentication() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.layout}>
                <LoginForm />
            </div>
            <Footer />
        </div>
    );
}

export default Authentication;
