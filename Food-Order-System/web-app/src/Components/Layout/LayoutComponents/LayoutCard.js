import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AuthenticationSVG from '../../../Assets/Images/authentication.svg';
import Loginform from './RegisterUI';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '5rem',
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        maxWidth: 345,
        backgroundColor: '#ff1744',
        boxShadow: '5px 6px 7px #ccc',
        zIndex: 100,
        float: 'left'
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },

    avatar: {
        backgroundColor: '#ffffff',
        color: '#000',
        padding: '1rem'
    },
    content: {
        textAlign: 'center',
        color: '#fff'
    },
    login: {
        display: 'inline-block',
        textAlign: 'right',
        width: '100%'
    },
    expense: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: `$expenseEffect 2s ${theme.transitions.easing.easeInOut}`,
        zIndex: 10
    },
    '@keyframes expenseEffect': {
        '0%': {
            transform: 'translate(-90%)'
        },

        '100%': {
            transform: 'translate(0%)'
        }
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label='food'
                                className={classes.avatar}
                            >
                                F
                            </Avatar>
                        }
                    />
                    <CardMedia
                        className={classes.media}
                        image={AuthenticationSVG}
                        title='Authentication'
                    />
                    <CardContent className={classes.content}>
                        <Typography variant='h5' color='inherit' component='p'>
                            Food Order User Authentication
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            aria-label='add to favorites'
                            color='inherit'
                        >
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label='share' color='inherit'>
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>

                <div className={classes.expense}>
                    <Loginform />
                </div>
            </div>
        </React.Fragment>
    );
}
