import { useContext, useEffect } from 'react';
import { StoreContext } from '../../store';
import { Container } from './styles'
import SinglePost from '../singlePost';

function PostList({theRef, selectUser, isProfile, postData, jumpTo}) {
	const myContext = useContext(StoreContext);
    const postsToUser = postData ? postData : myContext.posts; // whether viewing your FEED or viewing a single users posts

    useEffect( () => {
        if (jumpTo) {
            // When jumping to an element, we need to take into account the UserProfile Element + the main header height
            var myElement = document.getElementById(`post_${jumpTo}`);
            var userProfileElementHeight = myElement.parentElement.parentElement.children[0].clientHeight;
            var headerHeight = document.querySelector('header').clientHeight;
            if (myElement) {
                const topPos = myElement?.offsetTop - userProfileElementHeight - headerHeight;
                theRef.current.scrollTo(0, topPos);
            }
        }
    });

	return (
		<Container ref={theRef} style={isProfile ? {height:'65vh'}: {height:'80vh'}}>
				{ postsToUser && postsToUser.map( (post, index)=>(
                    <SinglePost
                        id={`post_${index}`}
                        usersData={myContext.users}
                        key={index}
                        post={post}
                        selectUser={selectUser}
                    />
                )) }
		</Container>
	)
}

export default PostList;
