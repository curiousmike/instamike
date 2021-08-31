import { Container,UserInfoContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import { IconButton, Tooltip } from '@material-ui/core';
import IconHoriz from '@material-ui/icons/MoreHoriz';

function SinglePostHeader({openMenu}) {
	return (
		<Container>
            <UserInfoContainer>
                <ItemContainer>
                    <Avatar alt="Insta Mike" src="me.jpg" />
                </ItemContainer>
                <ItemContainer>
                    megapixelsmike
                </ItemContainer>
            </UserInfoContainer>
            <Tooltip title="Menu">
                <IconButton aria-label="home" onClick = {()=>console.log('open menu')}>
                    <IconHoriz />
                </IconButton>
            </Tooltip>
		</Container>
	)
}

export default SinglePostHeader;
