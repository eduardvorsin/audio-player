import styled from "styled-components";

interface StyledAudioPlayerProps {
	className?: string,
};

export const StyledAudioPlayer = styled.div <StyledAudioPlayerProps>`
	background: var(--player-background-gradient);
	display: flex;
	flex-direction: column;
	max-width: 330px;
	width:100%;
	padding: 15px;
`;
