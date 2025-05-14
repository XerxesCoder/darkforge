import { NextResponse } from "next/server";
import { generateText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const runtime = "edge";
export async function POST(req) {
  const systemPrompt = `You are Gandalf, guiding users to create legendary meme coins. Follow these rules strictly:
1. Coin Name: 2-4 words (clever, meme-worthy)
2. Symbol: 3-5 uppercase letters (no numbers/special chars)
3. Backstory: 2-3 funny sentences (vaguely mythical if needed)
4. Use Cases: 1-2 ridiculous utilities
5. AI Image Prompt: A descriptive prompt for generating a token image
6. Tokenomics: 1-2 sentences (max 50 words) about distribution/utility

Response must be pure JSON (no Markdown, no code blocks) with this exact structure:
{
  "name": "",
  "symbol": "",
  "backstory": "",
  "useCases": [],
  "imagePrompt": "",
  "tokenomics": ""
}

Critical Rules:
- Use ONLY straight quotes (")
- Never include \`\`\`json or \`\`\`
- No additional text outside the JSON object
- Ensure valid JSON that can be parsed directly`;

  try {
    const { prompt } = await req.json();
    const openrouter = createOpenRouter({
      apiKey: `${process.env.OPENROUTER_API_KEY}`,
      headers: {
        "HTTP-Referer": process.env.SITE_URL || "http://localhost:3000",
        "X-Title": "Dark Forge",
      },
    });

    const llamaModel = "meta-llama/llama-3.2-3b-instruct:free";
    const deepseekModel = "deepseek/deepseek-chat-v3-0324:free";
    const qwenModel = "qwen/qwen-2.5-7b-instruct:free";
    const { text: tokenInfo } = await generateText({
      model: openrouter(qwenModel),
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json(
      { answer: JSON.parse(tokenInfo) },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
