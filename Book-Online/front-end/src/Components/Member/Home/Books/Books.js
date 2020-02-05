import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import CrossIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InfoIcon from '@material-ui/icons/Info';

import PDFUrl from '../../../../Assets/Files/sample.pdf';
import BookImage from '../../../../Assets/Images/Harry_Potter.jpg';

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
    }
}));

function Books() {
    const classes = useStyles();

    const [bookData, setBookData] = React.useState([
        {
            img: BookImage,
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

    const [searchText, setSearchText] = React.useState('');
    const [displayData, setDisplayData] = React.useState([]);

    const handleOpenPDF = source => {
        console.log(source);
        window.open(source);
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
                {displayData.map(tile => (
                    <GridListTile key={tile.img} rows={2}>
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
                                    onClick={() => handleOpenPDF(tile.source)}
                                >
                                    Read
                                </Button>
                            }
                        />
                        <GridListTileBar
                            titlePosition='top'
                            className={classes.titleBar}
                            actionIcon={
                                <div className={classes.actionTool}>
                                    <InfoIcon />
                                </div>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default Books;
