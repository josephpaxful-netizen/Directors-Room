"use client";
import { Stage, Layer as KonvaLayer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";
import { SceneLayer } from "@/lib/types";

function LayerImage({ layer }: { layer: SceneLayer }) {
  const [image] = useImage(layer.url, "anonymous");
  if (!image || !layer.visible) return null;
  const { x, y, scale, rotation } = layer.transform;
  return (
    <KonvaImage
      image={image}
      x={300 + x}
      y={170 + y}
      scaleX={scale}
      scaleY={scale}
      rotation={rotation}
      offsetX={image.width / 2}
      offsetY={image.height / 2}
    />
  );
}

export default function LayerCanvas({
  layers,
}: {
  layers: SceneLayer[];
}) {
  return (
    <div className="flex-1 flex items-center justify-center bg-[radial-gradient(circle_at_top,_#1a1d24,_#050609)]">
      <div className="rounded-2xl border border-line bg-ink/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
        <Stage width={600} height={340}>
          <KonvaLayer>
            {layers.map((l) => (
              <LayerImage key={l.id} layer={l} />
            ))}
          </KonvaLayer>
        </Stage>
      </div>
    </div>
  );
}
