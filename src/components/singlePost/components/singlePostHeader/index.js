import {useState} from 'react';
import { Container,UserInfoContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import UserQuickActionMenu from '../userQuickActionMenu';
import { IconButton, Tooltip, Menu } from '@material-ui/core';
import IconHoriz from '@material-ui/icons/MoreHoriz';

function SinglePostHeader({usersData, userId, selectUser}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const user = usersData.filter(obj=>{ return obj.id === userId})[0];
    if (!user) {
        console.log('\nNOT USER DATA, userId = ', userId);
    }
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
                <ItemContainer onClick={()=>selectUser(user)}>
                    <Avatar alt={user.name} src={user.avatar} />
                </ItemContainer>
                <ItemContainer>
                    {user.name}
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
