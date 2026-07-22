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

    // Geração automática de sumários
    var conteudoSumario = document.getElementById("conteudo-sumario");
    var headings = mainContent.querySelectorAll("h1, h2, h3");
    
    if (headings.length > 0) {
        // Adicionamos uma classe à ul principal para facilitar a estilização no CSS
        var html = "<ul class='lista-sumario-dinamico'>";
        
        headings.forEach(function(heading) {
            var id = heading.id; 
            var texto = heading.textContent;
            var nivel = heading.tagName.toLowerCase(); // Retorna 'h1', 'h2' ou 'h3'

            // Em vez de styles, usamos classes específicas para cada nível
            if (nivel === 'h1') {
                html += `<li class="sumario-nivel-h1"><a href="#${id}">${texto}</a></li>`;
            } else if (nivel === 'h2') {
                html += `<li class="sumario-nivel-h2"><a href="#${id}">${texto}</a></li>`;
            } else if (nivel === 'h3') {
                html += `<li class="sumario-nivel-h3"><a href="#${id}">${texto}</a></li>`;
            }
        });
        
        html += "</ul>";
        conteudoSumario.innerHTML = html;
    } else {
        sumario.style.display = "none";
        mainContent.classList.add("pagina-centralizada");
    }
});