

const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image, 
// это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.



//   ------------- создание разметки для картинок и их внедрение -------------
const galleryMapping = function (arr) {
  return arr.map(({preview, description, original}) => 
  //<a href='${original}' class='gallery__link'></a>
    `<li class='gallery__item'>
      <a href='#' class='gallery__link'>
        <img class='gallery__image' src="${preview}" alt="${description}" data-previewUrl="${original}">
      </a>
    </li>`
  ).join('');
};

const markupToAppend = galleryMapping(galleryItems);

const ulElement = document.querySelector('.gallery.js-gallery');

ulElement.innerHTML = markupToAppend;

const divLightbox = document.querySelector('div.lightbox');

const imgModal = document.querySelector('img.lightbox__image');

//   ------------- подстановка нужной картинки в модальное окно -------------
// const modalMapping = function (arr) {
//   return arr.map(({original, description}) => 
//    { 
//     imgModal.setAttribute("src", original),
//     imgModal.setAttribute("alt", description) 
//     }
//   );
// };
console.log(imgModal);

//   ------------- модальное окно (превью картинки) -------------
const imagePreview = function (event) {
  
    if (!event.target.classList.contains('gallery__image')) {
      return; 
    }
    
    if (divLightbox.classList.contains('is-open')) {
      return
    }

   //  ------------- подстановка картинки в модалку -------------
    imgModal.setAttribute("src", event.target.dataset.previewurl);
    imgModal.setAttribute("alt", event.target.description)

    divLightbox.classList.add('is-open');
};

ulElement.addEventListener('click', imagePreview);

//  ------------- закрытие модального окна по кнопке -------------
const closeButton = document.querySelector('button.lightbox__button');

const closeModal = function (event) {
  if (!event.target.classList.contains('lightbox__button')) {
    return; 
  } 
  divLightbox.classList.remove('is-open');
  imgModal.setAttribute("src", '');
  imgModal.setAttribute("alt", ''); 
 
};

closeButton.addEventListener('click', closeModal);




