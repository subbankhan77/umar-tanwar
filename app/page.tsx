import { ArrowUpRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { ProjectVisual } from "@/components/ProjectVisual";
import { achievements, education, experience, profile, skills } from "@/lib/content";
import { featuredProjects, otherProjects, projects } from "@/lib/projects";
import { getPublicRepoCount } from "@/lib/github";

export const revalidate = 3600;

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

export default async function Home() {
  const repos = await getPublicRepoCount();
  const years = Math.floor((Date.now() - profile.codingSince.getTime()) / YEAR_MS);

  return (
    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="status"><span aria-hidden="true" /> Open to opportunities</p>
          <h1>
            Hi, I&apos;m Umar Tanwar.
            <em>Full Stack Developer.</em>
          </h1>
          <p className="lede">
            I build web and mobile applications, from thoughtful interfaces to the APIs and data behind them.
          </p>
          <div className="cta">
            <a className="btn" href="#projects">Explore My Work <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="btn ghost" href={profile.cv} download>Download CV <Download size={17} aria-hidden="true" /></a>
          </div>
          <p className="place"><MapPin size={15} aria-hidden="true" /> {profile.location}</p>
        </div>
        <div className="portrait">
          <Image src="/umar-tanwar.jpg" alt="Portrait of Umar Tanwar" fill priority sizes="(max-width: 1023px) 220px, 400px" />
        </div>
      </section>

      <section id="about" className="section wrap reveal">
        <p className="mono-label">About</p>
        <div className="about">
          <h2>From first models to production apps.</h2>
          <div>
            <p>
              I started in 2022 with Python and machine learning, built my foundation in data structures and algorithms,
              and spent over a year solving computer science problems at Chegg.
            </p>
            <p>
              Today I work on a live tournament app at Emizen Tech, where the interface, API contracts, real-time updates
              and production debugging all have to work together. Outside work, I build with FastAPI, Django, Supabase and Firebase.
            </p>
          </div>
        </div>
        <dl className="stats">
          <div><dt>{years}+ years</dt><dd>building software, since June 2022</dd></div>
          <div><dt>{repos ?? 45} repos</dt><dd>public on GitHub</dd></div>
          <div><dt>300+</dt><dd>DSA problems solved</dd></div>
        </dl>
      </section>

      <section id="experience" className="section wrap reveal">
        <p className="mono-label">Experience</p>
        <h2>Where I&apos;ve worked</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article key={job.company}>
              <p className="period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
              <p className="muted">{job.summary}</p>
              {job.points.length > 0 && <ul className="points">{job.points.map((p) => <li key={p}>{p}</li>)}</ul>}
            </article>
          ))}
        </div>
        <div className="edu-grid">
          <div>
            <h3>Education</h3>
            {education.map((e) => (
              <p className="edu" key={e.title}><strong>{e.title}</strong><span>{e.place} · {e.period}</span></p>
            ))}
          </div>
          <div>
            <h3>Achievements</h3>
            <ul className="points">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section wrap reveal">
        <p className="mono-label">Projects</p>
        <h2>Selected work</h2>
        <p className="muted section-lead">{projects.length} projects, from production apps to backend services and machine learning.</p>
        <div className="featured">
          {featuredProjects.map((p) => (
            <article className="card" key={p.slug}>
              <ProjectVisual project={p} />
              <div className="card-body">
                <p className="kind">{p.kind}</p>
                <h3><Link className="card-link" href={`/projects/${p.slug}`}>{p.title}</Link></h3>
                <p className="muted">{p.summary}</p>
                <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <p className="more">View project <ArrowUpRight size={16} aria-hidden="true" /></p>
              </div>
            </article>
          ))}
        </div>
        <ProjectExplorer projects={otherProjects} />
      </section>

      <section id="skills" className="section wrap reveal">
        <p className="mono-label">Skills</p>
        <h2>What I work with</h2>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="tags">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section wrap reveal contact">
        <div>
          <p className="mono-label">Contact</p>
          <h2>Let&apos;s build something great.</h2>
          <p className="muted contact-intro">Have a project or opportunity in mind? Let&apos;s connect.</p>
          <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <ContactForm email={profile.email} />
      </section>
    </main>
  );
}
