import React, { useState } from 'react';
import { useStyles } from './NavStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FoodLogo from '../../Assets/Logos/Food-logo.png';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AppNavBar() {
    const classes = useStyles();
    const [usernameState, setUsername] = useState('');
    const [passwordState, setPassword] = useState('');

    const [uiState] = useState({
        username: {
            elementType: 'input',
            elementStyle: {
                styleType: 'default',
                inputProps: classes.input,
                outlineColor: 'secondary'
            },
            elementConfig: {
                valueType: 'text',
                placeholder: 'Username'
            }
        },
        password: {
            elementType: 'input',
            elementStyle: {
                styleType: 'default',
                inputProps: classes.input,
                outlineColor: 'secondary'
            },
            elementConfig: {
                valueType: 'password',
                placeholder: 'Password'
            }
        }
    });

    const [openDailog, setOpenDailog] = React.useState(false);

    const handleClickOpen = () => {
        setOpenDailog(true);
    };

    const handleClose = () => {
        setOpenDailog(false);
    };

    const onChangeHandler = (event, identify) => {
        if (identify === 'username') setUsername(event.target.value);
        if (identify === 'password') setPassword(event.target.value);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <div>
            <Dialog
                open={openDailog}
                onClose={handleClose}
                aria-labelledby='form-dialog-title'
                PaperProps={{
                    style: {
                        backgroundColor: '#3949ab',
                        width: '80%'
                    }
                }}
            >
                <DialogTitle id='form-dialog-title' style={{ color: 'white' }}>
                    Login
                </DialogTitle>
                <DialogContent>
                    <div className={classes.formUIMobile}>
                        <Input
                            {...uiState.username}
                            value={usernameState}
                            changed={event =>
                                onChangeHandler(event, 'username')
                            }
                            autoFocus
                            styled={{ marginBottom: '5px' }}
                        />
                        <Input
                            {...uiState.password}
                            value={passwordState}
                            changed={event =>
                                onChangeHandler(event, 'password')
                            }
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        clicked={handleClose}
                        text='Cancel'
                        styled={{ color: 'white' }}
                    />
                    <Button
                        color='secondary'
                        clicked={handleClose}
                        text='Login'
                    />
                </DialogActions>
            </Dialog>
        </div>
    );

    return (
        <div className={classes.grow}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography className={classes.title} variant='h6' noWrap>
                        <img
                            src={FoodLogo}
                            height='60px'
                            alt='Food Logo'
                            style={{ margin: 0, padding: 0 }}
                        />
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <form className={classes.formUI}>
                            <Input
                                {...uiState.username}
                                value={usernameState}
                                changed={event =>
                                    onChangeHandler(event, 'username')
                                }
                                autoFocus
                                styled={{ marginRight: '5px' }}
                            />
                            <Input
                                {...uiState.password}
                                value={passwordState}
                                changed={event =>
                                    onChangeHandler(event, 'password')
                                }
                            />
                            <Button color='inherit' text='Login' />
                        </form>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label='show more'
                            aria-controls={mobileMenuId}
                            aria-haspopup='true'
                            onClick={handleClickOpen}
                            color='inherit'
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}
