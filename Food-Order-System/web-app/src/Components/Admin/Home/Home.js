import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotifyRequest from '../NotifyRequest/NotifyRequest';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTag,
    faArrowDown,
    faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,

        cursor: 'pointer',
        '&:hover': {
            boxShadow: '5px 6px 7px #ccc'
        },
        '&:active': {
            boxShadow: 'none'
        }
    },
    Inventory: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.palette.text.secondary,
        backgroundColor: '#FBB719',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '5px 6px 7px #ccc'
        },
        '&:active': {
            boxShadow: 'none'
        }
    },
    InventoryTitle: {
        marginLeft: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        margin: theme.spacing(1)
    },
    paperFooter: {
        margin: theme.spacing(1),
        color: 'blue'
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9)
    },
    title: {
        marginLeft: theme.spacing(1)
    },
    category: {
        margin: theme.spacing(1)
    }
}));

function Home() {
    const classes = useStyles();
    const [category, setCategory] = useState(false);

    const handleInventory = () => {
        setCategory(prev => !prev);
    };

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Add Users</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Add Supplier</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Payments</Paper>
                </Grid>
                <Grid item xs={8}>
                    <NotifyRequest />
                </Grid>
                <Grid item xs={4}>
                    <Paper
                        className={classes.Inventory}
                        onClick={handleInventory}
                    >
                        <div className={classes.InventoryTitle}>
                            <FontAwesomeIcon icon={faTag} />
                            <div className={classes.title}>Inventory</div>
                        </div>
                        {category ? (
                            <FontAwesomeIcon icon={faArrowUp} />
                        ) : (
                            <FontAwesomeIcon icon={faArrowDown} />
                        )}
                    </Paper>
                    <Divider className={classes.divider} />
                    {category ? (
                        <div>
                            <Grid item xs={12} className={classes.category}>
                                <Paper className={classes.paper}>
                                    Breakfast
                                </Paper>
                            </Grid>
                            <Grid item xs={12} className={classes.category}>
                                <Paper className={classes.paper}>Lunch</Paper>
                            </Grid>
                            <Grid item xs={12} className={classes.category}>
                                <Paper className={classes.paper}>Dinner</Paper>
                            </Grid>
                        </div>
                    ) : null}
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
