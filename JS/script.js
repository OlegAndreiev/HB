const button = document.querySelector('button');
const baloonsAction = document.querySelector('.baloons-image');
const titleImage = document.querySelector('.title-image');
const petardAction = document.querySelector('.petard-image');
const petardRotateAction = document.querySelector('.petard-image-rotated');
const tapeImageRight = document.querySelector('.tape-image-right');
const tapeImageLeft = document.querySelector('.tape-image-left');

button.addEventListener('click', () => {
  baloonsAction.classList.add('action');
  titleImage.classList.add('action');
  petardAction.classList.add('action');
  petardRotateAction.classList.add('action');
  tapeImageRight.classList.add('action');
  tapeImageLeft.classList.add('action');
});
console.dir(baloonsAction);
