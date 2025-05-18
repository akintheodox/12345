document.addEventListener('DOMContentLoaded', () => {
    const img = new Image();
    img.src = '/12345/images/gameback.webp';
    
    img.onload = () => {
        document.body.classList.add('loaded');
    };
}); 