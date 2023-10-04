import React, {useState, useEffect} from 'react'


function Clock() {

    const [time, setTime] = useState(new Date().toString());
    
    useEffect(() => {
        console.log("component updated or mounted");
        const interval = setInterval(showDate, 1000);

        // cleanup when component is unmounted
        return () => {
            console.log("clean up of interval");
            clearInterval(interval);
        }
    }, [time])

    function showDate() {
        const date = new Date().toString();
        // console.log(date);
        setTime(date);
    }



return (<div>{time}</div>)
}

export default Clock

