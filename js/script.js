console.log('JS OK');

// Recupero dal DOM gli elementi necessari

const nextButton = document.getElementById('arrow-down');
console.log(nextButton);

const previousButton = document.getElementById('arrow-up');
console.log(previousButton);

const gallery = document.getElementById('gallery');
console.log(gallery);

const thumbnailsPlaceholder = document.getElementById('thumbnails');
console.log(thumbnailsPlaceholder);

// Inserisco le immagini nel DOM

for(let i = 0; i < 5; i++)
{
    gallery.innerHTML += `<img src="img/0${i + 1}.webp">`;
}

// BONUS - Inserisco le thumbnails nel DOM

for(let i = 0; i < 5; i++)
{
    thumbnailsPlaceholder.innerHTML += `<img src="img/0${i + 1}.webp">`;
}

// Creo la lista delle immagini

const images = document.querySelectorAll('#gallery>img');

// BONUS - Creo la lista delle thumbnails

const thumbnails = document.querySelectorAll('#thumbnails>img'); 

// Rendo visibile la prima immagine

images[0].classList.add('d-block');
let currentImage = 0; 

// BONUS - Rendo attiva la prima thumbnail

thumbnails[0].classList.add('img-active');

// Al click della freccia basso
nextButton.addEventListener('click', function()
{
    // Rendo invisibile l'immagine corrente
    images[currentImage].classList.remove('d-block');

    // BONUS - Rendo inattiva la thumbnail corrente
    thumbnails[currentImage].classList.remove('img-active');

    // Se l'immagine corrente è l'ultima della lista, l'immagine corrente diventa l'ultima
    if(currentImage + 1 === images.length)  currentImage = 0;
    // Altrimenti l'immagine corrente diventa la successiva
    else currentImage++;    

    // Rendo visibile l'immagine corrente
    images[currentImage].classList.add('d-block');

    // BONUS - Illumino la thumbnail dell'immagine corrente
    thumbnails[currentImage].classList.add('img-active');
})

// Al click della freccia in alto
previousButton.addEventListener('click', function()
{
    // Rendo invisibile l'immagine corrente
    images[currentImage].classList.remove('d-block');

    // BONUS - Rendo inattiva la thumbnail corrente
    thumbnails[currentImage].classList.remove('img-active');

    // Se l'immagine corrente è la prima della lista, l'immagine corrente diventa la prima
    if(!currentImage) currentImage = images.length - 1;
    // Altrimenti l'immagine corrente diventa la precedente
    else currentImage--;

    // Rendo visibile l'immagine corrente
    images[currentImage].classList.add('d-block');

    // BONUS - Illumino la thumbnail dell'immagine corrente
    thumbnails[currentImage].classList.add('img-active');
})