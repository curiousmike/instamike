const mockUserPosts = [
	{
		id: 1,
		userId: 1,
		timestamp: 1,
		description: `From atop Mission Peak, DeeDee shares the love.`,
		likes: [1,2,3],	// index of userId who liked it
		comments: [], // index of comment id
		image: "https://live.staticflickr.com/65535/51312998529_986f8f09a3.jpg",
	},
	{
		id: 2,
		userId: 1,
		timestamp: 2,
		description: `Within Pt Reyes National Park, there is one of two waterfalls within California that pours into the ocean.  In this image in late July, the water flow is sparse.`,
		likes: [1,2,3,4],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/51312466093_b88b85a6e0.jpg",
	},
	{
		id: 3,
		userId: 2,
		timestamp: 3,
		description: `Nothing really compares with being at Yosemite National Park when conditions are right.  This is from a shot when Bruce and I were setting up for some night photography.  About 20 minutes after this photo was taken, it hailed on us for 40+ minutes.`,
		likes: [1,2,3,4,5],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/51244638327_881fa2bc49.jpg",
	},
	{
		id: 4,
		userId: 2,
		timestamp: 4,
		description: `Night photography in Yosemite.  This is looking SouthEast, so the glow on the horizon is from Fresno.  This photo was taken at around 1:30 a.m.`,
		likes: [1,21,2,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/51245548603_353a600519.jpg",
	},
	{
		id: 5,
		userId: 3,
		timestamp: 5,
		description: `Zion National Park, home of The Narrows.  DeeDee is dwarfed by the sheer walls in this section.`,
		likes: [1,32,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/50861851302_064dcf6739.jpg",
	},
	{
		id: 6,
		userId: 3,
		timestamp: 6,
		description: `The Oregon coast has many spectacular scenes... none more impressive than this central Oregon spot by Thors Well`,
		likes: [2,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/50742746402_6e2a82d219.jpg",
	},

	{
		id: 7,
		userId: 4,
		timestamp: 7,
		description: `Catching this water flow from The Narrows.  We had to navigate carefully around this, just out of scene on the right.`,
		likes: [1],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/50741899983_32bd3cfe35.jpg",
	},
	{
		id: 8,
		userId: 4,
		timestamp: 8,
		description: `A full moon just rising over Mt Olympia within the Mt Diablo State park.`,
		likes: [1,2,3,4,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/50350557563_a3c3ac99ae.jpg",
	},
	{
		id: 9,
		userId: 5,
		timestamp: 9,
		description: `Our six month old puppy, Rhylee, was waiting to be freed from her kennel.`,
		likes: [1,2,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/50351411557_29c6730e84.jpg",
	},
	{
		id: 10,
		userId: 5,
		timestamp: 10,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		likes: [1,2,3,4,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/50153484031_037392aa33.jpg",
	},
	{
		id: 11,
		userId: 6,
		timestamp: 11,
		description: `More backyard fun - this bumblebee enjoying our lavender garden.`,
		likes: [1,2,3,4,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/50092321771_c0fd65d01c.jpg",
	},
	{
		id: 12,
		userId: 6,
		timestamp: 12,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		likes: [14,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/50048862967_d74644c97c.jpg",
	},
	{
		id: 13,
		userId: 1,
		timestamp: 13,
		description: `When your backyard can surprise you with a dragon fly species you've not seen before.`,
		likes: [1,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/49864989316_2eeaacc93c.jpg",
	},
	{
		id: 14,
		userId: 1,
		timestamp: 14,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		likes: [1,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/49611168748_369efa1dab.jpg",
	},



	{
		id: 14,
		userId: 2,
		timestamp: 14,
		description: `A different view of the Golden Gate Bridge`,
		likes: [1,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/49611163143_2ccd93af6c_z.jpg",
	},
	{
		id: 14,
		userId: 3,
		timestamp: 14,
		description: `Had a great time at the Monterey Bay Aquarium.`,
		likes: [1,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/49611677971_247759e8c5_z.jpg",
	},
	{
		id: 14,
		userId: 4,
		timestamp: 14,
		description: `The Narrows from Zion National Park - a trip I won't soon forget`,
		likes: [1,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/48953868636_061dc49cef_z.jpg",
	},
	{
		id: 14,
		userId: 5,
		timestamp: 14,
		description: `Standing tall - these trees are from a forest in extreme northern california`,
		likes: [1,5,3,3,4,3],	// index of userId who liked it
		comments: [],
		image: "https://live.staticflickr.com/65535/48388847622_05401ec7c5_z.jpg",
	},
];
export default mockUserPosts;