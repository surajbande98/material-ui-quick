import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },

    icon: {
        marginRight: '20px'
    },

    buttons: {
        marginTop: '40px',
    },

    button1: {
        margin: '0 4px'
    },

    cardGrid: {
        padding: '20px 0'
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },

    cardContent: {
        flexGrow: 1
    },

    cardMedia: {
        paddingTop: '56.25%`'
    },

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles;