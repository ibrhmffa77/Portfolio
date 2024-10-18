

document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const gradientOverlay = document.getElementById('gradient-overlay');

    gradientOverlay.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});


document.addEventListener('mousemove', function (e) {
    const x = e.pageX;
    const y = e.pageY;

    const gradientOverlay = document.getElementById('gradient-overlay');

    gradientOverlay.style.background = ` radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});



const menuItems = document.querySelectorAll('.menu-item');
const cont = document.querySelectorAll('.content');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const selectedMenu = item.getAttribute('data-menu');
        cont.forEach(content => {
            if (content.id === selectedMenu) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

document.querySelector('.menu-item[data-menu="about"]').classList.add('active');
document.querySelector('#about').classList.add('active');

