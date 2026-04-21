// 1. Selecionamos o botão e o elemento <body>
const btnToggle = document.getElementById('theme-toggle');
const body = document.body;

// 2. Adicionamos um "ouvinte de eventos" que vai disparar quando o botão for clicado
btnToggle.addEventListener('click', function() {
    
    // 3. Pegamos o tema atual que está configurado no body
    const temaAtual = body.getAttribute('data-bs-theme');
    
    // 4. Fazemos a verificação: se for claro, muda para escuro. Senão, muda para claro.
    if (temaAtual === 'light') {
        body.setAttribute('data-bs-theme', 'dark');
        btnToggle.textContent = 'Mudar para Tema Claro'; // Atualiza o texto do botão
        
        // Troca a cor do botão para ficar visível no fundo escuro
        btnToggle.classList.replace('btn-outline-secondary', 'btn-outline-light'); 
    } else {
        body.setAttribute('data-bs-theme', 'light');
        btnToggle.textContent = 'Mudar para Tema Escuro';
        
        // Volta a cor do botão para o padrão
        btnToggle.classList.replace('btn-outline-light', 'btn-outline-secondary');
    }
});