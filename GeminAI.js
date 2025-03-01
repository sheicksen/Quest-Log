import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyC6vD3u6H0CPkPWG07vpEdjPTNTHSEvT2k");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
console.log("\n\n");
const prompt = "Explain how AI works";

const result = await model.generateContentStream(prompt);
//console.log(result.response.text());
for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    process.stdout.write(chunkText);
  }