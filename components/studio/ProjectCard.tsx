import Link from "next/link";
import { Project } from "@/lib/types";

const statusColor: Record<string, string> = {
  ready: "bg-emerald-400",
  processing: "bg-gold animate-pulse",
  queued: "bg-muted",
  draft: "bg-muted/50",
  failed: "bg-red-400",
};

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.shots.find((s) => s.outputUrl)?.outputUrl;
  const readyCount = project.shots.filter((s) => s.status === "ready").length;

  return (
    <Link
      href={`/studio/${project.id}`}
      className="group block rounded-2xl border border-line bg-panel overflow-hidden transition-all hover:border-white/20 hover:-translate-y-1"
    >
      <div className="relative aspect-video bg-gradient-to-br from-[#181b22] to-ink overflow-hidden">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-muted">No shots yet</span>
          </div>
        )}
        <div className="absolute top-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
          {project.shots.length} shots
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-white mb-1">{project.title}</h3>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{readyCount}/{project.shots.length || 0} rendered</span>
        </div>
      </div>
    </Link>
  );
}
