// script.js
document.addEventListener("DOMContentLoaded", function() {
    let draggedItem = null;

    document.querySelectorAll(".images img").forEach(img => {
        img.addEventListener("dragstart", function() {
            draggedItem = img;
            setTimeout(function() {
                img.style.display = "none";
            }, 0);
        });

        img.addEventListener("dragend", function() {
            setTimeout(function() {
                draggedItem.style.display = "block";
                draggedItem = null;
            }, 0);
        });
    });

    document.querySelectorAll(".tableau td").forEach(cell => {
        cell.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        cell.addEventListener("dragenter", function(e) {
            e.preventDefault();
        });

        cell.addEventListener("drop", function() {
            this.append(draggedItem);
        });
    });
});
