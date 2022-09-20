const button = document.querySelector('button');
const baloonsAction = document.querySelector('.baloons-image');
const titleImage = document.querySelector('.title-image');

button.addEventListener('click', () => {
  baloonsAction.classList.add('action');

  titleImage.classList.add('action');
});
console.dir(baloonsAction);
