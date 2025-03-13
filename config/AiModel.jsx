const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "\n",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const GenerateTopicsAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Learn paython::As you are coaching teacher\n-User  want to learn about the topic\n-Generate 5-7 course title  for study(Short)\n-Make  sure it is related to description\n-Output will be array of string in json formste only\n-Donot add any plain text in output"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_titles\": [\n    \"Python Basics: Getting Started\",\n    \"Data Structures in Python\",\n    \"Python Functions & Modules\",\n    \"Object-Oriented Programming with Python\",\n    \"File Handling and Data Persistence\",\n    \"Python for Data Analysis\",\n    \"Web Development with Python (Flask/Django)\"\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 