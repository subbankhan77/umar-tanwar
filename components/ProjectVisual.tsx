import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flow">
      {steps.map((step, i) => (
        <li key={step}>
          <span>{step}</span>
          {i < steps.length - 1 && <ArrowRight size={14} aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}

export function ProjectVisual({ project, maxShots = 3 }: { project: Project; maxShots?: number }) {
  const { media } = project;
  if (media?.type === "wide") {
    return (
      <div className="visual">
        <Image src={media.src} alt={media.alt} fill sizes="(max-width: 1023px) 100vw, 600px" />
      </div>
    );
  }
  if (media?.type === "phones") {
    return (
      <div className="visual phones">
        {media.shots.slice(0, maxShots).map((s) => (
          <Image key={s.src} src={s.src} alt={s.alt} width={200} height={390} />
        ))}
      </div>
    );
  }
  return (
    <div className="visual arch">
      <p className="mono-label">Architecture</p>
      <Flow steps={project.flow} />
    </div>
  );
}
