import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InfoIcon from '@material-ui/icons/Info';
import DetailBook from './DetailItem';
import withWidth from '@material-ui/core/withWidth';
import Paper from '@material-ui/core/Paper';
import BooksList from './BooksList/BooksList';

import PDFUrl from '../../../../Assets/Files/sample.pdf';
import BookImage from '../../../../Assets/Images/halt-blood-prince.jpg';

const useStyles = makeStyles(theme => ({
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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        cursor: 'pointer',
        userSelect: 'none'
    }
}));

function Books(props) {
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
    const [viewBook, setViewBook] = React.useState(false);
    const [selectedBook, setSelectedBook] = React.useState();

    const handleViewBook = book => {
        setViewBook(true);
        setSelectedBook(book);
    };

    const handleCloseViewBook = () => {
        setViewBook(false);
        setSelectedBook(null);
    };

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
    };

    useEffect(() => {
        setDisplayData([...bookData]);
    }, [bookData]);

    return (
        <Paper className={classes.paper}>
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

            <BooksList books={displayData} />

            {viewBook && (
                <DetailBook
                    open={viewBook}
                    handleClose={handleCloseViewBook}
                    item={selectedBook}
                />
            )}
        </Paper>
    );
}

export default withWidth()(Books);
