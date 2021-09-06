const mockUserData = [
	{ 
		id: 1,
		name: 'MegapixelsMike',
		firstName: 'Michael',
		lastName: 'Coustier',
		description: 'A photographer who loves astrophotography, pet photography and landscapes.  Nikon Z lover.',
	 	avatar: 'me.jpg',
        posts: 50,
        followers: [2,3],
        following: [2],
	},
	{ 
		id: 2,
		name: 'Liamazing',
		firstName: 'Liam',
		lastName: 'Coustier',
		description: 'A world class video game player who also enjoys saxophone, piano and guitar.  And Chipotle',
	 	avatar: 'liam.jpg',
         posts: 13,
		 followers: [1, 3, 4],
         following: [5],
     },
	{ 
		id: 3,
		name: 'NightowlHiker',
		firstName: 'DeeDee',
		lastName: 'Chung Hammer Coustier',
		description: 'A baker extraordinaire. A hiker of extreme speed.  Loves to dance and sing.',
	 	avatar: 'deedee.jpg',
        posts: 66,
		followers: [1, 2, 4, 5, 6],
        following: [1,2 ,4],
     },
	{ 
		id: 4,
		name: 'CushionMaker',
	 	avatar: 'zac.jpg',
		firstName: 'Zachary',
		lastName: 'Coustier',
		description: 'Metacognition is my game.  Chess, piano, math and other heady stuff is my game.',
        posts: 50,
		followers: [1, 2, 3, 5, 6],
        following: [5,6],
     },
	{ 
		id: 5,
		name: 'FlowerPot',
	 	avatar: 'aimee.jpg',
		firstName: 'Aimeè',
		lastName: 'Coustier',
		description: 'Cats, paints and health.',
		posts: 150,
		followers: [2, 3 ],
        following: [1,2,3,4],
     },
	{ 
		id: 6,
		name: 'GoldenSun',
	 	avatar: 'justin.jpg',
		firstName: 'Justin',
		lastName: 'Hammer',
		description: 'Games - board games, puzzle games and video games.  Friends.  Food.',
        posts: 53,
		followers: [2, 3, 5],
        following: [4,5],
     },
];

export default mockUserData;