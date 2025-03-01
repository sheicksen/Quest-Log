import { AiChat } from "./GeminAI";
import React, { useState } from 'react';
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
        <label for="AiText">Input query</label>
        <input type="text" id="AiText" name="AiText" value ={inputValue} onChange={handleChange}></input>
        <input type="submit" value="Submit"></input>
        </form>
        <p>{paragraphText}</p>
      </div>
    );
  }
  
  export default AiChatComp;