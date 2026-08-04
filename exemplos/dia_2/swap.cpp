#include <iostream>

using namespace std;

void swapint(int& left, int& right){
    int temp = left; 
    left = right;
    right = temp;
}

int main() {
    int a = 10;
    int b = 25;
    
    cout << "Antes da troca: a = " << a << ", b = " << b << endl;
    
    swapint(a, b);
    
    cout << "Depois da troca: a = " << a << ", b = " << b << endl;
    
    return 0;
}