import { Container } from './styles'
import UserProfileHeader from './header';
import UserPostGrid from './userPostGrid';
import mockUserPosts from '../../mockData/mockUserPosts';

function UserProfileView({user}) {
    const postData = mockUserPosts.filter(obj=>{ return obj.userId === user.id});
	return (
		<Container>
            <UserProfileHeader user={user}/>
			<UserPostGrid posts={postData}/>
		</Container>
	)
}

export default UserProfileView;
