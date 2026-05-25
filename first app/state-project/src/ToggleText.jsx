import {useState} from 'react'

function ToggleText() {
    const [isVisible, SetIsVisible]=useState(false)


  return (
   <button onClick={() => SetIsVisible(!isVisible)}>{isVisible ? "Hide": "Show"} Text

   </button>
  )
}

export default ToggleText