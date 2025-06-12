const startDate = new Date("2024-09-29T00:00:00"); // 29 de setembro de 2024

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("relationshipTimer").innerText =
    `Estamos juntos há: ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💞`;
}

setInterval(updateTimer, 1000);
updateTimer();

// FRASES DE AMOR ROTATIVAS
const phrases = [
  "Você é o meu hoje e todos os meus amanhãs. 💑",
  "Te amo mais a cada batida do meu coração. 💓",
  "Com você, a vida é mais bonita. 🌹",
  "Seu sorriso ilumina meus dias. ☀️",
  "Você é meu lugar favorito. 🏡"
];

let phraseIndex = 0;
function rotatePhrase() {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  document.getElementById("lovePhrase").innerText = phrases[phraseIndex];
}

setInterval(rotatePhrase, 3000); // Troca a cada 3 segundos

// MOSTRAR A PRIMEIRA FOTO
function revealPhoto() {
  const hiddenPhoto = document.getElementById("hidden-photo");
  if (hiddenPhoto.style.display === "block") {
    hiddenPhoto.style.opacity = "0";
    setTimeout(() => {
      hiddenPhoto.style.display = "none";
    }, 500);
  } else {
    hiddenPhoto.style.display = "block";
    setTimeout(() => {
      hiddenPhoto.style.opacity = "1";
    }, 10);
  }
}