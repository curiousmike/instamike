import { useState, useContext } from 'react';
import { StoreContext } from '../../store';
import { Container, FooterContainer, ItemContainer } from './styles';
import { IconButton, Tooltip, Avatar } from '@mui/material';
import IconHome from '@mui/icons-material/Home';
import IconSearch from '@mui/icons-material/Search';
import IconAdd from '@mui/icons-material/AddAPhoto';
// import IconFavorite from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ClickAwayListener } from '@mui/material';

function Footer({ goHome, doSearch, createPost, viewNotifications, goYou, doClickAway }) {
  const myContext = useContext(StoreContext);
  const notificationColor = myContext.youUser?.notifications.length ? 'red' : '';
  const [notificationTooltipOpen, setNotificationTooltipOpen] = useState(false);

  const handleViewNotificaitons = (e) => {
    setNotificationTooltipOpen(false);
    console.log('view = ', viewNotifications);
    viewNotifications(e);
  };

  return (
    <Container>
      <ClickAwayListener onClickAway={() => doClickAway()}>
        <FooterContainer>
          <ItemContainer>
            <IconButton aria-label="home" onClick={goHome}>
              <Tooltip title="Home" placement="top" arrow>
                <IconHome />
              </Tooltip>
            </IconButton>
          </ItemContainer>
          <ItemContainer>
            <IconButton aria-label="search" onClick={doSearch}>
              <Tooltip title="Search" arrow>
                <IconSearch />
              </Tooltip>
            </IconButton>
          </ItemContainer>
          <ItemContainer>
            <IconButton aria-label="add image" onClick={createPost}>
              <Tooltip title="Add Image" arrow>
                <IconAdd />
              </Tooltip>
            </IconButton>
          </ItemContainer>
          <ItemContainer>
            <IconButton aria-label="favorite" onClick={(e) => handleViewNotificaitons(e)}>
              <Tooltip
                open={notificationTooltipOpen}
                onOpen={() => setNotificationTooltipOpen(true)}
                onClose={() => setNotificationTooltipOpen(false)}
                title="Notifications"
                arrow
                style={{ zIndex: '2' }}
              >
                <NotificationsIcon style={{ color: notificationColor }} />
              </Tooltip>
            </IconButton>
          </ItemContainer>
          <ItemContainer>
            <Tooltip title="You" arrow>
              <Avatar
                onClick={goYou}
                alt={myContext.youUser?.name}
                src={myContext.youUser?.avatar}
                style={{ width: '4vh', height: '4vh' }}
              />
            </Tooltip>
          </ItemContainer>
        </FooterContainer>
      </ClickAwayListener>
    </Container>
  );
}

export default Footer;
