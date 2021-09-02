import { Container, Item, Number, Label } from './styles'
function HeaderItem({number, label}) {
	return (
		<Container>
            <Item>
                <Number>{number}</Number>
                <Label>{label}</Label>
            </Item>
		</Container>
	)
}

export default HeaderItem;
