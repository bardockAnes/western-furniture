type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ExternalLink({description, href, title}: Props) {
  return (
    <a
      className="external-link"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <p className="external-link-title">
        {title} <span className="external-link-arrow">→</span>
      </p>
      <p className="external-link-description">{description}</p>
    </a>
  );
}
