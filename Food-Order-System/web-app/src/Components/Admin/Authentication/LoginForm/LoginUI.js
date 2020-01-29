import React, { useState } from 'react';
import Input from '../../../../UI/Input/Input';
import Button from '../../../../UI/Button/Button';
import { Card, CardContent, CardActions, Grid } from '@material-ui/core';
import axios from 'axios';

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
        }
    });
    const [usernameState, setUsername] = useState('');
    const [passwordState, setPassword] = useState('');

    const onChangeHandler = (event, identify) => {
        switch (identify) {
            case 'username':
                return setUsername(event.target.value);
            case 'password':
                return setPassword(event.target.value);

            default:
                return null;
        }
    };

    const HandleLogin = () => {
        axios
<<<<<<< HEAD
            .post('http://localhost:8000/api/login', {
=======
            .post('/api/login', {
>>>>>>> a9c888d1715ce89942a01a03d24b22ae19c2fa6c
                email: usernameState,
                password: passwordState
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
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
                Login
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
                </CardContent>
                <CardActions>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button
                                text='Login'
                                color='primary'
                                variant='contained'
                                clicked={HandleLogin}
                            />
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
}

export default RegisterUI;
