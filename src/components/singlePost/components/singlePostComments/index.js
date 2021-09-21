import {useState} from 'react';
import { Container} from './styles'
import Comment from '../comment';
import ReplyComment from '../replyComment';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogTitle, IconButton, Button, DialogActions } from '@material-ui/core';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import {updatePost} from '../../../../services/postservice';

function SinglePostComments({user, post}) {
    const [commentsExpanded, setCommentsExpanded] = useState(false);
	const [commentData, setCommentData] = useState(post.comments);
	const [toastMessage, setShowToast] = useState(null);
	const [deleteCommentDialogVisible, setDeleteCommentDialogVisible] = useState(false);
	const [commentToDelete, setCommentToDelete] = useState(false);

	const expandComments = () => {
		setCommentsExpanded(!commentsExpanded);
	}
	
	const addNewComment = (newComment) => {
		const currentPost = {...post};
		const commentToAdd = {
			comment: newComment,
			poster: user.name,
			likes: [], // new comment has no likes !
		};
		currentPost.comments.push(commentToAdd);
		updatePost(post, currentPost);
		
	}

	const deleteComment = (commentToDelete) => {
		setCommentToDelete(commentToDelete);
		setDeleteCommentDialogVisible(true);

	} 

	const doDeleteComment = () => {
		setDeleteCommentDialogVisible(false);
		const postCopy = {...post};
		const updatedComments = postCopy.comments.filter((comment)=>comment._id !== commentToDelete._id);
		postCopy.comments = updatedComments;
		updatePost(post, postCopy);
		setShowToast('Comment - deleted');
	}

	const editComment = (commentToEdit) => {
		alert ('edit comment'); 
	}

	const likeComment = (commentToAddLike) => {
		const postCopy = {...post};
		const commentToLike = postCopy.comments.filter((comment) => comment._id === commentToAddLike._id)[0];
		const commentToLikeIndex = postCopy.comments.findIndex((comment) => comment._id === commentToAddLike._id);
		const isAlreadyLiked = commentToLike.likes.filter((likeUser) => likeUser === user.name )[0] ? true: false;
		if (isAlreadyLiked) {
			// remove like
			const updatedCommentLikes = commentToLike.likes.filter((likeUser) => likeUser !== user.name);
			postCopy.comments[commentToLikeIndex].likes = updatedCommentLikes;
			updatePost(post, postCopy);
			setShowToast('Comment - removed like');
		} else {
			// add like
			setShowToast('Comment - Liked !');
			commentToLike.likes.push(user.name);
			postCopy.comments[commentToLikeIndex] = commentToLike;
			updatePost(post, postCopy);
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
						<Comment comment={comment} key={index} user={user} deleteComment={deleteComment} editComment={editComment} likeComment={likeComment}/>
					))}
				</div>
			: ''}
			<ReplyComment addComment={addNewComment}/>
		</Container>
	)
}
export default SinglePostComments;
