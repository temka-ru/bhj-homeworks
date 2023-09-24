const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', revealElementsOnScroll);

function revealElementsOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}

revealElementsOnScroll();