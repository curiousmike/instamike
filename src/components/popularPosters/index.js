import { Container, PopularPostersContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import mockUserData from '../../mockData/mockUserData';

function PopularPosters({onSelect}) {
	return (
		<Container>
			<PopularPostersContainer >
				{ mockUserData.map( (poster, index)=>(
                    <ItemContainer key={index} onClick={()=>onSelect(poster)}>
						<Avatar alt={poster.name} src={poster.avatar}/>
					</ItemContainer>
                )) }
			</PopularPostersContainer>
		</Container>
	)
}

export default PopularPosters;
