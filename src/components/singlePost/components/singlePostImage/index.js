import { Container, ImageContainer } from './styles'

function SinglePostImage({imgSrc}) {
	return (
		<Container>
			<ImageContainer>
				<img alt="my alt" width="90%" src={imgSrc}></img>
			</ImageContainer>
		</Container>
	)
}

export default SinglePostImage;
