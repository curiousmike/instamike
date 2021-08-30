import { Container, FooterActionContainer, ItemContainer } from './styles'
import { Icon, Tooltip } from '@material-ui/core';

function SinglePostActionBar() {
	return (
		<Container>
			<FooterActionContainer>
				<ItemContainer>
	                <Tooltip title="Add Favorite">
						<Icon>favorite</Icon>
					</Tooltip>
				</ItemContainer>
				<ItemContainer>
					<Tooltip title="Add Comment">
						<Icon>chat</Icon>
					</Tooltip>
				</ItemContainer>
				<ItemContainer>
					<Tooltip title="Share">
						<Icon>share</Icon>
					</Tooltip>
				</ItemContainer>
				<ItemContainer>
					<Tooltip title="Bookmark">
						<Icon>bookmark</Icon>
					</Tooltip>
				</ItemContainer>
			</FooterActionContainer>
		</Container>
	)
}

export default SinglePostActionBar;
