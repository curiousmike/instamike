import { useContext } from 'react';
import { StoreContext } from '../../../../store';
import { Container, InnerContainer, CommentWrapper, CommentDetailsWrapper,
	AvatarContainer, LikeIconContainer, CommentPosterName, CommentDetails, CommentDetailItem, ActionContainer } from './styles'
import {diffDatesMinutes, diffDatesHours, diffDatesDays} from '../../../../utils/utils';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Favorited from '@material-ui/icons/Favorite';
import NotFavorited from '@material-ui/icons/FavoriteBorder';

function Comment({comment, deleteComment, editComment, likeComment, viewCommenter}) {
    const myContext = useContext(StoreContext);
	const dateDiffMin = diffDatesMinutes(comment.timeStamp);
	const dateDiffHours = diffDatesHours(comment.timeStamp);
	const dateDiffDays = diffDatesDays(comment.timeStamp);
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
						{dateDiffDays >= 1 && `${dateDiffDays} days ago`} {dateDiffHours >= 1 && dateDiffHours < 24 &&  `${dateDiffHours} hours ago`}
						{dateDiffHours < 1 && `${dateDiffMin} minutes ago`}
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
