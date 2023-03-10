import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { Image } from "./components/UI/Image/Image";
import { StyledApp } from "./StyledApp";
import { TrackData } from "./tracksData";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/Roboto-400.woff2') format('woff2');
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('./assets/fonts/Roboto-700.woff2') format('woff2');
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
}

:root{
  --player-background-gradient:linear-gradient(110deg, hsl(216, 24%, 47%) 0%, hsl(230, 19%, 59%) 100%);
  --brand-color: hsl(216, 43%, 81%);
	--brand-hover-color: hsl(216, 43%, 71%);
	--brand-disabled-color: hsl(216, 0%, 45%);
	--secondary-color: hsl(216, 26%, 85%);
	--secondary-hover-color: hsl(216, 26%, 100%);
	--tertiary-color: hsl(216, 25%, 70%);
	--tertiary-disabled-color: hsl(216, 0%,65%);
  --dark-color:hsl(216, 25%, 45%);
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  font-size: 100%;
  font-family: 'Roboto', sans-serif;
}

html,
body {
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

img, picture, video, canvas, svg {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}
`;

interface AppProps {
  tracks: TrackData[],
}

const App: React.FC<AppProps> = ({
  tracks,
}) => {
  const [trackIndex, setTrackIndex] = useState<number>(0);

  const handleClickPrevious: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTrackIndex(prevState =>
      prevState === 0 ? tracks.length - 1 : prevState - 1
    )
  };

  const handleClickNext = (e?: React.MouseEvent<HTMLButtonElement>): void => {
    setTrackIndex(prevState =>
      prevState === tracks.length - 1 ? 0 : prevState + 1
    )
  };

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Image
          src={tracks[trackIndex]?.trackImage?.src}
          width={330}
          height={330}
          alt={tracks[trackIndex]?.trackImage?.alt}
        />
        <AudioPlayer
          preload='metadata'
          src={tracks[trackIndex]?.src}
          trackName={tracks[trackIndex]?.trackName}
          trackArtist={tracks[trackIndex]?.trackArtist}
          sources={tracks[trackIndex]?.sources}
          showDownloadControl
          showPlaybackRateControl
          showLoopControl
          showNextAndPreviousControls
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
        />
      </StyledApp>
    </>
  );
};

export default App;

