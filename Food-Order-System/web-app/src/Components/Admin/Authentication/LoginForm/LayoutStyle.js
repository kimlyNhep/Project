import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    layout: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '2.6rem'
    },
    card: {
        backgroundColor: '#e22960',
        boxShadow: '5px 6px 7px #ccc',
        userSelect: 'none',
        maxWidth: '380px',
        width: '380px',
        [theme.breakpoints.down('sm')]: {
            boxShadow: 'none'
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    avatar: {
        backgroundColor: '#fff !important',
        color: '#000 !important',
        padding: '1rem'
    },
    content: {
        textAlign: 'center',
        color: '#fff'
    },
    [theme.breakpoints.down('sm')]: {
        card: {
            width: '350px'
        }
    },
    [theme.breakpoints.down('xs')]: {
        layout: {
            display: 'flex',
            justifyContent: 'center',
            padding: 0
        },
        card: {
            width: '300px'
        }
    }
}));
