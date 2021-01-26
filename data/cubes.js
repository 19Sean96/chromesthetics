const cubes = [
	// BOX 0
	{
		pos: [-4, 4, 4],
		scaleIndex: {
			x: 0,
			y: 2,
			z: 4,
		},
		rotationIndex: {
			x: 1,
			y: 3,
			z: 5,
		},
	},
	// BOX 1
	{
		pos: [0, 4, 4],
		scaleIndex: {
			x: 0,
			y: 2,
			z: 4,
		},
		rotationIndex: {
			x: 2,
			y: 4,
			z: 6,
		},
	},
	// BOX 2
	{
		pos: [4, 4, 4],
		scaleIndex: {
			x: 0,
			y: 2,
			z: 4,
		},
		rotationIndex: {
			x: 3,
			y: 5,
			z: 7,
		},
	},
	// BOX 3
	{
		pos: [-4, 0, 4],
		scaleIndex: {
			x: 1,
			y: 3,
			z: 5,
		},
		rotationIndex: {
			x: 1,
			y: 3,
			z: 5,
		},
	},
	// BOX 4
	{
		pos: [0, 0, 4],
		scaleIndex: {
			x: 1,
			y: 3,
			z: 5,
		},
		rotationIndex: {
			x: 2,
			y: 4,
			z: 6,
		},
	},
	// BOX 5
	{
		pos: [4, 0, 4],
		scaleIndex: {
			x: 1,
			y: 3,
			z: 5,
		},
		rotationIndex: {
			x: 3,
			y: 5,
			z: 7,
		},
	},
	// BOX 6
	{
		pos: [-4, -4, 4],
		scaleIndex: {
			x: 0,
			y: 6,
			z: 11,
		},
		rotationIndex: {
			x: 1,
			y: 3,
			z: 5,
		},
	},
	// BOX 7
	{
		pos: [0, -4, 4],
		scaleIndex: {
			x: 0,
			y: 6,
			z: 11,
		},
		rotationIndex: {
			x: 2,
			y: 4,
			z: 6,
		},
	},
	// BOX 8
	{
		pos: [4, -4, 4],
		scaleIndex: {
			x: 0,
			y: 6,
			z: 11,
		},
		rotationIndex: {
			x: 2,
			y: 4,
			z: 6,
		},
	},
	// BOX 9
	{
		pos: [-4, 4, 0],
		scaleIndex: {
			x: 4,
			y: 0,
			z: 2,
		},
		rotationIndex: {
			x: 9,
			y: 6,
			z: 2,
		},
	},
	// BOX 10
	{
		pos: [0, 4, 0],
		scaleIndex: {
			x: 5,
			y: 1,
			z: 3,
		},
		rotationIndex: {
			x: 8,
			y: 5,
			z: 1,
		},
	},
	// BOX 11
	{
		pos: [4, 4, 0],
		scaleIndex: {
			x: 6,
			y: 2,
			z: 4,
		},
		rotationIndex: {
			x: 7,
			y: 4,
			z: 0,
		},
	},
	// BOX 12
	{
		pos: [-4, 0, 0],
		scaleIndex: {
			x: 4,
			y: 0,
			z: 8,
		},
		rotationIndex: {
			x: 5,
			y: 3,
			z: 8,
		},
	},
	// BOX 13
	{
		pos: [0, 0, 0],
		scaleIndex: {
			x: 5,
			y: 1,
			z: 9,
		},
		rotationIndex: {
			x: 4,
			y: 2,
			z: 7,
		},
	},
	// BOX 14
	{
		pos: [4, 0, 0],
		scaleIndex: {
			x: 6,
			y: 2,
			z: 10,
		},
		rotationIndex: {
			x: 3,
			y: 1,
			z: 6,
		},
	},
	// BOX 15
	{
		pos: [-4, -4, 0],
		scaleIndex: {
			x: 7,
			y: 3,
			z: 11,
		},
		rotationIndex: {
			x: 2,
			y: 0,
			z: 5,
		},
	},
	// BOX 16
	{
		pos: [0, -4, 0],
		scaleIndex: {
			x: 9,
			y: 1,
			z: 5,
		},
		rotationIndex: {
			x: 2,
			y: 4,
			z: 1,
		},
	},
	// BOX 17
	{
		pos: [4, -4, 0],
		scaleIndex: {
			x: 10,
			y: 2,
			z: 6,
		},
		rotationIndex: {
			x: 1,
			y: 3,
			z: 0,
		},
	},
	// BOX 18
	{
		pos: [-4, 4, -4],
		scaleIndex: {
			x: 3,
			y: 8,
			z: 11,
		},
		rotationIndex: {
			x: 0,
			y: 3,
			z: 9,
		},
	},
	// BOX 19
	{
		pos: [0, 4, -4],
		scaleIndex: {
			x: 4,
			y: 9,
			z: 0,
		},
		rotationIndex: {
			x: 11,
			y: 2,
			z: 8,
		},
	},
	// BOX 20
	{
		pos: [4, 4, -4],
		scaleIndex: {
			x: 5,
			y: 10,
			z: 1,
		},
		rotationIndex: {
			x: 10,
			y: 1,
			z: 7,
		},
	},
	// BOX 21
	{
		pos: [-4, 0, -4],
		scaleIndex: {
			x: 11,
			y: 3,
			z: 6,
		},
		rotationIndex: {
			x: 3,
			y: 9,
			z: 0,
		},
	},
	// BOX 22
	{
		pos: [0, 0, -4],
		scaleIndex: {
			x: 0,
			y: 4,
			z: 7,
		},
		rotationIndex: {
			x: 2,
			y: 8,
			z: 11,
		},
	},
	// BOX 23
	{
		pos: [4, 0, -4],
		scaleIndex: {
			x: 1,
			y: 3,
			z: 5,
		},
		rotationIndex: {
			x: 3,
			y: 5,
			z: 7,
		},
	},
	// BOX 24
	{
		pos: [-4, -4, -4],
		scaleIndex: {
			x: 0,
			y: 6,
			z: 11,
		},
		rotationIndex: {
			x: 1,
			y: 3,
			z: 5,
		},
	},
	// BOX 25
	{
		pos: [0, -4, -4],
		scaleIndex: {
			x: 0,
			y: 6,
			z: 11,
		},
		rotationIndex: {
			x: 2,
			y: 4,
			z: 6,
		},
	},
	// BOX 26
	{
		pos: [4, -4, -4],
		scaleIndex: {
			x: 0,
			y: 6,
			z: 11,
		},
		rotationIndex: {
			x: 2,
			y: 4,
			z: 6,
		},
	},
];

// DATA NEEDED
// 1. X,Y,Z COORD
// 2. ROTATION INDEX
// 3. SCALE INDEX

// TOTAL BOXES NEEDED: 3X3X3 = 27
// starting from front-left-top

export default cubes;