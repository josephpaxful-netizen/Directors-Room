import StoryboardClient from "@/components/storyboard/StoryboardClient";
import { getProject } from "@/lib/store/projects";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  const project = getProject(params.projectId);
  if (!project) return notFound();

  return <StoryboardClient project={project} />;
}
