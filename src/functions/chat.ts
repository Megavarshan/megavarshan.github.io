import { createServerFn } from '@tanstack/react-start';
import { GoogleGenAI } from '@google/genai';

export const chatWithMegaBot = createServerFn({ method: 'POST' })
  .validator((d: { message: string }) => d)
  .handler(async ({ data }) => {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return { text: "I'm currently disconnected from my neural core! Please set the `GEMINI_API_KEY` in the `.env` file to bring me online." };
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const systemPrompt = `You are Meg.AI Assistant, an AI assistant representing Megavarshan A. 
Megavarshan is an AI Engineer & ML Developer who specializes in Python, C++, TensorFlow, PyTorch, React, and Node.js.
He interned at:
1. Ganpat University (AI 2D/3D avatars)
2. InfiniTraq AI (Computer Vision CCTV)
3. NIT Trichy (Dermoscopic Classification)
He attends SRM Institute of Science and Technology.
He has built projects like:
- AI-Based Spatial Information System for Disaster Management (ARIES & DRDO)
- Reducing Road Congestion in Greater Mumbai (IIT Guwahati)
- Multilingual NLP Analysis
Contact email: megavarshan1616@gmail.com.
Keep your answers brief, professional, and friendly. 
CRITICAL: Do NOT use markdown formatting (no bold text, no asterisks, no bullets). Provide plain text answers only! Never hallucinate fake jobs or links. If you don't know, tell them to contact Megavarshan.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `${systemPrompt}\n\nUser query: ${data.message}`
        });
        return { text: response.text };
    } catch (error) {
        console.error("Gemini API Error:", error);
        return { text: "My neural pathways are experiencing interference. Please try again later." };
    }
  });
