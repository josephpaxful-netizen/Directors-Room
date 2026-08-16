import { NextRequest, NextResponse } from "next/server";
import { createKlingJob } from "@/lib/providers/kling";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { prompt, duration, cameraRig } = body;

  if (!prompt) {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
  }

  // For now, call the Kling stub; later branch on provider (fal / replicate)
  const job = await createKlingJob({
    prompt,
    duration: duration ?? 4,
    cameraRig: cameraRig ?? "static",
  });

  return NextResponse.json({ jobId: job.id, provider: "kling" });
}
