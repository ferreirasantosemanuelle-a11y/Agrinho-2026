document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENU RESPONSIVO (MOBILE)
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('ativo');
    });

    // Fecha o menu ao clicar em qualquer link (útil em celulares)
    const linksNavbar = document.querySelectorAll('.navbar a');
    linksNavbar.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('ativo');
        });
    });

    // 2. DIRECIONAMENTO INTELIGENTE DE PLANOS PARA O WHATSAPP
    const botoesPlanos = document.querySelectorAll('.btn-card');
    const numeroWhatsapp = "5544991696544";

    botoesPlanos.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            const nomePlano = evento.target.getAttribute('data-plano');
            let mensagem = "";

            if(nomePlano === "AgroTech") {
                mensagem = encodeURIComponent(`Olá Emanuelle! Gostaria de agendar uma consulta sobre o Plano AgroTech personalizado.`);
            } else {
                mensagem = encodeURIComponent(`Olá Emanuelle! Fiquei interessado no ${nomePlano} do Agro Forte e gostaria de mais informações.`);
            }

            // Abre o WhatsApp em uma nova aba com a mensagem preenchida
            window.open(`https://wa.me{numeroWhatsapp}?text=${mensagem}`, '_blank');
        });
    });
});
