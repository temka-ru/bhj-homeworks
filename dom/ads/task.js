const rotatorCases = document.querySelectorAll('.rotator__case');

function rotateText() {
    let activeIndex = 0;

    return function () {
        const currentCase = rotatorCases[activeIndex];
        const nextCase = rotatorCases[(activeIndex + 1) % rotatorCases.length];
        currentCase.classList.remove('rotator__case_active');
        nextCase.classList.add('rotator__case_active');
        activeIndex = (activeIndex + 1) % rotatorCases.length;
    };
}

const rotate = rotateText();

setInterval(rotate, 1000);