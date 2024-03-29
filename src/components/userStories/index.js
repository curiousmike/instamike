import { useContext } from 'react';
import { StoreContext } from '../../store';

import { Container, UserStoriesContainer, ItemContainer } from './styles'
import Avatar from '@mui/material/Avatar';

function UserStories({onSelect}) {
  const myContext = useContext(StoreContext);
  // console.log('uesrStores = ', myContext.users)
  return (
    <Container>
      <UserStoriesContainer>
        {myContext.users.map((poster, index) => (
          <ItemContainer key={index} onClick={() => onSelect(poster)}>
            <Avatar alt={poster.name} src={poster.avatarFileNameSmall} />
          </ItemContainer>
        ))}
      </UserStoriesContainer>
    </Container>
  );
}

export default UserStories;
