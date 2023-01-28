import React from "react";
import { Button } from "../../UI/Button/Button";
import { StyledVolumeControls } from "./StyledVolumeControls";
import { ReactComponent as MuteIcon } from '../../../assets/images/icons/mute.svg';
import { ReactComponent as VolumeIcon } from '../../../assets/images/icons/volume.svg';
import { RangeSlider } from "../../UI/RangeSlider/RangeSlider";

interface VolumeControlsProps {
	isMuted: boolean,
	volume?: number,
	onVolumeChange?: React.ChangeEventHandler<HTMLInputElement>,
	toggleMuting?: React.MouseEventHandler<HTMLButtonElement>,
}

export const VolumeControls = React.memo<VolumeControlsProps>(({
	volume = 50,
	onVolumeChange = () => { },
	isMuted = false,
	toggleMuting = () => { },
}) => {
	const currentIcon = isMuted ? <MuteIcon /> : <VolumeIcon />;

	return (
		<StyledVolumeControls
			data-testid='volume-controls'
		>
			<Button
				withoutVisibleText
				startIcon={currentIcon}
				onClick={toggleMuting}
			>
				{isMuted ? 'unmute' : 'mute'}
			</Button>
			<RangeSlider
				onChange={onVolumeChange}
				defaultValue={volume}
			/>
		</StyledVolumeControls>
	);
});
