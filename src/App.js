import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import UserStories from './components/userStories';
import PostList from './components/postList';
import UserProfileView from './components/userProfileView';
import Footer from './components/footer'
import Search from './components/search'
import Notifications from './components/notifications';
import NotificationPopper from './components/notificationPopper';
import CreatePost from './components/createPost';
import CreateUser from './components/createUser';
import { StoreContext } from './store';
import { serviceGetUsers, serviceUpdateUser } from './services/userservice';
import { getPosts, addNewPost, updatePost, deletePost } from './services/postservice';
import { CircularProgress, Card } from '@mui/material';
import {
  InnerContent, LoadingContainer, ErrorContainer, CardContainer, CardItem
} from './styles.js';
const YouUserName = 'NightOwlHiker'; // 'MegapixelsMike'; // 'NightOwlHiker'; // 'Watering Can'; // 'JustinYourFace'; // 'Liamzing'; // 'hopelinkvader';

function App() {
  const contentContainer = React.createRef();
  const [usersData, setUsersData] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);
  const [userProfileView, setUserProfileView] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showNotificationPopper, setShowNotificationPopper] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [youUser, setYouUser] = useState(null);
  const [networkError, setNetworkError] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const globalStore = {
    users: usersData,
    posts: usersPosts,
    youUser: youUser,
    updateUser: (user, updatedUser) => {
      updateUserLocal(user, updatedUser);
    },
    updateMultipleUsers: (listOfUsers) => {
      updateListOfUsersLocal(listOfUsers);
    },
    updateSinglePost: (originalPost, updatedPost) => {
      updateSinglePost(originalPost, updatedPost);
    },
    deleteSinglePost: (post) => {
      deleteSinglePost(post);
    },
    addNotification: (a, b) => addNotification(a, b),
    removeNotification: (a, b) => removeNotification(a, b),
    markNotificationRead: (n) => makeNotificationRead(n),
  };

  const updateListOfUsersLocal = (listOfUsers) => {
    const updatedUsers = [...usersData];
    listOfUsers.forEach((userToUpdate, i) => {
      const index = updatedUsers.findIndex((user) => user.name === userToUpdate.name);
      updatedUsers[index] = userToUpdate;
      serviceUpdateUser(userToUpdate, userToUpdate);
      if (userToUpdate.name === youUser.name) {
        setYouUser(userToUpdate);
      }
      if (youUser.name === currentUser.name && userToUpdate.name === currentUser.name) {
        setCurrentUser(userToUpdate);
      }
    });
    setUsersData(updatedUsers);
  };

  const updateUserLocal = (userToUpdate, updatedUser) => {
    const updatedUsers = [...usersData];
    const index = updatedUsers.findIndex((user) => user.name === userToUpdate.name);
    updatedUsers[index] = updatedUser;
    setUsersData(updatedUsers);
    serviceUpdateUser(userToUpdate, updatedUser);

    // Below code is to ensure youUser and currentUser get updated userData to cause children to receive those updates
    if (updatedUser.name === youUser.name) {
      setYouUser(updatedUser);
    }
    if (youUser.name === currentUser.name && updatedUser.name === currentUser.name) {
      setCurrentUser(updatedUser);
    }
  };

  const updateSinglePost = (originalPost, postToUpdate) => {
    const updatedPosts = [...usersPosts];
    const index = updatedPosts.findIndex((post) => post._id === postToUpdate._id);
    updatedPosts[index] = postToUpdate;
    updatePost(originalPost, postToUpdate);
    setUsersPosts(updatedPosts);
  };

  const deleteSinglePost = (postToRemove) => {
    // console.log('deletePost = ', postToRemove);
    const remainingPosts = usersPosts.filter((thePost) => thePost._id !== postToRemove._id);
    // console.log('reaminigPosts = ', remainingPosts);
    setUsersPosts(remainingPosts);
    deletePost(postToRemove);
  };

  const makeNotificationRead = (notification) => {
    // console.log('mark as read = ', notification.type);
    const updatedNotifications = [...youUser.notifications];
    const notificationToUpdateIndex = updatedNotifications.findIndex((n) => n.timestamp === notification.timestamp); // is timeStamp good enough?
    if (notificationToUpdateIndex >= 0) {
      console.log('notifi to update = ', notificationToUpdateIndex);
      updatedNotifications[notificationToUpdateIndex].read = true;
      youUser.notifications = updatedNotifications;
      // updateUserLocal(youUser, youUser);
      serviceUpdateUser(youUser, youUser); // only update backend - we don't want front end updated yet.
    } else {
      // err
      updateNetworkError('bad mike using network error - issue with makeNotificationRead');
    }
  };

  const addNotification = (post, type) => {
    if (post.name !== youUser.name) {
      const userToAddNotification = usersData.filter((user) => user.name === post.name)[0];
      if (!userToAddNotification.notifications) {
        userToAddNotification.notifications = [];
      }
      userToAddNotification.notifications.push({
        read: false,
        userCreatingNotification: youUser.name,
        postId: post._id,
        type: type,
        timestamp: Date.now(),
      });
      console.log('user to notification - ', userToAddNotification.name, type);
      serviceUpdateUser(userToAddNotification, userToAddNotification);
    }
  };

  const removeNotification = (post, type) => {
    if (post.name !== youUser.name) {
      const userToRemoveNotification = usersData.filter((user) => user.name === post.name)[0];
      if (!userToRemoveNotification.notifications) {
        return;
      }
      const notificationsToKeep = userToRemoveNotification.notifications.filter(
        (notification) => notification.postId === post._id && notification.userCreatingNotification !== youUser.name
      );
      // console.log("remove notification - ", notificationToRemove, type);
      userToRemoveNotification.notifications = notificationsToKeep;
      serviceUpdateUser(userToRemoveNotification, userToRemoveNotification);
    }
  };

  useEffect(() => {
    async function loadUserData() {
      const usersResult = await serviceGetUsers();
      if (usersResult?.data) {
        setUsersData(usersResult.data);
        const defaultUser = usersResult.data.filter((user) => {
          return user.name === YouUserName;
        })[0];
        setCurrentUser(defaultUser);
        setYouUser(defaultUser);
      } else {
        console.log('usersResult = ', usersResult);
        updateNetworkError(`Error: loadUserData.\n${usersResult?.status}\n${usersResult?.msg}`);
      }
    }
    async function loadPostData() {
      const postsResult = await getPosts();
      // console.log('postsResult= ', postsResult);
      if (postsResult?.data) {
        setUsersPosts(postsResult.data);
      } else if (postsResult?.status) {
        updateNetworkError(`Error: loadPostData.\n${postsResult?.status}\n${postsResult?.msg}`);
      } else if (postsResult === null) {
        setUsersPosts([]);
      }
    }
    loadUserData();
    loadPostData();
  }, []);

  useEffect(() => {}, [userProfileView, searchVisible, showCreatePost, showCreateUser, showNotifications]);

  const updateNetworkError = (error) => {
    setNetworkError(error);
  };

  const onCreatePost = async (newPost) => {
    newPost.name = youUser.name;
    setShowCreatePost(false);
    setShowLoading(true);
    const result = await addNewPost(newPost); // tell backend
    if (result.error === false) {
      // locally add
      newPost.fileName = result.fileNames.full;
      newPost.fileNameMedium = result.fileNames.medium;
      newPost.fileNameSmall = result.fileNames.small;
      const posts = [...usersPosts];
      posts.unshift(newPost);
      setUsersPosts(posts);
      goYou();
      setShowLoading(false);
    } else {
      updateNetworkError(`Error: CreatePostError ${result?.status}  ${result.msg}`);
    }
  };

  const goHome = () => {
    hideEverything();
    if (contentContainer?.current) contentContainer.current.scrollTo(0, 0);
  };

  const doSearch = () => {
    hideEverything();
    setSearchVisible(true);
  };

  const createPost = () => {
    hideEverything();
    setShowCreatePost(true);
  };

  const hideEverything = () => {
    setUserProfileView(false);
    setSearchVisible(false);
    setShowCreatePost(false);
    setShowCreateUser(false);
    setShowNotifications(false);
  };

  const goYou = () => {
    setCurrentUser(youUser);
    setUserProfileView(true);
    setSearchVisible(false);
  };

  const onSelectUser = (user) => {
    setCurrentUser(user);
    setUserProfileView(true);
  };

  const onUpdateUser = (updatedData) => {
    serviceUpdateUser(currentUser, updatedData);
  };

  const [notificationPopperAnchor, setNotificationPopperAnchor] = useState(null);
  useEffect(() => {
    // const getTypeCount = (type) => {
    //   const result = youUser?.notifications.filter(
    //     (notification) => notification.type === type && notification.read === false
    //   );
    //   return result?.length;
    // };
    // const postCount = getTypeCount('likepost');
    // const followerCount = getTypeCount('follower');
    // const commentCount = getTypeCount('comment');
    // const showNothing = !postCount && !followerCount && !commentCount;
    // if (notificationPopperAnchor && !showNothing) setShowNotificationPopper(true);
    if (notificationPopperAnchor) setShowNotificationPopper(true);
  }, [notificationPopperAnchor]);

  const viewNotificationPopper = (el) => {
    if (notificationPopperAnchor) {
      setNotificationPopperAnchor(null);
      setShowNotificationPopper(false);
    } else {
      setNotificationPopperAnchor(el.target);
    }
  };

  const handleClickNotificationPopper = () => {
    setNotificationPopperAnchor(null);
    setShowNotificationPopper(false);
    hideEverything();
    setShowNotifications(true);
  };

  const clearNotificationPopper = () => {
    console.log('do click away');
    setShowNotificationPopper(false);
    setNotificationPopperAnchor(null);
  };
  const addNewUser = () => {
    setShowCreateUser(true);
  };

  const showUserStories =
    !showNotifications && !searchVisible && !showCreatePost && !userProfileView && !showCreateUser;
  const showPostList = !showNotifications && !searchVisible && !showCreatePost && !userProfileView && !showCreateUser;
  const showSpinner = showLoading || (usersPosts.length === 0 && usersData.length === 0); //

  return (
    // This storeContext.consumer and below is what allows the store to "pass store values down"
    <StoreContext.Provider value={globalStore}>
        <Card variant = "outlined" sx={{ml: 5, minWidth:150, maxWidth:250, minHeight: 100}} style={{position: 'absolute', zIndex:'100', marginLeft:'20px', marginTop:'10px', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', alignContent:'center', backgroundColor:'lightgray'}}>
        <CardContainer>
            <CardItem>
              <a href="https://youtu.be/ZXJtDl_X6eE>YouTube Demo/">Youtube Demo</a>
            </CardItem>
        </CardContainer>
        </Card>
      <div className="App" id="rootWindow">
        <Header addNewUser={() => addNewUser()} />
        {networkError && <ErrorContainer>{networkError}</ErrorContainer>}
        {!networkError && showUserStories && <UserStories onSelect={onSelectUser} />}
        {showSpinner && networkError === null && (
          <InnerContent>
            <LoadingContainer>
              <CircularProgress />
            </LoadingContainer>
          </InnerContent>
        )}
        {showPostList && (
          <InnerContent>
            <PostList isProfile={false} theRef={contentContainer} selectUser={onSelectUser} />
          </InnerContent>
        )}
        {userProfileView && (
          <UserProfileView user={currentUser} onSelectUser={onSelectUser} onUpdateUser={onUpdateUser} />
        )}
        {searchVisible && <Search selectUser={onSelectUser} />}
        {showCreatePost && (
          <CreatePost onClose={() => setShowCreatePost(false)} onSave={(newpost) => onCreatePost(newpost)} />
        )}
        {showCreateUser && <CreateUser onClose={() => setShowCreateUser(false)} />}
        {showNotifications && <Notifications />}
        {showNotificationPopper && (
          <NotificationPopper
            anchorEl={notificationPopperAnchor}
            clickHandler={() => handleClickNotificationPopper()}
            doClickAway={() => clearNotificationPopper()}
          />
        )}
        {!networkError && (
          <Footer
            goHome={() => goHome()}
            doSearch={() => doSearch()}
            createPost={() => createPost()}
            viewNotifications={(e) => viewNotificationPopper(e)}
            goYou={() => goYou()}
          />
        )}
      </div>
    </StoreContext.Provider>
  );
}

export default App;
