const piercingBtn = document.getElementById("piercing-btn");
const piercingImg = document.getElementById("piercing-img");

// Lista de imagens de piercing (coloque os nomes dos seus arquivos de imagem aqui)
const piercingImages = [
  "images/piercing1.jpg",
  "images/piercing2.jpg",
  "images/piercing3.jpg",
  "images/piercing4.jpg", // adicione mais imagens conforme necessário
];

// Função para exibir uma imagem aleatória de piercing
const getRandomPiercing = () => {
  const randomIndex = Math.floor(Math.random() * piercingImages.length);
  piercingImg.src = piercingImages[randomIndex];
  piercingImg.alt = "Sugestão de piercing";
};

// Adicionar event listener ao botão
piercingBtn.addEventListener("click", getRandomPiercing);
