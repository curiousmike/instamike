import {useState} from 'react';
import { Container,UserInfoContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import UserQuickActionMenu from '../userQuickActionMenu';
import { IconButton, Tooltip, Menu } from '@material-ui/core';
import IconHoriz from '@material-ui/icons/MoreHoriz';

function SinglePostHeader({usersData, name, selectUser}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const user = usersData.filter(obj=>{ return obj.name === name})[0];

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const onFollow = (user) => {
        console.log('add follow');
    }

    const onHide = (user) => { 
        console.log('on hide');
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
	return (
		<Container>
            { user && <UserInfoContainer>
                <ItemContainer onClick={()=>selectUser(user)}>
                    <Avatar alt={user.name} src={user.avatar} />
                </ItemContainer>
                <ItemContainer>
                    {user.name}
                </ItemContainer>
            </UserInfoContainer> }
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
                <div id ="fix react ref error">
                    <UserQuickActionMenu onFollow={(user)=>onFollow(user)} onHide={(user)=>onHide(user)}/>
                </div>
            </Menu>
		</Container>
	)
}

export default SinglePostHeader;
