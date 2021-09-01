import {useState} from 'react';
import { Container} from './styles'
import Comment from '../comment';

// import Icon from '@material-ui/core/Icon';
const commentData = [
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
	
	const expandComments = () => {
		setCommentsExpanded(!commentsExpanded);
	}

	return (
		<Container onClick={()=>expandComments()}>
            View all 12 comments
			{commentsExpanded && 
				commentData.map(comment=>(
				<Comment comment={comment}/>
			))}
		</Container>
	)
}
export default SinglePostComments;
