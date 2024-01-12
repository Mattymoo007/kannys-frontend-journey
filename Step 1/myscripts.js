const toggleBtns= document.querySelectorAll('.faq-question');


toggleBtns.forEach(toggleBtn => {
  toggleBtn.addEventListener('click', ()=>{
    toggleBtn.nextElementSibling.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  })
});



