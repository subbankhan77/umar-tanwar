import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Flow, ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main id="top" className="wrap case">
      <Link className="back" href="/#projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
      <p className="kind">{project.kind}</p>
      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>
      {(project.live || project.appStore || project.repo) && (
        <div className="cta">
          {project.live && (
            <a className="btn" href={project.live.href} target="_blank" rel="noreferrer">{project.live.label} <ArrowUpRight size={18} aria-hidden="true" /></a>
          )}
          {project.appStore && (
            <a className="btn ghost" href={project.appStore.href} target="_blank" rel="noreferrer">{project.appStore.label} <ArrowUpRight size={18} aria-hidden="true" /></a>
          )}
          {project.repo && (
            <a className={project.live ? "btn ghost" : "btn"} href={project.repo} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={18} aria-hidden="true" /></a>
          )}
        </div>
      )}
      {project.note && <p className="note">{project.note}</p>}
      {project.media && <div className="case-visual"><ProjectVisual project={project} maxShots={4} /></div>}

      <div className="case-grid">
        <section><h2>The problem</h2><p>{project.problem}</p></section>
        <section><h2>My role</h2><p>{project.role}</p></section>
        <section className="span">
          <h2>Architecture</h2>
          <Flow steps={project.flow} />
          <p>{project.architecture}</p>
        </section>
        <section><h2>Technologies</h2><ul className="tags">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul></section>
        <section><h2>Outcome</h2><p>{project.outcome}</p></section>
        {project.related && (
          <section className="span">
            <h2>Related repositories</h2>
            <ul className="related">
              {project.related.map((r) => (
                <li key={r.href}><a href={r.href} target="_blank" rel="noreferrer">{r.label} <ArrowUpRight size={15} aria-hidden="true" /></a></li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
