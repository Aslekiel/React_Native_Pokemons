import { Notifier, NotifierComponents } from 'react-native-notifier';

type PropsType = {
  title?: string;
  description: string;
};

export const notifierError = (props: PropsType) => {
  Notifier.showNotification({
    title: `${props.title}`,
    description: `${props.description}`,
    showAnimationDuration: 800,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'error',
    },
  });
};

export const notifierSuccess = (props: PropsType) => {
  Notifier.showNotification({
    title: `${props.title}`,
    description: `${props.description}`,
    showAnimationDuration: 800,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'success',
    },
  });
  return true;
};
