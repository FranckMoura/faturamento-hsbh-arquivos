document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as seções que têm um ID e todos os links de navegação
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-bar .nav-link');

    // Função para remover a classe 'active' de todos os links
    const removeActiveClasses = () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    };

    // Cria um 'observador' que verifica quando uma seção entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se a seção está visível na tela (isIntersecting)
            if (entry.isIntersecting) {
                removeActiveClasses(); // Remove a classe de todos
                // Pega o ID da seção visível (ex: 'relatorios')
                const id = entry.target.getAttribute('id');
                // Procura o link de navegação que aponta para essa seção
                const activeLink = document.querySelector(`.nav-bar .nav-link[href="#${id}"]`);
                // Adiciona a classe 'active' a esse link
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px', // Ativa quando a seção está no meio da tela
        threshold: 0
    });

    // Pede ao observador para 'vigiar' cada uma das seções
    sections.forEach(section => {
        observer.observe(section);
    });
});