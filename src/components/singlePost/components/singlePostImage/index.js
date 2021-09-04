import { Container, ImageContainer } from './styles'

function SinglePostImage({imgSrc}) {
	return (
		<Container>
			<ImageContainer>
				<img alt="my alt" width="100%" src={imgSrc}></img>
			</ImageContainer>
		</Container>
	)
}

export default SinglePostImage;
