import styled from "styled-components";

interface StyledImageProps {
	className?: string
}

export const StyledImage = styled.img<StyledImageProps>`
	object-fit: cover;
	height: auto;
`;