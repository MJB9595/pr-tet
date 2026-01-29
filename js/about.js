
const wrappers = document.querySelectorAll('.tilt-wrapper');

wrappers.forEach(wrapper => {
    const card = wrapper.querySelector('.tilt-card');
    let isHovering = false;
    
    wrapper.addEventListener('mouseenter', () => {
        isHovering = true;
        card.style.transition = 'transform 0.2s ease-out';
        
        setTimeout(() => {
            if(isHovering) {
                card.style.transition = 'none';
            }
        }, 200);
    });
    
    wrapper.addEventListener('mousemove', (e) => {
        if(!isHovering) return;
        
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (centerY - y) / 10; 
        const rotateY = (x - centerX) / 10;
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    wrapper.addEventListener('mouseleave', () => {
        isHovering = false;
        card.style.transition = 'transform 0.5s ease-out';
        card.style.transform = `rotateX(0) rotateY(0)`;
    });
});

window.addEventListener('scroll', () => {
    const body = document.querySelector('body');
    if (window.scrollY >= 100) {
        body.classList.add('scroll');
    } else {
        body.classList.remove('scroll');
    }
});




