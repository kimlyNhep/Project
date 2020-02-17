import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Button from './node_modules/@material-ui/core/Button';
import Dialog from './node_modules/@material-ui/core/Dialog';
import DialogActions from './node_modules/@material-ui/core/DialogActions';
import DialogContent from './node_modules/@material-ui/core/DialogContent';
import DialogTitle from './node_modules/@material-ui/core/DialogTitle';
import Grid from './node_modules/@material-ui/core/Grid';
import TextField from './node_modules/@material-ui/core/TextField';
import GridListTile from './node_modules/@material-ui/core/GridListTile';
import GridList from './node_modules/@material-ui/core/GridList';

const useStyle = makeStyles(theme => ({
    preview: {
        width: 180,
        height: 260
    },
    gridList: {
        width: '100%',
        height: 260,
        display: 'flex',
        alignItems: 'center'
    }
}));

export default function DetailItem(props) {
    const classes = useStyle();

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>{'Detail'}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <GridList
                                cellHeight={180}
                                cols={1}
                                className={classes.gridList}
                            >
                                <GridListTile key={props.item.img}>
                                    <img
                                        src={props.item.img}
                                        alt={props.item.name}
                                    />
                                </GridListTile>
                            </GridList>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                autoFocus
                                margin='dense'
                                id='title'
                                label='Title'
                                type='text'
                                fullWidth
                                value={props.item.title}
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='pages'
                                label='Number of Pages'
                                type='number'
                                fullWidth
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='author'
                                label='Author'
                                type='text'
                                fullWidth
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='genre'
                                label='Genre'
                                type='text'
                                fullWidth
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='owner'
                                label='Owner'
                                type='text'
                                fullWidth
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color='primary'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
