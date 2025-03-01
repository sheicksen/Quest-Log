import { createRequire } from "module";
import promptSync from 'prompt-sync';
const prompt = promptSync();
const require = createRequire(import.meta.url);
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyC6vD3u6H0CPkPWG07vpEdjPTNTHSEvT2k");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",systemInstruction: "your name is chuck"});
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
});
let userInput = prompt("Please enter your prompt: ");
let result = await chat.sendMessageStream(userInput);
while(true){
  for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  process.stdout.write(chunkText);
}
userInput = prompt("Please enter your prompt: ");
result = await chat.sendMessageStream(userInput);
}

