import {useState} from 'react';
import { Container, FullScreenImage } from './styles'
import { useContext } from 'react';
import { StoreContext } from '../../store';
import { deletePost } from '../../services/postservice';
import SinglePostHeader from './components/singlePostHeader';
import SinglePostImage from './components/singlePostImage';
import SinglePostActionBar from './components/singlePostActionBar';
import SinglePostDetails from './components/singlePostDetails';
import SinglePostComments from './components/singlePostComments';
import SinglePostDateFooter from './components/singlePostDateFooter';
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';

function SinglePost({ post, selectUser, id }) {
    const myContext = useContext(StoreContext);
	const {name, image} = post;
    const [dialogTitle, setDialogTitle] = useState(null);
	const [fullScreen, setFullScreen] = useState(false);
	const user = myContext.users.filter(object=> {return object.name === name})[0];
	if (!user) {
		console.log('could not find user name = ', name);
		return(<div/>);
	}
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

	const handleDelete = (post) => {
		deletePost(post);
	}

	const handleImageClick = (post) => {
		setFullScreen(true);
	}

	return (
		<Container id={id}>
			{fullScreen && 
				<FullScreenImage onClick={()=>setFullScreen(false)}>
					<img alt="my alt" style={{maxHeight:"100%", maxWidth:"100%"}} src={image}/>
				</FullScreenImage>
			}
			<Dialog open={dialogTitle !== null}>
				<DialogTitle id="simple">{dialogTitle}</DialogTitle>
				<DialogActions>
					<Button onClick={()=>setDialogTitle(null)} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
			<SinglePostHeader post={post} name={name} selectUser={(user)=>selectUser(user)} onDelete={() => handleDelete(post)}/>
			<SinglePostImage imgSrc={image} onImageClick={()=>handleImageClick(post)}/>
			<SinglePostActionBar 
				addFavorite={()=>addFavorite()}
				addComment={()=>addComment()}
				doShare={()=>doShare()}
				doBookmark={()=>doBookmark()} />
			<SinglePostDetails user={user} post={post} onSelectUser={selectUser}/>
			<SinglePostComments user={user} post={post} viewCommenter={selectUser}/>
			<SinglePostDateFooter post={post} />
		</Container>
	)
}

export default SinglePost;
