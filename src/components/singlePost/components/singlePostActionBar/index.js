import { Container, FooterActionContainer, ItemContainer } from './styles'
import { IconButton, Tooltip } from '@material-ui/core';
import Favorited from '@material-ui/icons/Favorite';
import NotFavorited from '@material-ui/icons/FavoriteBorder';
import IconChat from '@material-ui/icons/Chat';
import IconShare from '@material-ui/icons/Share';
import IconBookmark from '@material-ui/icons/Bookmark';
function SinglePostActionBar({alreadyFavorited, addFavorite, addComment, doShare, doBookmark}) {
	return (
		<Container>
			<FooterActionContainer>
				<ItemContainer>
	                <Tooltip title={alreadyFavorited ? "Remove Favorite" : "Add Favorite"}>
						<IconButton aria-label="favorite" onClick = {addFavorite}>
							{alreadyFavorited ? <Favorited style={{color: '#ff1493'}}/> : <NotFavorited />}
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
