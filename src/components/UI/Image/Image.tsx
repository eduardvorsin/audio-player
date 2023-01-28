import React from 'react';
import { StyledImage } from './StyledImage';


interface ImageProps extends Partial<React.ImgHTMLAttributes<HTMLImageElement>> {
	src: string,
	alt: string,
	width?: number,
	height?: number,
	className?: string,
};

export const Image: React.FC<ImageProps> = ({
	src,
	alt,
	width = 50,
	height = 50,
	className = '',
	...props
}) => {
	return (
		<StyledImage
			src={src}
			width={width}
			height={height}
			alt={alt}
			className={className}
			{...props}
		/>
	);
};