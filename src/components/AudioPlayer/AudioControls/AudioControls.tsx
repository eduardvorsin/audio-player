import React from "react";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { StyledAudioControls } from "./StyledAudioControls";
import { MainControls } from "../MainControls/MainControls";
import { AdditionalControls } from "../AdditionalControls/AdditionalControls";
import { VolumeControls } from "../VolumeControls/VolumeControls";

interface AudioControlsProps {
	isPlayed: boolean,
	isMuted: boolean,
	volume?: number,
	showDownloadControl?: boolean,
	showNextAndPreviousControls?: boolean,
	showLoopControl?: boolean,
	showPlaybackRateControl?: boolean,
	isLooped?: boolean,
	playbackRate?: number,
	className?: string,
	downloadLink?: string,
	toggleMuting?: React.MouseEventHandler<HTMLButtonElement>,
	onVolumeChange?: React.ChangeEventHandler<HTMLInputElement>,
	changePlaybackRate?: React.MouseEventHandler<HTMLButtonElement>,
	changeLooping?: React.MouseEventHandler<HTMLButtonElement>,
	togglePlaying?: React.MouseEventHandler<HTMLButtonElement>,
	onClickPrevious?: React.MouseEventHandler<HTMLButtonElement>,
	onClickNext?: React.MouseEventHandler<HTMLButtonElement>,
};

export const AudioControls = React.memo<AudioControlsProps>(({
	isPlayed,
	isMuted,
	volume = 50,
	showDownloadControl = false,
	showPlaybackRateControl = false,
	showNextAndPreviousControls = false,
	showLoopControl = false,
	isLooped = false,
	downloadLink = '',
	playbackRate = 1,
	toggleMuting = () => { },
	onVolumeChange = () => { },
	changeLooping = () => { },
	changePlaybackRate = () => { },
	togglePlaying = () => { },
	onClickPrevious = () => { },
	onClickNext = () => { },
}) => {

	const screenWidth = useScreenWidth();
	const isMobileWidth = screenWidth < 769;
	const showAdditionalControls =
		showDownloadControl || showPlaybackRateControl || showLoopControl;

	return (
		<StyledAudioControls
			data-testid='audio-controls'
		>
			<MainControls
				isPlayed={isPlayed}
				togglePlaying={togglePlaying}
				showNextAndPreviousControls={showNextAndPreviousControls}
				onClickPrevious={onClickPrevious}
				onClickNext={onClickNext}
			/>

			{!isMobileWidth &&
				<VolumeControls
					volume={volume}
					onVolumeChange={onVolumeChange}
					isMuted={isMuted}
					toggleMuting={toggleMuting}
				/>
			}

			{showAdditionalControls &&
				<AdditionalControls
					showDownloadControl={showDownloadControl}
					downloadLink={downloadLink}
					showPlaybackRateControl={showPlaybackRateControl}
					changePlaybackRate={changePlaybackRate}
					playbackRate={playbackRate}
					showLoopControl={showLoopControl}
					changeLooping={changeLooping}
					isLooped={isLooped}
				/>
			}
		</StyledAudioControls>
	);
});