import * as colors from '../utils/colors';

const styles = {
    loadingScreen: {
      backgroundColor: colors.Black,
      opacity: '0.9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '96vw',
      padding: '20px',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '1',
    },
    text: {
      color: colors.White,
      fontSize: '24px',
    //   opacity: '1',
      fontWeight: 'bold',
    },
};

export default styles;