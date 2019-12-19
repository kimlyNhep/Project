import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../../../Assets/Icons/googleIcon.png';

const useStyles = makeStyles(theme => ({
    formUI: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputUI: {
        width: '80%'
    }
}));

function RegisterUI() {
    const classes = useStyles();
    const [inputState] = useState({
        username: {
            elementType: 'input',
            elementStyle: {
                styleType: 'standard',
                outlineColor: 'primary'
            },
            elementConfig: {
                valueType: 'text',
                placeholder: 'Username'
            }
        },
        password: {
            elementType: 'input',
            elementStyle: {
                styleType: 'standard',
                outlineColor: 'primary'
            },
            elementConfig: {
                valueType: 'password',
                placeholder: 'Password'
            }
        },
        email: {
            elementType: 'input',
            elementStyle: {
                styleType: 'standard',
                outlineColor: 'primary'
            },
            elementConfig: {
                valueType: 'text',
                placeholder: 'Email'
            }
        }
    });
    const [usernameState, setUsername] = useState('');
    const [passwordState, setPassword] = useState('');
    const [emailState, setEmail] = useState('');

    const onChangeHandler = (event, identify) => {
        switch (identify) {
            case 'username':
                return setUsername(event.target.value);
            case 'password':
                return setPassword(event.target.value);
            case 'email':
                return setEmail(event.target.value);
            default:
                return null;
        }
    };

    return (
        <div>
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
                <div className={classes.inputUI}>
                    <Input
                        {...inputState.username}
                        styled={{ width: '100%' }}
                        value={usernameState}
                        changed={event => onChangeHandler(event, 'username')}
                    />
                    <Input
                        {...inputState.password}
                        styled={{ width: '100%' }}
                        value={passwordState}
                        changed={event => onChangeHandler(event, 'password')}
                    />
                    <Input
                        {...inputState.email}
                        styled={{ width: '100%' }}
                        value={emailState}
                        changed={event => onChangeHandler(event, 'email')}
                    />
                </div>
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
        </div>
    );
}

export default RegisterUI;
