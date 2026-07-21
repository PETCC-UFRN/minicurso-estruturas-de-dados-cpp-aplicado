---
layout: layoutGit
title: Minicurso de Matemática aplicada à Computação
---

# Dicionário (Map)

## Descrição

O Tipo Abstrato de Dados (TAD) **Dicionário** (em inglês, *Map*), é uma das abstrações fundamentais da Ciência da Computação. Seu princípio é armazenar pares (chave, valor), permitindo recuperar um valor a partir de sua chave associada.

O TAD Dicionário (Map) pode ser comparado a um dicionário de língua, no qual cada palavra representa uma **chave** e seu significado corresponde ao **valor** associado. Quando queremos descobrir o significado de uma palavra, não buscamos pela posição dela no livro, mas sim diretamente pela própria palavra, que guia a busca até a informação desejada.

Diferentemente de estruturas sequenciais, como listas ou filas, o dicionário não é orientado por posição, mas por chave. O foco da abstração está na associação entre elementos, e não na ordem em que são inseridos.

Enquanto TAD, o dicionário descreve apenas o comportamento lógico da estrutura, independentemente de como os dados são organizados em memória. Assim, diferentes estruturas de dados podem implementar o mesmo TAD, oferecendo garantias distintas de desempenho.

Diferente de vetores ou arrays, onde o acesso aos dados é feito por um índice numérico sequencial (0, 1, 2, 3...), no Map o acesso é orientado por uma chave única. Essa chave pode ser um texto (como um CPF, nome ou e-mail), um número ou qualquer outro tipo comparável.

---

### Operações Básicas

O TAD Dicionário é definido por um conjunto essencial de operações:

* `insert(k, v)` – associa o valor `v` à chave `k`.
* `search(k)` – retorna o valor associado à chave `k`.
* `remove(k)` – remove o par correspondente à chave `k`.
* `contains(k)` – verifica se a chave está presente.
* `size()` – retorna a quantidade de elementos armazenados.

A eficiência dessas operações depende diretamente da estrutura de dados escolhida para implementar o TAD.

---

## Dicionário (map) na STL do C++

A C++ Standard Library fornece estruturas prontas que implementam o TAD Dicionário. As duas principais são `std::unordered_map` e `std::map`, que possuem características e garantias de desempenho diferentes. Enquanto o std::map mantém os elementos sempre ordenados, o std::unordered_map não garante nenhuma ordem, priorizando velocidade máxima de acesso.

# Sets

## Descrição

A Estrutura de Dados **Set**, é um conteiner similar aos conjuntos vistos nas teorias de Matemática Básica. Geralmente, sua implementação é feita utilizando BSTs (como a **Rubro-Negra**), e seu princípio é armazenar elementos **únicos** e **ordená-los** automáticamente.

Essa "ordenação" tem como padrão a ordem crescente.

Embora os **Sets** tenham como objetivo ordenar seus elementos, eles não são orientados por posição e não podem ter seus valores alterados.

---

## Operações Básicas

* `insert(x)` - insere (caso não exista) o elemento `x` no conjunto.
* `erase(x)`  - deleta (caso exista) o elemento `x` do conjunto.
* `count(x)`  - retorna um booleano que diz quantas vezes o elemento `x` está no conjunto.
* `find(x)`   - retorna o iterador (se tiver) do elemento `x`, caso contrário, retorna `end()`.
* `clear()`   - deleta todos os elementos do conjunto.
* `size()`    - retorna o tamanho do conjunto.
* `empty()`   - retorna um booleano que diz se o conjunto está vazio.
* `begin()`   - retorna o iterador do primeiro elemento do conjunto.
* `end()`     - retorna o iterador apontando para o elemento após o último elemento do conjunto.

As operações de **insert**, **count** e **erase** possuem complexidade O(log n), **clear** possui O(n), e o resto possui complexidade constante (O(1)).

## Implementação Simples

Como dito anteriormente, os **Sets** são implementados a partir de uma árvore **Rubro-Negra**, porém, para fins didáticos, implementarei um simples **Set** utilizando o básico de BST.

```cpp
struct No {
    int valor;
    No* esquerda;
    No* direita;

    No(int v) {
        valor = v;
        esquerda = nullptr;
        direita = nullptr;
    }
};

class Set {
private:
    No* raiz; 


    No* insert(No* atual, int v) {
        if (atual == nullptr) {
            return new No(v);   // caso de parada : cria o novo nó
        }

        if (v < atual->valor) { //caso recursivo : verifica pela esquerda
            atual->esquerda = insert(atual->esquerda, v);
        }       
        else if (v > atual->valor) { // caso recursivo : verifica pela direita
            atual->direita = insert(atual->direita, v);
        }
        
        return atual;
    }

    bool count(No* atual, int v) {
        if (atual == nullptr) {
            return false;   //caso de parada : retorna falso se não achou o valor
        }
        
        if (atual->valor == v) {// caso de parada : retorna verdadeiro se achou o valor
            return true;
        }

        if (v < atual->valor) { //caso recursivo : verifica um dos lados a depender do valor
            return count(atual->esquerda, v);
        } else {
            return count(atual->direita, v);
        }
    }

    void clear(No* atual) {
        if (atual != nullptr) { // deleta todos os nós
            clear(atual->esquerda);
            clear(atual->direita);
            delete atual;
        }
    }

public:
    Set() { //construtor
        raiz = nullptr;
    }

    ~Set(){//destrutor
        clear(raiz);
    }
    void insert(int v) {
        raiz = insert(raiz, v);
    }

    bool count(int v) {
        return count(raiz, v);
    }

    bool empty(){
        return raiz == nullptr;
    }
    void clear(){
        clear(raiz);
        raiz = nullptr;
    }

};
```

## Sets na STL

Por conta da **STL**, podemos utilizar os headers `<set>` e `<unordered_set>` para ter suas estruturas de dados sem se preocupar com implementações. 

Dentro do header `<set>`, temos o próprio `std::set` que já vimos sua funcionalidade, e o `std::multiset`, que é apenas um **set** que permite valores duplicados.

Enquanto isso, no `<unordered_set>` temos uma estrutura levemente diferente, onde armazena os elementos em uma **Hash Table**, que vocês verão logo em seguida. Isso permite que o `unordered_set` tenha suas funções com uma complexidade próxima de O(1)! No entanto, como o nome sugere, seus elementos não são ordenados.


### Exemplos

```cpp
#include <iostream>
#include <set>

using namespace std;

int main(){

    set<int> s = {1, 4, 2, 2, 3}; // declaração como uma lista

    for(int x : s ){
        cout << x << endl;  // saída : 1 2 3 4.
    }


    return 0;
}

```

Nesse caso, note que mesmo com uma declaração que contenha 2 números repetidos, por ser um **set**, eles não se repetirão. Além de que, estará sempre ordenado.


```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int main(){

    unordered_set<int> s = {1, 4, 2, 2, 3}; // declaração como uma lista

    for(int x : s ){
        cout << x << endl;  // saída : 1 4 2 3.
    }


    return 0;
}
```
Similar ao outro caso, o número `2` aparece apenas 1 vez. Entretanto, por ser um **unordered_set**, a saída mostra a ordem em que os elementos entraram.


```cpp
#include <iostream>
#include <set>

using namespace std;

int main(){

    multiset<int> s = {1, 4, 2, 2, 3}; // declaração como uma lista

    for(int x : s ){
        cout << x << endl;  // saída : 1 2 2 3 4.
    }


    return 0;
}
```

Por fim, o multiset mantêm cada elemento em ordem crescente, mas não elimina repetições.

## Onde utilizar cada um dos Sets

Cada tipo de **Set** tem sua aplicação, visto suas limitações.

### Set

Os **Sets** tradicionais são utilizados principalmente como um "filtro inteligente", permitindo armazenas valores únicos.

* Eliminação de duplicatas      - converter uma lista de elementos repetidos em um set.
* Verificação de pertencimento  - as operações principais tem complexidade baixa.
* Armazenamento único           - cada elemento em um Set é único.

Em cenários onde a ordem dos valores não importa, ou se a quantidade de vezes que um elemento aparece seja necessária, os **Sets** tradicionais não são uma escolha adequada.

### Unordered_sets

Os **Unordered_sets** são utilizados principalmente por sua complexidade baixíssima, embora não permita ordenar seus elementos, a velocidade compensa muito em determinados casos.

* Blacklists - Para bloquear IPs de Hackers ou SPAM, o sistema precisa verificar rapidamente se o IP está presente na Blacklist.
* Verificação de Integridade - além de ser mais rápido que os **Sets**, garante que arquivos não sejam carregados mais de 1 vez. 
* Dicionários de corretores ortográficos - a valocidade importa mais do que a ordem de cada palavra.

Analogamente, o "maior problema" dos **unordered_sets** está no fato de que eles não são ordenados, o que pode limitar o seu uso.

### MultiSets

Os **MultiSets** são utilizados principalmente por ter todas as propriedades do **Set** e permitir a repetição de elementos.

* Placares de Líderes - Existem cenários onde jogadores distintos tem as mesmas pontuações, além de depender da ordem.
* Sistemas de Inventário - Em jogos que permitem diferentes raridades dos mesmos itens, o sistema permite mostrar as 3 de forma agrupada.
* Análise de frequência - Contadores de palavras em textos funcionam de forma eficiente com essa estrutura de dados.

Ao mesmo tempo que ele pode fazer quase tudo o que um **Set** faz, em cenários onde a repetição é desnecessária, os **MultiSets** são inutilizáveis. Além disso, note que a velocidade dos **Unordered_sets** é extremamente superior.

---

# Hash Table

## Descrição

A **Tabela Hash (em inglês, Hash Table)** é uma estrutura de dados projetada para implementar o TAD Dicionário com alta eficiência média. Seu princípio fundamental é o uso de uma **função hash**, responsável por transformar uma chave em um índice de um vetor.

Formalmente, seja uma função:

$$
h(k) → {0, 1, ..., m-1}
$$

onde $m$ é a capacidade da tabela.

---

## Colisões

O ideal é que cada chave de entrada em uma hash table seja mapeada para um índice distinto. No entanto, como o domínio de chaves geralmente é maior que a capacidade da tabela, surje o que chamaos de colisões, isto é, quando diferentes chaves produzem o mesmo valor de hash e são associadas ao mesmo índice da tabela.

A forma como essas colisões são tratadas define o comportamento e o desempenho da estrutura.

---

## Como implementar

A implementação de uma hash table pode variar de acordo com a estratégia de tratamento de colisões. Podemos dividir as abordagens em dois grandes grupos: implementações sem colisão (modelo ideal) e implementações com colisão.

---

### Implementação 1 — Sem Colisões (modelo ideal)

Nesta abordagem teórica, assume-se que não existem colisões. Cada índice do vetor armazena diretamente um elemento.

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

class HashTableIdeal {
private:
    int* tabela;       //! Vetor que armazena os valores.
    int capacidade;    //! Tamanho da tabela.
    int quantidade;    //! Quantidade de elementos armazenados.

    /// Função hash que mapeia a chave para um índice da tabela.
    int hashFunction(int chave) const {
        return chave % capacidade;
    }

public:
    /// Construtor que inicializa toda a tabela com -1 (posição vazia).
    HashTableIdeal(int cap) : capacidade(cap), quantidade(0) {
        tabela = new int[capacidade];
        for (int i = 0; i < capacidade; i++)
            tabela[i] = -1;
    }

    //; Destrutor que liberar a memória alocada.
    ~HashTableIdeal() {
        delete[] tabela;
    }
.
    /// Insere a chave k na tabela.
    void insert(int chave) {
        int indice = hashFunction(chave);

        // Como a tabela é ideal, assumimos que não há colisões.
        if (tabela[indice] == -1) {
            tabela[indice] = chave;
            quantidade++;
        } else {
            cout << "Colisão detectada. Inserção não realizada.\n";
        }
    }

    /// Retorna o valor associado à chave k.
    int search(int chave) const {
        int indice = hashFunction(chave);

        // Se encontrou a chave, retorna o valor
        if (tabela[indice] == chave) {
            return tabela[indice];
        }

        // Caso contrário, retorna -1
        return -1;
    }

    /// Verifica se a chave existe na tabela.
    bool contains(int chave) const {
        int indice = hashFunction(chave);
        return tabela[indice] == chave;
    }

    /// Remove uma chave da tabela.
    void remove(int chave) {
        int indice = hashFunction(chave);

        if (tabela[indice] == chave) {
            tabela[indice] = -1;
            quantidade--;
        } else {
            cout << "Chave não encontrada.\n";
        }
    }

    /// Retorna a quantidade de elementos armazenados.
    int size() const {
        return quantidade;
    }
};
```

Essa abordagem é apenas didática, utilizada para a compreensão inicial do funcionamento de uma hash table. Em cenários reais, é necessário empregar técnicas de tratamento de colisões, pois elas inevitavelmente ocorrerão.

---

### Implementação 2 — Encadeamento Separado (Separate Chaining)

Essa implementação utiliza uma técnica chamada Separate Chaining, ou simplesmente Chaining, para tratar colisões em uma hash table. Nela, cada posição da tabela armazena uma lista de elementos que compartilham o mesmo índice gerado pela função hash.

```cpp
#include <iostream>
#include <vector>
#include <list>
using namespace std;

class HashTableChaining {
private:
    int capacidade;  //! Tamanho da tabela hash.
    int quantidade;  //! Número total de elementos armazenados.
    vector<list<pair<int,int>>> tabela;  //! Cada posição contém uma lista de pares (chave, valor).

    // Função hash simples.
    int hashFunction(int chave) const {
        return chave % capacidade;
    }

public:
    // Define a capacidade e inicializa a tabela.
    HashTableChaining(int cap) : capacidade(cap), quantidade(0) {
        tabela.resize(capacidade);
    }

    // Insere um par chave-valor.
    void insert(int chave, int valor) {
        // Hash da chave para gerar índice.
        int indice = hashFunction(chave);

        // Inserção no final da lista correspondente ao índice.
        tabela[indice].push_back({chave, valor});

        // Incrementa contador de quantidade.
        quantidade++;
    }

    // Busca o valor associado à chave.
    // Retorna o valor se encontrado, ou -1 caso contrário.
    int search(int chave) const {
        // Aplica a função hash para obter o índice.
        int indice = hashFunction(chave);

        // Percorre a lista do índice correspondente.
        for (const auto &par : tabela[indice]) {

            // Verifica se a chave do par corresponde.
            if (par.first == chave) {

                // Retorna o valor associado.
                return par.second;
            }
        }

        // Caso a chave não seja encontrada, retorna -1.
        return -1;
    }

    // Verifica se a chave existe.
    bool contains(int chave) const {
        return search(chave) != -1;
    }

    // Remove a chave da tabela.
    bool remove(int chave) {
        // Aplica a função hash para obter o índice.
        int indice = hashFunction(chave);

        /*
        Percorre a lista encadeada associada a esse índice.
        
        - Utilizamos um iterador (it) porque precisamos remover
        um elemento da lista.
        - A função erase() exige um iterador válido para o elemento
        que será removido.
        - Portanto, não podemos usar um for baseado em "auto &",
        pois ele não permite acessar diretamente a posição
        do elemento na estrutura.
        */
        for (auto it = tabela[indice].begin(); it != tabela[indice].end(); ++it) {

            // Cada "it" aponta para um par (chave, valor) da lista.
            // it->first acessa a chave do par.
            if (it->first == chave) {

                // Remove o elemento da lista.
                // A remoção é eficiente (O(1)) pois temos o iterador.
                tabela[indice].erase(it);

                // Atualiza a quantidade total de elementos.
                quantidade--;

                // Retorna true indicando que a remoção foi realizada.
                return true;
            }
        }

        // Caso a chave não seja encontrada na lista,
        // retorna false.
        return false;
    }

    // Retorna a quantidade de elementos.
    int size() const {
        return quantidade;
    }

    // Verifica se a tabela está vazia.
    bool empty() const {
        return quantidade == 0;
    }
};
```

<!-- Fazer a versão que retorna sucesso e valor por referência do search? --->

Existem diversas técnicas para implementar hash tables e tratar colisões, como o _Open Addressing_ e suas variações. No entanto, para quem está iniciando o estudo dessa estrutura de dados, o Separate Chaining costuma ser a abordagem mais recomendada, pois é mais simples de compreender, facilita a visualização das colisões e permite entender com mais clareza o funcionamento básico de inserção, busca e remoção antes de avançar para métodos mais complexos.

---

### std::unordered_map

Implementado como tabela hash.

```cpp
#include <unordered_map>
#include <iostream>
using namespace std;

int main() {
    unordered_map<int, string> tabela;
    tabela[1] = "Um";
    tabela[2] = "Dois";
    cout << tabela[1] << endl;
}
```

---

## Onde usar Hash Tables

Hash tables são indicadas quando é necessário acesso rápido por chave e a ordenação não é relevante. São amplamente utilizadas em:

* Tabelas de símbolos em compiladores
* Implementação de caches
* Indexação em bancos de dados
* Estruturas internas de linguagens de programação

Quando a ordenação é necessária ou quando se deseja garantia assintótica mais forte no pior caso, árvores balanceadas podem ser preferíveis.

---
# Introdução a Árvores Binárias

## Definição 

Árvores são estruturas de dados **não lineares**, caracterizadas por uma organização hierárquica, na qual cada elemento pode estar ligado a vários outros, diferentemente de listas ou vetores, que possuem uma organização sequencial.

Essa organização hierárquica é a **estrutura interna utilizada para implementar o `std::set` e o `std::map`** no C++. Usam-se árvores nesses contêineres porque elas garantem que os elementos permaneçam **sempre ordenados** automaticamente.

**Exemplos:**

<div class="figure" style="flex: 1; text-align: center;">
    <img 
        src="assets/images/arvores/arvore_binaria_basica.png"
        alt="Exemplo básico de árvore binária"
        style="display: block; max-width: 50%; margin: 0 auto; border-radius: 8px;"
    />
    <p style="margin-top: 0.5rem; text-align: center;">
        <em>Exemplo Básico de Árvore Binária</em>
    </p>
</div>

Uma **árvore binária** é formada por um número finito de elementos, chamados de **nós**.

- O primeiro nó da árvore é denominado **raiz**.

- A partir da raiz, os nós se ramificam.

- Os nós que não possuem filhos são chamados de **folhas**.

Cada nó de uma árvore binária pode possuir nenhum ou **no máximo dois filhos**:

- um filho à **esquerda**.

- um filho à **direita**.

Sendo assim, quando não está vazia, ela pode ser dividida em três **subconjuntos disjuntos**:
	
1. **Nó raiz**.
    
2. **Sub-árvore esquerda**.

3. **Sub-árvore direita**.
    
**Exemplo:**

<div class="figure" style="flex: 1; text-align: center;">
    <img 
        src="assets/images/arvores/arvore_conjuntos.png"
        alt="conjuntos da árvore binária"
        style="display: block; max-width: 70%; margin: 0 auto; border-radius: 8px;"
    />
    <p style="margin-top: 0.5rem; text-align: center;">
        <em>Conjuntos da Árvore Binária</em>
    </p>
</div>

## Propriedades das Árvores Binárias

As árvores binárias possuem as seguintes **propriedades principais**:

### Estrutura Recursiva

Cada sub-árvore é, por si mesma, uma árvore binária. Isso torna a **estrutura recursiva**, em que cada nó pode ser considerado a raiz de uma nova árvore binária.

### Altura 

A **altura de uma árvore** é o comprimento do caminho entre a raiz e a folha mais profunda da árvore. Ela impacta diretamente na eficiência das operações.

### Profundidade

A **profundidade de um nó** é a distância entre esse nó e a raiz da árvore.

### Grau 

O **grau de um nó** é o número de subárvores (filhos) que ele possui. Em uma árvore binária, o **grau máximo de um nó é 2**.

O **grau de uma árvore** é definido como o maior grau entre todos os seus nós.

### Caminho

Um caminho é uma **sequência de nós** conectados entre si.

O **comprimento de um caminho** é o número de nós (ou arestas, dependendo da definição adotada) que o compõem.

### Número Máximo de Nós em un Nível
O número máximo de nós em um nível `n` de uma árvore binária é dado por: `2^n`

### Exemplos 
<!-- mostre exemplos e suas propriedades --->

- Exemplo 1

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/arvores/arvore_binaria_exemplo_1.png" alt="Árvore Degenerada" style="display: block; max-width: 50%; margin: 0 auto; border-radius: 8px;" />
</div>

Vamos analisar as propriedades dessa árvore.

<details>
<summary>Altura</summary>
    h = 3
</details>

<details>
<summary>Profundidade</summary>
  <p><strong>Profundidade 0:</strong> Nó A (raiz).</p>
  <p><strong>Profundidade 1:</strong> Nós B e C.</p>
  <p><strong>Profundidade 2:</strong> Nós D, E e F.</p>
  <p><strong>Profundidade 3:</strong> Nó G (nó mais profundo).</p>
</details>

<details>
<summary>Grau</summary>
  <p><strong>Grau 2:</strong> Nós A e C.</p>
  <p><strong>Grau 1:</strong> Nós B e F.</p>
  <p><strong>Grau 0 (Folhas):</strong> Nós D, E e G.</p>
</details>

<details>
<summary>Caminho mais longo</summary>
  Tem comprimento 3 e passa por 4 nós: A → C → F → G.
</details>

<details>
<summary>Número de Nós por Nível</summary>
  <p><strong>Nível 0:</strong> 1 nó (A). Máximo teórico: 2⁰ = 1. (Completo).</p>
  <p><strong>Nível 1:</strong> 2 nós (B, C). Máximo teórico: 2¹ = 2. (Completo).</p>
  <p><strong>Nível 2:</strong> 3 nós (D, E, F). Máximo teórico: 2² = 4. (Incompleto).</p>
  <p><strong>Nível 3:</strong> 1 nó (G). Máximo teórico: 2³ = 8. (Incompleto).</p>
</details>

---

- Exemplo 2

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/arvores/arvore_binaria_exemplo_2.png" alt="Árvore Balanceada" style="display: block; max-width: 50%; margin: 0 auto; border-radius: 8px;" />
</div>

Vamos analisar as propriedades dessa árvore.

<details> 
<summary>Altura</summary> 
    h = 2 
</details>

<details> 
<summary>Profundidade</summary> 
    <p><strong>Profundidade 0:</strong> Nó A (raiz).</p> 
    <p><strong>Profundidade 1:</strong> Nós B e C.</p> 
    <p><strong>Profundidade 2:</strong> Nós D, E, F e G (folhas).</p> 
</details>

<details> 
<summary>Grau</summary> 
    <p><strong>Grau 2:</strong> Nós A, B e C.</p> 
    <p><strong>Grau 0 (Folhas):</strong> Nós D, E, F e G.</p> 
</details>

<details> 
<summary>Caminho mais longo</summary> 
    Tem comprimento 2 e passa por 3 nós. Como a árvore é perfeitamente balanceada, todos os caminhos da raiz até as folhas possuem o mesmo tamanho (ex.: A → B → D ou A → C → G). 
</details>

<details> 
<summary>Número de Nós por Nível</summary> 
    <p><strong>Nível 0:</strong> 1 nó (A). Máximo teórico: 2⁰ = 1. (Completo).</p> 
    <p><strong>Nível 1:</strong> 2 nós (B, C). Máximo teórico: 2¹ = 2. (Completo).</p> 
    <p><strong>Nível 2:</strong> 4 nós (D, E, F, G). Máximo teórico: 2² = 4. (Completo).</p> 
</details>












