import { useContext } from 'react';
import { StoreContext } from '../../store';

import { Container, UserStoriesContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';

function UserStories({onSelect}) {
	const myContext = useContext(StoreContext);
	console.log('myContext = ', myContext);
	return (
		<Container>
			<UserStoriesContainer >
				{ myContext.users.map( (poster, index)=>(
                    <ItemContainer key={index} onClick={()=>onSelect(poster)}>
						<Avatar alt={poster.name} src={poster.avatar}/>
					</ItemContainer>
                )) }
			</UserStoriesContainer>
		</Container>
	)
}

export default UserStories;
