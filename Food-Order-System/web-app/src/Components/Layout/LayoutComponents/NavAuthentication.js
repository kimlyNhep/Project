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
            color: 'white'
        },
        color: 'white'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [state, setState] = useState({
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
            },
            value: ''
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
            },
            value: ''
        }
    });
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        Food Order
                    </Typography>
                    <form className={classes.formUI}>
                        <Input {...state.username} />
                        <Input {...state.password} />
                        <Button color='inherit'>Login</Button>
                    </form>
                </Toolbar>
            </AppBar>
        </div>
    );
}
