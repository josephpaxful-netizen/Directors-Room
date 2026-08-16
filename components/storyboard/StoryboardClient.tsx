"use client";
import { useState } from "react";
import Link from "next/link";
import { Project, Shot } from "@/lib/types";
import ShotCard from "./ShotCard";
import AddShotButton from "./AddShotButton";

export default function StoryboardClient({ project }: { project: Project }) {
  const [shots, setShots] = useState<Shot[]>(project.shots);

  function updateShot(updated: Shot) {
    setShots((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  }

  function addShot() {
    const newShot: Shot = {
      id: `shot-${Date.now()}`,
      order: shots.length + 1,
      title: "New shot",
      prompt: "",
      referenceImages: [],
      cameraRig: "static",
      duration: 4,
      resolution: "1080p",
      aspectRatio: "16:9",
      provider: "kling",
      status: "draft",
      continuityNotes: "",
    };
    setShots((prev) => [...prev, newShot]);
  }

  return (
    <main className="min-h-screen bg-ink px-6 lg:px-10 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/studio" className="text-xs text-muted hover:text-white transition-colors">
              ← All projects
            </Link>
            <h1 className="font-display text-3xl text-white mt-2">{project.title}</h1>
            <p className="text-sm text-muted mt-1">{shots.length} shots</p>
          </div>
          <div className="flex gap-3">
            <Link
              href={`/preview/${project.id}`}
              className="px-5 py-2.5 rounded-full border border-line text-white text-sm hover:border-white/40 transition-colors"
            >
              Preview sequence
            </Link>
            <button className="px-5 py-2.5 rounded-full bg-white text-ink text-sm font-medium hover:bg-gold transition-colors">
              Generate all
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {shots.map((shot) => (
            <ShotCard key={shot.id} shot={shot} onUpdate={updateShot} />
          ))}
          <AddShotButton onClick={addShot} />
        </div>
      </div>
    </main>
  );
}
