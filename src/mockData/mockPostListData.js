const mockPostListData = [
    {
        userId: 1,
        postId: 1,
        image: 'flower.jpg',
		id: 13,
		timestamp: 13,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		likes: [1,2,3,4,5],	// index of userId who liked it
		comments: [],
    },
    {
        userId: 2,
        postId: 2,
        image: 'sunset.jpg',
		id: 13,
		timestamp: 13,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		likes: [3,4,5,3,3,4,3],	// index of userId who liked it
		comments: [],
    },
    {
        userId: 3,
        postId: 3,
        image: 'goldengate.jpg',
		id: 13,
		timestamp: 13,
		description: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.`,
		likes: [4,3],	// index of userId who liked it
		comments: [],
    },
    {
        userId: 4,
        postId: 4,
        image: 'bee.jpg',
		id: 13,
		timestamp: 13,
		description: `These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.`,
		likes: [5,3,3,4,3],	// index of userId who liked it
		comments: [],
    },
    {
        userId: 5,
        postId: 5,
        image: 'verywide.jpg',
		id: 13,
		timestamp: 13,
		description: `But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.`,
		likes: [3,4,5,3,3,4,3],	// index of userId who liked it
		comments: [],
    },
    {
        userId: 6,
        postId: 6,
        image: 'trees.jpg',
		id: 13,
		timestamp: 13,
		description: `The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.`,
		likes: [2,3,4,5,3,3,4,3],	// index of userId who liked it
		comments: [],
    },

];
export default mockPostListData;