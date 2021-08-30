import { Container, PopularPostersContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';

function PopularPosters() {
	return (
		<Container>
			<PopularPostersContainer>
				<ItemContainer>
					<Avatar alt="Insta Mike" src="me.jpg"/>
				</ItemContainer>
				<ItemContainer>
					<Avatar alt="Insta Liam" src="liam.jpg"/>
				</ItemContainer>
				<ItemContainer>
					<Avatar alt="Insta DeeDee" src="deedee.jpg"/>
				</ItemContainer>
				<ItemContainer>
					<Avatar alt="Insta Zac" src="zac.jpg"/>
				</ItemContainer>
				<ItemContainer>
					<Avatar alt="Insta Aimee" src="aimee.jpg"/>
				</ItemContainer>
				<ItemContainer>
					<Avatar alt="Insta justin" src="justin.jpg"/>
				</ItemContainer>
			</PopularPostersContainer>
		</Container>
	)
}

export default PopularPosters;
