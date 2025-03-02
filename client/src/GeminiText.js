import { AiChat } from "./GeminAI";
import React, { useState } from 'react';

const startingFact = AiChat("Give me a piece of life advice as if I didn't ask. Don't use *");
function AiChatComp() {
    const [inputValue, setInputValue] = useState('');
  // Store the paragraph text in state
  const [paragraphText, setParagraphText] = useState(startingFact);


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const processinput = (value) => {
    return AiChat(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault(); //prevent page reload
    const output = processinput(inputValue);

    setParagraphText(output);
    

  };
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <p className = 'body-font'>{paragraphText}</p>
        <label for="AiText">Ask Gemini</label>
        <input type="text" id="AiText" name="AiText" className = 'body-font' value ={inputValue} onChange={handleChange}></input>
        <input class = 'submit-gemini' type="submit"  value="Submit"></input>
        </form>
      </div>
    );
  }
  
  export default AiChatComp;