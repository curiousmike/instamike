import { Container, FooterActionContainer, ItemContainer } from './styles'
import { IconButton, Tooltip } from '@material-ui/core';
import IconFavorite from '@material-ui/icons/Favorite';
import IconChat from '@material-ui/icons/Chat';
import IconShare from '@material-ui/icons/Share';
import IconBookmark from '@material-ui/icons/Bookmark';
function SinglePostActionBar({addFavorite, addComment, doShare, doBookmark}) {
	return (
		<Container>
			<FooterActionContainer>
				<ItemContainer>
	                <Tooltip title="Add Favorite">
						<IconButton aria-label="favorite" onClick = {addFavorite}>
							<IconFavorite />
						</IconButton>
					</Tooltip>
				</ItemContainer>
				<ItemContainer>
					<Tooltip title="Add Comment">
						<IconButton aria-label="comment" onClick = {addComment}>
							<IconChat />
						</IconButton>
					</Tooltip>
				</ItemContainer>
				<ItemContainer>
					<Tooltip title="Share">
						<IconButton aria-label="share" onClick={doShare}>
							<IconShare />
						</IconButton>
					</Tooltip>
				</ItemContainer>
				<ItemContainer>
					<Tooltip title="Bookmark">
						<IconButton aria-label="bookmark" onClick={doBookmark}>
							<IconBookmark />
						</IconButton>
					</Tooltip>
				</ItemContainer>
			</FooterActionContainer>
		</Container>
	)
}

export default SinglePostActionBar;
