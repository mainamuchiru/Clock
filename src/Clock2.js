import {useState, useEffect} from "react";

function Clock2(props){
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
            const timerID = setInterval (() => setCurrentDate (new Date ()), 1000);
            return () => clearInterval(timerID);
            
            
     }, [] );

     const continent = props.continent;
     const city = props.city;
     const tz = `${continent}/${city}`;
     //const dynamic = this.props.dynamic;

     return (
        <div>
            <h1>In {continent}, {city.replace('_',' ')}</h1>
            <h2>It is {currentDate.toLocaleString('en-US', {timeZone: tz})}</h2>
        </div>

        );

    }

    export default Clock2;

