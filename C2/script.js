const imageToSplit = document.getElementById('image-to-split');
const splitImageBtn = document.getElementById('split-image');
const xInput = document.getElementById('x');
const yInput = document.getElementById('y');

splitImageBtn.addEventListener('click', () => {
    const x = parseInt(xInput.value);
    const y = parseInt(yInput.value);

    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        alert('Please enter valid positive integers for X and Y.');
        return;
    }

    const imageWidth = imageToSplit.width;
    const imageHeight = imageToSplit.height;
    const cardWidth = imageWidth / x;
    const cardHeight = imageHeight / y;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.width = `${cardWidth}px`;
            card.style.height = `${cardHeight}px`;
            card.style.left = `${i * cardWidth}px`;
            card.style.top = `${j * cardHeight}px`;
            card.style.backgroundImage = `url(${imageToSplit.src})`;
            card.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
            card.style.backgroundPosition = `-${i * cardWidth}px -${j * cardHeight}px`;

            card.addEventListener('click', () => {
                card.style.opacity = 0;
            });

            imageToSplit.parentNode.appendChild(card);
        }
    }
});