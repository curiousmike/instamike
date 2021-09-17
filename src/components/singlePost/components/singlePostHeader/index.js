import {useState} from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../../../store';

import { Container,UserInfoContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import UserQuickActionMenu from '../userQuickActionMenu';
import { IconButton, Tooltip, Menu } from '@material-ui/core';
import IconHoriz from '@material-ui/icons/MoreHoriz';

function SinglePostHeader({name, selectUser, users, posts, youUser}) {
    const myContext = useContext(StoreContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const user = myContext.users.filter(obj=>{ return obj.name === name})[0];

    // console.log('singlePostHeader = users ', myContext.users);
    // console.log('singlePostHeader = posts ', myContext.posts);
    // console.log('singlePostHeader = youUser ', myContext.youUser);
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
