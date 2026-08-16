import { NextRequest, NextResponse } from "next/server";
import { getKlingJob } from "@/lib/providers/kling";

export async function GET(req: NextRequest) {
  const jobId = req.nextUrl.searchParams.get("jobId");
  if (!jobId) {
    return NextResponse.json({ error: "Missing jobId" }, { status: 400 });
  }

  const job = await getKlingJob(jobId);
  return NextResponse.json(job);
}
