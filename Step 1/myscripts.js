//Toggle menu
const toggleMenu = document.getElementById("menu-btn");

toggleMenu.addEventListener('click', ()=>{
  toggleMenu.previousElementSibling.classList.toggle('toggled');
  //prevent scrolling when menu is open
  document.body.classList.toggle('no-scroll');
});


//Toggle FAQ questions
const toggleBtns = document.querySelectorAll('.faq-question');

toggleBtns.forEach(toggleBtn => {
  toggleBtn.addEventListener('click', ()=>{
    toggleBtn.nextElementSibling.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  })
});