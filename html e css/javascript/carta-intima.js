// Adiciona animações suaves ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Anima as seções da carta
    const sections = document.querySelectorAll('.letter-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    // Adiciona efeito de digitação ao título
    const title = document.querySelector('.letter-header h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                title.style.borderRight = 'none';
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Adiciona efeito de coração pulsante
    const heartElements = document.querySelectorAll('.love-reasons li::before');
    setInterval(() => {
        heartElements.forEach(heart => {
            heart.style.transform = 'scale(1.2)';
            setTimeout(() => {
                heart.style.transform = 'scale(1)';
            }, 200);
        });
    }, 3000);

    // Adiciona efeito de hover nas citações
    const quotes = document.querySelectorAll('.message-quotes blockquote');
    quotes.forEach(quote => {
        quote.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        quote.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Adiciona efeito de confete quando a página carrega
    setTimeout(() => {
        createConfetti();
    }, 1000);
});

// Função para criar efeito de confete
function createConfetti() {
    const colors = ['#ff6b6b', '#764ba2', '#667eea', '#ffd93d', '#ff8e8e'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Adiciona CSS para animação de queda do confete
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Adiciona efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adiciona efeito de destaque nas promessas
const promises = document.querySelectorAll('.promises p');
promises.forEach((promise, index) => {
    promise.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.color = '#ff6b6b';
        this.style.fontWeight = 'bold';
    });
    
    promise.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.color = '#333';
        this.style.fontWeight = '500';
    });
    
    // Adiciona delay na animação de entrada
    setTimeout(() => {
        promise.style.opacity = '1';
        promise.style.transform = 'translateX(0)';
    }, index * 200);
});

// Inicializa as promessas como invisíveis
promises.forEach(promise => {
    promise.style.opacity = '0';
    promise.style.transform = 'translateX(-20px)';
    promise.style.transition = 'all 0.5s ease-out';
}); 