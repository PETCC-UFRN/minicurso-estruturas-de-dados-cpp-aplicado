document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggle-button");
    var sumario = document.getElementById("sumario");
    var mainContent = document.querySelector("main"); 

    toggleButton.addEventListener("click", function() {
        sumario.classList.toggle("hidden");
        mainContent.classList.toggle("expandido"); 
        
        if (sumario.classList.contains("hidden")) {
            toggleButton.textContent = "Mostrar Sumário";
        } else {
            toggleButton.textContent = "Esconder Sumário";
        }
    });
});