import React from 'react'

function DetailsWrapper({children}) {
  return (
    <div className='p-3 md:p-6 mb-8 border border-gray-plus-300 rounded-2xl'>
      {children}
    </div>
  )
}

export default DetailsWrapper
