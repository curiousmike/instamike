import { Container, ImageContainer } from './styles'

function SinglePostImage({imgSrc}) {
	return (
		<Container>
			<ImageContainer>
				<img alt="my alt" height="128" src={imgSrc}></img>
			</ImageContainer>
		</Container>
	)
}

export default SinglePostImage;
