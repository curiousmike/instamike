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

	{
		id: 7,
		timestamp: 7,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/50741899983_32bd3cfe35.jpg",
	},
	{
		id: 8,
		timestamp: 8,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/50350557563_a3c3ac99ae.jpg",
	},
	{
		id: 9,
		timestamp: 9,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/50351411557_29c6730e84.jpg",
	},
	{
		id: 10,
		timestamp: 10,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/50153484031_037392aa33.jpg",
	},
	{
		id: 11,
		timestamp: 11,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/50092321771_c0fd65d01c.jpg",
	},
	{
		id: 12,
		timestamp: 12,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/50048862967_d74644c97c.jpg",
	},
	{
		id: 13,
		timestamp: 13,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/49864989316_2eeaacc93c.jpg",
	},
	{
		id: 14,
		timestamp: 14,
		description: 'an image i captured',
		likes: [],
		comments: [],
		image: "https://live.staticflickr.com/65535/49611168748_369efa1dab.jpg",
	},
];

function UserProfileView({userId}) {
	return (
		<Container>
            <UserProfileHeader userId={userId}/>
			<UserPostGrid posts={userPosts}/>
		</Container>
	)
}

export default UserProfileView;
