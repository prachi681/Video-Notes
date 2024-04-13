// alert('nice')

const videoElements = document.querySelectorAll('video');
console.log(videoElements);

if (videoElements[0]) {
    let ele = videoElements[0];
    console.log("Current playback position:", ele.currentTime);
    console.log("Video duration:", ele.duration);
    console.log("Is video paused:", ele.paused);
}

// fetch('http://localhost:5000')
//     .then((response) => {
//         return response.text();
//     })
//     .then(text => {
//         console.log(text);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

(function() {
    // Button creation
    const button = document.createElement('button');
    button.textContent = 'Open Modal';
    button.style.position = 'fixed'; // Fixed positioning for visibility across scrolling
    button.style.top = '10px'; // Adjust top position as needed
    button.style.right = '10px'; // Adjust right position as needed
    button.style.backgroundColor = '#007bff'; // Optional: button color
    button.style.color = '#fff'; // Optional: button text color
    button.style.cursor = 'pointer';
  
    // Modal creation (hidden initially)
    const modal = document.createElement('div');
    modal.classList.add('modal'); // Add a class for CSS styling
    modal.style.display = 'none'; // Hide modal initially
  
    // Modal content (replace with your desired content)
    const modalContent = document.createElement('div');
    modalContent.textContent = 'This is the modal content.';
    modal.appendChild(modalContent);
  
    // Function to toggle modal visibility
    const toggleModal = () => {
      modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
    };
  
    // Button click handler to open modal
    button.addEventListener('click', toggleModal);
  
    // Make modal draggable
    modal.addEventListener('mousedown', startDragging);
  
    document.body.appendChild(button); // Append button to body
    document.body.appendChild(modal); // Append modal to body
  
    // Dragging functionality
    let startX = 0;
    let startY = 0;
    let x = 0;
    let y = 0;
  
    function startDragging(e) {
      startX = e.clientX - modal.offsetLeft;
      startY = e.clientY - modal.offsetTop;
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', endDragging);
    }
  
    function drag(e) {
      x = e.clientX - startX;
      y = e.clientY - startY;
      modal.style.left = x + 'px';
      modal.style.top = y + 'px';
    }
  
    function endDragging() {
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', endDragging);
    }
  })();
  
  
  