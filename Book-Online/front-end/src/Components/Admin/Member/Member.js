import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from './Table';

function Member() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Table />
            </Grid>
        </Grid>
    );
}

export default Member;
