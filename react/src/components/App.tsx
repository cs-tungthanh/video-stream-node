import '@vime/core/themes/default.css';
import { Hls, Player, Video } from '@vime/react';
import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/background.png';
import './App.css';

const VideoPlayerContainer: React.FC<{ title: string }> = ({ title, children }) => {
    return (
        <div className="container">
            <h1 className="title">{title}</h1>
            <div className="player-container">
                <Player controls autoplay={false}>
                    {children}
                </Player>
            </div>
        </div>
    );
};

const HOST = 'http://localhost:3001';

export const App = () => {
    // const [posterUrl, setPosterUrl] = useState<string>();

    // const getVideoPoster = async () => {
    //     const res = await fetch(`${HOST}/segments-poster`);
    //     const blob = await res.blob();
    //     const url = URL.createObjectURL(blob);

    //     setPosterUrl(url);
    // };

    // useEffect(() => {
    //     getVideoPoster();
    // }, []);

    return (
        <>
            <div className="image-container">
                <img className="image" src={backgroundImage} alt="some info" />
            </div>

            <VideoPlayerContainer title="Chunks">
                <Video>
                    <source data-src={`${HOST}/video-chunk`} type="video/mp4" />
                </Video>
            </VideoPlayerContainer>

            {/* <VideoPlayerContainer title="Segments">
                <Hls version="latest" poster={posterUrl}>
                    <source data-src={`${HOST}/segments-list`} type="application/x-mpegURL" />
                </Hls>
            </VideoPlayerContainer> */}

            {/* <VideoPlayerContainer title="File">
                <Video poster={posterUrl}>
                    <source data-src={`${HOST}/video-file`} type="video/mp4" />
                </Video>
            </VideoPlayerContainer> */}
        </>
    );
};
