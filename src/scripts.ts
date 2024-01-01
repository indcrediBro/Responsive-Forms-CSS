import { logDate } from './logDate';

logDate();

const toggleButton = document.querySelector('#toggle-mode') as HTMLButtonElement;/*
const content = document.querySelector('.main') as HTMLElement;
const panel = document.querySelector('.main__panel') as HTMLElement; */
// const google = document.querySelector('.google') as HTMLElement;
// const facebook = document.querySelector('.facebook') as HTMLElement;
const btns = document.querySelectorAll('.btn');
const toggles = document.querySelectorAll('.toggle');

let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  /* content?.classList.toggle('dark-mode', isDarkMode);
  panel?.classList.toggle('dark-mode', isDarkMode); */
  // google?.classList.toggle('dark-mode', isDarkMode);
  // facebook?.classList.toggle('dark-mode', isDarkMode);
  for (const b of btns) {
    if (b?.getAttribute('data-theme') === 'light') {
      b?.setAttribute('data-theme', 'dark');
    } else {
      b?.setAttribute('data-theme', 'light');
    }
  }
  for (const t of toggles) {
    if (t?.getAttribute('data-theme') === 'light') {
      t?.setAttribute('data-theme', 'dark');
    } else {
      t?.setAttribute('data-theme', 'light');
    }
  }
});

const sectionButtons = document.querySelectorAll('.js-sectionBtn');
const sections = document.querySelectorAll('.index');

let currentIndex = 0;

sectionButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    sections[currentIndex].classList.add('hidden');

    currentIndex = (currentIndex + 1) % sections.length;

    sections[currentIndex].classList.remove('hidden');
  });
});

const forms = document.querySelectorAll('form');
forms.forEach((element) => {
  element.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});
