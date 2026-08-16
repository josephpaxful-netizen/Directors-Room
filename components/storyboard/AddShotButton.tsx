export default function AddShotButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-2xl border border-dashed border-line py-6 text-sm text-muted hover:border-accent hover:text-white transition-all"
    >
      + Add shot
    </button>
  );
}
