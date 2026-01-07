import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg mb-4">Tea-Room</h3>
            <p className="text-sm opacity-90">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("a-propos")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("nos-prestations")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("galerie")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("horaires")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.hours}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.contact.phone}</h4>
            <a
              href="tel:+41223619191"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity block"
            >
              +41 22 361 91 91
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.contact.email}</h4>
            <a
              href="mailto:fabienromanens@hotmail.com"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity block"
            >
              fabienromanens@hotmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>
            {new Date().getFullYear()} {t.footer.tagline} • {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
