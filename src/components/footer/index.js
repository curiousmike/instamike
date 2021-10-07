import { useContext } from 'react';
import { StoreContext } from '../../store';
import { Container, FooterContainer, ItemContainer } from './styles';
import { IconButton, Tooltip, Avatar } from '@mui/material';
import IconHome from '@mui/icons-material/Home';
import IconSearch from '@mui/icons-material/Search';
import IconAdd from '@mui/icons-material/AddAPhoto';
// import IconFavorite from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Footer({ goHome, doSearch, createPost, viewNotifications, goYou }) {
  const myContext = useContext(StoreContext);
  const notificationColor = myContext.youUser?.notifications.length ? 'red' : '';
  return (
    <Container>
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
          <Tooltip title="Notifications">
            <IconButton aria-label="favorite" onClick={viewNotifications}>
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
    </Container>
  );
}

export default Footer;
