// Função para atualizar o contador
function updateCounter() {
    // Data de início do relacionamento (29/09/2024 00:00:00)
    const startDate = new Date(2024, 8, 29, 0, 0, 0);
    const now = new Date();
    
    // Se a data atual for anterior à data de início, mostra tudo zero
    if (now < startDate) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const diff = Math.max(0, now - startDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Função para rolagem suave
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 50; // Ajuste o valor conforme necessário
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para revelar a foto
function revealPhoto() {
    const photo = document.getElementById('hidden-photo');
    if (photo) {
        photo.style.display = photo.style.display === 'block' ? 'none' : 'block';
    }
}

// Inicializa todas as funcionalidades quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicia o contador
    updateCounter();
    // Atualiza o contador a cada segundo
    setInterval(updateCounter, 1000);
    
    // Configura a rolagem suave
    setupSmoothScroll();
});

// Torna a função revealPhoto global para o onclick funcionar
window.revealPhoto = revealPhoto; 