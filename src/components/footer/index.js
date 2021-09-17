import { Container, FooterContainer, ItemContainer } from './styles'
import { IconButton, Tooltip } from '@material-ui/core';
import IconHome from '@material-ui/icons/Home';
import IconSearch from '@material-ui/icons/Search';
import IconAdd from '@material-ui/icons/AddAPhoto';
import IconFavorite from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';

function Footer({goHome, doSearch, createPost, addFavorite, goYou, youUser}) {
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
                        <IconButton aria-label="add image" onClick = {createPost}>
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
                        <Avatar 
                            onClick={goYou}
                            alt={youUser?.name}
                            src={youUser?.avatar}
                            style={{width: '4vh', height: '4vh'}}/>
                    </Tooltip>
                </ItemContainer>
            </FooterContainer>
		</Container>
	)
}

export default Footer;
