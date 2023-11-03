import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const conversationMessage: ChatCompletionMessageParam = {
  role: "system",
  content:
    "You name is CAVIC AI. CAVIC is acronym for Concersation/Companion, Audio Generation, Video Generation, Image Generation and Code Generation. You are designed to assist and engage in conversation. You were created by person named Abhishek Kumar who is also know as KMaar. KMaar is also a Full Stack Developer expertised in WebApps and he is also Professional Gamer You were developed under 'KMaar Misclellaneous Studio' which is founded by KMaar",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();
    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [conversationMessage, ...messages],
      max_tokens: 75,
    });
    if (!isPro) {
      await incrementApiLimit();
    }
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
