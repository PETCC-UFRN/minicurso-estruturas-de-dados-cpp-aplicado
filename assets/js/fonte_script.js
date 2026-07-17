(function () {
    const niveis = ['fonte-pequena', 'fonte-media', 'fonte-grande'];
    let nivelAtual = parseInt(localStorage.getItem('nivelFonte') || '0', 10);

    if (isNaN(nivelAtual) || nivelAtual < 0 || nivelAtual >= niveis.length) {
        nivelAtual = 0;
    }

    function aplicarFonte() {
        document.documentElement.classList.remove('fonte-media', 'fonte-pequena',  'fonte-grande');
        if (niveis[nivelAtual]) {
            document.documentElement.classList.add(niveis[nivelAtual]);
        }
        localStorage.setItem('nivelFonte', nivelAtual);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const btnMais = document.getElementById('fonte-mais');
        const btnMenos = document.getElementById('fonte-menos');

        if (btnMais) {
            btnMais.addEventListener('click', function () {
                nivelAtual = Math.min(nivelAtual + 1, niveis.length - 1);
                aplicarFonte();
            });
        }

        if (btnMenos) {
            btnMenos.addEventListener('click', function () {
                nivelAtual = Math.max(nivelAtual - 1, 0);
                aplicarFonte();
            });
        }

        aplicarFonte(); // aplica a preferência salva assim que a página carrega
    });
})();