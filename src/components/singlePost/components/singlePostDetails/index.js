import { Container, NumberOfLikes, PosterName, DescriptionContainer} from './styles'

// import Icon from '@material-ui/core/Icon';

function SinglePostDetails({user, post, onSelectUser}) {
	console.log('post  ', post);
	return (
		<Container>
            <NumberOfLikes>{post.likes.length} likes</NumberOfLikes>
            <PosterName onClick={()=>onSelectUser(user)}>
				{user.name}
			</PosterName>
			<DescriptionContainer>{post.description || ''}</DescriptionContainer>
		</Container>
	)
}
export default SinglePostDetails;
