import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");

galleryItems.forEach(el => { 
    ulEl.insertAdjacentHTML("beforeEnd",
    `<li class="gallery__item">
            <a class="gallery__link" href="${el.original}">
            <img
                class="gallery__image"
                src="${el.preview}"
                data-source="${el.original}"
                alt="${el.description}"
            />
            </a>
        </li>`
    );
}); 

let instance;
    
ulEl.onclick = function (e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") return

    instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

}

document.addEventListener(
    "keyup",
    (event) => {
        const keyName = event.key;
        if (keyName === "Escape" && instance && instance.visible()) {
        instance.close();
        }
    }
)



