import { Container, ItemContainer, RightContainer, NameContainer, AvatarContainer,
    FullNameContainer, RowContainer, DescriptionContainer } from './styles'
import HeaderItem from '../headerItem';
import Avatar from '@material-ui/core/Avatar';
import mockUserData from '../../../mockData/mockUserData.js';

function UserProfileHeader({user, onSelectPosts, onSelectFollowers, onSelectFollowing}) {
    const userData = mockUserData.filter(obj=>{ return obj.id === user.id})[0];
	return (
		<Container>
            <ItemContainer>
                <AvatarContainer>
                    <Avatar alt={userData.name} src={userData.avatar} style={{width: '10vh', height: '10vh'}}/>
                </AvatarContainer>
            </ItemContainer>
            <RightContainer>
                <NameContainer>
                    {userData.name}
                </NameContainer>
                <RowContainer>
                    <FullNameContainer>
                        {userData.firstName ? `${userData.firstName} ${userData.lastName}` : 'No name given.'}
                    </FullNameContainer>
                </RowContainer>
                <RowContainer>
                    <ItemContainer onClick={onSelectPosts}>
                        <HeaderItem number={userData.posts} label={'Posts'} />
                    </ItemContainer>
                    <ItemContainer onClick={onSelectFollowers}>
                        <HeaderItem number={userData.followers.length} label={'Followers'} />
                    </ItemContainer>
                    <ItemContainer onClick={onSelectFollowing}>
                        <HeaderItem number={userData.following.length} label={'Following'} />
                    </ItemContainer>
                </RowContainer>                
            </RightContainer>
            <RightContainer>
                <RowContainer>
                    <DescriptionContainer>
                        {userData.description ? userData.description : 'No description'}
                    </DescriptionContainer>
                </RowContainer>
            </RightContainer>

		</Container>
	)
}

export default UserProfileHeader;
