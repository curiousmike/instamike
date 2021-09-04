import { Container, PopularPostersContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import mockPopularPosters from '../../mockData/mockPopularPosters';

function PopularPosters() {
	return (
		<Container>
			<PopularPostersContainer>
				{ mockPopularPosters.map( (poster, index)=>(
                    <ItemContainer key={index}>
						<Avatar alt={poster.name} src={poster.avatar}/>
					</ItemContainer>
                )) }
			</PopularPostersContainer>
		</Container>
	)
}

export default PopularPosters;
