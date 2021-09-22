import { useContext } from 'react';
import { StoreContext } from '../../../../store';
import { Container, CommentWrapper, CommentDetailsWrapper, CommentDetails, CommentDetailItem, ActionContainer } from './styles'
import {formatDate} from '../../../../utils/utils';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Favorited from '@material-ui/icons/Favorite';
import NotFavorited from '@material-ui/icons/FavoriteBorder';

function Comment({comment, user, deleteComment, editComment, likeComment}) {
    const myContext = useContext(StoreContext);
	const canAlterComment = comment.poster === myContext.youUser.name;
	const alreadyFavorited = comment.likes.filter((like) => like === myContext.youUser.name).length ? true : false;
	return (
		<Container>
            <CommentWrapper>{comment.comment}</CommentWrapper>
			<CommentDetailsWrapper>
				<CommentDetails>
					<CommentDetailItem>
						{comment.poster}
					</CommentDetailItem>
					<CommentDetailItem>
						{formatDate(comment.timeStamp)}
					</CommentDetailItem>
				</CommentDetails>
				<ActionContainer>
					<CommentDetailItem>
						{canAlterComment && <DeleteIcon fontSize="inherit" onClick={() => deleteComment(comment)}/>}
					</CommentDetailItem>
					<CommentDetailItem>
						{canAlterComment && <EditIcon fontSize="inherit" onClick={() => editComment(comment)}/>}
					</CommentDetailItem>
					<CommentDetailItem>
						{alreadyFavorited ? <Favorited fontSize="inherit" onClick={() => likeComment(comment)}/> :
						<NotFavorited fontSize="inherit" onClick={() => likeComment(comment)}/>
						}
					</CommentDetailItem>
				</ActionContainer>
			</CommentDetailsWrapper>
		</Container>
	)
}
export default Comment;
