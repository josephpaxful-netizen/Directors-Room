import { Project, Shot } from "@/lib/types";

// Temporary in-memory store. Replace with Supabase queries in Batch 5.
export const seedProjects: Project[] = [
  {
    id: "proj-001",
    title: "Neon Harbor",
    createdAt: new Date().toISOString(),
    shots: [
      {
        id: "shot-001",
        order: 1,
        title: "Establishing wide",
        prompt: "A rain-soaked harbor at night, neon signs reflecting on wet concrete.",
        referenceImages: [],
        cameraRig: "crane",
        duration: 4,
        resolution: "1080p",
        aspectRatio: "16:9",
        provider: "kling",
        status: "ready",
        outputUrl: "/demo/feature-storyboard-poster.jpg",
        continuityNotes: "Establish blue/magenta color palette for the whole sequence.",
      },
      {
        id: "shot-002",
        order: 2,
        title: "Character approach",
        prompt: "A lone figure in a trench coat walks toward camera through the rain.",
        referenceImages: [],
        cameraRig: "dolly",
        duration: 5,
        resolution: "1080p",
        aspectRatio: "16:9",
        provider: "kling",
        status: "processing",
        continuityNotes: "Same coat and umbrella color as previous project reference.",
      },
    ],
  },
  {
    id: "proj-002",
    title: "Glass Orchard",
    createdAt: new Date().toISOString(),
    shots: [],
  },
];

export function getProject(id: string): Project | undefined {
  return seedProjects.find((p) => p.id === id);
}

export function createShot(projectId: string, partial: Partial<Shot>): Shot {
  const project = getProject(projectId);
  const newShot: Shot = {
    id: `shot-${Date.now()}`,
    order: (project?.shots.length ?? 0) + 1,
    title: partial.title ?? "Untitled shot",
    prompt: partial.prompt ?? "",
    referenceImages: partial.referenceImages ?? [],
    cameraRig: partial.cameraRig ?? "static",
    duration: partial.duration ?? 4,
    resolution: partial.resolution ?? "1080p",
    aspectRatio: partial.aspectRatio ?? "16:9",
    provider: partial.provider ?? "kling",
    status: "draft",
    continuityNotes: partial.continuityNotes ?? "",
  };
  project?.shots.push(newShot);
  return newShot;
}
