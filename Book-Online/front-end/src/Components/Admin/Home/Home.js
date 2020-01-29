import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from './Table/Table';
import RequestTable from './RequestTable/RequestTable';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
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
    const [openCollapse, setOpenCollapse] = useState(true);

    const handleClick = () => {
        setOpenCollapse(!openCollapse);
    };

    const history = useHistory();
    return (
        <div>
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
                <Grid container xs={10} spacing={2}>
                    <Grid item xs={12}>
                        <Table />
                    </Grid>
                    <Grid item xs={12}>
                        <RequestTable />
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Grid item xs={12} style={{ flexBasis: '0' }}>
                        <Paper
                            className={classes.paper}
                            style={{ backgroundColor: '#4db6ac' }}
                        >
                            <ListItem onClick={handleClick}>
                                <ListItemText primary='Category' />
                                {openCollapse ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                        </Paper>
                    </Grid>
                    <Collapse in={openCollapse} timeout='auto' unmountOnExit>
                        <Grid container xs={12}>
                            <Grid item xs={12} className={classes.categoryGrid}>
                                <Paper
                                    className={classes.paper}
                                    style={{ backgroundColor: '#b2dfdb' }}
                                >
                                    Advanture
                                </Paper>
                            </Grid>
                            <Grid item xs={12} className={classes.categoryGrid}>
                                <Paper
                                    className={classes.paper}
                                    style={{ backgroundColor: '#b2dfdb' }}
                                >
                                    Magic
                                </Paper>
                            </Grid>
                            <Grid item xs={12} className={classes.categoryGrid}>
                                <Paper
                                    className={classes.paper}
                                    style={{ backgroundColor: '#b2dfdb' }}
                                >
                                    Love
                                </Paper>
                            </Grid>
                        </Grid>
                    </Collapse>
                </Grid>

                <Grid item xs={8}></Grid>
            </Grid>
        </div>
    );
}

export default Home;
