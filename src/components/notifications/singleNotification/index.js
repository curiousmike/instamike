import { Container } from './styles';
import { useContext } from 'react';
import { StoreContext } from '../../../store';

function SingleNotification({ notification }) {
  const myContext = useContext(StoreContext);

  const getNotifiersAvatar = (notification) => {
    return myContext.users.find((user) => user.name === notification.userCreatingNotification).avatar;
  };

  const getPostThumbnail = (postId) => {
    return myContext.posts.find((element) => element._id === postId).image;
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
        return ' liked ';
      case 'comment':
        return ' commented on ';
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
          <img style={{ width: '64px', margin: '8px' }} src={getNotifiersAvatar(notification)} alt="post thumbnail" />
          {notification.userCreatingNotification}
          {getTypeDescription(notification)}
          {notification.type !== 'follower' ? getPostDescription(notification.postId) : ''}
          {notification.category === 'post' ? (
            <img
              style={{ width: '64px', margin: '8px' }}
              src={getPostThumbnail(notification.postId)}
              alt="post thumbnail"
            />
          ) : (
            <div />
          )}
        </div>
      ) : (
        <div> already read</div>
      )}
    </Container>
  );
}

export default SingleNotification;
