import {useState, useEffect} from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../../../store';
import { Container} from './styles'
import Comment from '../comment';
import ReplyComment from '../replyComment';
import { Dialog, DialogContent, DialogTitle, IconButton, Button, DialogActions, Snackbar } from '@mui/material';
import IconExpandLess from '@mui/icons-material/ExpandLess';
import IconExpandMore from '@mui/icons-material/ExpandMore';

function SinglePostComments({user, post, viewCommenter}) {
	const myContext = useContext(StoreContext);
  const [commentsExpanded, setCommentsExpanded] = useState(false);
  const [commentData, setCommentData] = useState(post.comments);
  // const commentData = myContext.post
  const [toastMessage, setShowToast] = useState(null);
  const [deleteCommentDialogVisible, setDeleteCommentDialogVisible] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(false);

  useEffect(() => {
    // this is used for DELETE comment - post.comments doesn't change enough i guesss
    setCommentData(post.comments);
  }, [post.comments]);

  const expandComments = () => {
    setCommentsExpanded(!commentsExpanded);
  };

  const addNewComment = (newComment) => {
    const currentPost = { ...post };
    const commentToAdd = {
      comment: newComment,
      poster: myContext.youUser.name,
      likes: [], // new comment has no likes !
    };
    currentPost.comments.push(commentToAdd);
    myContext.updateSinglePost(post, currentPost);
    setCommentsExpanded(true);
    addNotification(currentPost, 'comment');
  };

  const addNotification = (post, type) => {
    if (post.name !== myContext.youUser.name) {
      const userToAddNotification = myContext.users.filter((user) => user.name === post.name)[0];
      if (!userToAddNotification.notifications) {
        userToAddNotification.notifications = [];
      }
      userToAddNotification.notifications.push({
        read: false,
        userCreatingNotification: myContext.youUser.name,
        postId: post._id,
        type: type,
        timestamp: Date.now(),
      });
      console.log('user to notification - ', userToAddNotification.name, type);
      myContext.updateUser(userToAddNotification, userToAddNotification);
    }
  };

  const deleteComment = (commentToDelete) => {
    setCommentToDelete(commentToDelete);
    setDeleteCommentDialogVisible(true);
  }; 

	const doDeleteComment = () => {
		setDeleteCommentDialogVisible(false);
		const postCopy = {...post};
		const updatedComments = postCopy.comments.filter((comment)=>comment._id !== commentToDelete._id);
		postCopy.comments = updatedComments;
		myContext.updateSinglePost(post, postCopy);
		setShowToast('Comment - deleted');
	}

	const editComment = (commentToEdit) => {
		alert ('edit comment'); 
	}

	const likeComment = (commentToAddLike) => {
		const postCopy = {...post};
		const commentToLike = postCopy.comments.filter((comment) => comment._id === commentToAddLike._id)[0];
		const commentToLikeIndex = postCopy.comments.findIndex((comment) => comment._id === commentToAddLike._id);
		const isAlreadyLiked = commentToLike.likes.filter((likeUser) => likeUser === myContext.youUser.name )[0] ? true: false;
		if (isAlreadyLiked) {
			// remove like
			const updatedCommentLikes = commentToLike.likes.filter((likeUser) => likeUser !== myContext.youUser.name);
			postCopy.comments[commentToLikeIndex].likes = updatedCommentLikes;
			myContext.updateSinglePost(post, postCopy);
			setShowToast('Comment - removed like');
		} else {
			// add like
			commentToLike.likes.push(myContext.youUser.name);
			postCopy.comments[commentToLikeIndex] = commentToLike;
			myContext.updateSinglePost(post, postCopy);
			setShowToast('Comment - Liked !');
		}
	}

	return (
		<Container>
			<div>
			<Dialog
				fullWidth={true}
      			maxWidth={"sm"}
		      	open={deleteCommentDialogVisible}
		    >
			<DialogTitle>Delete Comment</DialogTitle>
			<DialogContent dividers>
				{commentToDelete.comment}
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={()=>setDeleteCommentDialogVisible(false)}>
				Cancel
				</Button>
				<Button onClick={()=>doDeleteComment()}>Ok</Button>
			</DialogActions>
			</Dialog>
			</div>
			<div>
				<Snackbar
					open={toastMessage !=null}
					autoHideDuration={2500}
					onClose={()=>setShowToast(null)}
					message={toastMessage}
					anchorOrigin = {{ vertical: 'top', horizontal:'center'}}
				/>	
			</div>
            {commentData.length ?
				<div>
					{`View all ${commentData.length} comments`} 
					<IconButton aria-label="home" onClick = {()=>expandComments()}>
						{commentsExpanded ? <IconExpandMore /> : <IconExpandLess />}
					</IconButton>
					{commentsExpanded && 
						commentData.map( (comment, index)=>(
						<Comment comment={comment} key={index} user={user} deleteComment={deleteComment} editComment={editComment} likeComment={likeComment} viewCommenter={viewCommenter}/>
					))}
				</div>
			: ''}
			<ReplyComment addComment={addNewComment}/>
		</Container>
	)
}
export default SinglePostComments;
