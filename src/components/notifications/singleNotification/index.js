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
    return myContext.posts.find((element) => element._id === postId).description;
  };

  const getTypeDescription = (notification) => {
    if (notification.category === 'post') {
      switch (notification.type) {
        case 'likepost':
          return ' liked ';
        default:
          return ' post unknown ';
      }
    }

    return `category unknown - ${notification.category}`;
  };

  return (
    <Container>
      {notification.read === false ? (
        <div>
          <img style={{ width: '64px', margin: '8px' }} src={getNotifiersAvatar(notification)} alt="post thumbnail" />
          {notification.userCreatingNotification}
          {getTypeDescription(notification)}
          {getPostDescription(notification.postId)}
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
