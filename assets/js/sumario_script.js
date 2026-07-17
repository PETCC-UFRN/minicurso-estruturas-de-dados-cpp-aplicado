document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggle-button");
    var sumario = document.getElementById("sumario");
    var mainContent = document.querySelector("main"); 
    
    // Seleciona especificamente a tag span dentro do botão
    var buttonText = toggleButton.querySelector("span");

    toggleButton.addEventListener("click", function() {
        sumario.classList.toggle("hidden");
        mainContent.classList.toggle("expandido"); 
        
    
    });

    // geração automatica de sumarios
    var conteudoSumario = document.getElementById("conteudo-sumario");
   
    var headings = mainContent.querySelectorAll("h1, h2, h3");
    
    if (headings.length > 0) {
        var html = "<ul>";
        
        headings.forEach(function(heading) {
            var id = heading.id; 
            var texto = heading.textContent;
            var nivel = heading.tagName.toLowerCase(); // Retorna 'h1', 'h2' ou 'h3'

            if (nivel === 'h1') {
                html += `<li style="margin-bottom: 12px; margin-top: 10px;"><a href="#${id}" style="color: font-size: 1.1em; text-transform: uppercase;"><strong>${texto}</strong></a></li>`;
            } else if (nivel === 'h2') {
                html += `<li><a href="#${id}"><strong>${texto}</strong></a></li>`;
            } else if (nivel === 'h3') {
                html += `<li style="padding-left: 15px; font-size: 0.9em;"><a href="#${id}"> ${texto}</a></li>`;
            }
        });
        
        html += "</ul>";
        conteudoSumario.innerHTML = html;
    } else {
        sumario.style.display = "none";
        mainContent.classList.add("pagina-centralizada");
    }
});