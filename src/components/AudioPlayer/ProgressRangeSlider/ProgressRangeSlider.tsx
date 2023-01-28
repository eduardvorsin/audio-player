import styled from "styled-components";
import { RangeSlider } from "../../UI/RangeSlider/RangeSlider";

interface ProgressRangeSliderProps {
	className?: string,
}

export const ProgressRangeSlider = styled(RangeSlider) <ProgressRangeSliderProps>`
	margin-bottom: 30px;
`;

