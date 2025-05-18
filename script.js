document.addEventListener('DOMContentLoaded', () => {
    const img = new Image();
    img.src = './images/gameback.webp';
    
    img.onload = () => {
        document.body.classList.add('loaded');
    };
}); 