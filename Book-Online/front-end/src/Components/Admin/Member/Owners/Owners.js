import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import AddPopUp from './AddPopUp';
import CrossIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InfoIcon from '@material-ui/icons/Info';
import DetailMember from './DetailItem';

let breakpoints = 5;

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
        height: 740
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
    },
    preview: {}
}));

function Owners() {
    const classes = useStyles();
    const theme = useTheme();

    const [Open, setOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
    const [viewProfile, setViewProfile] = React.useState(false);
    const [selectedProfile, setSelectedProfile] = React.useState();
    const [ownerList, setOwner] = React.useState([
        {
            img:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Harry Poter'
        },
        {
            img:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Taylor'
        },
        {
            img:
                'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Chris'
        },
        {
            img:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Berly'
        },
        {
            img:
                'https://images.unsplash.com/photo-1525450280520-7d542a86e065?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'John'
        },
        {
            img:
                'https://images.unsplash.com/photo-1540174401473-df5f1c06c716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
            name: 'Bean'
        }
    ]);
    const [displayData, setDisplayData] = React.useState([]);

    const handleViewProfile = profile => {
        setViewProfile(true);
        setSelectedProfile(profile);
    };

    const handleCloseViewProfile = () => {
        setViewProfile(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearch = event => {
        setSearchText(event.target.value);
        const newOwner = ownerList.filter(owner =>
            owner.name
                .toLocaleLowerCase()
                .includes(event.target.value.toLocaleLowerCase())
        );
        setDisplayData([...newOwner]);
        console.log('newOwner', newOwner);
    };

    useEffect(() => {
        setDisplayData([...ownerList]);
        console.log('OwnerList', ownerList);
    }, [ownerList]);

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
            <GridList
                cellHeight={180}
                cols={breakpoints}
                className={classes.gridList}
            >
                <GridListTile
                    key='Subheader'
                    cols={1}
                    style={{ height: 'auto' }}
                >
                    <ListSubheader component='div'>Members</ListSubheader>
                    <IconButton onClick={handleClickOpen}>
                        <AddIcon />
                    </IconButton>
                </GridListTile>
                {displayData.map(tile => (
                    <GridListTile key={tile.img} rows={2}>
                        <img src={tile.img} alt={tile.name} />
                        <GridListTileBar title={tile.name} />
                        <GridListTileBar
                            titlePosition='top'
                            className={classes.titleBar}
                            onClick={() => handleViewProfile(tile)}
                            actionIcon={
                                <div className={classes.actionTool}>
                                    <InfoIcon />
                                </div>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            <AddPopUp open={Open} handleClose={handleClose} />
            {viewProfile && (
                <DetailMember
                    open={viewProfile}
                    handleClose={handleCloseViewProfile}
                    item={selectedProfile}
                />
            )}
        </div>
    );
}

export default Owners;
