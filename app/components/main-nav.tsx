"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../content";

export function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">ARG</span>
          <span className="brand-text">
            Asociatia Romana a Geosinteticelor
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Deschide meniul"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Inchide" : "Meniu"}
        </button>

        <nav className={`site-nav ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://geosint.ro/contact.php"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
