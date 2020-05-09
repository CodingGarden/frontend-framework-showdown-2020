import getImages from './api.js';

const form = document.querySelector('form');
const loadingImage = document.querySelector('#loadingImage');
const imagesSection = document.querySelector('.images');

loadingImage.style.display = 'none';

form.addEventListener('submit', onFormSubmitted);
// form.onsubmit = onFormSubmitted;

// function onFormSubmitted(event) {
//   event.preventDefault();
//   imagesSection.innerHTML = '';
//   const formData = new FormData(form);
//   const searchTerm = formData.get('searchTerm');
//   loadingImage.style.display = '';
//   getImages(searchTerm).then(addImagesToPage);
// }

async function onFormSubmitted(event) {
  event.preventDefault();
  imagesSection.innerHTML = '';
  const formData = new FormData(form);
  const searchTerm = formData.get('searchTerm');
  loadingImage.style.display = '';
  try {
    const images = await getImages(searchTerm);
    addImagesToPage(images);
  } catch (error) {
    // show an error on the page...
  }
}

function addImagesToPage(images) {
  // WARNING: VULNERABLE TO XSS IF NOT SANITIZE
  // imagesSection.innerHTML = images.map((image) => {
  //   return `<img src="${image.image}">`;
  // }).join('');
  // imagesSection.innerHTML = images.reduce((html, image) => {
  //   return html + `<img src="${image.image}">`;
  // }, '');
  images.forEach((item) => {
    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    imagesSection.append(imageElement);
  });
  loadingImage.style.display = 'none';
}