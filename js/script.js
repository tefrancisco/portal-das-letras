// Barra de navegação

const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});

// -------------------------------------------------------------------------------

const a = [
  {
    titulo: 'Gêneros literários',
    imagem: 'https://generoliterario259133523.wordpress.com/wp-content/uploads/2021/10/generos-literarios-e1537808422387.jpg',
    content: '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p> <p>bbbbbbbb</p>'
  }
]

const glit = document.getElementById('glit')

glit.addEventListener('click', () => {
  window.location.href = 'poemaProsa.html'
})



