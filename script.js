// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const draggables = document.querySelectorAll('.draggable');
    const droppables = document.querySelectorAll('.droppable');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', function() {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', function() {
            draggable.classList.remove('dragging');
        });
    });

    droppables.forEach(droppable => {
        droppable.addEventListener('dragover', function(event) {
            event.preventDefault();
            const draggable = document.querySelector('.dragging');
            droppable.appendChild(draggable);
        });
    });
});
// scripts.js (suite)

droppables.forEach(droppable => {
    droppable.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    droppable.addEventListener('drop', function(event) {
        if(!droppable.querySelector('img')) { // Si la cellule ne contient pas déjà une image
            const draggable = document.querySelector('.dragging');
            droppable.appendChild(draggable);
        }
    });
});
// scripts.js (suite)

draggables.forEach(draggable => {
    draggable.addEventListener('dblclick', function() {
        if(draggable.closest('.droppable')) {
            document.querySelector('.images').appendChild(draggable);
        }
    });
});
// scripts.js (suite)

droppables.forEach(droppable => {
    droppable.addEventListener('dragenter', function(event) {
        if(!droppable.querySelector('img')) {
            droppable.classList.add('over');
        }
    });

    droppable.addEventListener('dragleave', function(event) {
        droppable.classList.remove('over');
    });

    // ... le reste du code reste inchangé
});



// scripts.js button reset (ajout)












