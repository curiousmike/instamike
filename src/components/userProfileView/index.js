import React from 'react';
import { Container } from './styles'
import {useState} from 'react';
import UserProfileHeader from './header';
import UserPostGrid from './userPostGrid';
import FollowersView from './followersView';
import mockUserPosts from '../../mockData/mockUserPosts';
import PostList from '../postList';

function UserProfileView({user}) {
	const [viewingPostList, setViewingPostList] = useState(false);
	const [viewingPostGrid, setViewingPostGrid] = useState(true);
	const [viewingFollowers, setViewingFollowers] = useState(false);
	const contentContainer = React.createRef();
    const postData = mockUserPosts.filter(obj=>{ return obj.userId === user.id});

	const onSelectImage = (image) => {
		console.log('<UserProfileView onSelectImage');
		setViewingPostGrid(false);
		setViewingPostList(true);
	}

	const onSelectPosts = () => {
		console.log ('<UserProfileView onSelectPosts');
		setViewingPostGrid(false);
		setViewingPostList(true);
	}

	const onSelectFollowers = () => {
		console.log('<UserProfileView onSelectFollowers');
		setViewingPostGrid(false);
		setViewingPostList(false);
		setViewingFollowers(true);
	}
	return (
		<Container>
            <UserProfileHeader user={user} onSelectPosts={onSelectPosts} onSelectFollowers={onSelectFollowers}/>
			{ viewingPostGrid && 
				<UserPostGrid posts={postData} onSelectImage={(image)=>onSelectImage(image)}/>
			}
			{ viewingPostList && <PostList postData={postData} theRef={contentContainer} selectUser={()=>alert('handle userProfileView select user')}/>}
			{ viewingFollowers && <FollowersView user={user} />}
		</Container>
	)
}

export default UserProfileView;
