import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../store';

import { Container } from './styles'
import {useState, useEffect} from 'react';
import UserProfileHeader from './header';
import UserPostGrid from './userPostGrid';
import FollowView from './followView';
import EditProfile from './editProfile';
import PostList from '../postList';

function UserProfileView({user, onSelectUser, onUpdateUser}) {
	const myContext = useContext(StoreContext);
	const [viewingPostList, setViewingPostList] = useState(false);
	const [viewingPostGrid, setViewingPostGrid] = useState(true);
	const [viewingFollowers, setViewingFollowers] = useState(false);
	const [viewingFollowing, setViewingFollowing] = useState(false);
	const [editingProfile, setEditingProfile] = useState(false);
  const [jumpToImageIndex, setJumpToImageIndex] = useState(null);
  const [currentUser, setCurrentUser] = useState(user);
  const contentContainer = React.createRef();
  const singleUserPostData = myContext.posts.filter((obj) => {
    return obj.name === user.name;
  });

  useEffect(() => {
    if (currentUser.name !== user.name) {
      resetToGridView();
      setCurrentUser(user);
    }
  }, [currentUser, user]);

  const resetToGridView = () => {
    setViewingPostList(false);
    setViewingPostGrid(true);
    setViewingFollowers(false);
    setViewingFollowing(false);
  };

  const onSelectImage = (image, index) => {
    console.log('<UserProfileView onSelectImage - ', index);
    setViewingPostGrid(false);
    setViewingPostList(true);
    setJumpToImageIndex(index);
  };

  const onSelectPosts = () => {
    console.log('<UserProfileView onSelectPosts');
    setViewingPostGrid(false);
    setViewingPostList(true);
  };

  const onSelectFollowers = () => {
    console.log('<UserProfileView onSelectFollowers');
    setViewingPostGrid(false);
    setViewingPostList(false);
    setViewingFollowers(true);
  };

  const onSelectFollowing = () => {
    setViewingPostGrid(false);
    setViewingPostList(false);
    setViewingFollowers(false);
    setViewingFollowing(true);
  };

  const updateUserProfile = (updatedProfile) => {
    myContext.updateUser(myContext.youUser, updatedProfile);
    setEditingProfile(false);
  };

  return (
    <Container>
      {editingProfile && (
        <EditProfile
          user={user}
          onSaveProfile={(updatedUser) => updateUserProfile(updatedUser)}
          onClose={() => setEditingProfile(false)}
        />
      )}
      {!editingProfile && (
        <div>
          <UserProfileHeader
            user={user}
            onSelectPosts={onSelectPosts}
            onSelectFollowers={onSelectFollowers}
            onSelectFollowing={onSelectFollowing}
            editProfile={() => setEditingProfile(true)}
          />
          {viewingPostGrid && (
            <UserPostGrid
              user={user}
              posts={singleUserPostData}
              onSelectImage={(image, index) => onSelectImage(image, index)}
            />
          )}
          {viewingPostList && (
            <PostList
              usersData={myContext.users}
              isProfile={true}
              postData={singleUserPostData}
              theRef={contentContainer}
              jumpTo={jumpToImageIndex}
              selectUser={(user) => onSelectUser(user)}
            />
          )}
          {(viewingFollowers || viewingFollowing) && (
            <FollowView user={user} onSelectUser={(user) => onSelectUser(user)} followers={viewingFollowers} />
          )}
        </div>
      )}
    </Container>
  );
}

export default UserProfileView;
