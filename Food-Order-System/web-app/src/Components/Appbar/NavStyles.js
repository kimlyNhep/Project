import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'block'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    formUI: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    formUIMobile: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        color: 'black !important',
        backgroundColor: 'white !important',
        paddingLeft: '.5rem !important'
    }
}));
