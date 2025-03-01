import { AiChat } from "./GeminAI";
import React, { useState } from 'react';

// const startingFact = AiChat("Give me a small uplifting fact or piece of life advice.");
function AiChatComp() {
    const [inputValue, setInputValue] = useState('');
  // Store the paragraph text in state
  const [paragraphText, setParagraphText] = useState('');


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
        <p>{paragraphText}</p>
        <label for="AiText">Ask Gemini</label>
        <input type="text" id="AiText" name="AiText" value ={inputValue} onChange={handleChange}></input>
        <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
  
  export default AiChatComp;