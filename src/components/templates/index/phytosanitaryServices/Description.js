import React from 'react'

function Description(props) {
    return (
        <div >
            <p className='font-danaBold sm:text-xl text-gray-plus-900 mb-1'>{props.title}</p>
            <p className='text-sm xl:text-sm  leading-5 text-gray-plus-800 '>{props.description}.</p>
        </div>
    )
}

export default Description
