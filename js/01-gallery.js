import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsGrid = galleryItems.map(item => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></a> </div>`).join('');
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", galleryItemsGrid);


console.log(document.querySelector(".gallery__image"));

gallery.addEventListener('click', onClick);


function onClick (e){
    e.preventDefault();
    if (e.target.className !== "gallery__image") {
        return;
    }
    basicLightbox.create(`
	<img class="gallery__image" 
    src="${e.target.dataset.source}">
`).show()
};

