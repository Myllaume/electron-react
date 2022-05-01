import React from 'react';

export default function Message ({
    id,
    message
}) {
    return (
        <div className='message'>
            <span>{id}</span>
            <p>{message}</p>
        </div>
    )
}