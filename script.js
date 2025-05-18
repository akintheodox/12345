document.addEventListener('DOMContentLoaded', () => {
    const img = new Image();
    img.src = './images/gameback.jpg';
    
    img.onload = () => {
        document.body.classList.add('loaded');
    };
}); 