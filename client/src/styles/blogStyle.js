import * as colors from '../utils/colors';

const styles = {
    container: {
        width: '60%',
        margin: '20px auto',
        textAlign: 'left',
        backgroundColor: colors.LightGray,
        padding: '20px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    },
    date: {
        fontSize: '1rem',
        color: colors.TextOrange,
        marginBottom: '10px',
    },
    textContainer: {
        backgroundColor: colors.LightGray,
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        fontSize: '1.5rem',
    },
    text: {
        fontSize: '1rem',
    },
    buttonContainer: {
        display: 'flex',
        padding: '18px',
        marginTop: '10px',
        alignItems: 'center',
        backgroundColor: colors.LightGray,
    },
    icon: {
        marginRight: '5px',
    },
    iconText: {
        marginLeft: '5px',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    button: {
        color: colors.TextOrange,
        fontSize: '15px',
        borderRadius: '10px',
        border: 'none',
        padding: '10px 20px',
        boxShadow: '0px 1.5px 2px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
    },
    error: {
        textAlign: 'center',
        fontSize: '1.5rem',
        color: colors.TextOrange,
        padding: '20px',
    }
};

export default styles;