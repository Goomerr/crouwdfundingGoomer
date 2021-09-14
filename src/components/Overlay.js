import React from 'react'

const Overlay = ({closeModal}) => {
    return (
        <div className="over"  id="overlay" onClick={() => closeModal()}>
            
        </div>
    )
}

export default Overlay
