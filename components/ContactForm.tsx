"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

type Status =
  | { state: "idle" | "sending" | "sent" }
  | { state: "error"; message: string }
  | { state: "fallback"; href: string };

function mailtoLink(to: string, data: Record<string, FormDataEntryValue>) {
  const subject = `Portfolio message from ${data.name}`;
  const body = `${data.message}\n\n${data.name}\n${data.email}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        form.reset();
        setStatus({ state: "sent" });
      } else if (result.error === "unavailable") {
        setStatus({ state: "fallback", href: mailtoLink(email, data) });
      } else {
        setStatus({ state: "error", message: result.error });
      }
    } catch {
      setStatus({ state: "fallback", href: mailtoLink(email, data) });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required maxLength={100} autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required maxLength={200} autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" required minLength={10} maxLength={5000} rows={5} />
      </label>
      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="btn" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending…" : <>Get in touch <ArrowUpRight size={18} aria-hidden="true" /></>}
      </button>
      <div className={`form-status ${status.state}`} role="status">
        {status.state === "sent" && "Thanks! Your message has been sent."}
        {status.state === "error" && status.message}
        {status.state === "fallback" && (
          <>
            <p>Your message is ready. Open it in your email app to send it.</p>
            <a className="btn ghost form-fallback" href={status.href}>
              <Mail size={17} aria-hidden="true" /> Open in email app
            </a>
          </>
        )}
      </div>
    </form>
  );
}
