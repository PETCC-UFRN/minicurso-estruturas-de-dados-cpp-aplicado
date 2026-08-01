document.addEventListener("DOMContentLoaded", function() {
    
    // Função recursiva para varrer a página
    function processarTexto(node) {
        // Se for um nó de texto, aplicamos o regex
        if (node.nodeType === Node.TEXT_NODE) {
            const texto = node.nodeValue;
            
            // Verifica se o texto contém [p:...] ou [o:...]
            if (/\[[po]:[^\]]+\]/.test(texto)) {
                // Cria um elemento temporário para converter o texto modificado em HTML
                const span = document.createElement('span');
                span.innerHTML = texto
                    .replace(/\[p:([^\]]+)\]/g, '<span class="pivo">$1</span>')
                    .replace(/\[o:([^\]]+)\]/g, '<span class="ordenado">$1</span>');
                
                // Substitui o texto puro pelos novos elementos HTML gerados
                node.replaceWith(...span.childNodes);
            }
        } 
        // Se for um elemento HTML, entramos nele para procurar mais texto
        else if (node.nodeType === Node.ELEMENT_NODE) {
            // Ignoramos tags onde não faz sentido (ou é perigoso) injetar HTML
            const tagsIgnoradas = ['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'];
            
            if (!tagsIgnoradas.includes(node.nodeName)) {
                // Transformamos os filhos em um array e usamos recursão
                // Usar Array.from evita bugs caso o DOM mude durante o loop
                Array.from(node.childNodes).forEach(processarTexto);
            }
        }
    }

    // Inicia a busca a partir do <body> (pode ser outro container, como document.getElementById('conteudo'))
    processarTexto(document.body);
});