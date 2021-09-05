import {useState} from 'react';
import { Container } from './styles'
import SinglePostHeader from './components/singlePostHeader';
import SinglePostImage from './components/singlePostImage';
import SinglePostActionBar from './components/singlePostActionBar';
import SinglePostDetails from './components/singlePostDetails';
import SinglePostComments from './components/singlePostComments';
import SinglePostDateFooter from './components/singlePostDateFooter';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';

function SinglePost({ userId, postId, imgSrc, selectUser }) {
    const [dialogTitle, setDialogTitle] = useState(null);
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
			<SinglePostImage imgSrc={imgSrc}/>
			<SinglePostActionBar 
				addFavorite={()=>addFavorite()}
				addComment={()=>addComment()}
				doShare={()=>doShare()}
				doBookmark={()=>doBookmark()} />
			<SinglePostDetails />
			<SinglePostComments />
			<SinglePostDateFooter />
		</Container>
	)
}

export default SinglePost;
