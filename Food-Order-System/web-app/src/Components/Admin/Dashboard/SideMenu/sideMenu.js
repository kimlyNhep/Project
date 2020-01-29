import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Navbar from '../Navbar/Navbar';
import Logo from '../../../../Assets/Logos/Food-logo.png';
import { Avatar } from '@material-ui/core';
import { withRouter, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'space-between'
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(1)
    },
    ListText: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
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
    arrowBack: {
        cursor: 'pointer',
        '&:hover': {
            marginRight: theme.spacing(1),
            transition: 'all .5s ease-in-out'
        }
    }
}));

function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    let history = useHistory();
    const [AccountSetting] = useState([
        { title: 'Profile', icon: <FontAwesomeIcon icon={faUserAlt} /> },
        { title: 'Inbox', icon: <FontAwesomeIcon icon={faMailBulk} /> }
    ]);

    const handleListItemClick = (event, index) => {
        switch (index) {
            case 0:
                history.push('/Admin/Profile');
                break;
            default:
                history.goBack();
        }
    };

    return (
        <>
            <CssBaseline />
            <Navbar open={props.open} DrawerOpen={props.openDrawer} />
            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open
                    })
                }}
            >
                <div className={classes.drawerHeader}>
                    <Avatar src={Logo} />
                    {props.open ? (
                        <Icon
                            onClick={props.closeDrawer}
                            className={classes.arrowBack}
                        >
                            {theme.direction === 'ltr' ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </Icon>
                    ) : null}
                </div>
                <Divider />
                <List>
                    {AccountSetting.map((text, index) => (
                        <ListItem
                            button
                            key={text.title}
                            onClick={event => handleListItemClick(event, index)}
                        >
                            <ListItemIcon>{text.icon}</ListItemIcon>
                            <ListItemText primary={text.title} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default withRouter(PersistentDrawerLeft);
