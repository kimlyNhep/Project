import React from 'react';
import { useStyles } from './LayoutStyle';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import RegisterForm from './RegisterUI';
import FoodCover from '../../../../Assets/Images/Food-cover.jpg';

function LayoutCard() {
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label='food' className={classes.avatar}>
                            F
                        </Avatar>
                    }
                    title='Food Order System'
                    subheader='Seller'
                />
                <CardMedia
                    className={classes.media}
                    image={FoodCover}
                    title='Paella dish'
                    style={{ paddingLeft: '200px !important' }}
                />
                <CardContent className={classes.content}>
                    <RegisterForm />
                </CardContent>
            </Card>
        </div>
    );
}

export default LayoutCard;
