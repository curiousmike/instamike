import {useState} from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../../../store';

import { Container, UserInfoContainer, ItemContainer } from './styles';
import {
  Avatar,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
  DialogActions,
  Snackbar,
  IconButton,
  Tooltip,
  Menu,
} from '@mui/material';

import UserQuickActionMenu from '../userQuickActionMenu';
import IconHoriz from '@mui/icons-material/MoreHoriz';

function SinglePostHeader({ post, name, selectUser, onDelete }) {
  const myContext = useContext(StoreContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [deletePostDialogVisible, setDeletePostDialogVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const user = myContext.users.filter((obj) => {
    return obj.name === name;
  })[0];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const addFollowing = async (newFollowUser) => {
    // myUser will FOLLOWING user
    const updatedYouUser = { ...myContext.youUser };
    updatedYouUser.following.push(newFollowUser.name);
    console.log('Update user FOLLOWING - ', myContext.youUser.name);
    myContext.updateUser(myContext.youUser, updatedYouUser);
  };

  const addFollower = async (newFollowUser) => {
    // newFollowUser will now have myUser as a FOLLOWERS
    const updatedNewFollowUser = { ...newFollowUser };
    updatedNewFollowUser.followers.push(myContext.youUser.name);
    console.log('Update user FOLLOWERS - ', newFollowUser.name);
    myContext.updateUser(newFollowUser, updatedNewFollowUser);
    myContext.addNotification(newFollowUser, 'follower');
  };

  const onFollow = async (newFollowUser) => {
    await addFollowing(newFollowUser);
    await addFollower(newFollowUser);
    handleMenuClose();
  };

  const onHide = (user) => {
    handleMenuClose();
  };

  const doDeletePost = () => {
    onDelete();
    setToastMessage('Post deleted');
    handleMenuClose();
    setDeletePostDialogVisible(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const isThisYourPost = myContext?.youUser?.name === post.name;
  const showDeletePost = isThisYourPost;
  const showFollowHideMenu = showDeletePost || user?.name !== myContext?.youUser?.name;
  const showFollowOption = myContext?.youUser?.following.filter((followName) => {
    return followName === user.name;
  }).length
    ? false
    : true && !isThisYourPost;
  return (
    <Container>
      <Snackbar
        open={toastMessage != null}
        autoHideDuration={2500}
        onClose={() => setToastMessage(null)}
        message={toastMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      <Dialog fullWidth={true} maxWidth={'sm'} open={deletePostDialogVisible}>
        <DialogTitle>Delete Post</DialogTitle>
        <DialogContent dividers>
          <div style={{ textAlign: 'center' }}>
            <img alt="the al" style={{ width: '20vw' }} src={post.image} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setDeletePostDialogVisible(false)}>
            Cancel
          </Button>
          <Button onClick={() => doDeletePost()}>Ok</Button>
        </DialogActions>
      </Dialog>
      {user && (
        <UserInfoContainer>
          <ItemContainer onClick={() => selectUser(user)}>
            <Avatar alt={user.name} src={user.avatar} />
          </ItemContainer>
          <ItemContainer>{user.name}</ItemContainer>
        </UserInfoContainer>
      )}
      {showFollowHideMenu && (
        <div id="followHideMenu">
          <Tooltip title="Menu">
            <IconButton aria-label="home" onClick={(e) => handleMenuOpen(e)}>
              <IconHoriz />
            </IconButton>
          </Tooltip>
          <Menu id={id} open={open} anchorEl={anchorEl} onClose={handleMenuClose}>
            <div id="fix react ref error">
              <UserQuickActionMenu
                onFollow={
                  showFollowOption
                    ? () => {
                        handleMenuClose();
                        onFollow(user);
                      }
                    : null
                }
                onHide={() => {
                  handleMenuClose();
                  onHide(user);
                }}
                onDelete={
                  showDeletePost
                    ? () => {
                        handleMenuClose();
                        setDeletePostDialogVisible(true);
                      }
                    : null
                }
              />
            </div>
          </Menu>
        </div>
      )}
    </Container>
  );
}

export default SinglePostHeader;
