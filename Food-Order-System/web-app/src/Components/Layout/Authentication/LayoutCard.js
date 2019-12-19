import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AuthenticationSVG from '../../../Assets/Images/authentication.svg';
import Loginform from './RegisterUI';
import './LayoutCard.css';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '5rem',
        display: 'flex',
        justifyContent: 'center'
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
    }
}));

function CustomCard() {
    const classes = useStyles();
    const CardRef = useRef(null);

    const transition = () => {
        if (CardRef.current.classList.contains('active')) {
            CardRef.current.classList.remove('active');
        } else {
            CardRef.current.classList.add('active');
        }
    };

    return (
        <div className='cardContainer'>
            <div className='card' onClick={transition} ref={CardRef}>
                <Card className='side front'>
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
                        <div aria-label='add to favorites' color='inherit'>
                            <FavoriteIcon />
                        </div>
                        <div aria-label='share' color='inherit'>
                            <ShareIcon />
                        </div>
                    </CardActions>
                </Card>

                <div className='side back'>
                    <div className='info'>
                        <Loginform />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomCard;
