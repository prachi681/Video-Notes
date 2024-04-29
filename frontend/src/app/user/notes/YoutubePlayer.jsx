import React, { useEffect, useRef } from 'react';

function YouTubePlayer({ note }) {
    const playerRef = useRef(null);
    console.log(note);

    useEffect(() => {
        // Ensure the YouTube Iframe API script is loaded
        if (!window.YT) {
            const script = document.createElement('script');
            script.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(script);
        }

        // Wait for the YouTube Iframe API script to be loaded
        const interval = setInterval(() => {
            if (window.YT && window.YT.Player) {
                clearInterval(interval);

                // Create a new YouTube player
                new window.YT.Player(playerRef.current, {
                    videoId: 'UKF91_m_B2Q',
                    events: {
                        onReady: (event) => {
                            // The player is ready, you can control the playback here
                            // For example, you can play the video
                            event.target.playVideo();
                            console.log(note.videoTime);
                            event.target.seekTo(note.videoTime);
                        },
                    },
                });
            }
        }, 100);

        return () => clearInterval(interval);
    }, [note._id]);

    return <div ref={playerRef} />;
}

export default YouTubePlayer;