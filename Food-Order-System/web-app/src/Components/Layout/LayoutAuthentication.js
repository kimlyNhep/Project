import React from 'react';
import NavAuthentication from './Authentication/NavAuthentication';
import Card from './Authentication/LayoutCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    layout: {
        width: '100vw',
        height: '100vh'
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
