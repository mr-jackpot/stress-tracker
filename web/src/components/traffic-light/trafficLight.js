import React from "react";
import './trafficLight.css'
const TrafficLight = (props) => {
    const [selected, setSelected] = React.useState("notSelected");

    const handleSelect = () => {
        if (selected !== "selected") {
            setSelected("selected");
            props.set(props.color)
        } else {
            setSelected("notSelected");
            props.set("")
        }
    };

    return (
        <div
        className={`traffic-light-box ${props.color} ${selected}`}
        onClick={() => handleSelect()}
        ></div>)
}

export default TrafficLight;