import {useState} from 'react';
import { Container } from './styles'
import SinglePostHeader from './components/singlePostHeader';
import SinglePostImage from './components/singlePostImage';
import SinglePostActionBar from './components/singlePostActionBar';
import SinglePostDetails from './components/singlePostDetails';
import SinglePostComments from './components/singlePostComments';
import SinglePostDateFooter from './components/singlePostDateFooter';
import mockUserData from '../../mockData/mockUserData';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';

function SinglePost({ post, selectUser }) {
	const {userId, postId, image} = post;
    const [dialogTitle, setDialogTitle] = useState(null);
	const user = mockUserData.filter(object=> {return object.id === userId})[0];
	console.log('user = ', user);
	const addFavorite = () => {
		setDialogTitle('add favorite post');
	}
	const addComment = () => {
		setDialogTitle('add Comment');
	}
	const doShare = () => {
		setDialogTitle('doShare');
	}
	const doBookmark = () => {
		setDialogTitle('do bookmark');
	}
	return (
		<Container>
			<Dialog open={dialogTitle !== null}>
				<DialogTitle id="simple">{dialogTitle}</DialogTitle>
				<DialogActions>
					<Button onClick={()=>setDialogTitle(null)} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
			<SinglePostHeader userId={userId} selectUser={(user)=>selectUser(user)} />
			<SinglePostImage imgSrc={image}/>
			<SinglePostActionBar 
				addFavorite={()=>addFavorite()}
				addComment={()=>addComment()}
				doShare={()=>doShare()}
				doBookmark={()=>doBookmark()} />
			<SinglePostDetails user={user} post={post} onSelectUser={selectUser}/>
			<SinglePostComments user={user}/>
			<SinglePostDateFooter />
		</Container>
	)
}

export default SinglePost;
