"use client";
import { SceneLayer } from "@/lib/types";

export default function LayerSidebar({
  layers,
  activeId,
  onSelect,
  onToggleVisible,
}: {
  layers: SceneLayer[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onToggleVisible: (id: string) => void;
}) {
  return (
    <aside className="w-64 border-r border-line bg-panel/70 backdrop-blur-sm p-4 space-y-3">
      <h2 className="text-xs uppercase tracking-widest text-muted mb-2">
        Layers
      </h2>
      {layers.map((layer) => (
        <button
          key={layer.id}
          onClick={() => onSelect(layer.id)}
          className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
            activeId === layer.id
              ? "bg-accent/10 border border-accent text-white"
              : "border border-transparent hover:border-line text-muted"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>{layer.name}</span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleVisible(layer.id);
            }}
            className="text-xs text-muted hover:text-white"
          >
            {layer.visible ? "👁" : "👁‍🗨"}
          </button>
        </button>
      ))}
    </aside>
  );
}
