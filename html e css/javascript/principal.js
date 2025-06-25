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

// Função para verificar a senha da mensagem secreta
function checkPassword() {
    const password = document.getElementById("secretPassword").value;
    const errorDiv = document.getElementById("passwordError");
    const correctPassword = "12345678";
    
    if (password === correctPassword) {
        // Senha correta - mostra mensagem de sucesso e redireciona
        errorDiv.innerHTML = '<span class="password-success">✅ Senha correta! Redirecionando...</span>';
        errorDiv.className = 'password-success';
        
        // Limpa o campo de senha
        document.getElementById("secretPassword").value = '';
        
        // Adiciona efeito de confete
        createSecretConfetti();
        
        // Redireciona para a carta íntima após 2 segundos
        setTimeout(() => {
            window.location.href = 'carta-intima.html';
        }, 2000);
        
    } else {
        // Senha incorreta - mostra erro
        errorDiv.innerHTML = '❌ Senha incorreta! Tente novamente.';
        errorDiv.className = 'password-error';
        
        // Limpa o campo de senha
        document.getElementById("secretPassword").value = '';
        
        // Foca no campo de senha
        document.getElementById("secretPassword").focus();
    }
}

// Função para permitir pressionar Enter no campo de senha
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById("secretPassword");
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

// Função para criar confete quando a senha está correta
function createSecretConfetti() {
    const colors = ['#ff6b6b', '#764ba2', '#667eea', '#ffd93d', '#ff8e8e', '#28a745'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10000';
        confetti.style.animation = `secretFall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Adiciona CSS para animação do confete secreto
const secretStyle = document.createElement('style');
secretStyle.textContent = `
    @keyframes secretFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(secretStyle);