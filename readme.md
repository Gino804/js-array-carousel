# CAROSELLO

## Traccia:

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!

### MILESTONE 1

Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

### MILESTONE 2

Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

### MILESTONE 3

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

### BONUS 1:

Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

### BONUS 2:

Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra dell’immagine grande attiva, (usate lo screen in allegato come ispirazione). Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

<hr>

## Steps:

- Recupero dal DOM gli elementi necessari
- Inserisco nel DOM le immagini:
  - **FINTANTO CHE** il contatore è minore di 5
    - Inserisco nel DOM l'immagine corrente
- BONUS - Inserisco nel DOM le thumbnails
  - **FINTANTO CHE** il contatore è minore di 5
    - Inserisco nel DOM la thumbnail corrente
- Creo una lista di nodi contenente le immagini
- BONUS - Creo una lista di nodi contenente le thumbnails
- Assegno alla prima immagine una classe che la renda visibile
- Creo una variabile che indichi l'immagine corrente e la inizializzo con il valore della prima immagine
- BONUS - Rendo attiva la prima thumbnail
- **QUANDO** l'utente clicca sulla freccia in basso
  - Rimuovo all'immagine corrente la classe che la rende visibile
  - BONUS - Rimuovo alla thumbnail corrente la classe che la rende attiva
  - **SE** L'immagine corrente è l'ultima della lista
    - L'immagine corrente diventa l'ultima
  - **ALTRIMENTI** L'immagine corrente diventa la successiva
  - Assegno all'immagine corrente la classe che la rende visibile
  - BONUS - Assegno alla thumbnail corrente la classe che la rende attiva
- **QUANDO** l'utente clicca sulla freccia in alto
  - Rimuovo all'immagine corrente la classe che la rende visibile
  - BONUS - Rimuovo alla thumbnail corrente la classe che la rende attiva
  - **SE** L'immagine corrente è la prima della lista
    - L'immagine corrente diventa la prima
  - **ALTRIMENTI** L'immagine corrente diventa la precedente
  - Assegno all'immagine corrente la classe che la rende visibile
  - BONUS - Assegno alla thumbnail corrente la classe che la rende attiva
