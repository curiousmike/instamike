import { Container, FooterActionContainer, ItemContainer } from './styles'
import Icon from '@material-ui/core/Icon';

function SinglePostActionBar() {
	return (
		<Container>
			<FooterActionContainer>
				<ItemContainer>
					<Icon>favorite</Icon>
				</ItemContainer>
				<ItemContainer>
					<Icon>chat</Icon>
				</ItemContainer>
				<ItemContainer>
					<Icon>share</Icon>
				</ItemContainer>
				<ItemContainer>
					<Icon>bookmark</Icon>
				</ItemContainer>
			</FooterActionContainer>
		</Container>
	)
}

export default SinglePostActionBar;
