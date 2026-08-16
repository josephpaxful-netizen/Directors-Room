export default function NewProjectCard() {
  return (
    <button className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line aspect-video hover:border-accent hover:bg-panel/50 transition-all">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-2xl text-muted group-hover:text-accent group-hover:border-accent transition-colors">
        +
      </span>
      <span className="text-sm text-muted group-hover:text-white transition-colors">
        New project
      </span>
    </button>
  );
}
