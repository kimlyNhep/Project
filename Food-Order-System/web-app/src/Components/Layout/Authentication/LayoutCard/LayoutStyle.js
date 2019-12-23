import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    layout: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '1.6rem'
    },
    card: {
        backgroundColor: '#e22960',
        boxShadow: '5px 6px 7px #ccc',
        userSelect: 'none',
        maxWidth: '380px'
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
    '@media (max-width: 600px)': {
        layout: {
            display: 'flex',
            justifyContent: 'center'
        },
        card: {
            maxWidth: '300px'
        }
    },
    '@media (max-width: 768px)': {
        card: {
            maxWidth: '350px'
        }
    }
}));
