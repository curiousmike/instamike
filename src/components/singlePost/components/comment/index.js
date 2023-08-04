import { useState, useContext } from 'react';
import { StoreContext } from '../../../../store';
import {
  Container,
  InnerContainer,
  CommentWrapper,
  AvatarContainer,
  LikeIconContainer,
  CommentPosterName,
  CommentDetails,
  CommentDetailItem,
  ActionContainer,
} from './styles';
import {getTimeToShow} from '../../../../utils/utils';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Favorited from '@mui/icons-material/Favorite';
import NotFavorited from '@mui/icons-material/FavoriteBorder';
import LikesDialog from '../likesDialog';

function Comment({
  comment,
  deleteComment,
  editComment,
  likeComment,
  viewCommenter,
}) {
  const myContext = useContext(StoreContext);
  const timeToShow = getTimeToShow(comment.timeStamp);
  const [showCommentLikes, setShowCommentLikes] = useState(false);
  // console.log ('day, hours, min = ', dateDiffDays, dateDiffHours, dateDiffMin);
  const commentPoster = myContext.users.filter(
    (user) => user.name === comment.poster
  )[0];
  const canAlterComment = comment.poster === myContext.youUser.name;
  const alreadyFavorited = comment.likes.filter(
    (like) => like === myContext.youUser.name
  ).length
    ? true
    : false;

  const showTheCommenter = (commenterName) => {
    const commenterUser = myContext.users.filter(
      (user) => user.name === commenterName
    )[0];
    console.log("showTheCommenter = ", commenterName);
    viewCommenter(commenterUser);
  };
console.log("comment = ", commentPoster.avatarFileNameSmall);
  return (
    <Container>
      <LikesDialog
        onClose={() => setShowCommentLikes(false)}
        open={showCommentLikes}
        postOrComment={comment}
        onSelectUser={(commenterName) => showTheCommenter(commenterName)}
      />

      <InnerContainer>
        <AvatarContainer onClick={() => viewCommenter(commentPoster)}>
          <Avatar
            alt={commentPoster.name}
            src={`${commentPoster.avatarFileNameSmall}`}
          />
        </AvatarContainer>
        <CommentWrapper>
          <CommentPosterName>{commentPoster.name}</CommentPosterName>{" "}
          {comment.comment}
        </CommentWrapper>
        <LikeIconContainer>
          {alreadyFavorited ? (
            <Favorited
              style={{ color: "#ff1493" }}
              fontSize="inherit"
              onClick={() => likeComment(comment)}
            />
          ) : (
            <NotFavorited
              fontSize="inherit"
              onClick={() => likeComment(comment)}
            />
          )}
        </LikeIconContainer>
      </InnerContainer>
      <ActionContainer>
        <CommentDetails>
          <CommentDetailItem>{timeToShow}</CommentDetailItem>
          <CommentDetailItem onClick={() => setShowCommentLikes(true)}>
            {comment.likes.length >= 1 ? `${comment.likes.length} likes` : ""}
          </CommentDetailItem>
        </CommentDetails>
        <CommentDetailItem>
          {canAlterComment && (
            <DeleteIcon
              fontSize="inherit"
              onClick={() => deleteComment(comment)}
            />
          )}
        </CommentDetailItem>
        <CommentDetailItem>
          {canAlterComment && (
            <EditIcon fontSize="inherit" onClick={() => editComment(comment)} />
          )}
        </CommentDetailItem>
      </ActionContainer>
    </Container>
  );
}
export default Comment;
