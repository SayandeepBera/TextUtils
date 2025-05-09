
export default function About(props) {
    const myStyle={
        color: props.mode === 'dark'? 'white' : '#042743',
        backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)' : 'white',
        borderRadius: "10px"
    }

  return (
    <div className="container" style={{color: props.mode === 'dark'? 'white' : '#042743',backgroundColor: props.mode === 'dark'? '#3c5468' : 'white',borderRadius: "10px", padding : "15px"}}>
        <h2 className="text-center mb-3">About TextUtils</h2>
        <p style={{fontSize : "18px"}}><strong>TextUtils</strong> is a user-friendly text conversion application developed using React. 
            It offers a variety of powerful and practical text manipulation features, making 
            it a handy tool for everyday text formatting tasks. Users can easily:
            <ul style={{listStyle : "none"}}>
                <li>💫 Convert text to <strong>uppercase</strong> or <strong>lowercase</strong></li>
                <li>💫 <strong>Capitalize</strong> the first letter of each word</li>
                <li>💫 <strong>Copy</strong> the formatted text to the clipboard</li>
                <li>💫 <strong>Remove extra spaces</strong> for cleaner formatting</li>
                <li>💫 <strong>Clear</strong> the entire text input with a single click</li>
            </ul>

            Additionally, <strong>TextUtils</strong> includes a responsive <strong>light and dark mode toggle</strong>, 
            allowing users to switch between themes for better readability and comfort 
            based on their environment.
        </p>
        
        {/* Frequently Asked Questions (FAQs) about TextUtils */}
        <div className="accordion my-5 mb-3" id="accordionExample">
            <h3 className="mb-3">Frequently Asked Questions (FAQs) about TextUtils</h3>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" style={{...myStyle, fontSize: "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>1. Analyze your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficently. So it word count,character count or
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={{...myStyle, fontSize: "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>2. Free to use</strong>
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
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={{...myStyle, fontSize: "18px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>3. Browser compatible</strong>
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
