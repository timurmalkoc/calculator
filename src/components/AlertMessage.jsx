import React from 'react'

export default function AlertMessage(props) {
    return (
        <div>
        <div className={`alert alert-${props.category} alert-dismissible fade show `} style={{zIndex:"12", width:"100%"}} role='alert'>
            <strong className='ms-3'>{props.message}</strong>
            <button type='button' className='btn-close' onClick={() => props.flashMessage(null, null)}></button>
        </div>
        </div>
    )
}