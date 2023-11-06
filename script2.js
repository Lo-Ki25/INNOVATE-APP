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
