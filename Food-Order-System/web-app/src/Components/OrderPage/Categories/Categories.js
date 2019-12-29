import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '85vh'
    },
    modal: {
        padding: '1rem'
    },
    menuButton: {
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '1rem',
        borderBottom: '1px solid black'
    },
    menuIcon: {
        marginRight: theme.spacing(1)
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component='div'
            role='tabpanel'
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

function Categories() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid item xs={12}>
            <Paper className={classes.modal}>
                <div className={classes.menuButton}>All Categories</div>
                <div className={classes.root}>
                    <Tabs
                        orientation='vertical'
                        variant='scrollable'
                        value={value}
                        onChange={handleChange}
                        aria-label='Vertical tabs example'
                        className={classes.tabs}
                    >
                        <Tab label='Item One' {...a11yProps(0)} />
                        <Tab label='Item Two' {...a11yProps(1)} />
                        <Tab label='Item Three' {...a11yProps(2)} />
                        <Tab label='Item Four' {...a11yProps(3)} />
                        <Tab label='Item Five' {...a11yProps(4)} />
                        <Tab label='Item Six' {...a11yProps(5)} />
                        <Tab label='Item Seven' {...a11yProps(6)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        Item One One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </div>
            </Paper>
        </Grid>
    );
}

export default Categories;

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};
