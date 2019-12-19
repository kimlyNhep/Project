import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '../../../UI/Input/Input';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    formUI: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    input: {
        '&::placeholder': {
            color: 'gray'
        },
        color: 'black',
        background: 'white',
        paddingLeft: '.5rem'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
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

    const [usernameState, setUsername] = useState('');
    const [passwordState, setPassword] = useState('');
    const onChangeHandler = (event, identify) => {
        if (identify === 'username') setUsername(event.target.value);
        if (identify === 'password') setPassword(event.target.value);
    };

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        Food Order
                    </Typography>
                    <form className={classes.formUI}>
                        <Input
                            {...uiState.username}
                            value={usernameState}
                            changed={event =>
                                onChangeHandler(event, 'username')
                            }
                            autoFocus
                        />
                        <Input
                            {...uiState.password}
                            value={passwordState}
                            changed={event =>
                                onChangeHandler(event, 'password')
                            }
                        />
                        <Button color='inherit'>Login</Button>
                    </form>
                </Toolbar>
            </AppBar>
        </div>
    );
}
