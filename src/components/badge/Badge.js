import React from 'react'

function Badge(props) {
    return (
        <>
            <span class="bg-gray-100 px-4 py-2 my-1 text-black text-sm rounded-xl  mr-2 font-semibold ">{props.name}</span>
        </>
    )
}

export default Badge