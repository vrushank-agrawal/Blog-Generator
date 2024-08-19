import * as colors from '../utils/colors';

const styles = {
    container: {
        backgroundColor: colors.TextOrange,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50px',
        width: '50%',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    },
    inputText: {
        width: '50%',
        height: '30px',
        fontSize: '15px',
        padding: '5px',
        marginRight: '10px',
        borderRadius: '10px',
        border: 'none',
        paddingLeft: '10px',
        outline: 'none',
    },
    form: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        color: colors.Black,
        fontSize: '15px',
        borderRadius: '10px',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    },
};

export default styles;