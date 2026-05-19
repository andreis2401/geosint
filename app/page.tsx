import Link from "next/link";
import {
  focusAreas,
  membershipTiers,
  quickStats,
  upcomingEvents,
} from "./content";

export default function Home() {
  return (
    <div className="page-stack">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Asociatia Romana a Geosinteticelor</p>
            <h1 className="hero-title">
              O platforma moderna pentru evenimente tehnice, membri si resurse
              utile in geosintetice
            </h1>
            <p className="hero-subtitle">
              Noua directie pastreaza ADN-ul ARG si transforma experienta intr-o
              interfata clara: rapid gasesti ce eveniment urmeaza, cum te
              inscrii si ce materiale poti consulta.
            </p>

            <div className="actions-row">
              <Link href="/evenimente" className="btn btn-primary">
                Vezi evenimentele
              </Link>
              <a
                href="https://geosint.ro/membri.html"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Tipuri de membership
              </a>
            </div>
          </div>

          <aside className="hero-card reveal" style={{ animationDelay: "120ms" }}>
            <p className="card-kicker">Urmatorul focus</p>
            <h2>{upcomingEvents[0].title}</h2>
            <p>{upcomingEvents[0].summary}</p>
            <ul className="meta-list">
              <li>
                <span>Perioada</span>
                <strong>{upcomingEvents[0].period}</strong>
              </li>
              <li>
                <span>Locatie</span>
                <strong>{upcomingEvents[0].location}</strong>
              </li>
            </ul>
            <a
              href={upcomingEvents[0].actionHref}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {upcomingEvents[0].actionLabel}
            </a>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container stats-grid">
          {quickStats.map((stat, index) => (
            <article
              key={stat.label}
              className="stat-card reveal"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Directii de continut</p>
            <h2>Ce facem concret</h2>
          </div>
          <div className="card-grid card-grid-3">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="soft-card reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Noutati si activitate</p>
            <h2>Doua evenimente pe care le evidentiem acum</h2>
          </div>
          <div className="card-grid card-grid-2">
            {upcomingEvents.slice(1, 3).map((event, index) => (
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
            <p className="eyebrow">Membership</p>
            <h2>Structura simplificata a cotizatiilor</h2>
          </div>
          <div className="card-grid card-grid-2">
            {membershipTiers.map((tier, index) => (
              <article
                key={tier.name}
                className="tier-card reveal"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3>{tier.name}</h3>
                <p className="tier-fee">{tier.fee}</p>
                <p>{tier.details}</p>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/evenimente" className="btn btn-primary">
              Continua catre pagina de evenimente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
