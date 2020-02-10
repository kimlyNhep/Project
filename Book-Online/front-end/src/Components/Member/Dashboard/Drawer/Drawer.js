import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Navbar from '../Navbar/Navbar';
import Avatar from '@material-ui/core/Avatar';
import Profile from '../../../../Assets/Images/kanao.jpg';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collection from '@material-ui/icons/Collections';
import LockOpen from '@material-ui/icons/LockOpen';
import ExitToApp from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import ProfileDetail from './ProfileDetail';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        minWidth: 0
    },
    nested: {
        paddingLeft: theme.spacing(9)
    }
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const [openCategory, setOpenCategory] = React.useState(true);
    const [openProfile, setOpenProfile] = React.useState(true);
    const [viewProfile, setViewProfile] = React.useState(false);

    const handleCategory = () => {
        setOpenCategory(!openCategory);
    };

    const handleOpenProfile = () => {
        setOpenProfile(!openProfile);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setOpenCategory(false);
        setOpenProfile(false);
    };

    const handleViewProfile = () => {
        setViewProfile(true);
    };

    const handleCloseProfile = () => {
        setViewProfile(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key='Profile' onClick={handleOpenProfile}>
                        <ListItemIcon>
                            <Avatar alt='kanao' src={Profile} />
                        </ListItemIcon>
                        <ListItemText primary='kimly' />
                        {openProfile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <List>
                        <Collapse in={openProfile} timeout='auto' unmountOnExit>
                            <ListItem
                                button
                                key='info'
                                className={classes.nested}
                                onClick={handleViewProfile}
                            >
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary='Info' />
                            </ListItem>
                            <ListItem
                                button
                                key='Change Password'
                                className={classes.nested}
                            >
                                <ListItemIcon>
                                    <LockOpen />
                                </ListItemIcon>
                                <ListItemText primary='Password' />
                            </ListItem>
                            <ListItem
                                button
                                key='LogOut'
                                className={classes.nested}
                            >
                                <ListItemIcon>
                                    <ExitToApp />
                                </ListItemIcon>
                                <ListItemText primary='Log Out' />
                            </ListItem>
                        </Collapse>
                    </List>
                </List>
                <Divider />
                <ListItem button onClick={handleCategory}>
                    <ListItemIcon>
                        <Collection />
                    </ListItemIcon>
                    <ListItemText primary='All Genres' />
                    {openCategory ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <List>
                    <Collapse in={openCategory} timeout='auto' unmountOnExit>
                        {['Advanture', 'Love', 'Comedy'].map((text, index) => (
                            <ListItem
                                button
                                key={text}
                                className={classes.nested}
                            >
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </Collapse>
                    <Divider />
                </List>
            </Drawer>
            <div className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </div>
            {viewProfile && (
                <ProfileDetail
                    open={openProfile}
                    handleClose={handleCloseProfile}
                />
            )}
        </div>
    );
}
