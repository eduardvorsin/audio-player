import styled from "styled-components";
interface StyledAppProps {
	className?: ''
}

export const StyledApp = styled.div<StyledAppProps>`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
`;