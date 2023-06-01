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