import { Container, FollowTitle } from './styles';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, Button } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../../store';

function FollowView({ user, onSelectUser, followers }) {
  const myContext = useContext(StoreContext);
  const [users, setUsers] = useState([]);
  const isFollowers = followers;
  const secondary = false;
  useEffect(() => {
    if (isFollowers) {
      const followers = user.followers.map((followerName) => {
        const user = myContext.users.filter((userData) => {
          return userData.name === followerName;
        })[0];
        return user;
      });
      setUsers(followers);
    } else {
      //
      // the issue now is that USER isn't changing - <UserProfileView user doesn't get updated
      // Example: Follow a user.  Then STOP following  Notice the COUNT in profile doesnt update
      const following = user.following.map((followingUserName) => {
        const user = myContext.users.filter((userData) => {
          return userData.name === followingUserName;
        })[0];
        return user;
      });
      setUsers(following);
    }
  }, [isFollowers, myContext, myContext.users, user]);

  const stopFollowing = async (userToRemove) => {
    const listOfUsersToUpdate = [];
    // Remove following a user
    const updatedUser = { ...user };
    const followingToKeep = updatedUser.following.filter((followingUserName) => {
      return followingUserName !== userToRemove.name;
    });
    updatedUser.following = followingToKeep;
    listOfUsersToUpdate.push(updatedUser);

    // Now, we need to the person you were following seeing you as a "follower"
    const otherUser = { ...userToRemove };
    const followersToKeep = otherUser.following.filter((followersUserName) => {
      return followersUserName !== user.name;
    });
    otherUser.followers = followersToKeep;
    listOfUsersToUpdate.push(otherUser);

    myContext.updateMultipleUsers(listOfUsersToUpdate);
  };

  const blockFollowing = (userToBlock) => {
    const userAlreadyBlocked = user.blocked.filter((blockedUser) => blockedUser === userToBlock.name).length > 0;
    if (userAlreadyBlocked) {
      return;
    }
    // add block
    const updatedUser = { ...user };
    updatedUser.blocked.push(userToBlock.name);
    myContext.updateUser(user, updatedUser);
  };

  return (
    <Container>
      <FollowTitle>{followers ? 'Followers' : 'Following'}</FollowTitle>
      <List dense={false} style={{ width: '100%' }}>
        {users.map((user, index) => (
          <ListItem onClick={() => onSelectUser(user)} key={index}>
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user?.name} secondary={secondary ? 'Secondary text' : null} />
            <ListItemSecondaryAction>
              {!isFollowers && (
                <Button variant="outlined" size="small" onClick={() => stopFollowing(user)}>
                  Stop following
                </Button>
              )}
              {isFollowers && (
                <Button variant="outlined" size="small" onClick={() => blockFollowing(user)}>
                  Block following
                </Button>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default FollowView;
