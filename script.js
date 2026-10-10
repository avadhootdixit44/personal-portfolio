
console.log("Welcome to Avadhoot's portfolio!");

const navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    console.log(`Navigating to ${link.textContent}`);
  });
});
