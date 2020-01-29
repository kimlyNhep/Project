import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import kanao from '../../../../Assets/Images/kanao.jpg';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },

    NotiModel: {
        padding: theme.spacing(1)
    },
    MessageAction: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: theme.spacing(1)
    },
    typography: {
        marginLeft: theme.spacing(2)
    },
    appBar: {
        width: `calc(100% - ${theme.spacing(9) + 1}px)`,
        marginLeft: drawerWidth + theme.spacing(9) + 1,
        [theme.breakpoints.down('sm')]: {
            width: `calc(100% - ${theme.spacing(7) + 1}px)`,
            marginLeft: drawerWidth + theme.spacing(7) + 1
        },
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
    hide: {
        display: 'none'
    }
}));

export default function Navbar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [anchorElNotification, setAnchorElNotification] = React.useState(
        null
    );
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleNotification = newPlacement => event => {
        setAnchorElNotification(event.currentTarget);
        setOpen(prev => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label='show 4 new mails' color='inherit'>
                    <Badge badgeContent={4} color='secondary'>
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label='show 11 new notifications'
                    color='inherit'
                    onClick={handleNotification('bottom')}
                >
                    <Badge badgeContent={11} color='secondary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label='account of current user'
                    aria-controls='primary-search-account-menu'
                    aria-haspopup='true'
                    color='inherit'
                >
                    <Avatar alt='Remy Sharp' src={kanao} />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <Popper
                open={open}
                anchorEl={anchorElNotification}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper className={classes.NotiModel}>
                            <div className={classes.MessageAction}>
                                <Avatar alt='Remy Sharp' src={kanao} />
                                {/* Action Message  */}
                                <Typography className={classes.typography}>
                                    The content of the Popper.
                                </Typography>
                            </div>
                        </Paper>
                    </Fade>
                )}
            </Popper>

            <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.open
                })}
            >
                <Toolbar style={{ backgroundColor: '#212121' }}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={props.DrawerOpen}
                        edge='start'
                        className={clsx(
                            classes.menuButton,
                            props.open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant='h6' noWrap>
                        Food Order
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder='Search…'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label='show 4 new mails'
                            color='inherit'
                        >
                            <Badge badgeContent={4} color='secondary'>
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label='show 17 new notifications'
                            color='inherit'
                            onClick={handleNotification('bottom')}
                        >
                            <Badge badgeContent={17} color='secondary'>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge='end'
                            aria-label='account of current user'
                            aria-controls={menuId}
                            aria-haspopup='true'
                            color='inherit'
                        >
                            <Avatar alt='Remy Sharp' src={kanao} />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label='show more'
                            aria-controls={mobileMenuId}
                            aria-haspopup='true'
                            onClick={handleMobileMenuOpen}
                            color='inherit'
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}
