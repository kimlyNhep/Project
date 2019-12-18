import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../../../UI/Input/Input';
import Card from '@material-ui/core/Card';
import Button from '../../../UI/Button/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../../../Assets/Icons/googleIcon.png';

const useStyles = makeStyles(them => ({
    card: {
        width: '340px',
        padding: '.7rem',
        boxShadow: '5px 6px 7px #ccc'
    },
    formUI: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    socailUI: {
        width: '80%'
    },
    spacing: {
        marginTop: '1rem'
    }
}));

function RegisterUI() {
    const classes = useStyles();
    const [inputState, setInputState] = useState({
        username: {
            elementType: 'input',
            elementStyle: {
                styleType: 'default',
                inputProps: classes.spacing,
                outlineColor: 'primary'
            },
            elementConfig: {
                valueType: 'text',
                placeholder: 'Username'
            },
            value: ''
        },
        password: {
            elementType: 'input',
            elementStyle: {
                styleType: 'default',
                inputProps: classes.spacing,
                outlineColor: 'primary'
            },
            elementConfig: {
                valueType: 'password',
                placeholder: 'Password'
            },
            value: ''
        }
    });
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
                <Input {...inputState.username} />
                <Input {...inputState.password} />
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
