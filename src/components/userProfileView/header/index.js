import { Container, ItemContainer } from './styles'
import HeaderItem from '../headerItem';
import Avatar from '@material-ui/core/Avatar';

function UserProfileHeader() {
	return (
		<Container>
            <ItemContainer>
                <Avatar alt="Insta Mike" src="me.jpg" style={{width: '96px', height: '96px'}}/>
            </ItemContainer>
            <ItemContainer>
                <HeaderItem number={1000} label={'Posts'} />
            </ItemContainer>
            <ItemContainer>
                <HeaderItem number={300} label={'Followers'} />
            </ItemContainer>
            <ItemContainer>
                <HeaderItem number={30} label={'Following'} />
            </ItemContainer>

		</Container>
	)
}

export default UserProfileHeader;
