document.addEventListener('DOMContentLoaded', function() {
    let draggedImage = null;
    let draggedImageId = null;

    // Rendre les images déplaçables
    const images = document.querySelectorAll('.images img');
    images.forEach(img => {
        img.addEventListener('touchstart', handleDragStart, false);
        img.addEventListener('dragstart', handleDragStart, false);
    });

    // Écouter les événements de glisser-déposer sur les cellules du tableau
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('dragover', handleDragOver, false);
        cell.addEventListener('drop', handleDrop, false);
        cell.addEventListener('touchmove', handleDragOver, false);
        cell.addEventListener('touchend', handleDrop, false);
    });

    function handleDragStart(e) {
        draggedImage = e.target;
        draggedImageId = e.target.id;
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        if (draggedImage && e.target.id === draggedImageId) {
            e.target.innerHTML = '';
            e.target.appendChild(draggedImage.cloneNode(true));
            draggedImage.remove(); // Supprimer l'image de la liste à gauche
        }
    }
});

// Script pour actualiser la page
document.getElementById('resetButton').addEventListener('click', function() {
    window.location.reload();
});

// Enregistrement du Service Worker pour PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker enregistré avec succès:', registration);
        })
        .catch((error) => {
            console.log('Erreur lors de lenregistrement du Service Worker:', error);
        });
}
const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
const diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

const rotations = {
    1: "rotateX(0deg) rotateY(0deg)",
    2: "rotateX(0deg) rotateY(180deg)",
    3: "rotateX(0deg) rotateY(90deg)",
    4: "rotateX(0deg) rotateY(-90deg)",
    5: "rotateX(90deg)",
    6: "rotateX(-90deg)"
};

function initDice(dice) {
    faces.forEach((face, index) => {
        const faceElement = document.createElement('div');
        faceElement.classList.add('face', face);
        faceElement.style.backgroundImage = `url('${diceImages[index]}')`;
        dice.appendChild(faceElement);
    });
}

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");

    // Adding extra random rotations for realism
    const randomExtraRotation = () => `${Math.floor(Math.random() * 5) * 360}deg`;

    const finalRotation1 = rotations[getRandomNumber()] + ` rotateZ(${randomExtraRotation()})`;
    const finalRotation2 = rotations[getRandomNumber()] + ` rotateZ(${randomExtraRotation()})`;

    dice1.style.transform = finalRotation1;
    dice2.style.transform = finalRotation2;
}

initDice(document.getElementById("dice1"));
initDice(document.getElementById("dice2"));