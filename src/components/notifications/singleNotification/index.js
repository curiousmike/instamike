import { useContext, useEffect } from 'react';
import { StoreContext } from '../../../store';
import { Container, SingleNotificationContainer, TextItem } from './styles';
import Avatar from '@mui/material/Avatar';

function SingleNotification({ notification }) {
  const myContext = useContext(StoreContext);

  useEffect(() => {
    if (notification.read === false) {
      myContext.markNotificationRead(notification);
    }
  });
  const getNotifiersAvatar = (notification) => {
    return myContext.users.find((user) => user.name === notification.userCreatingNotification).avatarFileNameSmall;
  };

  const getPostThumbnail = (postId) => {
    return myContext.posts.find((element) => element._id === postId).fileNameSmall;
  };

  const getPostDescription = (postId) => {
    if (!postId) return '';
    const result = myContext.posts.find((element) => element._id === postId);
    if (result) return result.description;
    return 'unknown';
  };

  const getTypeDescription = (notification) => {
    switch (notification.type) {
      case 'likepost':
        return ' liked your post ';
      case 'comment':
        return ' commented on your post ';
      case 'follower':
        return ' started following you ';
      default:
        return `type unknown - ${notification.type}`;
    }
  };

  return (
    <Container>
      {notification.read === false ? (
        <div>
          <SingleNotificationContainer>
            <Avatar alt="{commentPoster.name}" src={`http://www.coustier.com${getNotifiersAvatar(notification)}`} />
            <TextItem>
              {notification.userCreatingNotification}
              {getTypeDescription(notification)}
              {notification.type !== 'follower' ? getPostDescription(notification.postId) : ''}
            </TextItem>
            {notification.type === 'likepost' || notification.type === 'comment' ? (
              <img
                style={{ width: '64px', margin: '8px' }}
                src={`http://www.coustier.com${getPostThumbnail(notification.postId)}`}
                alt="post thumbnail"
              />
            ) : (
              <div />
            )}
          </SingleNotificationContainer>
        </div>
      ) : (
        <div> already read</div>
      )}
    </Container>
  );
}

export default SingleNotification;
