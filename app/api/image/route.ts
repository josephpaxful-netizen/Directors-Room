import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { prompt } = body;
  if (!prompt) {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
  }

  // Placeholder: return static demo image
  return NextResponse.json({
    url: "/demo/feature-layers.jpg",
    provider: "fal",
    model: process.env.FAL_TXT2IMG_MODEL ?? "fal-ai/flux-pro/v1.1-ultra",
  });
}
