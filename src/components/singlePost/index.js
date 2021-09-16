import {useState} from 'react';
import { Container } from './styles'
import SinglePostHeader from './components/singlePostHeader';
import SinglePostImage from './components/singlePostImage';
import SinglePostActionBar from './components/singlePostActionBar';
import SinglePostDetails from './components/singlePostDetails';
import SinglePostComments from './components/singlePostComments';
import SinglePostDateFooter from './components/singlePostDateFooter';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';

function SinglePost({ usersData, post, selectUser }) {
	const {name, postId, image} = post;
    const [dialogTitle, setDialogTitle] = useState(null);
	const user = usersData.filter(object=> {return object.name === name})[0];
	if (!user) {
		console.log('could not find user name = ', name);
		return(<div/>);
	}
	// console.log('<SinglePost user = ', user);
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
			<SinglePostHeader usersData={usersData} name={name} selectUser={(user)=>selectUser(user)} />
			<SinglePostImage imgSrc={image}/>
			<SinglePostActionBar 
				addFavorite={()=>addFavorite()}
				addComment={()=>addComment()}
				doShare={()=>doShare()}
				doBookmark={()=>doBookmark()} />
			<SinglePostDetails user={user} post={post} onSelectUser={selectUser}/>
			<SinglePostComments user={user}/>
			<SinglePostDateFooter post={post} />
		</Container>
	)
}

export default SinglePost;
