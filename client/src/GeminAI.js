
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyC6vD3u6H0CPkPWG07vpEdjPTNTHSEvT2k");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",systemInstruction: "your name is chuck"});
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{text: 'ignore this'}],
    },
    {
      role: "model",
      parts: [{text: 'ignore this'}],
    },
  ],
});

export async function AiChat(userInput){
  let result = await chat.sendMessage(userInput);
  return result.response.text();
}

