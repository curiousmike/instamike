import * as React from 'react';
import PropTypes from 'prop-types';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Dialog, DialogTitle } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useContext } from 'react';
import { StoreContext } from '../../../../store';
import { withStyles } from '@mui/styles';

const styles = {
  dialogPaper: {
    maxHeight: '25vh',
    scrollbarWidth: 'thin',
  },
};

function LikesDialog({ classes, onClose, open, postOrComment, onSelectUser }) {
  const myContext = useContext(StoreContext);

  const handleClose = () => {
    onClose();
  };

  const getUserAvatar = (like) => {
    const user = myContext.users.filter((user) => user.name === like)[0];
    if (user) return user?.avatarFileNameSmall;
    return null;
  };
  const rootWindowWidth = document.getElementById('rootWindow').offsetWidth * 0.7 + 'px';

  return (
    <Dialog onClose={handleClose} open={open} classes={{ paper: classes.dialogPaper }}>
      <DialogTitle style={{ width: `${rootWindowWidth}` }}>Likes</DialogTitle>
      <List sx={{ pt: 0 }}>
        {postOrComment.likes.map((like) => (
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
  postOrComment: PropTypes.object,
  onSelectUser: PropTypes.func,
};
export default withStyles(styles)(LikesDialog);
