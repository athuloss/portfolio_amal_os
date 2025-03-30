// function cross(){
//     document.querySelector('.navbar1').style.display="none"
// }

function menu(){
    document.querySelector('.navbar1').classList.toggle('active')
}

function cross() {
    document.querySelector('.navbar1').classList.remove('active');
}
const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});



  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      const targetElement = document.querySelector(this.dataset.target);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
