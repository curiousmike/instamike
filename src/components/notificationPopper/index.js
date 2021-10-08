import { useContext } from 'react';
import { StoreContext } from './../../store';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Container, NotificationItemContainer, CategoryContainer, CategoryCounter } from './styles';

function NotificationPopper(props) {
  const myContext = useContext(StoreContext);
  const notifications = myContext.youUser.notifications;

  const getTypeCount = (type) => {
    const result = notifications.filter((notification) => notification.type === type);
    return result.length;
  };
  const postCount = getTypeCount('likepost');
  const followerCount = getTypeCount('follower');
  const commentCount = getTypeCount('comment');
  return (
    <Container>
      <Popper id={'notificationpopper'} open={true} anchorEl={props.anchorEl} onClick={props.clickHandler} arrow>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', marginBottom: '8px' }}>
          <NotificationItemContainer>
            {postCount && (
              <CategoryContainer>
                <FavoriteIcon />
                <CategoryCounter>{postCount}</CategoryCounter>
              </CategoryContainer>
            )}
            {followerCount ? (
              <CategoryContainer>
                <PersonIcon />
                <CategoryCounter>{followerCount}</CategoryCounter>
              </CategoryContainer>
            ) : (
              ''
            )}
            {commentCount ? (
              <CategoryContainer>
                <ChatBubbleIcon />
                <CategoryCounter>{commentCount}</CategoryCounter>
              </CategoryContainer>
            ) : (
              ''
            )}
          </NotificationItemContainer>
        </Box>
      </Popper>
    </Container>
  );
}

export default NotificationPopper;
