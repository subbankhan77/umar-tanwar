"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SECTIONS = ["about", "experience", "projects", "skills", "contact"];

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.classList.add("theme-anim");
  root.dataset.theme = next;
  window.setTimeout(() => root.classList.remove("theme-anim"), 200);
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

export function Nav({ name }: { name: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={`nav${scrolled || open ? " scrolled" : ""}`}>
      <div className="wrap nav-row">
        <Link href="/" className="brand">{name}</Link>
        <nav id="nav-links" aria-label="Main" className={open ? "open" : ""}>
          {SECTIONS.map((s) => (
            <Link
              key={s}
              href={`/#${s}`}
              className={active === s ? "active" : ""}
              aria-current={active === s ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {s[0].toUpperCase() + s.slice(1)}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Switch colour theme">
            <Sun size={18} className="icon-sun" aria-hidden="true" />
            <Moon size={18} className="icon-moon" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-links"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
