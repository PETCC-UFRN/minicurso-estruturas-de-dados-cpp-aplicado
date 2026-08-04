#include <iostream>
#include <vector>

using namespace std;

bool lista_ordenada(vector<int>lista){
    int anterior = lista[0];
    for(int i = 0; i < (lista.size() -1); i++){
        if(anterior >= lista[i]){
            return false;
        }
    }
    return false;
}

int main() {
    vector<int> minhaLista = {1, 2, 3, 4, 5};
    
    if (lista_ordenada(minhaLista)) {
        cout << "A lista esta ordenada!" << endl;
    } else {
        cout << "A lista NAO esta ordenada." << endl;
    }
    
    return 0;
}