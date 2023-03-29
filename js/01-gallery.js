import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

for (let item of galleryItems) {
  const imageItem = document.createElement("li");
  galleryEl.append(imageItem);

  imageItem.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__link" href="${item.original}">
  <img
  class="gallery__image"
  src="${item.preview}"
  data-source="${item.original}"
  alt="${item.description}"
/>
</a>`
  );
}

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,
    {}
  );

  instance.show();
});
