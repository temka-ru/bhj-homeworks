const cookieElement = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
const speedElement = document.getElementById('speed__counter');
let clickCount = 0;
let lastClickTime = null;

function handleClick() {
    clickCount++;

    counterElement.textContent = clickCount;


    const currentTime = new Date().getTime();
    if (lastClickTime) {
        const timeDifference = (currentTime - lastClickTime) / 1000;
        const clickSpeed = 1 / timeDifference;
        speedElement.textContent = clickSpeed.toFixed(2);
    }
    lastClickTime = currentTime;

    const currentWidth = cookieElement.getAttribute('width');
    if (clickCount % 2 === 0) {
        cookieElement.setAttribute('width', '200');
    } else {
        cookieElement.setAttribute('width', '220');
    }
}

cookieElement.addEventListener('click', handleClick);