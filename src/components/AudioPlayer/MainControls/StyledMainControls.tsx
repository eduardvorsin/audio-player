import styled from "styled-components";

interface StyledMainControlsProps {
	className?: string,
	nextAndPrevious: boolean,
}

export const StyledMainControls = styled.div<StyledMainControlsProps>`
	align-self:center;
	display: flex;
	justify-content: ${({ nextAndPrevious }) => nextAndPrevious ? 'center' : 'flex-start'};
	
	& > *:not(:last-child){
		margin-right: 10px;
	}
`;
