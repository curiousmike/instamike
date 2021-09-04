import { Container, ItemContainer } from './styles'
import HeaderItem from '../headerItem';
import Avatar from '@material-ui/core/Avatar';
import mockUserData from '../../../mockData/mockUserData.js';

function UserProfileHeader({userId}) {
    const userData = mockUserData.filter(obj=>{ return obj.id === userId})[0];
	return (
		<Container>
            <ItemContainer>
                <Avatar alt={userData.name} src={userData.avatar} style={{width: '96px', height: '96px'}}/>
            </ItemContainer>
            <ItemContainer>
                <HeaderItem number={userData.posts} label={'Posts'} />
            </ItemContainer>
            <ItemContainer>
                <HeaderItem number={userData.followers} label={'Followers'} />
            </ItemContainer>
            <ItemContainer>
                <HeaderItem number={userData.following} label={'Following'} />
            </ItemContainer>

		</Container>
	)
}

export default UserProfileHeader;
