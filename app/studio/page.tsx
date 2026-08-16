import ProjectCard from "@/components/studio/ProjectCard";
import NewProjectCard from "@/components/studio/NewProjectCard";
import { seedProjects } from "@/lib/store/projects";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-ink px-6 lg:px-10 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Studio</span>
            <h1 className="font-display text-4xl text-white mt-2">Your projects</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewProjectCard />
          {seedProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
