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
            <Tooltip title="Home">
              <IconButton aria-label="home" onClick={goHome}>
                <IconHome />
              </IconButton>
            </Tooltip>
          </ItemContainer>
          <ItemContainer>
            <Tooltip title="Search">
              <IconButton aria-label="search" onClick={doSearch}>
                <IconSearch />
              </IconButton>
            </Tooltip>
          </ItemContainer>
          <ItemContainer>
            <Tooltip title="Add Image">
              <IconButton aria-label="add image" onClick={createPost}>
                <IconAdd />
              </IconButton>
            </Tooltip>
          </ItemContainer>
          <ItemContainer>
            <Tooltip
              open={notificationTooltipOpen}
              onOpen={() => setNotificationTooltipOpen(true)}
              onClose={() => setNotificationTooltipOpen(false)}
              title="Notifications"
            >
              <IconButton aria-label="favorite" onClick={(e) => handleViewNotificaitons(e)}>
                <NotificationsIcon style={{ color: notificationColor }} />
              </IconButton>
            </Tooltip>
          </ItemContainer>
          <ItemContainer>
            <Tooltip title="You">
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
