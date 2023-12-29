import { logDate } from './logDate';

logDate();

const toggleButton = document.getElementById('toggle-mode') as HTMLButtonElement;
const content = document.querySelector('.rf__main') as HTMLElement;
const panel = document.querySelector('.main__panel') as HTMLElement;
const btns = document.querySelectorAll('.btn');
const google = document.querySelector('.google') as HTMLElement;
const facebook = document.querySelector('.facebook') as HTMLElement;
const toggles = document.querySelectorAll('.toggle');

let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  content.classList.toggle('dark-mode', isDarkMode);
  panel.classList.toggle('dark-mode', isDarkMode);
  google.classList.toggle('dark-mode', isDarkMode);
  facebook.classList.toggle('dark-mode', isDarkMode);
  for (const b of btns) {
    if (isDarkMode) b.classList.add('dark-mode');
    if (!isDarkMode) b.classList.remove('dark-mode');
  }
  for (const t of toggles) {
    if (isDarkMode) t.classList.add('dark-mode');
    if (!isDarkMode) t.classList.remove('dark-mode');
  }
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
});
