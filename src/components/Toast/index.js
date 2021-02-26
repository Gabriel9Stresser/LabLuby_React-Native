import Toast from 'react-native-tiny-toast';

export const toastError = (msg) =>
  Toast.show(msg, {
    position: Toast.position.TOP,
    containerStyle: {
      backgroundColor: '#FF5B5B',
      borderRadius: 15,
      position: 'absolute',
      zIndex: 100,
      elevation: 6,
      top: 60,
    },
    textStyle: {
      color: '#fff',
    },
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 2000,
    animation: true,
  });

export const toastSuccess = (msg) =>
  Toast.showSuccess(msg, {
    position: Toast.position.TOP,
    containerStyle: {
      backgroundColor: '#9AFF81',
      borderRadius: 15,
      position: 'absolute',
      zIndex: 100,
    },
    textStyle: {
      color: '#fff',
    },
    imgStyle: {},
    mask: false,
    maskStyle: {},
    duration: 2000,
    animation: true,
  });
