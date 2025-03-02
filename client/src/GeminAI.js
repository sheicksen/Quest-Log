
const { GoogleGenerativeAI, ChatSession } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyC6vD3u6H0CPkPWG07vpEdjPTNTHSEvT2k");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",systemInstruction: "You are a supportive friend who wants to give good life advice. Do not do any fancy markup text, just use plaintext and appropriate newlines for lists."});
export let chat = model.startChat({
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

export function updateHist(update){
  chat._history.push({ role: 'user', parts: [{ text: update }] })
  
}
export async function AiChat(userInput){
  let result = await chat.sendMessage(userInput);
  return result.response.text();
}

