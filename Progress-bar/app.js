const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const bar = document.querySelector('.progress-bar');

function updateButtonStates() {
    const currentWidth = parseInt(bar.style.width);
    previous.disabled = (currentWidth == 0);
    next.disabled = (currentWidth == 100);
    if (currentWidth == 100) {
        bar.classList.add('bg-success');
        bar.classList.remove('progress-bar-striped');
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    } else {
        bar.classList.add('progress-bar-striped');
        bar.classList.remove('bg-success');
    }
}

updateButtonStates();

next.addEventListener('click', () => {
    const currentWidth = parseInt(bar.style.width);
    if (currentWidth < 100) {
        bar.style.width = (currentWidth + 25) + '%';
        updateButtonStates();
    }
});

previous.addEventListener('click', () => {
    const currentWidth = parseInt(bar.style.width);
    if (currentWidth > 0) {
        bar.style.width = (currentWidth - 25) + '%';
        updateButtonStates();
    }
});
