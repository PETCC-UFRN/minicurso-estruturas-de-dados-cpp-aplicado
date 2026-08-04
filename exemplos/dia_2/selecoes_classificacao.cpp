#include <iostream>
#include <vector>
#include <string>
#include <algorithm> 

using namespace std;

struct Selecao {
    string nome;
    int pontos;
    int saldo_gols;
};

bool compararSelecoes(Selecao a, Selecao b) {
    if(a.pontos != b.pontos){
        return a.pontos > b.pontos;
    }
    else if(a.saldo_gols != b.saldo_gols){
        return a.saldo_gols > b.saldo_gols;
    }
    else{
        return a.nome > b.nome;
    }
}

int main() {
    vector<Selecao> grupo = {
        {"Camaroes", 4, 0},
        {"Brasil", 6, 3},
        {"Suica", 6, 1},
        {"Servia", 1, -4}
    };
    
    sort(grupo.begin(), grupo.end(), compararSelecoes);
    
    cout << "Classificacao Final do Grupo:" << endl;
    for (int i = 0; i < grupo.size(); i++) {
        cout << i + 1 << "o Lugar: " << grupo[i].nome 
             << " | Pontos: " << grupo[i].pontos 
             << " | Saldo: " << grupo[i].saldo_gols << endl;
    }
    
    return 0;
}