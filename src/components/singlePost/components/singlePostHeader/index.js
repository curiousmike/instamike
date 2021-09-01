import {useState} from 'react';
import { Container,UserInfoContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import UserQuickActionMenu from '../userQuickActionMenu';
import { IconButton, Tooltip, Menu } from '@material-ui/core';
import IconHoriz from '@material-ui/icons/MoreHoriz';

function SinglePostHeader({openMenu}) {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleMenuOpen = (event) => {
        console.log('handl menu open');
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
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
                <IconButton aria-label="home" onClick = {(e)=>handleMenuOpen(e)}>
                    <IconHoriz />
                </IconButton>
            </Tooltip>
            <Menu    
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleMenuClose}
                >
                    <UserQuickActionMenu/>
            </Menu>
		</Container>
	)
}

export default SinglePostHeader;
