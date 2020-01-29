import React from 'react';
import SideMenu from './SideMenu/sideMenu';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3),
        paddingLeft: theme.spacing(10),
        transition: 'all .5s ease-in-out'
    },
    contentShift: {
        padding: theme.spacing(3),
        transition: 'all .5s ease-out-in',
        marginLeft: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar
    }
}));

const Dashboard = ({ component: Component, ...rest }) => {
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <Route
            {...rest}
            render={matchProps => (
                <div className={classes.root}>
                    <SideMenu
                        open={open}
                        closeDrawer={handleDrawerClose}
                        openDrawer={handleDrawerOpen}
                    />
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: open
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        <Component {...matchProps} />
                    </main>
                </div>
            )}
        />
    );
};

export default Dashboard;
