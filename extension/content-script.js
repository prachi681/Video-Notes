// alert('nice')
console.log('content script running');
const openBtnClasses = ['bg-blue-700', 'text-white', 'px-4', 'py-2', 'rounded']



const detectVideo = () => {
  const videoElements = document.querySelectorAll('video');
  console.log(videoElements);
  if (videoElements[0]) {
    let ele = videoElements[0];
    console.log("Current playback position:", ele.currentTime);
    console.log("Video duration:", ele.duration);
    console.log("Is video paused:", ele.paused);
    return ele;
  }
}

const createOpenButton = () => {
  const button = document.createElement('button');
  button.classList.add(...openBtnClasses);
  button.textContent = 'Open Modal';
  button.style.position = 'fixed'; // Fixed positioning for visibility across scrolling
  button.style.top = '100px'; // Adjust top position as needed
  button.style.left = '10px'; // Adjust right position as needed
  button.style.backgroundColor = '#007bff'; // Optional: button color
  button.style.color = '#fff'; // Optional: button text color
  button.style.cursor = 'pointer';
  return button;
}

const createModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#fff';
  modal.style.padding = '50px';
  modal.style.zIndex = '999';
  return modal;
}

const createCloseButton = (modal) => {
  const button = document.createElement('button');
  button.textContent = 'Close';
  button.style.position = 'fixed';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.backgroundColor = '#007bff';
  button.style.color = '#fff';
  button.style.cursor = 'pointer';
  button.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  return button;
}



const initialize = () => {

  const videoElement = detectVideo();

  console.log(videoElement);
  if (videoElement) {
    videoElement.style.border = '2px solid red';

    const button = createOpenButton();
    // Modal creation
    const modal = createModal();


    // Modal content (replace with your desired content)
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-body');
    modalContent.textContent = 'This is the modal content.';
    modal.appendChild(modalContent);

    // add close button to modal
    modal.appendChild(createCloseButton(modal));

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


  }

}


const myBtn = document.createElement('button');
myBtn.innerHTML = 'Click Me'
myBtn.style.padding = '20px'
myBtn.style.position = 'absolute';
myBtn.style.right = '0px';
myBtn.style.top = '100px';
myBtn.zIndex = '100';
document.body.appendChild(myBtn)

myBtn.onclick = () => {
  initialize();
}