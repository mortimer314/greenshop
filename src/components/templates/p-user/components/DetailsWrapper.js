import React from 'react'

function DetailsWrapper({children, className}) {
  return (
    <div className={`p-3 md:p-6 mb-8 border border-gray-plus-300 rounded-2xl ${className}`}>
      {children}
    </div>
  )
}

export default DetailsWrapper
