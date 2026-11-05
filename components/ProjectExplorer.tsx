"use client";

import { ArrowUpRight, BrainCircuit, Code2, Layers, MonitorSmartphone, Server, Smartphone, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { categories, type Category, type Project } from "@/lib/projects";

const ICONS: Record<Category, LucideIcon> = {
  Mobile: Smartphone,
  "Full stack & backend": Server,
  "Web & desktop": MonitorSmartphone,
  "AI & machine learning": BrainCircuit,
  "Computer science": Code2,
};

const INITIAL = 9;
const ALL = "All";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | typeof ALL>(ALL);
  const [expanded, setExpanded] = useState(false);

  const filters = categories.filter((c) => projects.some((p) => p.category === c));
  const matching = filter === ALL ? projects : projects.filter((p) => p.category === filter);
  const visible = filter === ALL && !expanded ? matching.slice(0, INITIAL) : matching;

  return (
    <div className="explorer">
      <div className="explorer-head">
        <h3>More projects</h3>
        <div className="filters" role="group" aria-label="Filter projects by category">
          {[ALL, ...filters].map((c) => (
            <button
              key={c}
              type="button"
              className={filter === c ? "filter active" : "filter"}
              aria-pressed={filter === c}
              onClick={() => setFilter(c as Category | typeof ALL)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {visible.map((p) => {
          const Icon = ICONS[p.category] ?? Layers;
          return (
            <article className="card" key={p.slug}>
              <div className="card-body">
                <div className="card-top">
                  <span className="card-icon"><Icon size={18} aria-hidden="true" /></span>
                  <p className="kind">{p.kind}</p>
                </div>
                <h3><Link className="card-link" href={`/projects/${p.slug}`}>{p.title}</Link></h3>
                <p className="muted card-summary">{p.summary}</p>
                <ul className="tags">{p.stack.slice(0, 4).map((s) => <li key={s}>{s}</li>)}</ul>
                <p className="more">View project <ArrowUpRight size={16} aria-hidden="true" /></p>
              </div>
            </article>
          );
        })}
      </div>

      {visible.length < matching.length && (
        <button type="button" className="btn ghost show-all" onClick={() => setExpanded(true)}>
          Show all {matching.length} projects
        </button>
      )}
    </div>
  );
}
