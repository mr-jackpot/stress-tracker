import React from "react";
import TagIcon from "../tag-icon/tagIcon";
import "./dataInput.css";
import TrafficLight from "../traffic-light/trafficLight";

const DataInput = (props) => {
    const [trafficLight, setTrafficLight] = React.useState();
    const [feelings, setFeelings] = React.useState([]);
    const [note, setNote] = React.useState();
    const [trafficLightBlur, setTrafficLightBlur] = React.useState("");
    const [feelingsBlur, setFeelingsBlur] = React.useState("blur");
    const [notesBlur, setNotesBlur] = React.useState("blur");
    const [submitBlur, setSubmitBlur] = React.useState("blur");

    const addFeelingToList = (value) => {
        setFeelings(feelings.concat(value));
    };

    const removeFeelingFromList = (value) => {
        setFeelings(feelings.filter((i) => i != value));
    };

    const mapFeelings = (list) => {
        return list && list.length > 0 && list.map((i, n) => <TagIcon id={`tag-icon-${n}`} feeling={i} noclick/>)
    };

    const handleSubmit = (n) => {
        if (n == 1) {
            setTrafficLightBlur("blur");
            setFeelingsBlur("");
        }
        if (n == 2) {
            setFeelingsBlur("blur");
            setNotesBlur("");
        }
        if (n == 3) {
            setNotesBlur("blur");
            setSubmitBlur("");
        }
        if (n == 4) {
            setTrafficLight("");
            setFeelings("");
            setNote("");
            setTrafficLightBlur("");
            setFeelingsBlur("blur");
            setNotesBlur("blur");
            setSubmitBlur("blur");
        }
    }

    return (
        <div className={`data-input-container ${props.theme}`}>
            <div className={`data-input-item heading`}>
                {" "}
                It's time to enter your mood for the week . . .{" "}
            </div>
            <div className={`data-input-item score ${trafficLightBlur}`}>
                <div>How do you feel?</div>
                <div className="traffic-light-container">
                    <TrafficLight color={"green"} set={setTrafficLight}/>
                    <TrafficLight color={"amber"} set={setTrafficLight}/>
                    <TrafficLight color={"red"} set={setTrafficLight}/>
                </div>
                <div className={`submit-button`}
                     onClick={() => handleSubmit(1)}>Submit
                </div>
            </div>
            <div className={`data-input-item feelings ${feelingsBlur}`}>
                <div> Add some feelings . . .</div>
                <div className="feelings-container">
                    <TagIcon
                        feeling="Shite"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Apathy"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Flying"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Bullish"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Bearish"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Mid"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Work"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Relationships"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Family"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Money"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Goals"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                    <TagIcon
                        feeling="Achievements"
                        sendValue={addFeelingToList}
                        removeValue={removeFeelingFromList}
                    />
                </div>
                <div className={`submit-button`}
                     onClick={() => handleSubmit(2)}>Submit
                </div>
            </div>
            <div className={`data-input-item notes ${notesBlur}`}>
                <div> Would you like to add some custom notes?</div>
                <textarea
                    id="custom-notes-input"
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <div className={`submit-button`}
                     onClick={() => handleSubmit(3)}>Submit
                </div>
            </div>
            <div className={`data-input-item submit ${submitBlur}`}>
                <div>Summary & submit</div>
                <br/>
                <br/>
                <p className={"title"}>Traffic Light: <span>{trafficLight}</span></p>
                <br/>
                <p className={"title"}>Themes: </p>
                <div className={"tag-container"}>{mapFeelings(feelings)}</div>
                <br/>
                <p className={"title"}>Custom note: </p>
                <p> {note} </p>
                <div className={`submit-button`}>
                    <a className="navAnchor" href="#navToMain" onClick={() => handleSubmit(4)}>Submit</a>
                </div>
            </div>
        </div>
    );
};

export default DataInput;
