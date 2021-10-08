import { useContext } from 'react';
import { StoreContext } from './../../store';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Container } from './styles';

function NotificationPopper(props) {
  const myContext = useContext(StoreContext);
  const notifications = myContext.youUser.notifications;

  return (
    <Container>
      <Popper id={'notificationpopper'} open={true} anchorEl={props.anchorEl} onClick={props.clickHandler}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          {notifications.length && notifications.map((notification, index) => <div key={index}>notificaiton</div>)}
        </Box>
      </Popper>
    </Container>
  );
}

export default NotificationPopper;
