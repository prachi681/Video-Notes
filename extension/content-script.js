// alert('nice')

const videoElements = document.querySelectorAll('video');
console.log(videoElements);

if (videoElements[0]) {
    let ele = videoElements[0];
    console.log("Current playback position:", ele.currentTime);
    console.log("Video duration:", ele.duration);
    console.log("Is video paused:", ele.paused);
}

fetch('http://localhost:5000')
    .then((response) => {
        return response.text();
    })
    .then(text => {
        console.log(text);
    })
    .catch((err) => {
        console.error(err);
    });