import { Container, TopContainer, ItemContainer, RightContainer, NameContainer, AvatarContainer,
    FullNameContainer, RowContainer, DescriptionContainer, BottomContainer } from './styles'
import HeaderItem from '../headerItem';
import { Avatar, Button } from '@material-ui/core';
import mockUserData from '../../../mockData/mockUserData.js';

function UserProfileHeader({user, onSelectPosts, onSelectFollowers, onSelectFollowing, editProfile}) {
    const userData = mockUserData.filter(obj=>{ return obj.id === user.id})[0];
	return (
        <Container>
		<TopContainer>
            <ItemContainer>
                <AvatarContainer>
                    <Avatar alt={userData.name} src={userData.avatar} style={{width: '10vh', height: '10vh'}}/>
                </AvatarContainer>
            </ItemContainer>
            <RightContainer>
                {/* <NameContainer>
                    {userData.name}
                </NameContainer>
                <RowContainer>
                    <FullNameContainer>
                        {userData.firstName ? `${userData.firstName} ${userData.lastName}` : 'No name given.'}
                    </FullNameContainer>
                </RowContainer> */}
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
                <RowContainer>
                    <Button variant = "outlined" size="small" onClick={()=>editProfile()}> Edit your profile</Button>
                </RowContainer>
            </RightContainer>
		</TopContainer>
        <BottomContainer>
            <RowContainer>
                <DescriptionContainer>
                    {userData.description ? userData.description : 'No description'}
                </DescriptionContainer>
            </RowContainer>
        </BottomContainer>
    </Container>
	)
}

export default UserProfileHeader;
