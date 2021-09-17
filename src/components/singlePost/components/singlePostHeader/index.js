import {useState} from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../../../store';
import { updateUser } from '../../../../services/userservice';

import { Container,UserInfoContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import UserQuickActionMenu from '../userQuickActionMenu';
import { IconButton, Tooltip, Menu } from '@material-ui/core';
import IconHoriz from '@material-ui/icons/MoreHoriz';

function SinglePostHeader({name, selectUser }) {
    const myContext = useContext(StoreContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const user = myContext.users.filter(obj=>{ return obj.name === name})[0];

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const onFollow = (user) => {
        const updatedUser = {...myContext.youUser};
        updatedUser.following.push(user.name);
        updateUser(myContext.youUser, updatedUser);
    }

    const onHide = (user) => { 
        console.log('on hide');
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const showFollowHideMenu = user.name !== myContext.youUser.name;
    const showFollowOption = myContext.youUser.following.filter(followName=> {return followName === user.name}).length ? false : true;
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
            { showFollowHideMenu && 
            <div id="followHideMenu">
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
                        <UserQuickActionMenu 
                            onFollow={showFollowOption ? ()=>onFollow(user) : null} 
                            onHide={()=>onHide(user)}
                        />
                    </div>
                </Menu>
            </div>
            }
		</Container>
	)
}

export default SinglePostHeader;
