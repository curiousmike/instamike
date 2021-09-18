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

    const addFollowing = async (newFollowUser) => {
        // myUser will FOLLOWING user
        const updatedYouUser = {...myContext.youUser};
        updatedYouUser.following.push(newFollowUser.name);
        console.log('Update user FOLLOWING - ', myContext.youUser.name);
        await updateUser(myContext.youUser, updatedYouUser);
    }

    const addFollower = async (newFollowUser) => {
        // newFollowUser will now have myUser as a FOLLOWERS
        const updatedNewFollowUser = {...newFollowUser};
        updatedNewFollowUser.followers.push(myContext.youUser.name);
        console.log('Update user FOLLOWERS - ', newFollowUser.name);
        await updateUser(newFollowUser, updatedNewFollowUser);
    }

    const onFollow = async (newFollowUser) => {
        await addFollowing (newFollowUser);
        await addFollower(newFollowUser);
        handleMenuClose();
    }

    const onHide = (user) => { 
        console.log('on hide');
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const showFollowHideMenu = user?.name !== myContext?.youUser?.name;
    const showFollowOption = myContext?.youUser?.following.filter(followName=> {return followName === user.name}).length ? false : true;
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
