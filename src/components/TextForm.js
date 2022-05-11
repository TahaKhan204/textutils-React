
import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked " + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success")
  }

  const handleLowClick = () => {
    //console.log("Uppercase was clicked " + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success")
  }

  const handleclearClick = () => {
    //console.log("Uppercase was clicked " + text)
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared", "success")

  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    //   setText(newText)
    props.showAlert("Text Copied", "success")
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success")

  }

  const handleOnChange = (event) => {
    //console.log("On change")
    setText(event.target.value)
  }

  const [text, setText] = useState("");     // useState --> is a react hook

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Enter your Text here</label> */}
          <textarea className="form-control" value={text} rows="10" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(28 30 29 / 92%)', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox"></textarea>   {/*/this onChange eventlistner is necessary because it is used for updating the textarea*/}
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleBoldClick}>Convert to Bold Text</button> */}
      </div>

      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} approx minutes to read the text </p>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the text box above to preview it here"}</p>
      </div>
    </>
  )
}
