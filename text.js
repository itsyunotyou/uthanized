const paragraph = document.getElementById('wordDisplay');
const words = paragraph.textContent.split(' ');
let currentIndex = 0;

function revealNextWord() {
    if (currentIndex < words.length) {
        paragraph.textContent = words.slice(0, currentIndex + 1).join(' ');
        currentIndex++;
        paragraph.style.display = 'block'; // Show the paragraph after the first click
    } 
}

document.addEventListener('click', revealNextWord);