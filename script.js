// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Обработка формы (пока просто оповещение)
const form = document.getElementById('signupForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
}

// Добавим класс для активного пункта меню при скролле (просто для красоты - необязательно)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            const currentId = section.getAttribute('id');
            document.querySelectorAll('.menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});