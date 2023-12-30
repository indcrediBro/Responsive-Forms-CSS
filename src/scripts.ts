import { logDate } from './logDate';

logDate();

const toggleButton = document.querySelector('#toggle-mode') as HTMLButtonElement;
const content = document.querySelector('.rf__main') as HTMLElement;
const panel = document.querySelector('.main__panel') as HTMLElement;
const btns = document.querySelectorAll('.btn');
const google = document.querySelector('.google') as HTMLElement;
const facebook = document.querySelector('.facebook') as HTMLElement;
const toggles = document.querySelectorAll('.toggle');

let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  content?.classList.toggle('dark-mode', isDarkMode);
  panel?.classList.toggle('dark-mode', isDarkMode);
  google?.classList.toggle('dark-mode', isDarkMode);
  facebook?.classList.toggle('dark-mode', isDarkMode);
  for (const b of btns) {
    if (isDarkMode) b?.classList.add('dark-mode');
    else if (!isDarkMode) b?.classList.remove('dark-mode');
  }
  for (const t of toggles) {
    if (isDarkMode) t?.classList.add('dark-mode');
    else if (!isDarkMode) t?.classList.remove('dark-mode');
  }
});

const sectionButtons = document.querySelectorAll('.sectionBtn');
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
