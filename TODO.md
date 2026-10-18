# ViVo — openstaande punten

Bijgewerkt: 18 oktober 2026. Afgeronde punten weghalen, nieuwe onderaan de juiste lijst.

## Wacht op Thomas

- [ ] **Cookiemelding aanzetten** — zodra je Google Analytics, Google Ads of de Meta-pixel wilt gebruiken.
      Lever de ID's aan; ze gaan in `SITE.meten` in `site/inhoud.mjs`. Dan verschijnen automatisch de melding,
      de pagina `/cookies/`, de cookieparagrafen in de privacyverklaring en de footerlinks.
      Nu bewust uit: de site plaatst geen cookies en laadt geen externe scripts.
- [ ] **Btw-nummer** — gaat in `SITE.btw`; verschijnt dan vanzelf in de footer (informatieplicht).
- [ ] **Google Bedrijfsprofiel** — verificatie afronden zodra Google de code stuurt.
- [ ] **Search Console** — controleren of de sitemap op "Geslaagd" staat; na 1–2 weken Prestaties bekijken.
- [ ] **Algemene voorwaarden** — concept; laten nalezen door een jurist of vergelijken met modelvoorwaarden.
- [ ] **Huidzorg Mozi** — zodra de site live is: status "In ontwikkeling" eraf en de link toevoegen.

## Technisch, wanneer het uitkomt

- [ ] **www.vivoproducts.nl werkend krijgen** — GitHub geeft sinds 4 okt geen certificaat uit voor www
      (`cert: new`, "aanvraag start binnenkort"). Stand 18 okt 2026:
      - Los- en opnieuw koppelen hielp niet (11 okt).
      - Vier A-records bij Strato **kan niet**: Strato biedt één veld per type, geen knop om records toe te voegen.
      - Support-ticket vanaf het persoonlijke account werd automatisch afgewezen (gratis plan).
      - **Repo verhuisd naar de organisatie Vivoproducts (Team-plan)** → recht op support, en een verse
        certificaataanvraag. Verliep zonder uitval; www-CNAME omgezet naar `vivoproducts.github.io`.
      - **Nu:** afwachten of GitHub het certificaat uitgeeft. Blijft het hangen → ticket indienen
        **namens Vivoproducts** (bij "Select an account" de organisatie kiezen, niet thomv-flow8).
      - Lukt dat ook niet, dan Cloudflare (lost ook de beveiligingsheaders hieronder op). Let op bij een
        verhuizing naar Cloudflare: **DNSSEC staat aan** en moet eerst bij Strato uit, anders wordt het domein
        onbereikbaar — site én mail. MX-, SPF- en DKIM-records record voor record controleren vóór de omzetting.

- [ ] **https afdwingen** — kan pas als het GitHub-certificaat op "approved" staat.
      GitHub → repo ViVo → Settings → Pages → "Enforce HTTPS". Of vraag het mij.
- [ ] **Cloudflare** — voor beveiligingsheaders (HSTS, CSP); beveiligingsscore van ±85 naar ±95.
      Vereist verhuizing van de naamservers bij Strato; let op de mailinstellingen (MX).
- [ ] **Prestaties** (audit: 49) — three.js, GSAP en de volledige-pagina-opnames wegen het zwaarst.
      Verder verkleinen gaat deels ten koste van de animaties: keuze van Thomas.

## Later

- [ ] **Referenties van klanten** — een of twee citaten bij de cases (THNK, DELPHI).
- [ ] **PNG-versies van het logo** (180/192/512) voor app-iconen — zie `logo/genereer-merk.mjs`.
