// Teksten en cases van de ViVo-site. CONCEPT — door Thomas te beoordelen.
// Alleen feiten die op de sites zelf staan of door Thomas zijn opgegeven; geen verzonnen cijfers.

export const SITE = {
  bedrijf: 'ViVo Products',
  bedrijfKort: 'ViVo',
  url: 'https://vivoproducts.nl', // hoofdadres zonder www (keuze Thomas 4 okt 2026); www stuurt door
  // Basisadres voor canonical, deelbeelden (og), sitemap, robots en gestructureerde gegevens.
  // Sinds 4 okt 2026 het eigen domein (DNS bij Strato → GitHub Pages). De repo staat sinds 18 okt 2026 op Vivoproducts/ViVo.
  basis: 'https://vivoproducts.nl', // www-certificaat bleef bij GitHub hangen (4 okt 2026) → zonder www als hoofdadres
  seoTitel: 'ViVo — Webdesign en websites laten maken in Gorinchem',
  mail: 'info@vivoproducts.nl',
  adres: 'Einsteinstraat 3e',
  postcode: '4207 HW',
  plaats: 'Gorinchem',
  btw: '',                          // btw-identificatienummer (NL…B01) — nog aanleveren
  telefoon: '06-28702422',
  telefoonLink: '+31628702422',
  kvk: '80912532',
  jaar: 2026,
  // Meten (statistiek + marketing). Leeg = uit: geen cookiemelding, geen scripts, privacytekst 'geen cookies'.
  // Vul een ID in en de cookiemelding, cookieparagraaf en /cookies/ worden automatisch actief.
  // Contactformulier: leeg = formulier opent het mailprogramma met het bericht ingevuld. Met een Web3Forms-sleutel
  // (gratis account op web3forms.com, aan te maken door Thomas) worden berichten direct verstuurd; de privacytekst past zich aan.
  formulier: { web3forms: '9b22effe-1f4f-4a2b-a741-f642c1b603a7' }, // Web3Forms-sleutel (openbaar bedoeld; stuurt alleen naar info@)
  // Verificatiecodes van Google Search Console en Bing Webmaster Tools (alleen de code uit de meta-tag). Leeg = niets.
  // Openingstijden = gelijk aan het Google Bedrijfsprofiel (bereikbaar naast de vaste baan). Dag: Mo Tu We Th Fr Sa Su.
  openingstijden: [{ dagen: ['Mo', 'Tu', 'We', 'Th', 'Fr'], van: '18:00', tot: '21:00', tekst: 'ma–vr 18:00–21:00' }, { dagen: ['Sa'], van: '10:00', tot: '15:00', tekst: 'za 10:00–15:00' }],
  verificatie: { google: '-prJz1eX8lO_4SYjlTV2cCBzOfQAcp6z5eXu55q_fzQ', bing: '' },
  meten: {
    ga4: '',          // Google Analytics 4, bv. 'G-XXXXXXXXXX'   → categorie statistiek
    googleAds: '',    // Google Ads, bv. 'AW-XXXXXXXXXX'          → categorie marketing
    metaPixel: '',    // Meta-pixel, bv. '1234567890123456'       → categorie marketing
  },
  intro: 'ViVo ontwerpt en bouwt snelle, heldere websites, webshops en webapps voor ondernemers die gevonden willen worden — en klanten willen overtuigen.',
  beschrijving: 'ViVo ontwerpt en bouwt snelle, heldere websites, webshops en webapps voor ondernemers. Persoonlijk, van eerste schets tot livegang — vanuit Gorinchem.',
};

export const DIENSTEN = [
  { titel: 'Websites', tekst: 'Je website is vaak de eerste indruk. ViVo ontwerpt en bouwt snelle, heldere sites die laten zien wie je bent — en die bezoekers laten doen wat jij wilt: bellen, mailen, boeken of kopen.', tags: ['Ontwerp', 'Bouw', 'Teksten', 'Vindbaarheid'] },
  { titel: 'Webshops', tekst: 'Een shop die overzichtelijk is, snel laadt en op elke telefoon prettig afrekent — als losse winkel of als onderdeel van je website.', tags: ['E-commerce', 'Betalingen', 'Mobiel'] },
  { titel: 'Webapplicaties', tekst: 'Als een website niet genoeg is: maatwerksoftware voor je bedrijf, zoals een planning, digitale werkbonnen of een klantportaal. Werkt in de browser én als app op je telefoon.', tags: ['Maatwerk', 'Web-app', 'Koppelingen'] },
  { titel: 'Onderhoud & hosting', tekst: 'Hosting, updates en kleine aanpassingen. Jij onderneemt, ViVo houdt je site snel, veilig en actueel.', tags: ['Hosting', 'Updates', 'Support'] },
];

export const STAPPEN = [
  { titel: 'Kennismaken', tekst: 'We bespreken je doelen, je klanten en wat je site moet opleveren.' },
  { titel: 'Ontwerpen', tekst: 'Je ziet een klikbaar ontwerp voordat er één regel code geschreven is.' },
  { titel: 'Bouwen', tekst: 'Snel, toegankelijk en vindbaar — getest op telefoon, tablet en desktop.' },
  { titel: 'Lanceren', tekst: 'Live, en daarna blijft ViVo je aanspreekpunt voor onderhoud en groei.' },
];

// Volgorde = volgorde op de site. kleur = het projectvlak (Clay: de kleur komt uit het werk).
export const CASES = [
  {
    slug: 'thnk', naam: 'THNK', uitgelicht: true, jaar: 2026,
    klant: 'THNK', sector: 'Muziek', soort: 'Website voor een dj en producer',
    rol: ['Concept', 'Ontwerp', 'Bouw', 'Teksten', 'Hosting'],
    live: 'https://www.thnkmusic.com/', kleur: '#14161a', kleurTekst: '#9aa0ab',
    kort: 'Een donkere, grootse site voor techno- en progressive-dj en producer THNK.',
    intro: 'Een eigen online thuis voor techno- en progressive-dj en producer THNK: donker, groots en helemaal in het teken van de muziek.',
    opdracht: 'THNK maakt techno en progressive, met remixes van Greece 2000 en Zocalo en releases op Armada en Coldharbour. De site moest die sound vertalen naar beeld — en bookers in een paar seconden laten zien wie THNK is.',
    aanpak: 'Een sterk typografisch logo boven zwart-witte landschappen, met het groen van mos als enige kleur. Weinig woorden, grote beelden en een heldere route: luisteren, shows, over en boeken.',
    resultaat: 'Een snelle, Engelstalige site die op elk scherm overeind blijft — volledig door ViVo bedacht, ontworpen, geschreven, gebouwd en gehost.',
    vertrekpunt: 'THNK had nog geen eigen website. We bouwden de site vanaf de grond op: een thuisbasis waar fans, promotors en labels in één oogopslag zien wie THNK is, wat hij uitbrengt en hoe je hem boekt.',
    onderdelen: [
      ['Beeld dat de muziek voelbaar maakt', 'Monumentale zwart-witfotografie van bergen, watervallen en ijsgrotten zet de toon: groots, donker en ruimtelijk — net als de muziek zelf.'],
      ['Muziek direct te beluisteren', 'De nieuwste release staat bovenaan, met een ingebouwde Spotify-speler, een overzicht van recente releases en links naar Spotify, Apple Music, Beatport en SoundCloud.'],
      ['Shows en het verhaal erachter', 'Een agenda voor komende en eerdere shows, zoals de Progressive Stage op A State of Trance 850, en een about-sectie met kerncijfers en de artiesten die zijn tracks draaiden.'],
      ['Boeken zonder omwegen', 'Een duidelijke bookingsectie met een direct e-mailadres, zodat promotors en labels meteen contact opnemen. De site is Engelstalig, voor een internationaal publiek.'],
    ],
  },
  {
    slug: 'delphi', naam: 'DELPHI Sleutelbeheersystemen', naamKop: 'DELPHI Sleutelbeheer\u00adsystemen', jaar: 2026, // naamKop: vast breekpunt (zacht afbreekstreepje) voor grote koppen
    klant: 'DELPHI', sector: 'Beveiliging', soort: 'Tweetalige productsite',
    rol: ['Ontwerp', 'Bouw', 'Teksten', 'Hosting'],
    live: 'https://www.sleutelbeheersystemen.nl/', kleur: '#f1f5fb', kleurTekst: '#5b6472', // witter, koel (keuze Thomas: B)
    kort: 'Een heldere, tweetalige productsite voor elektronisch sleutelbeheer.',
    intro: 'Een heldere, tweetalige productsite voor elektronische sleutelbeheersystemen — waar elke sleutel op naam staat en elk moment herleidbaar is.',
    opdracht: 'DELPHI levert elektronische sleutelkasten, lockers en sabotagevrije sleutelringen aan organisaties waar toegang niet ter discussie staat. Het aanbod is technisch en breed; de site moest dat overzichtelijk maken voor inkopers en beheerders.',
    aanpak: 'Een rustig, productgericht ontwerp met veel wit, duidelijke productlijnen en een keuzehulp die bezoekers naar het juiste systeem leidt. ViVo schreef de teksten, bouwde de site in het Nederlands en Engels en verzorgt de hosting.',
    resultaat: 'Een site die vertrouwen uitstraalt en bezoekers in een paar klikken van productkeuze naar offerteaanvraag brengt.',
    vertrekpunt: 'DELPHI had een bestaande website die niet meer paste bij het brede, technische aanbod. Tijd voor een nieuwe site die rust brengt, vertrouwen uitstraalt en bezoekers sneller bij het juiste systeem brengt.',
    onderdelen: [
      ['Heldere productlijnen', 'Het aanbod is ingedeeld in drie lijnen: sleutelbeheer, opbergsystemen en sleutelringen. Elk systeem heeft een eigen vak met een korte omschrijving, een beeld en een directe offerteknop.'],
      ['Keuzehulp in drie vragen', 'Wat wilt u beheren, hoeveel posities zijn nodig en wat moet er vastliggen? Na drie vragen weet de bezoeker welk systeem past en waar te beginnen.'],
      ['Vertrouwen vanaf de eerste blik', 'Logo’s van organisaties die DELPHI gebruiken, vier niveaus van sleutelbeheer en een stappenplan van inventarisatie tot beheer maken de aanpak concreet.'],
      ['Tweetalig en klaar voor aanvragen', 'De hele site is beschikbaar in het Nederlands en het Engels. Op elke pagina staat een duidelijke weg naar een demo of een offerteaanvraag.'],
    ],
  },
  {
    slug: 'oktimmerwerken',
    naam: 'OK Timmerwerken',
    jaar: '2026',
    klant: 'OK Timmerwerken',
    sector: 'Timmer- en betonwerk',
    soort: 'Website, logo en CMS',
    rol: ['Concept', 'Logo', 'Ontwerp', 'Bouw', 'Teksten', 'SEO', 'Hosting'],
    live: 'https://www.ok-timmerwerken.nl/',
    kleur: '#ebe4db',
    kleurTekst: '#6b6762',
    kort: 'Timmer- en betonwerk uit Gorinchem: vierenveertig oude pagina\u2019s teruggebracht tot acht diensten, met de vakman zelf in beeld.',
    intro: 'Een site die verkoopt wat klanten werkelijk bestellen \u2014 met Ozcan in beeld in plaats van een anoniem \u201cwij\u201d, en met de reviews die het bedrijf al had maar nergens gebruikte.',
    opdracht: 'OK Timmerwerken doet timmer- en betonwerk vanuit Gorinchem: gevlinderde betonvloeren, vlieringen, carports en VELUX-dakramen, als erkend montagepartner. De bestaande site telde vierenveertig pagina\u2019s vol zoekmachinetekst, zonder \u00e9\u00e9n foto van een afgerond project. Ozcan wilde dezelfde site \u201cin een nieuw jasje\u201d, maar dan een die laat zien wat er werkelijk gebeurt.',
    aanpak: 'Eerst uitzoeken wat klanten werkelijk bestellen, in plaats van wat de oude site aanbood. Het Werkspot-profiel bleek de rijkste bron en bepaalde de nieuwe indeling van de diensten. Daarna het bedrijf een gezicht geven: Ozcan met naam en portret op de homepage. Het oude logo bestond alleen als pixelbeeld en is nagemeten en opnieuw opgebouwd als vector.',
    resultaat: 'Acht dienstpagina\u2019s in plaats van vierenveertig losse teksten, elk met de volledige lijst werkzaamheden erachter zodat geen onderwerp verdween. Elk oud adres stuurt door naar zijn nieuwe plek. De VELUX-erkenning staat nu in het eerste scherm in plaats van weggestopt op een subpagina, en Ozcan beheert de teksten zelf.',
    vertrekpunt: 'De oude site stond op Duda en telde vierenveertig pagina\u2019s die bijna allemaal hetzelfde patroon volgden: \u201cTen eerste\u2026 Ten tweede\u2026 Ten slotte\u2026\u201d. Geen prijsindicatie, geen werkwijze, geen doorlooptijd, en geen enkele foto van een afgerond project \u2014 alleen stockbeeld. De VELUX-erkenning, het sterkste onderscheid dat het bedrijf heeft, stond weggestopt op een subpagina. Van de reviews was er \u00e9\u00e9n zichtbaar. In de broncode stond bovendien nog het e-mailadres van een andere klant van de vorige bouwer.',
    onderdelen: [
      ['Gebouwd op bewijs, niet op gevoel', 'Het Werkspot-profiel bleek de belangrijkste bron: achtenzeventig reviews met een gemiddelde van 4,9, waarvan er precies \u00e9\u00e9n op de eigen site stond. Die reviews lieten zien wat klanten werkelijk bestellen \u2014 ongeveer de helft ging over betonvloeren, en een flink deel over vlieringen en zolderverbouwingen, een dienst die nergens op de site voorkwam. Ze lieten ook zien dat het werkgebied allang niet meer regionaal was, terwijl de site zichzelf tot Gorinchem en omstreken beperkte. De dienstenindeling is op dat bewijs opnieuw opgebouwd.'],
      ['Ozcan in plaats van \u201cwij\u201d', 'De oude site was volledig anoniem geschreven. In de reviews wordt de eigenaar juist steeds bij naam genoemd. In dit vak kiest men de persoon, niet het bedrijf, dus staat Ozcan nu op de homepage: met portret, met naam, en met de belofte dat je hem zelf spreekt en binnen een dag antwoord krijgt. De kop boven dat blok zegt het zelf \u2014 in de reviews staat zelden onze naam, er staat Ozcan.'],
      ['Vierenveertig pagina\u2019s naar acht diensten', 'Alles van de oude site is verwerkt in acht dienstpagina\u2019s, elk met een volledig overzicht van de werkzaamheden eronder, zodat geen enkel onderwerp verdween. Elk oud adres stuurt door naar zijn nieuwe plek. Bij zo\u2019n opschoning is dat het verschil tussen het behouden en het verliezen van je plaats in Google.'],
      ['Het logo opnieuw getekend', 'Het bestaande logo bestond alleen als pixelbeeld. Het is nagemeten aan het origineel \u2014 gevelbreedte, lijndikte en dakhelling \u2014 en opnieuw opgebouwd als vector, zodat bestaande klanten hetzelfde teken blijven zien. Daarvan zijn alle varianten afgeleid: liggend, staand, beeldmerk en favicon, plus een vereenvoudigde versie voor kleine formaten, waar het volledige merk dichtloopt.'],
    ],
  },
  {
    slug: 'bamontage',
    naam: 'BA Montage',
    jaar: '2026',
    klant: 'BA Montage',
    sector: 'Interieurbouw',
    soort: 'Website met configurator en catalogus',
    rol: ['Concept', 'Ontwerp', 'Bouw', 'Configurator', 'Teksten'],
    live: 'https://bamontage.nl/',
    kleur: 'radial-gradient(120% 90% at 50% 108%, #6b4a28 0%, #2a2622 48%, #1e1a17 100%)',
    kleurTekst: '#c9b08a',
    kort: 'Cinewalls en sfeerhaarden, van ontwerp tot montage — met een configurator die je wand live tekent.',
    intro: 'Een site die cinewalls verkoopt zoals BA Montage ze bouwt: je stelt je wand zelf samen, ziet hem meteen in 2D en 3D, en vraagt hem in één keer aan.',
    opdracht: 'BA Montage plaatst cinewalls: tv-wanden met ingebouwde sfeerhaard, woodpanelen en verlichting, inclusief montage. De oude WordPress-site liet dat vakmanschap niet zien: het bestelproces liep vast, de samensteller voor tv-wanden werkte niet en de merken die ze plaatsen stonden er niet op.',
    aanpak: 'Een rustige, donkere site waarin het vuur het beeld bepaalt, met een configurator als hart. Bezoekers kiezen stijl, maat, haard, nissen, verlichting en afwerking, en zien hun wand live getekend — in 2D en in 3D. Daarnaast een catalogus van honderden haarden per merk en prijsklasse, en een projectgalerij waarin elk project één op één in de configurator te openen is.',
    resultaat: 'Een site die laat zien wat BA Montage maakt in plaats van alleen wat ze verkopen. Bezoekers komen binnen via een merk of een projectfoto, stellen hun eigen wand samen en vragen hem aan — met een offerte binnen 24 uur.',
    vertrekpunt: 'BA Montage had een WordPress-site waar het bestellen vastliep en de samensteller voor tv-wanden niet werkte. Belangrijker nog: nergens was te zien dat ze de wand compleet leveren én plaatsen. Dat onderscheid moest de nieuwe site vertellen.',
    onderdelen: [
      ['Configurator in 2D en 3D', 'Stijl, afmetingen, vorm, tv-maat, haard, soundbar, nissen, verlichting en afwerking: elke keuze verschijnt meteen in de tekening. In 3D draai je om de wand heen, met daglicht of avondsfeer. Afronden gaat als aanvraag — de prijs van de wand blijft maatwerk.'],
      ['Haarden per merk', 'Honderden elektrische, waterdamp- en bio-ethanolhaarden van merken als Dimplex, DRU, Element4 en Le Feu, te filteren op merk, prijsklasse en vuurzicht. Elk merk heeft een eigen pagina met logo, verhaal en prijsklasse.'],
      ['Projecten die je zelf natekent', 'Elk gerealiseerd project staat in de galerij met de gebruikte haard en afwerking erbij — en is met één klik te openen in de configurator, zodat je er je eigen maten in zet.'],
      ['Vertrouwen vooraan', 'De 5,0 uit meer dan honderd Google-reviews, ruim 750 projecten sinds 2012 en de belofte van plaatsing in één dag staan boven aan de pagina, niet ergens onderaan.'],
    ],
  },
  {
    slug: 'flow8', naam: 'Flow8', jaar: 2026, status: 'Eigen product',
    klant: 'ViVo (eigen product)', sector: 'Installatietechniek', soort: 'Webapplicatie',
    rol: ['Concept', 'Ontwerp', 'Development'],
    live: '', kleur: 'radial-gradient(120% 90% at 50% 105%, #26357e 0%, #121838 45%, #0a0c18 100%)', kleurTekst: '#c7cff5', // nachtblauw met gloed, als het Flow8-inlogscherm
    kort: 'Planning, digitale werkbonnen en klantbeheer voor de installatie- en servicebranche.',
    intro: 'Een eigen platform van ViVo: planning, digitale werkbonnen en klantbeheer voor de installatie- en servicebranche.',
    opdracht: 'Installatie- en servicebedrijven plannen vaak nog met whiteboards, spreadsheets en papieren werkbonnen. Flow8 brengt planners op kantoor en monteurs in het veld samen in één omgeving.',
    aanpak: 'Een webapp die op de telefoon werkt als een app: planning met routeoptimalisatie, digitale werkbonnen, klantbeheer, rapportage en HR — met rechten per rol en geschikt voor meerdere bedrijven tegelijk.',
    resultaat: 'Tijdwinst in planning en administratie, meer controle en grip op het werk, betrouwbare data voor rapportages en minder kosten — in een systeem dat prettig werkt, op kantoor én in het veld.',
    vertrekpunt: 'Flow8 is ontstaan in de praktijk. Het bedrijf waar Thomas werkt liep vast op planning en workflow: veel handwerk, weinig overzicht. Daarom bouwde hij één platform waar planners op kantoor en monteurs in het veld met dezelfde, actuele informatie werken.',
    onderdelen: [
      ['Planning en routes', 'Opdrachten inplannen per monteur in een week- of dagoverzicht, met routeoptimalisatie op de kaart: in welke volgorde, met hoeveel reistijd en hoeveel kilometer.'],
      ['Digitale werkbonnen', 'Monteurs zien hun werkbon zodra die is vrijgegeven en vullen hem in op telefoon of tablet. De werkbon wordt vastgelegd als pdf, zonder papierwerk achteraf.'],
      ['Klanten en installaties', 'Een register van klanten en installaties met hun locatie op de kaart, zodat de geschiedenis van elk adres op één plek staat.'],
      ['Team en rapportage', 'Verlof, overuren en onkosten dienen medewerkers zelf in; rapportages tonen opdrachten per monteur en per maand. Flow8 werkt in de browser én als app.'],
    ],
    galerij: [
      { bestand: 'route.jpg', bijschrift: 'Route-optimalisatie: de dag van een monteur in één oogopslag' },
      { bestand: 'kaart.jpg', bijschrift: 'Kaartoverzicht met alle klantlocaties en hun status' },
      { bestand: 'register.jpg', bijschrift: 'Installatieregister met locatie en foto’s' },
      { bestand: 'login.jpg', bijschrift: 'Inloggen, ook met een Google-account' },
      { bestand: 'rapportage.jpg', bijschrift: 'Rapportage: opdrachten per monteur, per type en per maand' },
    ],
    galerijNoot: 'Klantgegevens in deze schermen zijn onherkenbaar gemaakt.',
  },
  {
    slug: 'mozi', naam: 'Huidzorg Mozi', jaar: 2026, status: 'In ontwikkeling',
    klant: 'Huidzorg Mozi', sector: 'Huidtherapie', soort: 'Website met webshop',
    rol: ['Ontwerp', 'Bouw', 'Webshop'],
    live: '', kleur: '#efe2d2', kleurTekst: '#6b5a45',
    kort: 'Een warme, elegante website met webshop voor een praktijk voor huidtherapie.',
    intro: 'Een warme, elegante website met webshop voor een praktijk voor huidtherapie in Gorinchem.',
    opdracht: 'Huidzorg Mozi helpt jong en oud, van acne en rosacea tot pigment en huidverjonging. De praktijk wilde een site die net zo persoonlijk aanvoelt als de behandeling zelf — en waar je meteen een afspraak maakt.',
    aanpak: 'Een verfijnd ontwerp met een klassieke schreefletter, zachte crèmetinten en veel rust. Behandelingen, tarieven en resultaten zijn overzichtelijk ingedeeld, een gratis intake is overal binnen handbereik en de webshop biedt zorgvuldig gekozen thuisverzorging.',
    resultaat: 'De site is in ontwikkeling en gaat binnenkort live.',
    vertrekpunt: 'Huidzorg Mozi had een bestaande website die niet meer liet zien wat de praktijk te bieden heeft. De nieuwe site moest warmte en vakmanschap uitstralen, en bezoekers zonder drempel naar een intakegesprek leiden.',
    onderdelen: [
      ['Behandelingen overzichtelijk', 'Alle behandelingen staan in een filterbaar overzicht met foto, korte uitleg en vanafprijs. Bezoekers kunnen ook starten vanuit hun klacht, zoals acne, rosacea of pigmentvlekken.'],
      ['Laagdrempelig een intake plannen', 'Overal staat de knop voor een gratis intakegesprek van 30 minuten, dat bezoekers direct online plannen. Een stappenplan laat zien wat ze daarna kunnen verwachten.'],
      ['Resultaat en vertrouwen', 'Een voor-en-nafoto met schuifregelaar, beoordelingen van cliënten, keurmerken en het persoonlijke verhaal van de eigenaar laten zien waarom je hier in goede handen bent.'],
      ['Webshop voor thuisverzorging', 'In de webshop staan de producten die de praktijk zelf gebruikt en aanbeveelt — met prijzen, verzending of ophalen in de praktijk.'],
    ],
  },
];
