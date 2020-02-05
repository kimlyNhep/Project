import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Books from './Books/Books';
import { useHistory } from 'react-router-dom';
import ApprovedList from './ApproveList/Approve';

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
    },
    bookList: {
        display: 'flex',
        justifyContent: 'center'
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
                        Administrators
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper
                        className={classes.paper}
                        style={{ backgroundColor: '#ffd740' }}
                        onClick={() => {
                            history.push('/Admin/Member');
                        }}
                    >
                        Members
                    </Paper>
                </Grid>
                <Grid item xs={12} className={classes.bookList}>
                    <Books />
                </Grid>
                <Grid item xs={12}>
                    <ApprovedList />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
