// Reproduce la música al cargar la invitación, pero añade un desbloqueo para navegadores modernos
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');

    // Reproducir audio si no está bloqueado por el navegador
    audio.play().catch(() => {
        // Agrega un evento de clic si la reproducción es bloqueada
        document.body.addEventListener('click', () => {
            audio.play();
        }, { once: true }); // El audio se intentará reproducir con el primer clic
    });
});