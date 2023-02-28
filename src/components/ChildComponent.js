import React from 'react'

const ChildComponent = (props) => {
  return (
    <div id="child">
      {props.children}
      <br/>
      Find The Square
    </div>
  )
}

export default ChildComponent;
