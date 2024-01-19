const dynamicText1 = document.querySelector("h2 span");
const words = ["HO NICOLAS", "ÉTUDIANT EN INFORMATIQUE", "DÉVELOPPEUR"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText1.textContent = currentChar;
    dynamicText1.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // Si la condition est vraie, on écrit le caractère suivant
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // Si la condition est vraie, on supprime le caractère précédent
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // Si le mot a été supprimer, on passe au mot suivant
        isDeleting = !isDeleting;
        dynamicText1.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();
