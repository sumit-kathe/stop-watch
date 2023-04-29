import React from 'react'

const Text = (props) => {
  return (
    <div>
        
         <div className="mb-3">
        <label for="mytext" className="form-label">Example textarea</label>
        <textarea className="form-control" id="mytext" rows="3"></textarea>
        </div>
    </div>
  )
}

export default Text;
