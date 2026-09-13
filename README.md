# Familiearchief Gerritsen · Makkinga

Interactieve stamboom en digitaal familiearchief, gebouwd als statische website voor GitHub Pages.

## Wat zit erin?

- klikbare familiestamboom
- filter op Gerritsen en Makkinga/Venema
- zoeken op naam, plaats en beroep
- persoonlijke en algemene tijdlijnen
- digitaal archief voor foto’s, documenten en bronverwijzingen
- onderzoeksstatus: bevestigd / sterke match / onderzoeken
- privacystand voor levende personen
- mobielvriendelijke vormgeving

## Foto’s en documenten toevoegen

Plaats afbeeldingen in `assets/photos/` en documenten in `assets/documents/`. Voeg daarna in `data.js` bij de betreffende persoon een archiefitem toe, bijvoorbeeld:

```js
{
  type: 'photo',
  title: 'Familiefoto 1952',
  note: 'Gerrit Makkinga met familie',
  image: 'assets/photos/gerrit-makkinga-1952.jpg',
  status: 'confirmed'
}
```

Voor een PDF gebruik je bijvoorbeeld `type: 'document'` en `file: 'assets/documents/akte.pdf'`.

## GitHub Pages

Publiceer vanuit de `main` branch en de rootmap (`/`). De verwachte site-URL is:

`https://thomasgerritsen-code.github.io/stamboom/`

## Belangrijk

De gegevens zijn onderzoek in uitvoering. De site onderscheidt daarom bevestigde gegevens, sterke persoonsmatches en gegevens die nog gecontroleerd moeten worden.