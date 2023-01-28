import { useEffect, useState } from "react";

export const useScreenWidth = (): number => {
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		const resizeHandler = (e: UIEvent): void => {
			const window = e.currentTarget as Window;
			setScreenWidth(window.innerWidth);
		}

		window.addEventListener('resize', resizeHandler);
		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	return screenWidth;
}