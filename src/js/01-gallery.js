// Add imports above this line
// import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox"
// import Player from '@vimeo/player';
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryListRefs = document.querySelector(".gallery");
const markup = galleryItems.map((img) => {
    return `<a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}"/>
  </a>`;
  }).join("");
galleryListRefs.innerHTML = markup;
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });