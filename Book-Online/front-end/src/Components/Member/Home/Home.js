import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Books from './Books/Books';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        cursor: 'pointer',
        userSelect: 'none'
    },
    categoryGrid: {
        marginTop: theme.spacing(1)
    }
}));

function Home() {
    const classes = useStyle();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        style={{ backgroundColor: '#673ab7', color: 'white' }}
                    >
                        Your Books
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        style={{ backgroundColor: '#ffd740' }}
                        onClick={() => {
                            history.push('/Member/Member');
                        }}
                    >
                        Members
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Books />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
