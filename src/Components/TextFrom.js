import React, {useState} from 'react'

export default function TextFrom(props) {
  // text convert uppercase to lowercase
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    const newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Convert the text into Uppercase","success");
  }

  // text convert lowercase to uppercase
  const handleLowClick = ()=>{
    // console.log("Uppercase was clicked");
    const newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Convert the text into Lowercase","success");
  }

  // text capitalized function
  const handleCapitalizedClick = ()=>{
    const newText=text.toLowerCase().split(" ").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
    setText(newText);
    props.showAlert("Convert the text into Capitalized","success");
  }

  //  text copy function
  const handleCopyClick = ()=>{
    // const text=document.getElementById("myBox");
    // text.select(); // show the selected copy area
    navigator.clipboard.writeText(text); // for copy the text
    props.showAlert("Copy the text","success");
  }

  // remove extra spaces
  const handleExtraSpaces= ()=>{
    const newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove the extra spaces","success");
  }

  // text clear function
  const handleClearText = ()=>{
    // console.log("Uppercase was clicked");
    const newText="";
    setText(newText);
    props.showAlert("Clear all text","danger");
  }

  const handleOnChange = (event)=>{
    // console.log("handleOnChange");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter the text");

  return (
    <>
    <div className="container">
        <h1 className="mb-3" style={{color: (props.mode === 'dark' ? 'white' : 'black')}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{border: "1.5px solid grey",backgroundColor : props.mode === 'dark' ? '#13466e' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} value={text} id="myBox" rows="10" onChange={handleOnChange}></textarea>
        </div>

        {/* <div style={{ display: "flex", gap: "30px" }}> */}
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "info" ? 'primary' : "warning"} me-5 my-1`} onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "info" ? 'primary' : "warning"} me-5 my-1`} onClick={handleLowClick}>Convert to LowerCase</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "info" ? 'primary' : "warning"} me-5 my-1`} onClick={handleCapitalizedClick}>Convert to Capitalized</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "info" ? 'primary' : "warning"} me-5 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "info" ? 'primary' : "warning"} me-5 my-1`} onClick={handleCopyClick}>Copy Text</button>
          <button disabled={text.length === 0} className="btn btn-danger me-5 my-1" onClick={handleClearText}>Clear Text</button>
        {/* </div> */}

    </div>
    <div className="container my-4 mb-5" style={{color: (props.mode === 'dark' ? 'white' : 'black')}}>
        <h2>Your Text Summary : </h2>

        {/* text.trim() === "" ? 0 : ... → Ensures that if text is empty or contains only spaces, the word count is 0.
        text.trim().split(/\s+/).length / text.trim().split(" ").length → Splits words correctly based on whitespace (\s+ accounts for multiple spaces). */}
        
        {/* anathor way to correct the word count
        <p><big>Words in your text : <b>{text.split(" ").filter((element)=>{return element.length !== 0}).length}</b> and  Characters in your text : <b>{text.length}</b></big></p> */}

        <p><big>Words in your text : <b>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</b> and  Characters in your text : <b>{text.length}</b></big></p>
        <p><b>{0.008 * (text.trim() === "" ? 0 : text.trim().split(" ").length)}</b> minutes required to read the text</p>

        <h2>Preview</h2>
        <p><i>{text!=="" ? text : "Nothing to preview"}</i></p>
    </div>
    </>
  )
}
