import React, { useState } from 'react'

function SingleQuestion({ info, title }) {
    const [showInfo, setShowinfo] = useState(false)
    return (
        <article>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShowinfo(!showInfo)}>btn</button>
            </header>
            {
                showInfo && <p>{info}</p>
            }

        </article>
    )
}

export default SingleQuestion