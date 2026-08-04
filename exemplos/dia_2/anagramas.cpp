#include <iostream>
#include <vector>
#include <string>

using namespace std;

template<typename T> 
void merge(vector<T>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1; 
    int n2 = right - mid;    

    vector<T> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0; 
    int j = 0; 
    int k = left; 

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

template<typename T> 
void mergeSort(vector<T>& arr, int left, int right) {
    if (left >= right) {
        return;
    }

    int mid = left + (right - left) / 2;

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
}

bool anagramas(string& a, string& b) {
    if (a.length() != b.length()) {
        return false;
    }

    vector<char> vecA(a.begin(), a.end());
    vector<char> vecB(b.begin(), b.end());

    mergeSort(vecA, 0, vecA.size() - 1);
    mergeSort(vecB, 0, vecB.size() - 1);

    return vecA == vecB;
}

int main() {
    string palavra1 = "alegria";
    string palavra2 = "galeria";
    
    if (anagramas(palavra1, palavra2)) {
        cout << "\"" << palavra1 << "\" e \"" << palavra2 << "\" sao anagramas!" << endl;
    } else {
        cout << "\"" << palavra1 << "\" e \"" << palavra2 << "\" NAO sao anagramas." << endl;
    }
    
    string palavra3 = "roma";
    string palavra4 = "amor";
    
    if (anagramas(palavra3, palavra4)) {
        cout << "\"" << palavra3 << "\" e \"" << palavra4 << "\" sao anagramas!" << endl;
    } else {
         cout << "\"" << palavra3 << "\" e \"" << palavra4 << "\" NAO sao anagramas." << endl;
    }

    return 0;
}