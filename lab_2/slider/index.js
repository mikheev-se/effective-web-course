let currentImageId = localStorage.getItem('currentImageId')
  ? localStorage.getItem('currentImageId')
  : 0;

let slide = (images, imageId, imageToHideId) => {
  images[imageToHideId].className = images[imageToHideId].className
    .replace('slider__item--visible', '')
    .trim();

  images[imageId].className =
    images[imageId].className + ' slider__item--visible';
};

let slideLeft = () => {
  slide(images, prevImageId, currentImageId);

  nextImageId = currentImageId;
  localStorage.currentImageId = currentImageId;

  currentImageId = prevImageId;

  prevImageId =
    (prevImageId - 1) % (images.length - 1) >= 0
      ? (prevImageId - 1) % (images.length - 1)
      : images.length - 1;
};

let slideRight = () => {
  slide(images, nextImageId, currentImageId);

  prevImageId = currentImageId;

  currentImageId = nextImageId;
  localStorage.currentImageId = currentImageId;

  nextImageId = (nextImageId + 1) % images.length;
};

let images = document.getElementsByClassName('slider__item');

images[currentImageId].className =
  images[currentImageId].className + ' slider__item--visible';

let leftButton = document.getElementById('slider__left');
let rightButton = document.getElementById('slider__right');

let prevImageId =
  (currentImageId - 1) % images.length >= 0
    ? (currentImageId - 1) % images.length
    : images.length - 1;
let nextImageId = (currentImageId + 1) % images.length;

let timeMs = 2000;
let interval = setInterval(slideRight, timeMs);

leftButton.onclick = (event) => {
  clearInterval(interval);
  slideLeft();
  interval = setInterval(slideRight, timeMs);
};

rightButton.onclick = (event) => {
  clearInterval(interval);
  slideRight();
  interval = setInterval(slideRight, timeMs);
};

document.onkeydown = (event) => {
  clearInterval(interval);
  event.key === 'ArrowLeft' || event.key === 'ArrowUp'
    ? (event.preventDefault(), slideLeft())
    : event.key === 'ArrowRight' ||
      event.key === ' ' ||
      event.key === 'ArrowDown'
    ? (event.preventDefault(), slideRight())
    : null;
  interval = setInterval(slideRight, timeMs);
};
