const buttonAction = document.querySelector('.button-action');
const buttonRepeat = document.querySelector('.button-repeat');
const buttonParty = document.querySelector('.button-party');
const baloonsAction = document.querySelector('.baloons-image');
const titleImage = document.querySelector('.title-image');
const petardAction = document.querySelector('.petard-image');
const petardRotateAction = document.querySelector('.petard-image-rotated');
const tapeImageRight = document.querySelector('.tape-image-right');
const tapeImageLeft = document.querySelector('.tape-image-left');
const tapeImageCenter = document.querySelector('.tape-image-center');
const bgImageAction = document.querySelector('.bg-image');
const mainContainer = document.querySelector('.container');
const partyContainer = document.querySelector('.container-party');

buttonAction.addEventListener('click', () => {
  buttonAction.classList.add('action');
  baloonsAction.classList.add('action');
  titleImage.classList.add('action');
  petardAction.classList.add('action');
  petardRotateAction.classList.add('action');
  tapeImageRight.classList.add('action');
  tapeImageLeft.classList.add('action');
  tapeImageCenter.classList.add('action');
  bgImageAction.classList.add('action');
  // buttonRepeat.classList.add('action');
  buttonParty.classList.add('action');
  sound();
});

buttonParty.addEventListener('click', () => {
  mainContainer.classList.add('hidden');
  bgImageAction.classList.add('hidden');
  partyContainer.classList.remove('hidden');
  soundParty();
});

function sound() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = './Audio/happy-birthday-to-you-medlennaya.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
  // audio.loop = true;
}

function soundParty() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = './Audio/reel-2-real_-_i-like-to-move-it.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true;
  audio.controls = true; // Автоматически запускаем
  audio.loop = true;
}

// buttonRepeat.addEventListener('click', () => {
//   sound();
// });
