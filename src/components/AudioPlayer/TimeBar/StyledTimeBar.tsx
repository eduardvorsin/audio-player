import styled from "styled-components";

interface StyledTimeBarProps {
	className?: string,
};

export const StyledTimeBar = styled.time<StyledTimeBarProps>`
	font-size: 16px;
	letter-spacing: 0.3px;
	margin-bottom: 10px;
	align-self: flex-end;
	color: var(--secondary-color);
`;