import { useContext } from 'react';
import { StoreContext } from '../../store';
import { Container, Banner, BannerText } from './styles';
import SingleNotification from './singleNotification';

function Notifications() {
  const myContext = useContext(StoreContext);
  const notifications = myContext.youUser.notifications;
  return (
    <Container>
      <Banner>
        <BannerText>Notifications</BannerText>
      </Banner>
      {notifications.length &&
        notifications.map((notification, index) => <SingleNotification notification={notification} key={index} />)}
    </Container>
  );
}

export default Notifications;
