export const formatTime = (secs: number): string | never => {
	if (Number.isNaN(+secs)) {
		throw new Error('the passed value must be a number');
	}

	if (!Number.isFinite(secs)) {
		throw new Error('the passed value must be a finite number');
	}

	const minutes = Math.floor(secs / 60);
	const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
	const seconds = Math.floor(secs % 60);
	const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
	return `${returnedMinutes}:${returnedSeconds}`;
}

export const isCorrectAudioFormat = (fileName: string): boolean | never => {
	if (typeof fileName !== 'string') {
		throw new Error('the passed value must be a string');
	}

	const audioFormatRegexp = /.+\.(wav|mp3|ogg|flac|aac|webm)$/;

	return audioFormatRegexp.test(fileName)
};