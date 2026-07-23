document.addEventListener("DOMContentLoaded", function() {
    // Busca todos os blocos de código da página
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        let conteudo = block.innerHTML;
        
        // Procura por [p:alguma_coisa] e transforma na tag do pivô
        conteudo = conteudo.replace(/\[p:([^\]]+)\]/g, '<span class="pivo">$1</span>');
        
        // Procura por [o:alguma_coisa] e transforma na tag do ordenado
        conteudo = conteudo.replace(/\[o:([^\]]+)\]/g, '<span class="ordenado">$1</span>');
        
        block.innerHTML = conteudo;
    });
});