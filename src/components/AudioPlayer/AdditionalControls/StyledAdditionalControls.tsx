import styled from "styled-components";

interface StyledAdditionalControlsProps {
	className?: string,
}

export const StyledAdditionalControls = styled.div<StyledAdditionalControlsProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&>*:not(:last-child){
		margin-right:20px;
	}
`;