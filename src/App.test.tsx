import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { TrackData } from "./tracksData";

const tracksStub: TrackData[] = [{
  id: 1,
  src: './assets/audio/abc.mp3',
  trackName: 'abc tracks',
  trackArtist: 'artist of abc',
  trackImage: {
    src: './assets/images/abc.jpg',
    alt: 'abc alt text',
  },
  sources: [
    './assets/audio/abc.ogg',
    './assets/audio/abc.wav'
  ],
},
{
  id: 2,
  src: './assets/audio/ccb.mp3',
  trackName: 'ccb tracks',
  trackArtist: 'artist of ccb',
  trackImage: {
    src: './assets/images/ccb.jpg',
    alt: 'ccb alt text',
  },
  sources: [
    './assets/audio/ccb.ogg',
    './assets/audio/ccb.wav'
  ],
}
];

describe('App Component tests', () => {
  test('when you click on the prev track button, the audio track changes', async () => {
    const user = userEvent.setup();
    render(
      <App
        tracks={tracksStub}
      />
    );

    const initialSrc = screen.getByTitle<HTMLAudioElement>('audio').src;
    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'prev track' }));

    expect(screen.getByTitle<HTMLAudioElement>('audio').src).not.toBe(initialSrc);
  });

  test('If the track speed is not equal to 1x, then when you click on the prev track button, it should become 1', async () => {
    const user = userEvent.setup();
    render(
      <App
        tracks={tracksStub}
      />
    );

    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'current playback rate' }));
    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'current playback rate' }));
    expect(screen.getByTitle<HTMLAudioElement>('audio').playbackRate).toBe(1.5);
    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'prev track' }));
    expect(screen.getByTitle<HTMLAudioElement>('audio').playbackRate).toBe(1);
  });

  test('when you click on the next track button, the audio track changes', async () => {
    const user = userEvent.setup();
    render(
      <App
        tracks={tracksStub}
      />
    );

    const initialSrc = screen.getByTitle<HTMLAudioElement>('audio').src;
    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'next track' }));

    expect(screen.getByTitle<HTMLAudioElement>('audio').src).not.toBe(initialSrc);
  });

  test('If the track speed is not equal to 1x, then when you click on the next track button, it should become 1', async () => {
    const user = userEvent.setup();
    render(
      <App
        tracks={tracksStub}
      />
    );

    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'current playback rate' }));
    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'current playback rate' }));
    expect(screen.getByTitle<HTMLAudioElement>('audio').playbackRate).toBe(1.5);
    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'next track' }));
    expect(screen.getByTitle<HTMLAudioElement>('audio').playbackRate).toBe(1);
  });
});
