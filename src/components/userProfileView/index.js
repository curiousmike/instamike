import React from 'react';
import { Container } from './styles'
import {useState, useEffect} from 'react';
import UserProfileHeader from './header';
import UserPostGrid from './userPostGrid';
import FollowView from './followView';
import EditProfile from './editProfile';
import mockUserPosts from '../../mockData/mockUserPosts';
import PostList from '../postList';

function UserProfileView({usersData, user, onSelectUser, onUpdateUser}) {
	const [viewingPostList, setViewingPostList] = useState(false);
	const [viewingPostGrid, setViewingPostGrid] = useState(true);
	const [viewingFollowers, setViewingFollowers] = useState(false);
	const [viewingFollowing, setViewingFollowing] = useState(false);
	const [editingProfile, setEditingProfile] = useState(false);
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

	const updateUserProfile = (updatedProfile) => {
		onUpdateUser(updatedProfile);
		setEditingProfile(false);
	}

	return (
		<Container>
			{editingProfile && <EditProfile user={user} onClose={(updatedUser)=>updateUserProfile(updatedUser)} /> }
			{!editingProfile && <div>
				<UserProfileHeader
					usersData={usersData} 
					user={user}
					onSelectPosts={onSelectPosts}
					onSelectFollowers={onSelectFollowers}
					onSelectFollowing={onSelectFollowing}
					editProfile={()=>setEditingProfile(true)}
				/>
				{ viewingPostGrid && 
					<UserPostGrid posts={postData} onSelectImage={(image)=>onSelectImage(image)}/>
				}
				{ viewingPostList && <PostList usersData={usersData} isProfile={true} postData={postData} theRef={contentContainer} selectUser={()=>alert('handle userProfileView select user')}/>}
				{ (viewingFollowers || viewingFollowing) && 
				<FollowView
					usersData={usersData}
					user={user}
					onSelectUser={(user)=>onSelectUser(user)}
					followers={viewingFollowers}
				/>} 
			</div>}
		</Container>
	)
}

export default UserProfileView;
