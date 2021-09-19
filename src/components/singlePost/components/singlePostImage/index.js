import { Container, ImageContainer } from './styles'

function SinglePostImage({imgSrc, onImageClick}) {
	return (
		<Container>
			<ImageContainer>
				<img alt="my alt" style={{maxHeight:"80vh", maxWidth:"100%"}} src={imgSrc} onClick={onImageClick}></img>
			</ImageContainer>
		</Container>
	)
}

export default SinglePostImage;
