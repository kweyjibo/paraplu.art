import { EMAIL, BLOG, IN, TELEGRAM, IG, COPYRIGHT } from "./footerContacts";

export default function Footer() {
  return (
    <footer className="footer cell4">
      <div className="footer__section __1">
        <h3 className="footer__title">Links</h3>

        <ul className="footer__list">
          <li>
            <a href={BLOG} className="footer__link">
              Personal blog
            </a>
          </li>
          <li>
            <a href={IN} className="footer__link">
              Linkedin
            </a>
          </li>
          <li>
            <a href={TELEGRAM} className="footer__link">
              Telegram
            </a>
          </li>
          <li>
            <a href={IG} className="footer__link">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__section __2">
        <h3 className="footer__title">E-mail</h3>
        <a href={`mailto:${EMAIL}`} className="footer__link">
          {EMAIL}
        </a>
      </div>
      <div className="footer__section __3">
        <p>Handcrafted by me</p> <p>Designed by me</p>
      </div>
      <div className="footer__section __4">&copy; {COPYRIGHT}</div>
    </footer>
  );
}
