import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddPopUp from './AddPopUp';
import CrossIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import EditPopUp from './EditPopUp';
import DeleteAlert from './DeleteAlert';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import PDFUrl from '../../../../Assets/Files/sample.pdf';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        cursor: 'text'
    },
    gridList: {
        width: '100%',
        height: 450
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)'
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    actionTool: {
        color: 'rgba(255, 255, 255, 0.54)',
        width: '100%',
        cursor: 'pointer'
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#bdbdbd',
        '&:hover': {
            backgroundColor: '#e0e0e0'
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        marginBottom: theme.spacing(1),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    }
}));

function Books() {
    const classes = useStyles();

    const [bookData, setBookData] = React.useState([
        {
            img:
                'https://images.unsplash.com/photo-1580151820157-3f924ce005f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
            title: 'Harry Poter',
            pages: 700,
            author: 'J.K Rolling',
            genre: 'drama',
            owner: 'kimly',
            source: PDFUrl
        },
        {
            img:
                'https://images.unsplash.com/photo-1580093969189-38893b9de487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
            title: 'Image',
            author: 'author'
        },
        {
            img:
                'https://images.unsplash.com/photo-1569289555688-dcc8113f68ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
            title: 'Image',
            author: 'author'
        },
        {
            img:
                'https://images.unsplash.com/photo-1569077218751-3e3de7800c00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
            title: 'Image',
            author: 'author'
        },
        {
            img:
                'https://images.unsplash.com/photo-1569132030134-7da0045b755b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
            title: 'Image',
            author: 'author'
        },
        {
            img:
                'https://images.unsplash.com/photo-1568288192047-cf22326a2c3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
            title: 'Image',
            author: 'author'
        }
    ]);

    const [Open, setOpen] = React.useState(false);
    const [OpenEdit, setOpenEdit] = React.useState(false);
    const [selected, setSelected] = React.useState();
    const [deleteAlert, setDeleteAlert] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
    const [displayData, setDisplayData] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenEdit = oldBook => {
        setSelected(oldBook);
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleOpenPDF = source => {
        console.log(source);
        window.open(source);
    };

    const handleOpenDeleteAlert = () => {
        setDeleteAlert(true);
    };

    const handleCloseDeleteAlert = () => {
        setDeleteAlert(false);
    };

    const handleSearch = event => {
        setSearchText(event.target.value);
        const newOwner = bookData.filter(
            owner =>
                owner.title
                    .toLocaleLowerCase()
                    .includes(event.target.value.toLocaleLowerCase()) ||
                owner.author
                    .toLocaleLowerCase()
                    .includes(event.target.value.toLocaleLowerCase())
        );
        setDisplayData([...newOwner]);
        console.log('newOwner', newOwner);
    };

    useEffect(() => {
        setDisplayData([...bookData]);
        console.log('OwnerList', bookData);
    }, [bookData]);

    useEffect(() => {
        console.log('display', displayData);
    }, [displayData]);
    return (
        <div className={classes.root}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder='Search…'
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchText}
                    onChange={event => handleSearch(event)}
                />
            </div>
            <GridList cellHeight={180} cols={5} className={classes.gridList}>
                <GridListTile
                    key='Subheader'
                    cols={1}
                    style={{ height: 'auto' }}
                >
                    <ListSubheader component='div'>Books Library</ListSubheader>
                    <IconButton onClick={handleClickOpen}>
                        <AddIcon />
                    </IconButton>
                </GridListTile>
                {displayData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <CrossIcon />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <Button
                                    aria-label={`info about ${tile.title}`}
                                    className={classes.icon}
                                    color='secondary'
                                    onClick={event =>
                                        handleOpenPDF(tile.source)
                                    }
                                >
                                    Read
                                </Button>
                            }
                        />
                        <GridListTileBar
                            titlePosition='top'
                            className={classes.titleBar}
                            actionIcon={
                                <div
                                    className={classes.actionTool}
                                    onClick={handleOpenDeleteAlert}
                                >
                                    <CrossIcon />
                                </div>
                            }
                        />
                        <GridListTileBar
                            titlePosition='top'
                            style={{
                                width: '50%',
                                background: 'transparent'
                            }}
                            actionIcon={
                                <div
                                    className={classes.actionTool}
                                    onClick={event => handleOpenEdit(tile)}
                                >
                                    <EditIcon />
                                </div>
                            }
                            actionPosition='left'
                        />
                    </GridListTile>
                ))}
            </GridList>
            <AddPopUp open={Open} handleClose={handleClose} />
            {OpenEdit && (
                <EditPopUp
                    open={OpenEdit}
                    handleClose={handleCloseEdit}
                    oldBook={selected}
                />
            )}
            {deleteAlert && (
                <DeleteAlert
                    open={deleteAlert}
                    handleClose={handleCloseDeleteAlert}
                />
            )}
        </div>
    );
}

export default Books;
