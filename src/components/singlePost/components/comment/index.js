import { Container, CommentWrapper } from './styles'

function Comment({comment}) {

	return (
		<Container>
            <CommentWrapper>{comment.comment}</CommentWrapper>
		</Container>
	)
}
export default Comment;
