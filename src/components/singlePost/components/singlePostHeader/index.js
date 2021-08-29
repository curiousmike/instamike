import { Container,UserInfoContainer, ItemContainer } from './styles'
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

function SinglePostHeader() {
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
            <Icon>morehoriz</Icon>
		</Container>
	)
}

export default SinglePostHeader;
