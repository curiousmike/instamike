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
import Snackbar from '@material-ui/core/Snackbar';
import {updatePost} from '../../services/postservice';

function SinglePost({ post, selectUser, id }) {
    const myContext = useContext(StoreContext);
	const [toastMessage, setShowToast] = useState(null);
	const alreadyFavorited = post.likes.filter((like) => like === myContext.youUser.name).length ? true : false;
	const {name, image} = post;
    const [dialogTitle, setDialogTitle] = useState(null);
	const [fullScreen, setFullScreen] = useState(false);
	const user = myContext.users.filter(object=> {return object.name === name})[0];
	if (!user) {
		console.log('could not find user name = ', name);
		return(<div/>);
	}
	const addFavorite = () => {
		const postCopy = {...post};
		if (alreadyFavorited) {
			// remove favorite
			const updatedFavorites = postCopy.likes.filter((likeUser) => likeUser !== myContext.youUser.name);
			postCopy.likes = updatedFavorites;
			updatePost(post, postCopy);
			setShowToast('Post - removed like');
		} else {
			// add favorite
			postCopy.likes.push(myContext.youUser.name);
			setShowToast('Post - Liked !');
			updatePost(post, postCopy);
		}
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
			<div>
				<Snackbar
					open={toastMessage !=null}
					autoHideDuration={2500}
					onClose={()=>setShowToast(null)}
					message={toastMessage}
					anchorOrigin = {{ vertical: 'top', horizontal:'center'}}
				/>	
			</div>
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
				alreadyFavorited={alreadyFavorited} 
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
