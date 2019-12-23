import React from 'react';
import NavAuthentication from './Authentication/NavAuthentication';
import Card from './Authentication/LayoutCard/LayoutCard';
import { makeStyles } from '@material-ui/core/styles';
import FoodBack from '../../Assets/Images/food-back.jpg';
import Footer from './Footer';

const useStyle = makeStyles(theme => ({
    layout: {
        backgroundImage: `url(${FoodBack})`,
        backgroundSize: 'cover'
    },
    headerText: {
        marginTop: '3%',
        marginRight: '7%',
        textAlign: 'right',
        fontSize: '3rem',
        userSelect: 'none'
    },
    '@media (max-width: 599px)': {
        //​ ទំហំ Screen យ៉ាងធំបំផុត 599px
        layout: {
            width: '100%',
            height: '100%'
        },
        headerText: {
            display: 'none'
        }
    },
    '@media (max-width: 768px)': {
        //​ ទំហំ Screen យ៉ាងធំបំផុត 599px
        headerText: {
            fontSize: '32px'
        }
    },
    '@media (min-width: 768px)': {
        //​ ទំហំ Screen យ៉ាងតូចបំផុត 500px
        layout: {
            width: '100%',
            height: '100%'
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
