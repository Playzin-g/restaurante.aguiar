// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Mudar estilo da navbar ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '12px 8%';
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.padding = '20px 8%';
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        }
    });

    // Fechar menu ou ajustes adicionais para clique em links de scroll (opcional)
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Aqui você pode adicionar animações personalizadas se desejar no futuro
        });
    });
});
