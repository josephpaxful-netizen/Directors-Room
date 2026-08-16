"use client";
import { CameraRig } from "@/lib/types";

const rigs: { id: CameraRig; label: string; icon: string }[] = [
  { id: "static", label: "Static", icon: "▢" },
  { id: "dolly", label: "Dolly", icon: "→" },
  { id: "orbit", label: "Orbit", icon: "↻" },
  { id: "crane", label: "Crane", icon: "⤴" },
  { id: "handheld", label: "Handheld", icon: "≈" },
  { id: "roboarm", label: "Robo-arm", icon: "⌁" },
  { id: "fpv", label: "FPV", icon: "◎" },
];

export default function CameraRigSelector({
  value,
  onChange,
}: {
  value: CameraRig;
  onChange: (rig: CameraRig) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {rigs.map((rig) => (
        <button
          key={rig.id}
          onClick={() => onChange(rig.id)}
          className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-xs border transition-all ${
            value === rig.id
              ? "border-accent bg-accent/10 text-white"
              : "border-line text-muted hover:border-white/30"
          }`}
        >
          <span aria-hidden>{rig.icon}</span>
          {rig.label}
        </button>
      ))}
    </div>
  );
}
