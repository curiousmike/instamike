import { Container, ActionContainer, ItemContainer } from './styles'
import Icon from '@material-ui/core/Icon';
function Footer() {
	return (
		<Container>
            <ItemContainer>
                <Icon>home</Icon>
            </ItemContainer>
            <ItemContainer>
                <Icon>search</Icon>
            </ItemContainer>
            <ItemContainer>
                <Icon>add</Icon>
            </ItemContainer>
            <ItemContainer>
                <Icon>favorite</Icon>
            </ItemContainer>
            <ItemContainer>
                <Icon>person</Icon>
            </ItemContainer>
		</Container>
	)
}

export default Footer;
