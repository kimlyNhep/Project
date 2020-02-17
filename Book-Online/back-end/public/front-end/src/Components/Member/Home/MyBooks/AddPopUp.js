import React, { useEffect } from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Button from './node_modules/@material-ui/core/Button';
import TextField from './node_modules/@material-ui/core/TextField';
import Dialog from './node_modules/@material-ui/core/Dialog';
import DialogActions from './node_modules/@material-ui/core/DialogActions';
import DialogContent from './node_modules/@material-ui/core/DialogContent';
import DialogContentText from './node_modules/@material-ui/core/DialogContentText';
import DialogTitle from './node_modules/@material-ui/core/DialogTitle';
import FormControl from './node_modules/@material-ui/core/FormControl';
import Select from './node_modules/@material-ui/core/Select';
import InputLabel from './node_modules/@material-ui/core/InputLabel';
import MenuItem from './node_modules/@material-ui/core/MenuItem';
import Grid from './node_modules/@material-ui/core/Grid';
import IconButton from './node_modules/@material-ui/core/IconButton';
import PhotoCamera from './node_modules/@material-ui/icons/PhotoCamera';
import AttachFile from './node_modules/@material-ui/icons/AttachFile';
import Paper from './node_modules/@material-ui/core/Paper';
import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome';
import { faBook } from './node_modules/@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    paper: {
        width: 180,
        height: 210,
        marginBottom: theme.spacing(1)
    },
    hide: {
        display: 'none'
    },
    preview: {
        width: 180,
        height: 210
    }
}));

function AddPopUp(props) {
    const classes = useStyles();
    const [owner, setOwner] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [selectedFile, setSelectedFile] = React.useState();
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState();

    const [selectedAttachFile, setSelectedAttachFile] = React.useState();

    const handleGenreChange = event => {
        setGenre(event.target.value);
    };

    const handleOwnerChange = event => {
        setOwner(event.target.value);
    };

    const handlePreview = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(event.target.files[0]);
    };

    const handleAttachFile = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedAttachFile(undefined);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedAttachFile(event.target.files[0]);
    };

    useEffect(() => {
        if (!selectedFile) {
            setImagePreviewUrl(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setImagePreviewUrl(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    useEffect(() => {
        if (!selectedAttachFile) {
            setSelectedAttachFile(undefined);
            return;
        }

        console.log(selectedAttachFile);
    }, [selectedAttachFile]);

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby='form-dialog-title'
            >
                <DialogTitle id='form-dialog-title'>
                    Add <FontAwesomeIcon icon={faBook} />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <TextField
                                autoFocus
                                margin='dense'
                                id='title'
                                label='Title'
                                type='text'
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='pages'
                                label='Number of Pages'
                                type='number'
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin='dense'
                                id='author'
                                label='Author'
                                type='text'
                                fullWidth
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel id='select-genre-label'>
                                    Genre
                                </InputLabel>
                                <Select
                                    labelId='select-genre-label'
                                    id='select-genre'
                                    value={genre}
                                    onChange={handleGenreChange}
                                >
                                    <MenuItem value={10}>Drama</MenuItem>
                                    <MenuItem value={20}>Advanture</MenuItem>
                                    <MenuItem value={30}>Comedy</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id='demo-simple-select-label'>
                                    Owner
                                </InputLabel>
                                <Select
                                    labelId='demo-simple-select-label'
                                    id='demo-simple-select'
                                    value={owner}
                                    onChange={handleOwnerChange}
                                >
                                    <MenuItem value={10}>Kimly</MenuItem>
                                    <MenuItem value={20}>Rotha</MenuItem>
                                    <MenuItem value={30}>Chetha</MenuItem>
                                </Select>
                            </FormControl>
                            {selectedAttachFile && (
                                <TextField
                                    id='file'
                                    type='text'
                                    fullWidth
                                    value={selectedAttachFile.name}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                    variant='outlined'
                                />
                            )}
                        </Grid>
                        <Grid item xs={4}>
                            <Paper variant='outlined' className={classes.paper}>
                                {selectedFile && (
                                    <img
                                        id='preview'
                                        alt='profile'
                                        src={imagePreviewUrl}
                                        className={classes.preview}
                                    />
                                )}
                            </Paper>
                            <input
                                accept='image/*'
                                className={classes.hide}
                                id='contained-button-file'
                                multiple
                                type='file'
                                onChange={handlePreview}
                            />
                            <label htmlFor='contained-button-file'>
                                <IconButton
                                    color='primary'
                                    aria-label='upload picture'
                                    component='span'
                                >
                                    <PhotoCamera />
                                </IconButton>
                            </label>

                            <input
                                accept='application/pdf'
                                className={classes.hide}
                                id='contained-button-attachfile'
                                multiple
                                type='file'
                                onChange={handleAttachFile}
                            />
                            <label htmlFor='contained-button-attachfile'>
                                <IconButton
                                    color='primary'
                                    aria-label='attach file'
                                    component='span'
                                >
                                    <AttachFile />
                                </IconButton>
                            </label>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={props.handleClose} color='primary'>
                        Added
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddPopUp;
