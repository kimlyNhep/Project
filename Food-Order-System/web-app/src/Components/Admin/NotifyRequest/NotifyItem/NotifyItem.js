import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '../../../../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',

        backgroundColor: theme.palette.background.paper
    },
    ListItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

export default function CheckboxList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {[0, 1, 2, 3].map(value => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        role={undefined}
                        dense
                        className={classes.ListItem}
                    >
                        <ListItemAvatar>
                            <Avatar
                                alt={`Avatar n°${value + 1}`}
                                src={`/static/images/avatar/${value + 1}.jpg`}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            id={labelId}
                            primary={`Line item ${value + 1}`}
                        />
                        <ListItemIcon className={classes.ListTool}>
                            <Button
                                text='Approved'
                                variant='contained'
                                styled={{ backgroundColor: '#28AE5E' }}
                            />
                            <IconButton>
                                <FontAwesomeIcon icon={faTrash} />
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                );
            })}
        </List>
    );
}
