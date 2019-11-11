import React from 'react'

const Timer = (props) => {
    const Seconds = Math.floor((props.ms / 1000)%60);
    const minuts = Math.floor((props.ms / 60000)%60);
    const hours = Math.floor((props.ms  / 3600000) % 24);
    return (
        <div className="clock">
            <h1>{String(hours).padStart(2, '0')} : {String(minuts).padStart(2, '0')} : {String(Seconds).padStart(2, '0')}</h1>
            <div className="format ">
                <p>Hour</p>
                <p>Minut</p>
                <p>Second</p>
            </div>
        </div>
    )
}


export default Timer