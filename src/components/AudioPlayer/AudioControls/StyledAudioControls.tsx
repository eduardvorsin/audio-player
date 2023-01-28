import styled from "styled-components";
import { StyledAdditionalControls } from "../AdditionalControls/StyledAdditionalControls";

interface StyledAudioControlsProps {
	className?: string
};

export const StyledAudioControls = styled.div<StyledAudioControlsProps>`
	display: grid;
	justify-content: center;
	gap:15px;
	grid-template-columns: 1fr;
	grid-template-rows: min-content;
	grid-auto-rows: min-content;

	@media(min-width:769px){
		grid-template-columns: 1fr 1fr;
	}

	& > ${StyledAdditionalControls}{
		grid-column: span 2;
	}
`;

