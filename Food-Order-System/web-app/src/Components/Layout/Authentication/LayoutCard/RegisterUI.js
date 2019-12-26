import React, { useState } from 'react';
import Input from '../../../../UI/Input/Input';
import Button from '../../../../UI/Button/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Card, CardContent, CardActions, Grid } from '@material-ui/core';

function RegisterUI() {
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
                valueType: 'password',
                placeholder: 'Confirm Password'
            }
        }
    });
    const [usernameState, setUsername] = useState('');
    const [passwordState, setPassword] = useState('');
    const [conPassState, setConPass] = useState('');

    const onChangeHandler = (event, identify) => {
        switch (identify) {
            case 'username':
                return setUsername(event.target.value);
            case 'password':
                return setPassword(event.target.value);
            case 'confirmPassword':
                return setConPass(event.target.value);
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
            <Card>
                <CardContent>
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
                        value={conPassState}
                        changed={event =>
                            onChangeHandler(event, 'confirmPassword')
                        }
                    />
                </CardContent>
                <CardActions>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                text='Facebook'
                                icon={<FacebookIcon />}
                                color='primary'
                                styled={{ width: '80%' }}
                            />
                            <Button
                                variant='contained'
                                text='Gmail'
                                icon={<FontAwesomeIcon icon={faGoogle} />}
                                styled={{ width: '80%' }}
                            />
                            <Button
                                text='Sign In'
                                color='primary'
                                variant='contained'
                            />
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
}

export default RegisterUI;
