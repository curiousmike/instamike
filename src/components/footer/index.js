import { Container, FooterContainer, ItemContainer } from './styles'
import { IconButton, Tooltip } from '@material-ui/core';
import IconHome from '@material-ui/icons/Home';
import IconSearch from '@material-ui/icons/Search';
import IconAdd from '@material-ui/icons/AddAPhoto';
import IconFavorite from '@material-ui/icons/Favorite';
import IconPerson from '@material-ui/icons/Person';
function Footer({goHome, doSearch, addImage, addFavorite, goYou}) {
	return (
		<Container>
            <FooterContainer>
                <ItemContainer>
                    <Tooltip title="Home">
                        <IconButton aria-label="home" onClick = {goHome}>
							<IconHome />
						</IconButton>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="Search">
                        <IconButton aria-label="search" onClick = {doSearch}>
							<IconSearch />
						</IconButton>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="Add Image">
                        <IconButton aria-label="add image" onClick = {addImage}>
							<IconAdd />
						</IconButton>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="Favorite">
                        <IconButton aria-label="favorite" onClick = {addFavorite}>
							<IconFavorite />
						</IconButton>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="You">
                        <IconButton aria-label="you" onClick = {goYou}>
							<IconPerson />
						</IconButton>
                    </Tooltip>
                </ItemContainer>
            </FooterContainer>
		</Container>
	)
}

export default Footer;
