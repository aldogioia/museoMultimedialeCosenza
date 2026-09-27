# Schema Google Sheets

Lo spreadsheet configurato in `environment.ts` contiene soltanto i tre tab dinamici usati dal sito: `Mostre`, `Eventi` e `Orari`. Tutti gli altri contenuti restano statici nel codice.

Il sito legge i tab tramite l'export CSV pubblico di Google Sheets, conserva la risposta in `sessionStorage` per 15 minuti e, in caso di errore, mostra un messaggio senza interrompere la pagina.

## Tab `Mostre`

| Colonna | Obbligatoria | Formato / esempio | Uso |
| --- | --- | --- | --- |
| `id` | consigliata | `mostra-leonardo-2026` | Identificativo univoco |
| `titolo` | sì | `Leonardo|Il genio universale` | Titolo; `|` crea più righe |
| `sottotitolo` | no | `Esperienza immersiva` | Sottotitolo |
| `periodo_inizio` | sì | `Settembre 2026` | Unico periodo temporale mostrato nelle card |
| `anno_prima_edizione` | sì | `2026` | Anno in cui la mostra è stata proposta per la prima volta |
| `data_ordinamento` | consigliata | `2026-09-25` | Data ISO usata per ordinare |
| `descrizione` | sì | massimo 300 caratteri | Testo editoriale senza ripetere periodo, anno o altri metadati |
| `immagine_url` | sì | URL HTTPS | Locandina o immagine di copertina |
| `trailer_url` | no | URL HTTPS | Link al trailer |
| `biglietti_url` | no | URL HTTPS | Link di acquisto/prenotazione |
| `cta_testo` | no | `Acquista biglietti` | Etichetta del link |
| `stato` | sì | `current`, `upcoming`, `past` | Sezione in cui mostrare la voce |
| `in_evidenza` | no | `TRUE` / `FALSE` | Predisposto per evidenze future |
| `pubblicato` | sì | `TRUE` / `FALSE` | Mostra o nasconde la riga |

## Tab `Eventi`

Ogni riga rappresenta una singola giornata. Per un evento di più giorni si ripete lo stesso `id`: il sito raggruppa automaticamente le righe in una sola card e mostra le date con i rispettivi orari.

| Colonna | Obbligatoria | Formato / esempio | Uso |
| --- | --- | --- | --- |
| `id` | sì | `tattoo-convention-2026` | Identificativo comune a tutte le giornate dello stesso evento |
| `titolo` | sì | `Tattoo Convention 2026` | Titolo dell'evento |
| `sottotitolo` | no | testo | Eventuale sottotitolo |
| `data_evento` | sì | `01/05/2026` | Giornata specifica |
| `data_ordinamento` | consigliata | `2026-05-01` | Data ISO per l'ordinamento |
| `orari` | no | `09:00 — 19:00` | Orari validi esclusivamente per quella giornata |
| `descrizione` | sì | massimo 300 caratteri | Testo editoriale senza ripetere date, orari o luogo |
| `immagine_url` | sì | URL HTTPS | Immagine di copertina |
| `biglietti_url` | no | URL HTTPS | Link di acquisto/prenotazione |
| `cta_testo` | no | `Acquista biglietti` | Etichetta del link |
| `stato` | sì | `current`, `upcoming`, `past` | Gli elementi `past` compaiono nell'archivio Eventi passati |
| `in_evidenza` | no | `TRUE` / `FALSE` | Predisposto per evidenze future |
| `pubblicato` | sì | `TRUE` / `FALSE` | Mostra o nasconde la riga |

## Tab `Orari`

| Colonna | Obbligatoria | Formato / esempio | Uso |
| --- | --- | --- | --- |
| `mostra_id` | sì | `frida-kahlo-viva-la-vida` | Deve coincidere con l'`id` nel tab Mostre |
| `mostra_titolo` | sì | `Frida Kahlo – Viva la Vida` | Titolo leggibile della mostra |
| `giorno` | sì | `Lunedì — Venerdì` | Giorno o intervallo di giorni |
| `orario` | sì | `09:00, 12:00, 15:00, 17:00, 19:00` | Turni degli spettacoli |
| `note` | no | `Ultimo ingresso un'ora prima` | Nota sotto la fascia |
| `ordine` | sì | `1` | Ordine crescente delle righe |
| `pubblicato` | sì | `TRUE` / `FALSE` | Mostra o nasconde la riga |

Gli orari di apertura del museo mostrati nella Home sono statici nel codice. `Orari` contiene esclusivamente i turni degli spettacoli delle singole mostre.

## Regole editoriali e pubblicazione

Il foglio deve essere accessibile in lettura tramite link. Per le immagini usare URL pubblici HTTPS diretti; se una cella è vuota il sito usa una locandina locale di fallback. Le date possono essere visualizzate in formato italiano, ma `data_ordinamento` va compilata in formato ISO `YYYY-MM-DD` per garantire un ordinamento stabile.

Le descrizioni non devono contenere emoji, non devono ripetere informazioni già presenti nelle altre colonne e dovrebbero restare entro 250 caratteri, senza superare in nessun caso i 300 caratteri.
