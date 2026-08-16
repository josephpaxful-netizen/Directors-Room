"use client";
import { useState } from "react";
import LayerSidebar from "@/components/layers/LayerSidebar";
import LayerControls from "@/components/layers/LayerControls";
import LayerCanvas from "@/components/layers/LayerCanvas";
import { SceneLayer } from "@/lib/types";
import { sampleScene } from "@/lib/layers/sampleScene";

export default function LayersPage() {
  const [layers, setLayers] = useState<SceneLayer[]>(sampleScene.layers);
  const [activeId, setActiveId] = useState<string | null>(layers[0]?.id ?? null);

  const activeLayer = layers.find((l) => l.id === activeId) ?? null;

  function updateLayer(next: SceneLayer) {
    setLayers((prev) => prev.map((l) => (l.id === next.id ? next : l)));
  }

  function toggleVisible(id: string) {
    setLayers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, visible: !l.visible } : l))
    );
  }

  return (
    <main className="min-h-screen bg-ink text-white flex">
      <LayerSidebar
        layers={layers}
        activeId={activeId}
        onSelect={setActiveId}
        onToggleVisible={toggleVisible}
      />
      <LayerCanvas layers={layers} />
      <LayerControls layer={activeLayer} onChange={updateLayer} />
    </main>
  );
}
