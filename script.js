// script.js - Funcionalidad para la portada
// Actualiza la fecha dinámica y añade efectos suaves a la marquesina (opcional)

(function() {
    // 1. Mostrar fecha actual formateada en el elemento con id 'dynamicDate'
    const dateElement = document.getElementById('dynamicDate');
    if (dateElement) {
        const now = new Date();
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = now.toLocaleDateString('es-ES', opciones);
        // Capitalizar primera letra del mes (por si acaso)
        const fechaCapitalizada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
        dateElement.textContent = `📅 ${fechaCapitalizada} | Tecnología e innovación`;
    }

    // 2. Opcional: efecto sutil al cargar la página para mejorar la interacción
    // No interfiere con la marquesina, solo agrega un leve fade-in a la tarjeta
    const coverCard = document.querySelector('.cover-card');
    if (coverCard) {
        coverCard.style.opacity = '0';
        coverCard.style.transform = 'translateY(12px)';
        coverCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        // Pequeño timeout para que se vea la animación de entrada
        setTimeout(() => {
            coverCard.style.opacity = '1';
            coverCard.style.transform = 'translateY(0)';
        }, 80);
    }

    // 3. Control adicional: Asegurar que la marquesina tenga un reinicio suave si el texto es demasiado largo
    // (no es necesario modificar, pero se puede mejorar la experiencia en algunos navegadores)
    const marquee = document.querySelector('.custom-marquee');
    if (marquee) {
        // Para evitar que en algunos navegadores el scroll se detenga al perder el foco, 
        // agregamos un atributo de comportamiento explícito
        marquee.setAttribute('scrollamount', '5');
        marquee.setAttribute('scrolldelay', '60');
        // Si el navegador no soporta marquee de forma nativa, no pasa nada
        // pero todos los navegadores modernos lo soportan.
    }

    // 4. Pequeña mejora: mostrar un tooltip o información adicional en consola (solo desarrollo)
    console.log('Portada cargada correctamente | Campus Texcoco | Alumna: Maryne Valdez');
})();