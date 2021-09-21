import { Container, CommentWrapper, CommentDetails } from './styles'
import {formatDate} from '../../../../utils/utils';
function Comment({comment}) {
	console.log('comment = ', comment);
	return (
		<Container>
            <CommentWrapper>{comment.comment}</CommentWrapper>
			<CommentDetails>
			{comment.poster}
			{formatDate(comment.timeStamp)}
			</CommentDetails>
		</Container>
	)
}
export default Comment;
