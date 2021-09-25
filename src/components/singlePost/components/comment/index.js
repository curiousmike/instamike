import { useContext } from 'react';
import { StoreContext } from '../../../../store';
import { Container, InnerContainer, CommentWrapper, CommentDetailsWrapper,
	AvatarContainer, LikeIconContainer, CommentPosterName, CommentDetails, CommentDetailItem, ActionContainer } from './styles'
import {getTimeToShow} from '../../../../utils/utils';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Favorited from '@material-ui/icons/Favorite';
import NotFavorited from '@material-ui/icons/FavoriteBorder';

function Comment({comment, deleteComment, editComment, likeComment, viewCommenter}) {
    const myContext = useContext(StoreContext);
	const timeToShow = getTimeToShow(comment.timeStamp);
	// console.log ('day, hours, min = ', dateDiffDays, dateDiffHours, dateDiffMin);
	const commentPoster = myContext.users.filter((user) => user.name === comment.poster)[0];
	const canAlterComment = comment.poster === myContext.youUser.name;
	const alreadyFavorited = comment.likes.filter((like) => like === myContext.youUser.name).length ? true : false;
	return (
		<Container>
			<InnerContainer>
				<AvatarContainer onClick={()=>viewCommenter(commentPoster)}>
					<Avatar alt={commentPoster.name} src={commentPoster.avatar} />
				</AvatarContainer>
				<CommentWrapper><CommentPosterName>{commentPoster.name}</CommentPosterName> {comment.comment}</CommentWrapper>
				<LikeIconContainer>
						{alreadyFavorited ? <Favorited style={{color: '#ff1493'}} fontSize="inherit" onClick={() => likeComment(comment)}/> :
						<NotFavorited fontSize="inherit" onClick={() => likeComment(comment)}/>
						}
				</LikeIconContainer>
			</InnerContainer>
			<ActionContainer>
				<CommentDetails>
					<CommentDetailItem>
						{timeToShow}
					</CommentDetailItem>
					<CommentDetailItem>
						{comment.likes.length >= 1 ? `${comment.likes.length} likes` : ''}
					</CommentDetailItem>
				</CommentDetails>
				<CommentDetailItem>
					{canAlterComment && <DeleteIcon fontSize="inherit" onClick={() => deleteComment(comment)}/>}
				</CommentDetailItem>
				<CommentDetailItem>
					{canAlterComment && <EditIcon fontSize="inherit" onClick={() => editComment(comment)}/>}
				</CommentDetailItem>
			</ActionContainer>
		</Container>
	)
}
export default Comment;
