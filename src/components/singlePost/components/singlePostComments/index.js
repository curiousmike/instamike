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
						<Comment comment={comment} key={index}/>
					))}
				</div>
			: ''}
			<ReplyComment addComment={addNewComment}/>
		</Container>
	)
}
export default SinglePostComments;
