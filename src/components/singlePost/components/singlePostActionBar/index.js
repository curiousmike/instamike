import { Container, FooterActionContainer, ItemContainer } from './styles'
import { IconButton, Tooltip } from '@mui/material';
import Favorited from '@mui/icons-material/Favorite';
import NotFavorited from '@mui/icons-material/FavoriteBorder';
import IconChat from '@mui/icons-material/Chat';
import IconShare from '@mui/icons-material/Share';
import IconBookmark from '@mui/icons-material/Bookmark';
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
