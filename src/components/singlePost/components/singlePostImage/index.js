import { Container, ImageContainer } from './styles'

function SinglePostImage({imgSrc}) {
	return (
		<Container>
			<ImageContainer style={{height: '384px'}}>
				<img alt="my alt" height="384" src={imgSrc}></img>
			</ImageContainer>
		</Container>
	)
}

export default SinglePostImage;
