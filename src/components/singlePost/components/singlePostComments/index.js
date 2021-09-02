import {useState} from 'react';
import { Container} from './styles'
import Comment from '../comment';
import ReplyComment from '../replyComment';
import { IconButton } from '@material-ui/core';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';

// import Icon from '@material-ui/core/Icon';
const mockCommentData = [
    {
        id: 1,
        userId: 1,
		timestamp: 123,
        comment: 'A comment on this beautiful photo',
    },
    {
        id: 2,
        userId: 2,
		timestamp: 345,
        comment: 'I love talking about politics on social media',
    },
    {
        id: 3,
        userId: 3,
		timestamp: 567,
        comment: 'This is nice but where is the cat and baby photos?',
    },
];

function SinglePostComments() {
    const [commentsExpanded, setCommentsExpanded] = useState(false);
	const [commentData, setCommentData] = useState(mockCommentData);
	const expandComments = () => {
		setCommentsExpanded(!commentsExpanded);
	}
	
	const addNewComment = (newComment) => {
		setCommentData(commentData=>[...commentData, {id: 4, userId: 4, timeStamp: 789, comment: newComment}]);
	}
	return (
		<Container>
            View all 12 comments
			<IconButton aria-label="home" onClick = {()=>expandComments()}>
				{commentsExpanded ? <IconExpandMore /> : <IconExpandLess />}
			</IconButton>
			{commentsExpanded && 
				commentData.map( (comment, index)=>(
				<Comment comment={comment} key={index}/>
			))}
			{commentsExpanded && <ReplyComment addComment={addNewComment}/>}
		</Container>
	)
}
export default SinglePostComments;
