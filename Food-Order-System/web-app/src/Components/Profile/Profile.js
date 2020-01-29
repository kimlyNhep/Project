import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Divider, ListItemIcon, Button, TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Kanao from '../../Assets/Images/kanao.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    profile: {
        display: 'flex',
        flexDirection: 'column'
    },
    Paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        border: '1px solid grey',
        margin: theme.spacing(1)
    },
    EditTool: {
        cursor: 'pointer'
    },
    avatar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));
function Profile() {
    const classes = useStyles();
    const [editName, setEditName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editUsername, setEditUsername] = useState(false);

    const [Firstname, setFirstname] = useState('Kimly');
    const [Lastname, setLastname] = useState('Nhep');
    const [Username, setUsername] = useState('Kimly0168');
    const [Email, setEmail] = useState('kimly@gmail.com ');

    const handleEditNameOpen = () => {
        setEditName(true);
    };
    const handleEditNameClose = () => {
        setEditName(false);
    };

    const handleEditEmailOpen = () => {
        setEditEmail(true);
    };
    const handleEditEmailClose = () => {
        setEditEmail(false);
    };

    const handleEditUsernameOpen = () => {
        setEditUsername(true);
    };
    const handleEditUsernameClose = () => {
        setEditUsername(false);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.profile}>
                <Grid item xs={6}>
                    <Paper className={classes.Paper}>
                        <div className={classes.avatar}>
                            <Avatar
                                src={Kanao}
                                alt='Profile'
                                className={classes.large}
                            />
                            <h2>Kimly Nhep</h2>
                            <div>Administrator</div>
                        </div>
                        <Divider />
                        <Button>Message</Button>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.Paper}>
                        About Me
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemText primary='Name' />
                                {editName ? (
                                    <ListItemText>
                                        <Paper
                                            className={classes.Paper}
                                            style={{
                                                backgroundColor: '#e0e0e0'
                                            }}
                                        >
                                            <List>
                                                <ListItem>
                                                    <ListItemText primary='First' />
                                                    <TextField
                                                        defaultValue={Firstname}
                                                        value={Firstname}
                                                        autoFocus
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText primary='Last' />
                                                    <TextField
                                                        value={Lastname}
                                                    />
                                                </ListItem>
                                                <ListItemIcon>
                                                    <Button>Save</Button>
                                                    <Button
                                                        onClick={
                                                            handleEditNameClose
                                                        }
                                                    >
                                                        Cancel
                                                    </Button>
                                                </ListItemIcon>
                                            </List>
                                        </Paper>
                                    </ListItemText>
                                ) : (
                                    <>
                                        <ListItemText
                                            primary={Firstname + ' ' + Lastname}
                                        />
                                        <ListItemIcon
                                            className={classes.EditTool}
                                        >
                                            <FontAwesomeIcon
                                                icon={faEdit}
                                                onClick={handleEditNameOpen}
                                            />
                                        </ListItemIcon>
                                    </>
                                )}
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Username' />
                                {editUsername ? (
                                    <ListItemText>
                                        <Paper
                                            className={classes.Paper}
                                            style={{
                                                backgroundColor: '#e0e0e0'
                                            }}
                                        >
                                            <List>
                                                <ListItem>
                                                    <TextField
                                                        value={Username}
                                                    />
                                                </ListItem>
                                                <ListItemIcon>
                                                    <Button>Save</Button>
                                                    <Button
                                                        onClick={
                                                            handleEditUsernameClose
                                                        }
                                                    >
                                                        Cancel
                                                    </Button>
                                                </ListItemIcon>
                                            </List>
                                        </Paper>
                                    </ListItemText>
                                ) : (
                                    <>
                                        <ListItemText primary={Username} />
                                        <ListItemIcon
                                            className={classes.EditTool}
                                        >
                                            <FontAwesomeIcon
                                                icon={faEdit}
                                                onClick={handleEditUsernameOpen}
                                            />
                                        </ListItemIcon>
                                    </>
                                )}
                            </ListItem>
                            <ListItem>
                                <ListItemText primary='Email' />
                                {editEmail ? (
                                    <ListItemText>
                                        <Paper
                                            className={classes.Paper}
                                            style={{
                                                backgroundColor: '#e0e0e0'
                                            }}
                                        >
                                            <List>
                                                <ListItem>
                                                    <TextField value={Email} />
                                                </ListItem>
                                                <ListItemIcon>
                                                    <Button>Save</Button>
                                                    <Button
                                                        onClick={
                                                            handleEditEmailClose
                                                        }
                                                    >
                                                        Cancel
                                                    </Button>
                                                </ListItemIcon>
                                            </List>
                                        </Paper>
                                    </ListItemText>
                                ) : (
                                    <>
                                        <ListItemText primary={Email} />
                                        <ListItemIcon
                                            className={classes.EditTool}
                                        >
                                            <FontAwesomeIcon
                                                icon={faEdit}
                                                onClick={handleEditEmailOpen}
                                            />
                                        </ListItemIcon>
                                    </>
                                )}
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;
