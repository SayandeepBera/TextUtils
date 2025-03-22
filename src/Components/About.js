// import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle,setmyStyle]=useState({
    //     color: "black",
    //     backgroundColor: "white",
    //     borderRadius: "10px",
    //     border: "0.5px solid grey"
    // });

    // const [btnText,setBtnText]=useState("Enable Dark Mode");

    // let handleDarkModeOn=()=>{
    //     if(myStyle.color === "black"){
    //         setmyStyle({
    //             color: "white",
    //             backgroundColor: "#6b6565",
    //             borderRadius: "10px",
    //         });

    //         setBtnText("Enable Light Mode");
    //     }else{
    //         setmyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //             borderRadius: "10px",
    //             border: "0.5px solid grey"
    //         });

    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    const myStyle={
        color: props.mode === 'dark'? 'white' : '#042743',
        backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',
        borderRadius: "10px"
    }
  return (
    <div className="container" style={{color: props.mode === 'dark'? 'white' : '#042743',backgroundColor: props.mode === 'dark'? '#3c5468' : 'white',borderRadius: "10px"}}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficently. So it word count,character count or
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>TextUtils</strong> is a free character counter tool that
                         provides instatnt character count & word count statistics for a 
                         given text. TextUtils reports the number of word and characters. 
                         Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browser such as
                         Chrome,Firefox,Internet Explorer, Safari, Opera. It suits to 
                         count character in facebook, blog, books, excal document, essays etc.
                    </div>
                </div>
            </div>
        </div>
      {/* <button type="button" className="btn btn-primary my-3 me-5" onClick={handleDarkModeOn}>{btnText}</button> */}
    </div>
  )
}
