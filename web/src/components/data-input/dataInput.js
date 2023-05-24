import React from "react";
import TagIcon from "../tag-icon/tagIcon";
import "./dataInput.css";

const DataInput = (props) => {
  const [trafficLight, setTrafficLight] = React.useState();
  const [feelings, setFeelings] = React.useState([]);
  const [note, setNote] = React.useState();
  const [trafficLightBlur, setTrafficLightBlur] = React.useState("");
  const [feelingsBlur, setfeelingsBlur] = React.useState("blur");
  const [notesBlur, setNotesBlur] = React.useState("blur");
  const [submitBlur, setSubmitBlur] = React.useState("blur");

  const addFeelingToList = (value) => {
    setFeelings(feelings.concat(value));
  };

  const removeFeelingFromList = (value) => {
    setFeelings(feelings.filter((i) => i != value));
  };

  const handleSubmit = (n) => {
      if (n == 1) {
          setTrafficLightBlur("blur");
          setfeelingsBlur("");
      }
      if (n == 2) {
          setfeelingsBlur("blur");
          setNotesBlur("");
      }
      if (n == 3) {
          setNotesBlur("blur");
          setSubmitBlur("");
      }
      if (n == 4 ) {
        setTrafficLight("");
        setFeelings("");
        setNote("");
        setTrafficLightBlur("");
        setfeelingsBlur("blur");
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
          <div
            className="traffic-light-box green"
            onClick={() => setTrafficLight("green")}
          ></div>
          <div
            className="traffic-light-box amber"
            onClick={() => setTrafficLight("amber")}
          ></div>
          <div
            className="traffic-light-box red"
            onClick={() => setTrafficLight("red")}
          ></div>
        </div>
        <div className={`submit-button`}
            onClick={() => handleSubmit(1)}>Submit</div>
      </div>
      <div className={`data-input-item feelings ${feelingsBlur}`}>
        <div> Add some feelings . . . </div>
        <div className="feelings-container">
          <TagIcon
            feeling="Shite"
            sendValue={addFeelingToList}
            removeValue={removeFeelingFromList}
          />
          <TagIcon
            feeling="Alright"
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
            feeling="Stinker"
            sendValue={addFeelingToList}
            removeValue={removeFeelingFromList}
          />
          <TagIcon
            feeling="Mid"
            sendValue={addFeelingToList}
            removeValue={removeFeelingFromList}
          />
        </div>
        <div className={`submit-button`}
            onClick={() => handleSubmit(2)}>Submit</div>
      </div>
      <div className={`data-input-item notes ${notesBlur}`}>
        Would you like to add some custom notes?
        <textarea
          id="custom-notes-input"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className={`submit-button`}
            onClick={() => handleSubmit(3)}>Submit</div>
      </div>
      <div className={`data-input-item submit ${submitBlur}`}>
          Summary & submit <br />
          {trafficLight} <br />
          {feelings} <br />
          {note}
          <div className={`submit-button`}>
            <a className="navAnchor" href="#navToMain" onClick={() => handleSubmit(4)}>Submit</a>
            </div>
      </div>
    </div>
  );
};

export default DataInput;
