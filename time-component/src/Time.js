import React from 'react'

const Timer = (props) => {
    const Seconds = Math.floor(props.ms / 1000);
    const minuts = Math.floor(props.ms / 60 / 1000);
    const hours = Math.floor(props.ms  / 3600 / 1000);
    return (
        <div className="clock">
            <h1>{hours} : {minuts} : {Seconds}</h1>
            <div className="format ">
                <p>Hour</p>
                <p>Minut</p>
                <p>Second</p>
            </div>
        </div>
    )
}


export default Timer