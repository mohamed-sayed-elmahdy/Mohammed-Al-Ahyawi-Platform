import { footerLinks } from "./FooterLinks";

export default function Footer() {
  return (
    <footer>
      <div>Mohammed Al-Ehyawi</div>
      <ul>
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
