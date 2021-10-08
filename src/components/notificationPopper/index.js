import { useContext } from 'react';
import { StoreContext } from './../../store';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Container, NotificationItemContainer, CategoryContainer } from './styles';

function NotificationPopper(props) {
  const myContext = useContext(StoreContext);
  const notifications = myContext.youUser.notifications;

  const getCategoryCount = (cat) => {
    const result = notifications.filter((notification) => notification.category === cat);
    console.log('cat, count = ', cat, result.length);
    return result.length;
  };
  return (
    <Container>
      <Popper id={'notificationpopper'} open={true} anchorEl={props.anchorEl} onClick={props.clickHandler} arrow>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', marginBottom: '8px' }}>
          <NotificationItemContainer>
            <CategoryContainer>
              <FavoriteIcon />
              {getCategoryCount('post')}
            </CategoryContainer>
            <CategoryContainer>
              <PersonIcon />
              {getCategoryCount('follower')}
            </CategoryContainer>
            <ChatBubbleIcon />
            {getCategoryCount('comment')}
          </NotificationItemContainer>
        </Box>
      </Popper>
    </Container>
  );
}

export default NotificationPopper;
