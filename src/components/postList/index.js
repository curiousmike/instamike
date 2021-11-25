import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store';
import { Container } from './styles';
import SinglePost from '../singlePost';

function PostList({ theRef, selectUser, isProfile, postData, jumpTo }) {
  const myContext = useContext(StoreContext);
  const [postsVisibility, setPostsVisibility] = useState([true, true, true]); //default first 3 as visible
  const [jumpToIndex, setJumpToIndex] = useState(null);
  const postsToUser = postData ? postData : myContext.posts; // whether viewing your FEED or viewing a single users posts
  const [postsDimensions, setPostsDimensions] = useState([]);
  let viewHeight = null;

  useEffect(() => {
    if (jumpTo && jumpTo !== jumpToIndex) {
      // When jumping to an element, we need to take into account the UserProfile Element + the main header height
      const myElement = document.getElementById(`post_${jumpTo}`); // the element to jump to
      if (myElement) {
        const userProfileElementHeight = myElement.parentElement.parentElement.children[0].clientHeight; // whacky way to get UserProfile height
        const headerHeight = document.querySelector('header').clientHeight; // the height of the root header
        const scrollToPos = myElement?.offsetTop - userProfileElementHeight - headerHeight;
        theRef.current.scrollTo(0, scrollToPos);
        setJumpToIndex(jumpTo);
      }
    }
  },[jumpTo, jumpToIndex, theRef]);

  const doVisibilityCheck = () => {
    // figure out which elements we should actually render.
    // if there are 100 posts, we don't want to actually render them all.  we just want to render those within view
    if (!theRef?.current) return;
    let updatedPostsDimensions = postsDimensions;
    if (postsDimensions.length !== postsToUser.length) { // if we add a new post, this will rebuild
      let totalHeight = 0;
      updatedPostsDimensions = [];
      // Go thru all user posts, and build the dimensions of each element.
      for (let i = 0; i < postsToUser.length; i++) {
        const element = document.getElementById(`post_${i}`);
        if (element) {
          const yourHeight = element.getBoundingClientRect().height;
          const yourStart = totalHeight;
          const yourEnd = yourStart + yourHeight;
          totalHeight += yourHeight;
          const item = { index: i, element: element, height: yourHeight, start: yourStart, end: yourEnd };
          updatedPostsDimensions.push(item);
        }
      }
      setPostsDimensions(updatedPostsDimensions);
    }

    if (viewHeight === null) {
      viewHeight = theRef.current.getBoundingClientRect().height;
    }

    //
    // based on current scroll position, look at the list of post dimensions and determine WHICH should be visible
    if (postsVisibility.length >= 1 && updatedPostsDimensions.length >= 1) {
      const scrollTop = theRef.current.scrollTop;
      let newVisibilityArray = [];
      for (let i = 0; i < postsToUser.length; i++) {
        const element = updatedPostsDimensions[i];
        const viewTop = scrollTop;
        const viewBottom = scrollTop + viewHeight;
        let isVisible = false;
        if (element.end >= viewTop && element.start <= viewTop) {
          isVisible = true;
        }
        if (element.start <= viewBottom && element.end >= viewBottom) {
          isVisible = true;
        }
        if (element.start > viewTop && element.end <= viewBottom) {
          isVisible = true;
        }
        newVisibilityArray.push(isVisible);
      }
      const currentVisibility = JSON.stringify(postsVisibility);
      const updatedVisibility = JSON.stringify(newVisibilityArray);
      if (currentVisibility !== updatedVisibility) {
        setPostsVisibility(newVisibilityArray);
      }
    }
  };

    useEffect(() => {
    doVisibilityCheck();
  }, [postsToUser]);

  const handleScroll = (e) => {
    doVisibilityCheck();
  };

  return (
    <Container
      ref={theRef}
      style={isProfile ? { height: '65vh' } : { height: '80vh' }}
      onScroll={(e) => handleScroll(e)}
    >
      {postsToUser &&
        postsToUser.map((post, index) => (
          <SinglePost
            id={`post_${index}`}
            key={index}
            post={post}
            selectUser={selectUser}
            isProfile={isProfile}
            isVisible={postsVisibility[index]}
          />
        ))}
    </Container>
  );
}

export default PostList;
