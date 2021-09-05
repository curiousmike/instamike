import React from 'react';
import { Container } from './styles'
import {useState} from 'react';
import UserProfileHeader from './header';
import UserPostGrid from './userPostGrid';
import mockUserPosts from '../../mockData/mockUserPosts';
import PostList from '../postList';

function UserProfileView({user}) {
	const [viewingFeed, setViewingFeed] = useState(false);
	const contentContainer = React.createRef();
    const postData = mockUserPosts.filter(obj=>{ return obj.userId === user.id});

	const onSelectImage = (image) => {
		setViewingFeed(true);
	}

	return (
		<Container>
            <UserProfileHeader user={user}/>
			{ !viewingFeed && <UserPostGrid posts={postData} onSelectImage={(image)=>onSelectImage(image)}/>}
			{ viewingFeed && <PostList postData={postData} theRef={contentContainer} selectUser={()=>alert('handle userProfileView select user')}/>}
		</Container>
	)
}

export default UserProfileView;
