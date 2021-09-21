import {useState} from 'react';
import { Container} from './styles'
import Comment from '../comment';
import ReplyComment from '../replyComment';
import { IconButton } from '@material-ui/core';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import {updatePost} from '../../../../services/postservice';

function SinglePostComments({user, post}) {
    const [commentsExpanded, setCommentsExpanded] = useState(false);
	const [commentData, setCommentData] = useState(post.comments);
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
		const postCopy = {...post};
		const updatedComments = postCopy.comments.filter((comment)=>comment._id != commentToDelete._id);
		postCopy.comments = updatedComments;
		updatePost(post, postCopy);
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
			console.log('remove like');
			const updatedCommentLikes = commentToLike.likes.filter((likeUser) => likeUser !== user.name);
			console.log('removedLikeComment = ', updatedCommentLikes);
			postCopy.comments[commentToLikeIndex].likes = updatedCommentLikes;
			updatePost(post, postCopy);
		} else {
			// add like
			console.log('add like');
			commentToLike.likes.push(user.name);
			postCopy.comments[commentToLikeIndex] = commentToLike;
			updatePost(post, postCopy);
		}
	}

	return (
		<Container>
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
