export interface TrackData {
	id: number,
	src: string,
	trackName: string,
	trackArtist: string,
	trackImage: {
		src: string,
		alt: string,
	},
	sources: string[],
}

export const tracks: TrackData[] = [
	{
		id: 1,
		src: './assets/audio/guitar-electro-sport-trailer-115571.mp3',
		trackName: 'Guitar Electro Sport Trailer',
		trackArtist: 'Gvidon',
		trackImage: {
			src: './assets/images/electro-guitar.jpg',
			alt: 'electric guitar on neon background',
		},
		sources: [
			'./assets/audio/guitar-electro-sport-trailer-115571.ogg',
			'./assets/audio/guitar-electro-sport-trailer-115571.wav'
		],
	},
	{
		id: 2,
		src: './assets/audio/milk-shake-116330.mp3',
		trackName: 'Milk Shake',
		trackArtist: 'Coma-Media',
		trackImage: {
			src: './assets/images/milk-shake.jpg',
			alt: 'milk cocktail on a blue background',
		},
		sources: [],
	},
	{
		id: 3,
		src: './assets/audio/goldn-116392.mp3',
		trackName: 'Goldn',
		trackArtist: 'prazkhanal',
		trackImage: {
			src: './assets/images/goldn.jpg',
			alt: 'golden leaves',
		},
		sources: [],
	},
];
