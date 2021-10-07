import { useContext } from 'react';
import { StoreContext } from '../../store';
import { Container } from './styles';
import SingleNotification from './singleNotification';

function Notifications() {
  const myContext = useContext(StoreContext);
  const notifications = myContext.youUser.notifications;
  return (
    <Container>
      Notifications
      {notifications.length &&
        notifications.map((notification, index) => <SingleNotification notification={notification} key={index}/>)}
    </Container>
  );
}

export default Notifications;
