import React from 'react';
import { Container } from './styles'
import {useState, useEffect} from 'react';
import UserProfileHeader from './header';
import UserPostGrid from './userPostGrid';
import FollowView from './followView';
import mockUserPosts from '../../mockData/mockUserPosts';
import PostList from '../postList';

function UserProfileView({user, onSelectUser}) {
	const [viewingPostList, setViewingPostList] = useState(false);
	const [viewingPostGrid, setViewingPostGrid] = useState(true);
	const [viewingFollowers, setViewingFollowers] = useState(false);
	const [viewingFollowing, setViewingFollowing] = useState(false);
	const contentContainer = React.createRef();
    const postData = mockUserPosts.filter(obj=>{ return obj.userId === user.id});
	console.log('\n\n\nUserProfileView [ postList, postGrid, Followers, Following = ', viewingPostList, viewingPostGrid, viewingFollowers, viewingFollowing);

	useEffect(() => {
		resetToGridView();
	}, [user]);

	const resetToGridView = () => {
		setViewingPostList(false);
		setViewingPostGrid(true);
		setViewingFollowers(false);
		setViewingFollowing(false);
	}

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

	const onSelectFollowing = () => {
		setViewingPostGrid(false);
		setViewingPostList(false);
		setViewingFollowers(false);
		setViewingFollowing(true);
		
	}
	return (
		<Container>
            <UserProfileHeader 
				user={user}
				onSelectPosts={onSelectPosts}
				onSelectFollowers={onSelectFollowers}
				onSelectFollowing={onSelectFollowing}
			/>
			{ viewingPostGrid && 
				<UserPostGrid posts={postData} onSelectImage={(image)=>onSelectImage(image)}/>
			}
			{ viewingPostList && <PostList isProfile={true} postData={postData} theRef={contentContainer} selectUser={()=>alert('handle userProfileView select user')}/>}
			{ (viewingFollowers || viewingFollowing) && 
			<FollowView 
				user={user}
				onSelectUser={(user)=>onSelectUser(user)}
				followers={viewingFollowers}
			/>}
		</Container>
	)
}

export default UserProfileView;
