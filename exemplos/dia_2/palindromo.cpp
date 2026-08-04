#include <iostream>
#include <string>

using namespace std;

bool verificarPalindromo(const string& palavra) {
    if (palavra.length() <= 1) {
        return true;
    }

    int ponteiro_esquerda = 0;
    int ponteiro_direita = palavra.length() - 1;

    while (ponteiro_esquerda < ponteiro_direita) {
        
        // Se as letras nas pontas forem diferentes, não é palíndromo
        if (palavra[ponteiro_esquerda] != palavra[ponteiro_direita]) {
            return false;
        }

        // Movemos os ponteiros para a próxima verificação (em direção ao centro)
        ponteiro_esquerda++;
        ponteiro_direita--;
    }

    return true;
}

int main() {

    string teste1 = "arara";
    string teste2 = "radar";
    string teste3 = "algoritmo";
    string teste4 = "osso";

    cout << "--- Teste de Palindromos ---" << endl;
    
    cout << "A palavra '" << teste1 << "' e palindromo? " 
         << (verificarPalindromo(teste1) ? "Sim" : "Nao.") << endl;
         
    cout << "A palavra '" << teste2 << "' e palindromo? " 
         << (verificarPalindromo(teste2) ? "Sim" : "Nao.") << endl;
         
    cout << "A palavra '" << teste3 << "' e palindromo? " 
         << (verificarPalindromo(teste3) ? "Sim" : "Nao.") << endl;
         
    cout << "A palavra '" << teste4 << "' e palindromo? " 
         << (verificarPalindromo(teste4) ? "Sim" : "Nao.") << endl;

    return 0;
}