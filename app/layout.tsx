import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import { Nav } from "@/components/Nav";
import { RevealObserver } from "@/components/RevealObserver";
import { profile } from "@/lib/content";
import "./globals.css";

const heading = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: { default: "Umar Tanwar | Full Stack Developer", template: "%s | Umar Tanwar" },
  description:
    "Full stack developer in Jaipur building production apps with Flutter, REST APIs, WebSockets, Supabase, Firebase, FastAPI and Django.",
};

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `(function(){var r=document.documentElement;r.classList.add('js');var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='dark')t='light';r.dataset.theme=t})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav name={profile.name} />
        {children}
        <RevealObserver />
        <footer className="footer">
          <div className="wrap footer-row">
            <ul className="social">
              {profile.links.map((l) => (
                <li key={l.label}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>
              ))}
            </ul>
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <a href="#top" className="to-top">Back to top ↑</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
