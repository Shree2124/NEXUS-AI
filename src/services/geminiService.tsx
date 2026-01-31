
import { GoogleGenAI, Type } from "@google/genai";
import type { ContactFormData, AIAnalysisResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export const analyzeLead = async (data: ContactFormData): Promise<AIAnalysisResponse> => {
  const prompt = `Analyze this business inquiry for an AI consulting firm. 
  User Name: ${data.name}
  Company: ${data.company}
  Industry: ${data.industry}
  Message: ${data.message}

  Provide a professional response structure including:
  1. A sentiment analysis.
  2. A priority level.
  3. 3 suggested specific AI solutions.
  4. A personalized short greeting that acknowledges their specific industry pain points mentioned.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sentiment: { type: Type.STRING },
            priority: { type: Type.STRING, enum: ['High', 'Medium', 'Low'] },
            suggestedSolutions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            personalizedGreeting: { type: Type.STRING }
          },
          required: ["sentiment", "priority", "suggestedSolutions", "personalizedGreeting"]
        }
      }
    });
    // @ts-ignore
    return JSON.parse(response?.text.trim());
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    // Fallback response
    return {
      sentiment: "Professional",
      priority: "Medium",
      suggestedSolutions: ["Custom LLM Setup", "Data Pipeline Audit", "AI Training Workshop"],
      personalizedGreeting: `Hi ${data.name}, thank you for reaching out regarding AI in ${data.industry}. We're excited to help!`
    };
  }
};
