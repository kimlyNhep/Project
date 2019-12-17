import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../../../UI/Input/Input';
import Card from '@material-ui/core/Card';
import Button from '../../../UI/Button/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../../../Assets/Icons/googleIcon.png';

const useStyles = makeStyles(them => ({
    card: {
        width: '340px',
        padding: '1rem',
        boxShadow: '5px 6px 7px #ccc'
    },
    formUI: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
    },

    socailUI: {
        width: '80%'
    }
}));

function RegisterUI() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <p
                style={{
                    textAlign: 'center',
                    fontFamily: 'Yeon Sung',
                    fontSize: '30px',
                    fontWeight: 'bold'
                }}
            >
                Register
            </p>
            <form className={classes.formUI}>
                <Input title='Username' required styled={{ width: '80%' }} />
                <Input
                    title='Password'
                    type='password'
                    required
                    styled={{ width: '80%' }}
                />
                <Input
                    title='Email'
                    type='text'
                    required
                    styled={{ width: '80%' }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '1rem'
                    }}
                >
                    <Button
                        text='Facebook'
                        icon={<FacebookIcon />}
                        color='primary'
                    />
                    <Button
                        text='Gmail'
                        icon={<img src={GoogleIcon} width='20px' alt='Gmail' />}
                    />
                </div>
                <Button text='Sign In' color='primary' />
            </form>
        </Card>
    );
}

export default RegisterUI;
