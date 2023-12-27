import { logDate } from './logDate';

logDate();

const toggleButton = document.getElementById('toggle-mode') as HTMLButtonElement;
const content = document.querySelector('.rf__main') as HTMLElement;
const panel = document.querySelector('.main__panel') as HTMLElement;

let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  content.classList.toggle('dark-mode', isDarkMode);
  panel.classList.toggle('dark-mode', isDarkMode);
});