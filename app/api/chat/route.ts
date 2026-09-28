import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { retrieveKistKnowledge } from "@/lib/kist-knowledge";

const apiKey = process.env.OPENROUTER_API_KEY;

const model =
  process.env.OPENROUTER_MODEL || "openrouter/free";

const openrouter = apiKey
  ? new OpenAI({
      apiKey,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "KIST AI Campus Assistant",
      },
    })
  : null;

export async function POST(request: NextRequest) {
  try {
    if (!apiKey || !openrouter) {
      return NextResponse.json(
        {
          error:
            "OPENROUTER_API_KEY is missing. Check your .env.local file.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const message =
      typeof body?.message === "string"
        ? body.message.trim()
        : "";

    if (!message) {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------
    // KIST KNOWLEDGE RETRIEVAL
    // ---------------------------------------------------------

    const knowledge = retrieveKistKnowledge(message, 5);

    const knowledgeContext =
      knowledge.length > 0
        ? knowledge
            .map(
              (item, index) => `
SOURCE ${index + 1}
Title: ${item.title}
Source: ${item.source}

Verified information:
${item.content}
              `.trim()
            )
            .join("\n\n-------------------------\n\n")
        : "No matching verified KIST information was found.";

    // ---------------------------------------------------------
    // OPENROUTER
    // ---------------------------------------------------------

    const completion =
      await openrouter.chat.completions.create({
        model,
        temperature: 0.1,
        max_tokens: 700,

        messages: [
          {
            role: "system",
            content: `
You are KIST AI Campus Assistant.

You are an independent prototype for KIST College & SS
in Kathmandu, Nepal.

Your primary job is to answer questions about KIST College & SS
using the VERIFIED KIST KNOWLEDGE provided below.

IMPORTANT RULES:

1. Never pretend to be an official KIST system.

2. Use the provided verified KIST knowledge as the primary source.

3. Never invent:
   - phone numbers
   - email addresses
   - fees
   - admission deadlines
   - eligibility requirements
   - scholarships
   - programmes
   - facilities
   - events
   - statistics
   - college policies

4. If the user's question is answered by the verified knowledge,
   answer directly and clearly.

5. If the information is not available in the verified knowledge,
   say:
   "I couldn't verify that information from the available KIST sources."

6. When information may change over time, tell the user to check
   the official KIST website for the latest information.

7. Keep answers concise, clear and student-friendly.

8. Answer in the same language style as the user when possible.
   For example, if the user uses Hinglish, simple Hinglish is okay.

9. Do not claim access to private KIST databases.

10. Do not claim information is official unless it is supported
    by the provided KIST sources.

11. Do not make up information just to provide an answer.

12. If relevant verified information exists, do NOT say
    "I couldn't verify" simply because you do not have internet access.
    The verified context below is already available to you.

13. If the user asks for contact information, use the verified
    contact information below.

VERIFIED KIST KNOWLEDGE:

${knowledgeContext}

END VERIFIED KIST KNOWLEDGE.
            `.trim(),
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

    const answer =
      completion.choices?.[0]?.message?.content;

    if (!answer) {
      return NextResponse.json(
        {
          error:
            "OpenRouter returned an empty response.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      answer,
      model,
      sources: knowledge.map((item) => ({
        title: item.title,
        source: item.source,
      })),
    });
  } catch (error: unknown) {
    console.error("OPENROUTER ERROR:", error);

    let errorMessage =
      "OpenRouter request failed.";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}