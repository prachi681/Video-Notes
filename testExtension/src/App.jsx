import React, { useState } from 'react';
import ReactModal from 'react-modal-resizable-draggable';

const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const placeButton = () => {
    
  }

  return (
    <div>
      <button className='notes-trigger-button'>Open</button>
      <ReactModal
        initWidth={800}
        initHeight={400}
        onFocus={() => console.log("Modal is clicked")}
        className={"my-modal-custom-class"}
        onRequestClose={() => setModalOpen(false)}
        isOpen={modalOpen}>
        <h3>My Modal</h3>
        <div className="body">
          <p>This is the modal&apos;s body.</p>
        </div>
        <button onClick={() => setModalOpen(false)}>
          Close modal
        </button>
      </ReactModal>
      <video style={{width: '60%', height: '70vh'}} controls  src='/video.mp4'></video>
    </div>
  )
}

export default App