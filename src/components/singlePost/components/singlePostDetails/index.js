import { Container, NumberOfLikes, InnerCommentContainer, PosterName, DescriptionContainer} from './styles'
// import Icon from '@material-ui/core/Icon';

function SinglePostDetails({user, post, onSelectUser}) {
	// console.log('<SinglePostDetails - post  ', post);
	return (
		<Container>
            <NumberOfLikes>{post.likes.length} likes</NumberOfLikes>
			<InnerCommentContainer>
				<PosterName onClick={()=>onSelectUser(user)}>
					{user.name}
				</PosterName>
				<DescriptionContainer>
					{post.description || ''}
				</DescriptionContainer>
			</InnerCommentContainer>
		</Container>
	)
}
export default SinglePostDetails;
