import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

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
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        Food Order
                    </Typography>
                    <form className={classes.formUI}>
                        <Input
                            placeholder='Username'
                            inputProps={{ 'aria-label': 'description' }}
                            color='secondary'
                        />
                        <Input
                            placeholder='password'
                            inputProps={{ 'aria-label': 'description' }}
                            color='secondary'
                            type='password'
                        />
                        <Button color='inherit'>Login</Button>
                    </form>
                </Toolbar>
            </AppBar>
        </div>
    );
}
