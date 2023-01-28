import React from "react";
import { StyledMainControls } from "./StyledMainControls";
import { Button } from "../../UI/Button/Button";

import { ReactComponent as PlayIcon } from '../../../assets/images/icons/play.svg';
import { ReactComponent as PauseIcon } from '../../../assets/images/icons/pause.svg';
import { ReactComponent as PrevIcon } from '../../../assets/images/icons/prev.svg';
import { ReactComponent as NextIcon } from '../../../assets/images/icons/next.svg';

interface MainControlsProps {
	isPlayed: boolean,
	showNextAndPreviousControls?: boolean,
	togglePlaying?: React.MouseEventHandler<HTMLButtonElement>,
	onClickPrevious?: React.MouseEventHandler<HTMLButtonElement>,
	onClickNext?: React.MouseEventHandler<HTMLButtonElement>,
}

export const MainControls = React.memo<MainControlsProps>(({
	isPlayed,
	showNextAndPreviousControls = false,
	togglePlaying = () => { },
	onClickPrevious = () => { },
	onClickNext = () => { },
}) => {
	const playButtonIcon = isPlayed ? <PauseIcon /> : <PlayIcon />;

	const previousClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		onClickPrevious(e);
	}

	const nextClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		onClickNext(e);
	}

	return (
		<StyledMainControls
			nextAndPrevious={showNextAndPreviousControls}
			data-testid='main-controls'
		>
			{showNextAndPreviousControls &&
				<Button
					primary
					withoutVisibleText
					startIcon={<PrevIcon />}
					onClick={previousClickHandler}
				>
					prev track
				</Button>
			}
			<Button
				primary
				withoutVisibleText
				startIcon={playButtonIcon}
				onClick={togglePlaying}
			>
				{isPlayed ? 'pause' : 'play'}
			</Button>
			{showNextAndPreviousControls &&
				<Button
					primary
					withoutVisibleText
					startIcon={<NextIcon />}
					onClick={nextClickHandler}
				>
					next track
				</Button>
			}
		</StyledMainControls>
	)
});
