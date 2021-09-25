
import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core//List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';
import {useContext} from 'react';
import { StoreContext } from '../../../../store';

function LikesDialog({onClose, open, post, onSelectUser}) {
  const myContext = useContext(StoreContext);

  const handleClose = () => {
      onClose();
  };

    const getUserAvatar = (like) => {
      const user = myContext.users.filter((user) => user.name === like)[0];
      return user.avatar;
    }

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle style={{minWidth: '50vw'}}>Likes</DialogTitle>
        <List sx={{ pt: 0 }}>
          {post.likes.map((like) => (
            <ListItem button onClick={() => onSelectUser(like)} key={like}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }} src={getUserAvatar(like)} />
              </ListItemAvatar>
              <ListItemText primary={like} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    );
  }
  
  LikesDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    post: PropTypes.object,
    onSelectUser: PropTypes.func,
  };
  export default LikesDialog;