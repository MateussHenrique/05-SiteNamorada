const startDate = new Date("2024-09-29T00:00:00"); // 29 de setembro de 2024

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Atualiza o contador visual no topo
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Atualiza o texto do contador
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

setInterval(rotatePhrase, 3000); 


function revealHeartContent() {
    const heartContent = document.getElementById("heart-content");
    if (heartContent.classList.contains("active")) {
        heartContent.classList.remove("active");
    } else {
        heartContent.classList.add("active");
    }
}