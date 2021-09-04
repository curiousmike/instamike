import { Container, MainImageContainer, ImageContainer } from './styles'
import './userPostGrid.css';

function UserPostGrid({posts}) {
	return (
		<Container>
			<MainImageContainer>
			{
				posts.map( (post, index)=>(
				<ImageContainer key={index}>
					<img className = "ImgClass"
						src={post.image}
						alt={'the alt'}
						key={index}
						width={'100%'}
						height={'100%'}
						/>
				</ImageContainer>
			))}
		</MainImageContainer>
		</Container>
	)
}

export default UserPostGrid;
