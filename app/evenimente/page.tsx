import type { Metadata } from "next";
import { timeline, upcomingEvents } from "../content";

export const metadata: Metadata = {
  title: "Evenimente",
  description:
    "Calendar modern de evenimente ARG, cu status, context si pasi practici pentru participare.",
};

export default function EvenimentePage() {
  return (
    <div className="page-stack">
      <section className="sub-hero">
        <div className="container">
          <p className="eyebrow">Calendar ARG</p>
          <h1>Evenimente gandite pentru invatare practica si networking util</h1>
          <p>
            Pagina este structurata sa raspunda rapid la intrebarile esentiale:
            ce urmeaza, cand are loc, ce primesti si unde gasesti detalii.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Program activ</p>
            <h2>Evenimente urmarite in noul design</h2>
          </div>

          <div className="card-grid card-grid-3">
            {upcomingEvents.map((event, index) => (
              <article
                key={event.title}
                className="event-card reveal"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="event-top">
                  <span
                    className={`badge ${
                      event.status === "confirmat" ? "ok" : "pending"
                    }`}
                  >
                    {event.status}
                  </span>
                  <span>{event.period}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <p className="event-location">{event.location}</p>
                <a
                  href={event.actionHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  {event.actionLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Context si credibilitate</p>
            <h2>Evolutia comunitatii ARG</h2>
          </div>

          <div className="timeline">
            {timeline.map((step, index) => (
              <article
                key={step.year + step.title}
                className="timeline-item reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="timeline-year">{step.year}</p>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="inscriere">
        <div className="container split-panel">
          <article className="soft-card reveal">
            <h2>Cum participi in noul flux</h2>
            <ol className="steps">
              <li>
                <strong>1. Alegi evenimentul</strong>
                <span>Pagina iti arata clar statusul si perioada.</span>
              </li>
              <li>
                <strong>2. Verifici detaliile</strong>
                <span>Ai legatura directa catre pagina oficiala de context.</span>
              </li>
              <li>
                <strong>3. Confirmi inscrierea</strong>
                <span>Contact rapid prin formularul ARG sau canalele sociale.</span>
              </li>
            </ol>
          </article>

          <article className="contact-card reveal" style={{ animationDelay: "120ms" }}>
            <p className="card-kicker">Ai un parteneriat sau o propunere?</p>
            <h3>Hai sa construim urmatoarea editie impreuna.</h3>
            <p>
              Noul layout pregateste terenul pentru formular integrat,
              management de speakeri si publicarea automata a resurselor post
              eveniment.
            </p>
            <a className="btn btn-primary" href="https://geosint.ro/contact.php" target="_blank" rel="noreferrer">
              Contact ARG
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
