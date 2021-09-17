import { Container, TopContainer, ItemContainer, RightContainer, NameContainer, AvatarContainer,
    RowContainer, DescriptionContainer, BottomContainer, NameAndAvatarContainer, EditProfileButton } from './styles'
import HeaderItem from '../headerItem';
import { Avatar, Button } from '@material-ui/core';

function UserProfileHeader({usersData, user, onSelectPosts, onSelectFollowers, onSelectFollowing, editProfile}) {
    const userData = usersData.filter(obj=>{ return obj.name === user.name})[0];
	return (
        <Container>
    		<TopContainer>
                <NameAndAvatarContainer>
                    <NameContainer>
                        {userData.name}
                    </NameContainer>
                    <AvatarContainer>
                        <Avatar alt={userData.name} src={userData.avatar} style={{width: '10vh', height: '10vh'}}/>
                    </AvatarContainer>
                </NameAndAvatarContainer>
                <RightContainer>
                    <RowContainer>
                        <ItemContainer onClick={onSelectPosts}>
                            <HeaderItem number={userData.posts.length ? userData.posts.length : '0'} label={'Posts'} />
                        </ItemContainer>
                        <ItemContainer onClick={onSelectFollowers}>
                            <HeaderItem number={userData.followers.length} label={'Followers'} />
                        </ItemContainer>
                        <ItemContainer onClick={onSelectFollowing}>
                            <HeaderItem number={userData.following.length} label={'Following'} />
                        </ItemContainer>
                    </RowContainer>                
                    <EditProfileButton>
                        <Button variant = "outlined" size="small" onClick={()=>editProfile()}> Edit your profile</Button>
                    </EditProfileButton>
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
