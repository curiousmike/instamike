import { Container, UserStoriesContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';

function UserStories({usersData, onSelect}) {
	return (
		<Container>
			<UserStoriesContainer >
				{ usersData.map( (poster, index)=>(
                    <ItemContainer key={index} onClick={()=>onSelect(poster)}>
						<Avatar alt={poster.name} src={poster.avatar}/>
					</ItemContainer>
                )) }
			</UserStoriesContainer>
		</Container>
	)
}

export default UserStories;
