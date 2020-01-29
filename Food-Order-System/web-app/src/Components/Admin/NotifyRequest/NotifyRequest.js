import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NotifyItem from './NotifyItem/NotifyItem';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        '&:hover': {
            boxShadow: '5px 6px 7px #ccc'
        },
        '&:active': {
            boxShadow: 'none'
        }
    },
    paperHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actionBox: {
        textAlign: 'right',
        cursor: 'pointer'
    }
}));
function NotifyRequest() {
    const classes = useStyles();
    const [expense, setExpense] = useState(true);

    const handleExpenseOpen = () => {
        setExpense(true);
    };
    const handleExpenseClose = () => {
        setExpense(false);
    };
    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.paperHeader}>
                    <div>Notification</div>
                    <div className={classes.actionBox}>
                        {expense ? (
                            <FontAwesomeIcon
                                icon={faMinus}
                                onClick={handleExpenseClose}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faPlus}
                                onClick={handleExpenseOpen}
                            />
                        )}
                    </div>
                </div>
                {expense ? (
                    <div>
                        <Divider />
                        <NotifyItem />
                    </div>
                ) : null}
            </Paper>
        </div>
    );
}

export default NotifyRequest;
