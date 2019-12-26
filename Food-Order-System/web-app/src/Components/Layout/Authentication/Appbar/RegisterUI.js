import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../../../../UI/Input/Input';
import Button from '../../../../UI/Button/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
    formUI: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '.5rem',
        marginTop: '2%',
        paddingTop: '2%',
        paddingBottom: '2%'
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
        confirmPassword: {
            elementType: 'input',
            elementStyle: {
                styleType: 'standard',
                outlineColor: 'primary'
            },
            elementConfig: {
                valueType: 'text',
                placeholder: 'Confirm Password'
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
                    fontWeight: 'bold',
                    marginBottom: '5%'
                }}
            >
                Register
            </p>
            <form className={classes.formUI}>
                <div className={classes.inputUI}>
                    <Input
                        {...inputState.username}
                        styled={{ width: '100%', cursor: 'text' }}
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
                        {...inputState.confirmPassword}
                        styled={{ width: '100%' }}
                        value={emailState}
                        changed={event =>
                            onChangeHandler(event, 'confirmPassword')
                        }
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
                        variant='contained'
                        text='Facebook'
                        icon={<FacebookIcon />}
                        color='primary'
                    />
                    <Button
                        variant='contained'
                        text='Gmail'
                        icon={<FontAwesomeIcon icon={faGoogle} />}
                    />
                </div>
                <Button text='Sign In' color='primary' variant='contained' />
            </form>
        </div>
    );
}

export default RegisterUI;
