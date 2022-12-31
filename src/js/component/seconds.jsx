import React, {useState, useEffect} from "react";

const Counter = (props) => {

    var second = props.seconds%60;
    var minutes = (Math.floor(props.seconds/60) - Math.floor(props.seconds/3600)*60);
    var hours = Math.floor(props.seconds/3600)



    return (
       
       <div className="d-flex justify-content-center">
        <h1><i className="bi bi-stopwatch-fill"></i></h1>
        <h1 className="mx-1">{hours + ': '}</h1>
        <h1>{minutes + ': '}</h1>
        <h1 className="mx-1">{props.seconds}</h1>
        </div>

       
    )
}

export default Counter;