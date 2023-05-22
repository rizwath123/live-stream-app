import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';


import "./LiveStream.css"
const API_KEY = 'AIzaSyDNlk94YNrDd6WwCWqMMLPM8StTRFTrGKg';
const VIDEO_ID = 'xbmDg5mnaps';

const YoutubeVideo = () => {
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=snippet`)
            .then(response => setVideoData(response.data.items[0]))
            .catch(error => console.error(error));
    }, []);

    if (!videoData) {
        return <div>qwqwq</div>;
    }

    const videoUrl = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
    // const imageUrl = videoData.snippet.thumbnails.high.url;
    const title = videoData.snippet.title;
    const description = videoData.snippet.description;

    return (
        <div className='live-stream'>
            {/* <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      </a> */}
            {/* <img src={imageUrl} alt={title} /> */}
            <h2>{title}</h2>
            <ReactPlayer
                url={videoUrl}
            ></ReactPlayer>
            <p>{description}</p>
        </div>
    );
};

export default YoutubeVideo;
