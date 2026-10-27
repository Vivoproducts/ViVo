#!/bin/bash
# Leest alle DNS-records van een domein, zodat je voor en na een wijziging kunt vergelijken.
# De momentopname van vóór de verhuizing staat in VERHUIZING-CLOUD86.md.
#
# Draaien:  ./tools/dns-controle.sh vivoproducts.nl
#           ./tools/dns-controle.sh vivoproducts.nl thnkmusic.com ok-timmerwerken.nl
#
# De regels gemarkeerd met MAIL mogen bij de verhuizing naar Cloud86 NIET veranderen.

if [ $# -eq 0 ]; then
  echo "Gebruik: $0 <domein> [domein...]"
  exit 1
fi

RESOLVER="${RESOLVER:-@8.8.8.8}"

for d in "$@"; do
  echo "=================================================================="
  echo " $d        ($(date '+%d-%m-%Y %H:%M'))"
  echo "=================================================================="

  printf '%-14s %s\n' "NS" "$(dig +short "$d" NS $RESOLVER | sort | tr '\n' ' ')"

  # Website: deze mogen wél wijzigen
  for t in A AAAA; do
    dig +short "$d" $t $RESOLVER | sort | while read -r r; do
      printf '%-14s %s\n' "$t" "$r"
    done
  done
  w=$(dig +short "www.$d" CNAME $RESOLVER)
  [ -n "$w" ] && printf '%-14s %s\n' "www CNAME" "$w"
  dig +short "www.$d" A $RESOLVER | grep -E '^[0-9]' | sort | while read -r r; do
    printf '%-14s %s\n' "www A" "$r"
  done

  echo "  ---- hieronder: mail. Dit hoort ONVERANDERD te blijven ----"

  dig +short "$d" MX $RESOLVER | sort | while read -r r; do
    printf '%-14s %s   MAIL\n' "MX" "$r"
  done
  dig +short "$d" TXT $RESOLVER | sort | while read -r r; do
    case "$r" in
      *spf*|*verification*|*domain*|*onmicrosoft*) printf '%-14s %s   MAIL\n' "TXT" "${r:0:76}" ;;
      *) printf '%-14s %s\n' "TXT" "${r:0:76}" ;;
    esac
  done
  dm=$(dig +short "_dmarc.$d" TXT $RESOLVER | grep -i dmarc)
  [ -n "$dm" ] && printf '%-14s %s   MAIL\n' "_dmarc TXT" "$dm"
  ad=$(dig +short "autodiscover.$d" CNAME $RESOLVER)
  [ -n "$ad" ] && printf '%-14s %s   MAIL\n' "autodiscover" "$ad"
  for s in strato-dkim-0002 strato-dkim-0003 default selector1 selector2; do
    k=$(dig +short "$s._domainkey.$d" TXT $RESOLVER | head -1)
    [ -n "$k" ] && printf '%-14s %s   MAIL\n' "DKIM $s" "${k:0:50}..."
  done

  c=$(dig +short "$d" CAA $RESOLVER | sort | tr '\n' ' ')
  [ -n "$c" ] && printf '%-14s %s\n' "CAA" "$c"
  ds=$(dig +short "$d" DS $RESOLVER | head -1)
  printf '%-14s %s\n' "DNSSEC" "${ds:-niet actief}"

  # Werkt de site, en welke server antwoordt?
  code=$(curl -s -o /dev/null -w '%{http_code}' -m 15 -L "https://$d/" 2>/dev/null)
  srv=$(curl -sI -m 15 -L "https://$d/" 2>/dev/null | grep -i '^server:' | tr -d '\r' | cut -d' ' -f2-)
  printf '%-14s %s via %s\n' "site" "${code:-geen antwoord}" "${srv:-?}"
  echo
done
