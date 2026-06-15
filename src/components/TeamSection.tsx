import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M6.35 8.75H3.2v10.1h3.15V8.75ZM4.78 7.37c1 0 1.78-.77 1.78-1.72 0-.98-.78-1.73-1.78-1.73S3 4.67 3 5.65c0 .95.78 1.72 1.78 1.72Zm6.62 1.38H8.38v10.1h3.12v-5.3c0-1.42.67-2.26 1.84-2.26 1.05 0 1.56.74 1.56 2.2v5.36H18v-5.9c0-2.92-1.55-4.48-3.9-4.48-1.34 0-2.2.55-2.7 1.28v-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TeamSection({ content }: Props) {
  return (
    <section id="equipe" className="section section-anchor band">
      <div className="section-heading">
        <h2>{content.team.title}</h2>
        <p>{content.team.intro}</p>
      </div>
      <div className="team-grid">
        {content.team.members.map((member) => (
          <article className="team-card" key={member.name}>
            <div className="team-card-header">
              <h3>{member.name}</h3>
              <a
                className="linkedin-link"
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${content.team.linkedinLabel}: ${member.name}`}
                title={`${content.team.linkedinLabel}: ${member.name}`}
              >
                <LinkedInIcon />
                <span className="sr-only">
                  {content.team.linkedinLabel}: {member.name}
                </span>
              </a>
            </div>
            <ul>
              {member.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
