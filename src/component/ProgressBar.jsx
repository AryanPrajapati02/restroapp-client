import React from 'react'

function ProgressBar({progress}) {
  return (
   <>
   <div>
  <span id="ProgressLabel" className="sr-only">Loading</span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="block rounded-full bg-gray-200"
  >
    <span className="block h-3 rounded-full bg-indigo-600" style={{width: `${progress}%`}}></span>
  </span>
</div>
   </>
  )
}

export default ProgressBar