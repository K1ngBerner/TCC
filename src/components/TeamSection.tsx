import type { LocaleContent } from "../locales/types";

type Props = {
  content: LocaleContent;
};

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
            <h3>{member.name}</h3>
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
