import React from 'react';
import NavAuthentication from '../../Appbar/NavAuthentication';
import Card from '../../LayoutCard/LayoutCard';
import { makeStyles } from '@material-ui/core/styles';
import FoodBack from '../../../Assets/Images/food-back.jpg';
import Footer from '../../Footer/Footer';

const useStyle = makeStyles(theme => ({
    layout: {
        backgroundImage: `url(${FoodBack})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
    },
    headerText: {
        marginTop: '3%',
        marginRight: '7%',
        textAlign: 'right',
        fontSize: '3rem',
        userSelect: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px'
        }
    }
}));
function Layout() {
    const classes = useStyle();
    return (
        <div className={classes.layout}>
            <NavAuthentication />
            <p className={classes.headerText}>Seller Authentication</p>
            <Card />
            <Footer />
        </div>
    );
}

export default Layout;
