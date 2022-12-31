import React, {useState, useEffect} from "react";
import Counter from "./seconds.jsx";


//create your first component

const Home = () => {
	const [time, secondsPast] = useState(0)

/* 	const [countdownValue, setCountdownValue] = useState()  */

	var interval 

	function status(value) {
		if (value == "start"){
		interval = setInterval(() => {secondsPast(time + 1)}, 1000);
	} else if (value == "stop"){
		clearInterval(interval)
	} /* else if (value == "countdown"){
		clearInterval(interval)
		secondsPast(countdownValue)
		interval = setInterval(() => {secondsPast(time - 1)}, 1000);
	} */
	}

/* 	function countdown(){
		status("countdown")
	} */

	useEffect( () => {
		status("start")
		return () => clearInterval(interval)
	}, [time]);
	
	return (
		<div className="text-center">
			<div className="container p-5 m-5"> 
			<Counter seconds={time} />
			<button onClick={()=>status("stop")} type="button" className="btn btn-warning m-1">Stop</button>
        	<button onClick={()=>status("start")} type="button" className="btn btn-success m-1">Resume</button>
        	<button onClick={()=>secondsPast(0)} type="button" className="btn btn-danger m-1">Reset</button>
{/* 			<label className="d-block mt-1" htmlFor="countdown">Countdown!</label>
			<input onChange={(e) => setCountdownValue(e.target.value)} id="countdown" type="text" value={countdownValue}/>
			<button onClick={() => countdown()}>Start Countdown</button> */}
			</div>
		</div>
	);
};

export default Home;
