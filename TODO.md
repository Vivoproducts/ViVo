# ViVo — openstaande punten

Bijgewerkt: 5 oktober 2026. Afgeronde punten weghalen, nieuwe onderaan de juiste lijst.

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

- [ ] **www.vivoproducts.nl werkend krijgen** — GitHub geeft al sinds 4 okt geen certificaat uit voor www
      (`cert: new`, "aanvraag start binnenkort"). Losse en opnieuw koppelen hielp niet (11 okt).
      **Oorzaak waarschijnlijk:** bij Strato staat maar **één** A-record en **één** AAAA-record, terwijl GitHub
      er vier van elk verwacht. Toe te voegen bij Strato (DNS → A-record → configuratie):
      `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; AAAA: `2606:50c0:8001::153` t/m `8003::153`.
      MX-records niet aanraken. Daarna in GitHub het domein opnieuw laten controleren en https afdwingen.
      Lukt dat niet, dan Cloudflare (lost ook de beveiligingsheaders hieronder op).

- [ ] **https afdwingen** — kan pas als het GitHub-certificaat op "approved" staat.
      GitHub → repo ViVo → Settings → Pages → "Enforce HTTPS". Of vraag het mij.
- [ ] **Cloudflare** — voor beveiligingsheaders (HSTS, CSP); beveiligingsscore van ±85 naar ±95.
      Vereist verhuizing van de naamservers bij Strato; let op de mailinstellingen (MX).
- [ ] **Prestaties** (audit: 49) — three.js, GSAP en de volledige-pagina-opnames wegen het zwaarst.
      Verder verkleinen gaat deels ten koste van de animaties: keuze van Thomas.

## Later

- [ ] **Referenties van klanten** — een of twee citaten bij de cases (THNK, DELPHI).
- [ ] **PNG-versies van het logo** (180/192/512) voor app-iconen — zie `logo/genereer-merk.mjs`.
