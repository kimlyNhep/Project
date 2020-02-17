import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles(theme => ({
    preview: {
        width: 180,
        height: 260
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
                            <img
                                src=''
                                alt='Profile'
                                className={classes.preview}
                            />
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