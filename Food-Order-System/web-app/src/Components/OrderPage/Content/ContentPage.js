import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FoodList from './FoodList/FoodList';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1rem'
    }
}));

function ContentPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FoodList />
        </div>
    );
}

export default ContentPage;
