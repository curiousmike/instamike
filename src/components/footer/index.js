import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../store';
import { Container, FooterContainer, ItemContainer } from './styles';
import { IconButton, Tooltip, Avatar } from '@mui/material';
import IconHome from '@mui/icons-material/Home';
import IconSearch from '@mui/icons-material/Search';
import IconAdd from '@mui/icons-material/AddAPhoto';
// import IconFavorite from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Footer({ goHome, doSearch, createPost, viewNotifications, goYou, doClickAway }) {
  const myContext = useContext(StoreContext);
  const [notificationColor, setNotificationColor] = useState('');
  const [notificationTooltipOpen, setNotificationTooltipOpen] = useState(false);

  useEffect(() => {
    let hasUnread = false;
    myContext.youUser?.notifications.forEach((n) => {
      if (n.read === false) {
        hasUnread = true;
      }
    });
    setNotificationColor(hasUnread ? 'red' : '');
  }, [myContext.youUser?.notifications]);

  const handleViewNotifications = (e) => {
    setNotificationTooltipOpen(false);
    // console.log('view = ', viewNotifications);
    viewNotifications(e);
  };

  return (
    <Container>
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
          <IconButton aria-label="favorite" onClick={(e) => handleViewNotifications(e)}>
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
              src={`http://www.coustier.com${myContext.youUser?.avatarFileNameSmall}`}
              style={{ width: '4vh', height: '4vh' }}
            />
          </Tooltip>
        </ItemContainer>
      </FooterContainer>
    </Container>
  );
}

export default Footer;
