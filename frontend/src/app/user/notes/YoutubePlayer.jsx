import React, { useEffect, useRef } from 'react';

function YouTubePlayer({ note }) {
    const playerRef = useRef(null);
    // console.log(note);
    const player = useRef(null);
    const playerReady = useRef(false);

    function getUrlParams(url) {
        const params = new URLSearchParams(new URL(url).search);
        const paramsObject = {};
        for (const [key, value] of params.entries()) {
          paramsObject[key] = value;
        }
        // console.log(paramsObject);
        return paramsObject;
      }

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
                // console.log(player);
                // if (player) {
                //     player.destroy();
                //   }


                if (playerReady.current && player.current) {
                    player.current.seekTo(note.videoTime);
                    return;
                }

                // Create a new YouTube player
                new window.YT.Player(playerRef.current, {
                    videoId: getUrlParams(note.videoUrl).v,
                    events: {
                        onReady: (event) => {
                            player.current = event.target;
                            // The player is ready, you can control the playback here
                            // For example, you can play the video
                            event.target.playVideo();
                            // console.log(note.videoTime);
                            event.target.seekTo(note.videoTime);
                            playerReady.current = true;
                        },
                    },
                });
            }
            // console.log('update');
        }, 100);

        return () => clearInterval(interval);
    }, [note]);

    return <div ref={playerRef} style={{width: '100%', height: '70vh'}} />;
}

export default YouTubePlayer;