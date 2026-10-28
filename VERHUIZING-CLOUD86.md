# Verhuizing naar Cloud86 — draaiboek

Opgesteld 27 oktober 2026. Drie sites gaan naar één Cloud86-pakket: **ViVo**, **THNK** en
**OK Timmerwerken**. DELPHI, Mozi en BA Montage blijven waar ze staan — die lopen via de
hosting van de klant.

## Waarom

GitHub Pages geeft geen beveiligingsheaders, geen instelbare cache, geen echte 301-redirects,
en het www-certificaat van vivoproducts.nl hangt sinds 4 oktober vast zonder dat we er iets
aan kunnen doen. Op Cloud86 (Plesk) regel je dat allemaal zelf met `.htaccess`.

## Het uitgangspunt: de mail wordt niet aangeraakt

Bij alle drie de domeinen **blijven de naamservers staan waar ze staan**. We zetten alleen de
A-records (en bij ViVo ook AAAA) om naar het Cloud86-adres. MX, SPF, DKIM, DMARC, autodiscover
en alle verificatierecords blijven ongemoeid.

Daarmee vervalt ook het DNSSEC-risico: dat speelt alleen bij een naamserverwissel, en die doen
we niet.

**Cloud86-IP:** `45.82.191.90` — server `shared87.cloud86-host.nl`, webroot `httpdocs`.

**Let op bij de Git-koppeling:** de site staat in `docs/`, niet in de hoofdmap van de repo.
Plesk kopieert de hele repo naar het deployment path, dus zet daarna de **document root** van
het domein op `httpdocs/docs`. De rest van de repo (site/, tools/, cases/) staat dan wel op de
server maar is niet via het web bereikbaar.

---

## Momentopname vóór de verhuizing

Dit is de situatie op 27 oktober 2026. Bewaar dit: hiermee controleer je achteraf of er niets
onbedoeld is veranderd. Opnieuw op te halen met `tools/dns-controle.sh`.

### vivoproducts.nl — DNS bij Strato
```
NS      docks02.rzone.de. shades14.rzone.de.
A       185.199.108.153              ← WORDT GEWIJZIGD
AAAA    2606:50c0:8000::153          ← WORDT GEWIJZIGD of verwijderd
MX      5 smtp.rzone.de.
TXT     "v=spf1 redirect=_spf.strato.com"
_dmarc  "v=DMARC1;p=reject;"
www     CNAME vivoproducts.github.io.  ← WORDT GEWIJZIGD
DNSSEC  actief (29722 8 2 1BD1F2BF...)
```

### thnkmusic.com — DNS bij Vercel
```
NS      ns1.vercel-dns.com. ns2.vercel-dns.com.
A       216.198.79.1 / 64.29.17.65   ← WORDT GEWIJZIGD
MX      10 mx01.mail.icloud.com. / 10 mx02.mail.icloud.com.
TXT     "v=spf1 include:icloud.com ~all"
TXT     "apple-domain=bLeuQkjo3Pd6Jj0i"
TXT     "google-site-verification=njyicnYqoOEWiqex_tEZC4ZJCThzMYYYUj4ptFyCoyE"
CAA     0 issue "letsencrypt.org" / "pki.goog" / "sectigo.com"
www     A 216.198.79.1 / 216.198.79.65  ← WORDT GEWIJZIGD
DNSSEC  niet actief
```
**Let op:** de CAA-records bepalen wie een certificaat mag uitgeven. Plesk gebruikt Let's
Encrypt en die staat erin, dus dit werkt. Zou Cloud86 een andere uitgever gebruiken, dan moet
daar eerst een regel bij.

### ok-timmerwerken.nl — DNS bij GoDaddy
```
NS      ns47.domaincontrol.com. ns48.domaincontrol.com.
A       185.199.108.153 / .109 / .110 / .111   ← ALLE VIER WORDEN GEWIJZIGD
MX      10 mx1-us1.ppe-hosted.com. / 20 mx2-us1.ppe-hosted.com.
TXT     "v=spf1 a:dispatch-us.ppe-hosted.com include:secureserver.net -all"
TXT     "NETORGFT8583384.onmicrosoft.com"        (Microsoft 365-verificatie)
TXT     "google-site-verification=YIIz0PavW1V0r3NRSiX8uRyXszoFeCBqO0DkcWNsgOU"
autodiscover CNAME autodiscover.outlook.com.
www     CNAME vivoproducts.github.io.            ← WORDT GEWIJZIGD
DNSSEC  niet actief
```
**Let op:** de mail loopt via Proofpoint naar Microsoft 365. Het `autodiscover`-record en het
`onmicrosoft.com`-verificatierecord zijn daarvoor nodig. Niet aankomen.

---

## Wat er per site verandert in de werkwijze

| Site | Bouwt met | Publiceert uit | Nu | Straks |
|---|---|---|---|---|
| ViVo | `npm run bouw` | `docs/` | push → GitHub Pages | push → Plesk haalt op |
| THNK | `node prerender.mjs` | `docs/` | Vercel — bouwt niet meer, zie hieronder | push → Plesk haalt op |
| OK Timmerwerken | `node tools/genereer-paginas.js` | hoofdmap | push → GitHub Pages | push → Plesk haalt op |

**THNK is op 28 oktober omgezet** — alle drie de sites werken nu hetzelfde: lokaal bouwen,
pushen, Plesk haalt op. Daar draaide `prerender.mjs` als bouwstap óp Vercel, en Plesk bouwt
niet.

Een eerste poging schreef de gegenereerde HTML terug in `site/` en legde de live site plat:
bron en uitvoer waren dezelfde bestanden, dus de tweede ronde liep over zijn eigen werk en
zette alle teksten dubbel in de pagina. Daarom nu hetzelfde model als ViVo: `site/` is de
schone bron en wordt nooit beschreven, **`docs/` is de uitvoer** en is wat Plesk publiceert.
Welke bestanden meegaan bepaalt `git ls-files`, dus de `.gitignore` van dat project wordt
vanzelf gevolgd — een nieuw bestand telt wel pas mee ná `git add`.

Het script stopt sindsdien met een duidelijke melding zodra het al gevulde blokken ziet.
**Hiermee vervalt de vraag of Node op het hostingpakket draait**: het bouwen gebeurt lokaal.

**Vercel bouwt intussen niet meer.** De repo is verhuisd van `thomv-flow8` naar de
organisatie `Vivoproducts`, en een GitHub App-installatie gaat daarbij niet mee. De
koppeling in het Vercel-project staat er nog, maar de app heeft geen toegang meer — op
Vivoproducts staat alleen `pages-cms` geïnstalleerd. Vercel serveert daardoor nog de kapotte
build van 28 oktober. Dat lossen we niet meer op: zodra THNK op Cloud86 draait en de
A-records om zijn, is het klaar. Duurt dat lang, dan kan in Vercel de laatste goede build met
**Promote to Production** teruggezet worden; dat werkt los van GitHub.

---

## Stappenplan

### Stap 1 — Pakket nemen — GEDAAN (27 okt 2026)
- [x] Cloud86 **Medium**: vijf websites, 50 e-mailadressen, 50 GB.
      Ruim voldoende voor de drie sites; upgraden naar Power kan binnen enkele minuten
      via Mijn Cloud86 als er klanten bij komen.
- [ ] IP-adres van het pakket bovenaan invullen.

### Stap 2 — ViVo als proef
Eigen site, dus een misstap raakt geen klant. Lost meteen het www-certificaat op.

- [x] Domein `vivoproducts.nl` toevoegen in Plesk.
- [x] Git-koppeling naar `Vivoproducts/ViVo`, tak `main`, deployment directory `/httpdocs`,
      modus **automatisch**. De repo is openbaar, dus er is geen deploy key of wachtwoord nodig.
- [x] **Document root** op `/httpdocs/docs` gezet.
      Nodig omdat Plesk de hele repo naar /httpdocs schrijft terwijl de site in `docs/` staat.
- [x] **Webhook ingesteld** (GitHub → Plesk, ping gaf HTTP 204). Oorspronkelijk: — anders pullt Plesk niet vanzelf. In Plesk: Git → Repository
      Settings → webhook-URL kopiëren. Die URL in GitHub zetten bij Settings → Webhooks →
      Add webhook, content type `application/json`, trigger op `push`.
      Zonder webhook moet je na elke push handmatig op **Pull now** klikken.
      Let op: die URL bevat een geheim; niet in een commit of op een openbare plek zetten.
- [x] Getest vóór de DNS-wijziging door Chromium het nieuwe IP op te dringen
      (`--host-resolver-rules=MAP vivoproducts.nl 45.82.191.90`). Alle 22 pagina-tests goed. Alle pagina's langs, plus
      `node tools/regressie.mjs <tijdelijk-adres>`.
- [x] `.htaccess` wordt gegenereerd door `site/bouw.mjs` en komt vanzelf in `docs/` terecht
      (https afdwingen, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
      Permissions-Policy, caching, compressie). GitHub Pages negeert het bestand, dus het
      staat er nu al zonder gevolgen. **HSTS staat bewust uitgecommentarieerd** — pas
      aanzetten als https op Cloud86 bewezen werkt, want browsers onthouden het een jaar.
- [ ] Na livegang: controleren of de koppen echt meekomen (`curl -I https://vivoproducts.nl/`).
- [ ] **Pas als dat werkt:** bij Strato de A naar het Cloud86-IP, de AAAA weghalen of
      omzetten, en `www` als CNAME of A naar hetzelfde adres.
- [ ] Controleren: `tools/dns-controle.sh vivoproducts.nl` en vergelijken met de momentopname
      hierboven. **MX moet nog steeds `smtp.rzone.de` zijn.**
- [ ] Testmail sturen en ontvangen.
- [ ] Custom domain losmaken bij GitHub Pages (anders blijft dat certificaat hangen).

### Stap 3 — THNK — GEDAAN (28 okt 2026)
- [x] Bouwmodel omgezet: `site/` is de bron, `prerender.mjs` bouwt naar `docs/`, en die map
      gaat mee de repo in.
- [x] Domein toegevoegd in Plesk via **Deploy using Git**, in de webruimte van
      `vivoproducts.nl` — een eigen webruimte kon niet, het pakket heeft één abonnement.
      Mailservice bewust **uit**: de mail loopt via iCloud.
- [x] Git-koppeling naar `Vivoproducts/THNK`, tak `main`, deployment directory
      `/thnkmusic.com`, modus automatisch. **Document root `/thnkmusic.com/docs`**, zodat
      alleen de gebouwde site geserveerd wordt en `site/` van buitenaf onzichtbaar blijft.
- [x] **Deploy key** aangemaakt in Plesk en in GitHub gezet (alleen lezen). Nodig omdat deze
      repo privé is.
- [x] Getest vóór de DNS-wijziging via `curl --resolve` op `45.82.191.90`: alle vier de
      pagina's byte-identiek aan de lokale build, beveiligingskoppen aanwezig, `README.md`,
      `prerender.mjs` en `site/` geven 404, `.htaccess` 403.
- [x] **Domeinen losgemaakt van het Vercel-project** — dat moest eerst, anders beheerde
      Vercel de adressen zelf en kon je er geen eigen A-records naast zetten.
- [x] A-records voor `@` en `www` naar `45.82.191.90` (TTL 60). Naamservers bij Vercel
      gelaten; MX, SPF, DKIM en `apple-domain` ongemoeid, dus de iCloud-mail bleef werken.
- [x] Let's Encrypt-certificaat voor `thnkmusic.com` **en** `www.thnkmusic.com`.
- [x] **HSTS aangezet** (`max-age=15768000`) nadat https bewezen werkte.
- [ ] Vercel-project verwijderen — pas als alles een week goed draait (vanaf 4 nov).
- [x] **Webhook ingesteld** (GitHub → Plesk). Getest met een echte commit: stond binnen
      20 seconden vanzelf live. Publiceren is nu: aanpassen in `site/`,
      `node prerender.mjs`, committen, pushen.

**Les voor de volgende site:** de lokale DNS-cache van de router hield het oude adres nog
13 minuten vast. Op het vaste netwerk zag je daardoor nog de oude site, terwijl mobiel
internet de nieuwe al liet zien. Dat is geen fout — even wachten of de router herstarten.

### Stap 4 — OK Timmerwerken
- [ ] Ozcan informeren (concepttekst onderaan).
- [ ] Domein toevoegen in Plesk, Git-koppeling.
- [ ] Testen op het tijdelijke adres, inclusief de 41 doorverwijzingen van de oude site.
- [ ] De vier A-records bij GoDaddy vervangen door het ene Cloud86-adres.
- [ ] Controleren: MX naar Proofpoint, `autodiscover`, de Microsoft-verificatie en SPF
      moeten onveranderd zijn.
- [ ] Ozcan vragen een testmail te sturen én te ontvangen.

---

## Controleren en terugdraaien

**Na elke DNS-wijziging:** `tools/dns-controle.sh <domein>` en regel voor regel vergelijken met
de momentopname hierboven. Wijkt er iets af aan de mailkant, zet het dan meteen terug.

**Terugdraaien** kan altijd: zet de A-records terug op de oude waarden uit dit document. DNS
heeft een wachttijd (meestal een uur), dus plan een wijziging niet vlak voor een drukke dag.

**Belangrijk:** laat de oude omgeving minstens een week staan voor je hem opruimt. Pas als een
site een week probleemloos op Cloud86 draait, haal je hem weg bij GitHub Pages of Vercel.

---

## Concepttekst voor Ozcan

> Onderwerp: je website verhuist naar een andere server
>
> Hoi Ozcan,
>
> Ik breng mijn websites onder bij één hostingpartij, zodat ik beveiliging, snelheid en
> back-ups op één plek kan regelen. Jouw site verhuist daarom binnenkort mee.
>
> Je merkt er niets van: het adres blijft ok-timmerwerken.nl, de site blijft hetzelfde en
> **je e-mail verandert niet** — die blijft gewoon staan waar hij nu staat. Ik raak alleen
> de instelling aan die bepaalt op welke server de website draait.
>
> Ik doe het op een rustig moment en controleer daarna of alles werkt. Mocht je die dag
> iets geks zien aan de site, laat het me dan even weten.
>
> Groet,
> Thomas
