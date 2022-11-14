import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState(''); //*Important. Creating State.
    const handleUpperClick = () => {
        // console.log("Uppercase was clicked!");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick = () => {
        // console.log("Uppercase was clicked!");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value) // <- To be able to type on the text area, you need event listener and pass this
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }}
                        onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick} >Convert to Lowercase</button>


            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>


            </div>
        </>
    );
}
