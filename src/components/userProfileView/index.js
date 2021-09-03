import { Container } from './styles'
import UserProfileHeader from './header';
import UserPostGrid from './userPostGrid';

const userPosts = [
	{
		id: 1,
		timestamp: 1,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/51312998529_986f8f09a3.jpg",
	},
	{
		id: 2,
		timestamp: 2,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/51312466093_b88b85a6e0.jpg",
	},
	{
		id: 3,
		timestamp: 3,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/51244638327_881fa2bc49.jpg",
	},
	{
		id: 4,
		timestamp: 4,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/51245548603_353a600519.jpg",
	},
	{
		id: 5,
		timestamp: 5,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/50861851302_064dcf6739.jpg",
	},
	{
		id: 6,
		timestamp: 6,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/50742746402_6e2a82d219.jpg",
	},
];

function UserProfileView() {
	return (
		<Container>
            <UserProfileHeader />
			<UserPostGrid posts={userPosts}/>
		</Container>
	)
}

export default UserProfileView;
