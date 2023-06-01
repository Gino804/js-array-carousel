console.log('JS OK');

// Recupero dal DOM gli elementi necessari

const nextButton = document.getElementById('arrow-up');
console.log(nextButton);

const previousButton = document.getElementById('arrow-down');
console.log(previousButton);

const gallery = document.getElementById('gallery');
console.log(gallery);

// Inserisco le immagini nel DOM

for(let i = 0; i < 5; i++)
{
    gallery.innerHTML += `<img src="img/0${i + 1}.webp">`;
}

// Creo la lista delle immagini

const images = document.querySelectorAll('#gallery>img');

// Rendo visibile la prima immagine

images[0].classList.add('d-block');
let currentImage = 0; 

// Al click della freccia in alto
nextButton.addEventListener('click', function()
{
    // Rendo invisibile l'immagine corrente
    images[currentImage].classList.remove('d-block');

    // Se l'immagine corrente è l'ultima della lista
    if(currentImage + 1 === images.length)
    {
        // Rendo visibile la prima immagine
        images[0].classList.add('d-block');
        currentImage = 0;
    }
    else
    {
        // Rendo visibile l'immagine successiva
        images[currentImage + 1].classList.add('d-block');
        currentImage++;
    }
})

// Al click della freccia in basso
previousButton.addEventListener('click', function()
{
    // Rendo invisibile l'immagine corrente
    images[currentImage].classList.remove('d-block');

    // Se l'immagine corrente è la prima della lista
    if(!currentImage)
    {
        // Rendo visibile l'ultima immagine
        images[images.length - 1].classList.add('d-block');
        currentImage = images.length - 1;
    }
    else
    {
        // Rendo visibile l'immagine precedente
        images[currentImage - 1].classList.add('d-block');
        currentImage--;
    }
})