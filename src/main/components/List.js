import React from 'react';

export default function Welcome ({
    ...props
}) {
    return (
        <main>
            <ul>
                {
                    ['item 1', 'item 2'].map(item => <li>{item}</li>)
                }
            </ul>
        </main>
    )
}