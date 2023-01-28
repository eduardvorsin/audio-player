import styled from "styled-components";
import { StyledButton } from "../../UI/Button/StyledButton";

interface StyledVolumeControlsProps {
	className?: string;
}

export const StyledVolumeControls = styled.div<StyledVolumeControlsProps>`
	display: flex;
	align-self: flex-end;
	align-items: center;

	& > ${StyledButton}{
		flex: 0 0 40px;
		margin-right:10px;
	}
`;

