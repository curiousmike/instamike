import { Container, UserStoriesContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import mockUserData from '../../mockData/mockUserData';

function UserStories({onSelect}) {
	return (
		<Container>
			<UserStoriesContainer >
				{ mockUserData.map( (poster, index)=>(
                    <ItemContainer key={index} onClick={()=>onSelect(poster)}>
						<Avatar alt={poster.name} src={poster.avatar}/>
					</ItemContainer>
                )) }
			</UserStoriesContainer>
		</Container>
	)
}

export default UserStories;
