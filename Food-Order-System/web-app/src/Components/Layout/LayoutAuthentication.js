import React from 'react';
import NavAuthentication from './LayoutComponents/NavAuthentication';
import Card from './LayoutComponents/LayoutCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    layout: {
        width: '100%',
        height: '100%'
    }
}));
function Layout() {
    const classes = useStyle();
    return (
        <div className={classes.layout}>
            <NavAuthentication />
            <Card />
        </div>
    );
}

export default Layout;
