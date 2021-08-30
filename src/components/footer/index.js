import { Container, FooterContainer, ItemContainer } from './styles'
import { Icon, Tooltip } from '@material-ui/core';
function Footer() {
	return (
		<Container>
            <FooterContainer>
                <ItemContainer>
                    <Tooltip title="Home">
                        <Icon alt="home">home</Icon>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="Search">
                        <Icon>search</Icon>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="Add Image">
                        <Icon>add</Icon>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="Favorite">
                        <Icon>favorite</Icon>
                    </Tooltip>
                </ItemContainer>
                <ItemContainer>
                    <Tooltip title="You">
                        <Icon>person</Icon>
                    </Tooltip>
                </ItemContainer>
            </FooterContainer>
		</Container>
	)
}

export default Footer;
