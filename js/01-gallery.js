import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsGrid = galleryItems
  .map(
    (item) => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></a> </div>`
  )
  .join("");
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", galleryItemsGrid);

function onClick(e) {
  const largeImg = basicLightbox.create(`
	<img class="gallery__image" 
    src="${e.target.dataset.source}">
`);

  e.preventDefault();

  if (e.target.className !== "gallery__image") {
    return;
  }

  largeImg.show();
  window.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(e) {
    if (e.code === "Escape") {
      largeImg.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}

gallery.addEventListener("click", onClick);
