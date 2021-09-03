import { Container, ImageContainer } from './styles'
function UserPostGrid({posts}) {
	return (
		<Container>
		{
			posts.map( (post, index)=>(
			<ImageContainer>
				<img src={post.image} alt={'the alt'} key={index} width={'100%'} height={'undefined'} aspectRatio={1}/>
			</ImageContainer>
		))}
		</Container>
	)
}

export default UserPostGrid;
