const button = document.querySelector('button');
const baloonsAction = document.querySelector('.baloons-image');
const titleImage = document.querySelector('.title-image');
const petardAction = document.querySelector('.petard-image');
const petardRotateAction = document.querySelector('.petard-image-rotated');
const tapeImageRight = document.querySelector('.tape-image-right');
const tapeImageLeft = document.querySelector('.tape-image-left');
const bgImageAction = document.querySelector('.bg-image');

button.addEventListener('click', () => {
  button.classList.add('action');
  baloonsAction.classList.add('action');
  titleImage.classList.add('action');
  petardAction.classList.add('action');
  petardRotateAction.classList.add('action');
  tapeImageRight.classList.add('action');
  tapeImageLeft.classList.add('action');
  bgImageAction.classList.add('action');
  sound();
});

function sound() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = './Audio/happy-birthday-to-you-medlennaya.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
  // audio.loop = true;
}
