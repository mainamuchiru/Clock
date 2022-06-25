
import React from "react"




class Greeter extends React.Component{
    constructor (props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval( 
            () => this.tick(),
            1000
            );
    }
    
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState(
            {
                date: new Date()
            });
        
    }

    render(){
        const continent = this.props.continent;
        const city = this.props.city;
        const tz = `${continent}/${city}`;
    
        return (
            <div>
                <h1>In {continent}, {city.replace('_',' ')} </h1>
                <h2>It is {this.state.date.toLocaleString('en-US', {timeZone: tz})}</h2>
            </div>
    
    );
    
    }
}
export default Greeter;