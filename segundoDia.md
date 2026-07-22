---
layout: layoutGit
title: Minicurso de Algoritmos e Estruturas de Dados
---

# Busca, Ordenação e Complexidade

Na computação, frequentemente armazenamos dados que precisarão ser recuperados mais tarde. Nesta seção, estudaremos os algoritmos de busca e ordenação. Além de serem os exemplos mais clássicos para introduzir os conceitos de análise assintótica, eles são tópicos excelentes para estimular o pensamento criativo na resolução de problemas lógicos.

## Noções de Análise Assintótica

Neste minicurso não vamos nos aprofundar em análise assintótica, mas você pode entendê-la, de forma simplificada, como uma ferramenta para medir a **eficiência de um algoritmo**. Em suma, ela responde à seguinte pergunta:

> Como o tempo de execução (ou a quantidade de operações) cresce à medida que o volume de dados ($n$) aumenta?

Veja um exemplo prático: um algoritmo para encontrar o menor elemento de um vetor.

```cpp
int menorElemento(int v[], int n) {
    int i;
    int menor = v[0];

    for (i = 1; i < n; i++) {
        if (v[i] < menor) {
            menor = v[i];
        }
    }
    return menor;
}
```

<details>
<summary>Qual o número de passos desse algoritmo?</summary>
<ul>
Se o vetor tiver tamanho $n$, a comparação v[i] < menor será executada exatamente $n - 1$ vezes. Como a quantidade de operações cresce de forma linear e proporcional a $n$, se a entrada dobrar de tamanho, o número de passos também dobra.
</ul>
</details>

### Melhor, Pior e Caso Médio

Muitos algoritmos podem ser interrompidos antes de percorrer toda a entrada, caso a resposta já tenha sido encontrada. Isso significa que a rapidez do programa não depende apenas da quantidade de dados, mas também de **como** e **onde** esses dados aparecem.

Veja este outro exemplo:

```cpp
bool temNumeroNegativo(vector<int>& v) {
    for (int i = 0; i < v.size(); i++) {
        
        if (v[i] < 0) {
            return true;
        }
    }
    return false;
}
```

Temos três cenários possíveis:

- **Melhor caso:** o primeiro número do vetor já é negativo. O algoritmo faz apenas **1 verificação** e encerra, retornando `true`.

- **Pior caso:** o vetor não tem nenhum número negativo (ou o único negativo é o último elemento). O algoritmo é forçado a verificar todas as posições para ter certeza, fazendo **$n$ verificações**.

- **Caso médio:** se houver um número negativo, ele pode estar em qualquer posição. Em média, percorremos até a metade do vetor, fazendo aproximadamente **$n/2$ verificações**.


### Notação Big-O ($O$)

Para representar o **pior caso**, usamos a notação **Big-O** ($O$), que descreve o **limite superior** de crescimento de uma função, ou seja, o cenário mais custoso que o algoritmo pode enfrentar.

No exemplo anterior, como o pior caso exige percorrer todo o vetor, dizemos que o algoritmo tem complexidade $O(n)$. Isso significa que, no pior cenário, o número de operações cresce **linearmente** com o tamanho da entrada.

Para visualizar o impacto dessa e de outras complexidades, observe o gráfico a seguir. Ele ilustra como o tempo de execução se comporta conforme o volume de dados ($n$) aumenta. 

<figure style="text-align: center; margin: 20px 0;">
    <img src="assets/images/bigO_graph.jpg" alt="Gráfico comparativo das complexidades Big-O" style="max-width: 80%; height: auto; display: block; margin: 0 auto;">
    <figcaption style="font-size: 0.9em; color: #666; margin-top: 8px;">
        <em>Comparação das principais complexidades Big-O.</em>
    </figcaption>
</figure>

Ao analisar algoritmos, geralmente nos preocupamos com o pior caso porque ele nos garante que, não importa qual seja a entrada, o algoritmo nunca será mais lento do que essa estimativa. Isso é essencial quando precisamos garantir desempenho confiável em qualquer situação.

## Busca

Os algoritmos de busca estão entre os conceitos mais fundamentais da programação e, por isso, são um dos primeiros tópicos a serem estudados. Afinal, a necessidade de encontrar um dado específico no meio de tantos outros é uma das tarefas mais comuns no desenvolvimento de software.

A seguir, conheceremos as estratégias de **Busca Linear** e **Busca Binária**, analisando as vantagens e o desempenho de cada uma. Antes, porém, vamos formalizar o problema que ambas se propõem a resolver:

>Dado um conjunto de elementos $V$ de tamanho $n$ e um valor alvo $k$, quero encontrar a posição exata $i$ dentro de $V$ onde o elemento armazenado seja igual a $k$. Se o valor $k$ não estiver presente em nenhuma posição do conjunto, o algoritmo deve garantir e informar que a busca falhou (retornando $-1$).

### Busca Linear 

Para implementar essa busca, vamos assumir que o conjunto $V$ está armazenado em uma estrutura sequencial indexada, como um array.

Uma forma simples de resolver esse problema é percorrer o conjunto $V$ desde o primeiro elemento (índice $0$) até o último (índice $n-1$). Para cada um desses elementos, fazemos uma comparação com o valor alvo. Se for o valor que procuramos, retornamos imediatamente a sua posição.

```c++
int busca_sequencial(array<int> &arr, int x){
	for(int i=0;i<arr.size();i++){
		if(arr[i] == x){
			return i;
		}
	}
	return -1;
}
```

<details>
<summary><strong>Pergunta rápida:</strong> Quantas vezes a comparação <code>arr[i] == x</code> é executada?</summary>
<ul>
    <li><strong>Melhor caso:</strong> 1 vez (se <code>x</code> estiver na primeira posição).</li>
    <li><strong>Pior caso:</strong> $n$ vezes (se <code>x</code> estiver na última posição).</li>
</ul>
</details>

### Busca Binária 

Agora vamos supor que os elementos de $V$ estejam dispostos de forma **ordenada** e crescente.

Nesse caso, se o valor alvo $k$ for muito pequeno, é esperado que ele esteja logo no início da lista; se for muito grande, próximo ao final. Sendo assim, ao dividirmos a lista ao meio, podemos comparar $k$ com o elemento central e determinar em qual metade a busca deve continuar, na primeira ou na segunda.

```cpp
int busca_binaria(array<int> &arr, int x) {
    int low = 0;
    int high = arr.size();
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x){
            return mid;
		}
        else if (arr[mid] < x){
            low = mid + 1;
		}
        else{
            high = mid - 1;
		}
    }
    return -1
}
```

<details>
<summary><strong>Mesma pergunta:</strong> Quantas vezes a comparação <code>arr[mid] == x</code> é executada?</summary>
<br>
<ul>
  <li><strong>Melhor caso:</strong> 1 vez (se <code>x</code> for exatamente o elemento central).</li>
  <li><strong>Pior caso:</strong> Aproximadamente $\log_2(n)$ vezes (quando o elemento não existe ou exige que o vetor seja dividido sucessivamente até sobrar apenas 1 elemento).</li>
</ul>
</details>

### Comparação

Se $n = 1000$, o algoritmo de busca linear executará, no pior caso, até 1000 comparações. Já o algoritmo de busca binária executará apenas cerca de 10 comparações no pior caso.

Isso ocorre porque, a cada passo, dividimos o intervalo de busca ao meio:

$$1000 \to 500 \to 250 \to 125 \to 63 \to 32 \to 16 \to 8 \to 4 \to 2 \to 1$$

**E se $n$ = 1 bilhão?** A busca binária executará cerca de **30 comparações**. Essa diferença de desempenho é exatamente o que medimos através da análise assintótica.

Aplicando o que vimos sobre análise assintótica, temos:

- Busca Linear: Possui complexidade $O(n)$. O número de operações cresce de forma linear, diretamente proporcional à quantidade de elementos.

- Busca Binária: Possui complexidade $O(\log n)$. O número de operações cresce de forma mais lenta, o que a torna ideal para volumes gigantescos de dados.

Porém, o algoritmo de busca binária assume que os valores já estão ordenados. Caso o vetor não esteja ordenado, será necessário ordená-lo antes, o que também tem um custo computacional.


## Ordenação

Como acabamos de ver, a eficiência dos métodos de busca sempre será melhor quando trabalhamos com listas ordenadas.

Dada uma lista $A$ de tamanho $n$, sabemos que ela está ordenada quando a seguinte condição é satisfeita:

$$
{a_0 \leq a_1 \leq a_2 \leq ... \leq a_{n-2} \leq a_{n-1}}
$$

Notamos que a verificação acaba em algum dos seguintes casos:

- Quando encontramos o primeiro elemento que não satisfaz a desigualdade,. Nesse caso retornamos `false`, pois $A$ não está ordenada
- Quando chegamos ao fim da lista sem encontrar um elemento assim. Nesse caso retornamos `true`, pois $A$ está ordenada

#### Exercício

Implemente uma função que verifica se uma lista está ordenada ou não.

### Selection Sort

Caso você precisasse ordenar um grupo de pessoas por altura, como faria? A única restrição é que só se pode mover uma pessoa por vez, e não se pode exagerar nas trocas. Uma das abordagens mais comuns seria percorrer o grupo inteiro e verificar quem é a menor pessoa encontrada naquela iteração. Considere o exemplo a seguir:

```cpp
void selectionSort(vector<int> &lista) {
    int tamanho = lista.size();

    for (int comeco = 0; comeco < tamanho - 1; comeco++) {
        int indice_do_menor = comeco;

        for (int atual = comeco + 1; atual < tamanho; atual++) {
            if (lista[atual] < lista[indice_do_menor]) {
                indice_do_menor = atual; 
            }
        }

        swap(lista[comeco], lista[indice_do_menor]);
    }
}
```

Agora vamos analisar a complexidade desse algoritmo, partindo de um exemplo do pior cenário. Considere a lista `[7,6,5,4,3,2,1]`.

<!-- T(7) = 7 + 6 + 5... -->
<!-- T(4) = 4 + 3 + 2... -->
<!-- T(n) = \sum_{i=1}^{n} i-->
<!-- Criança insuportável chamada friedrich gauss -->
<!-- Mostrar q sempre vai precisar de n(n+1)/2 iterações -->
<!-- Mostrar a ideia dos pares -->
<!-- = O(n²) -->

<details>
<summary>Quantas iterações são necessárias para esse exemplo?</summary>
<ul>
    Temos $7 + 6 + 5 + 4 + 3 + 2 + 1$ iterações.
</ul>
</details>

Esse algoritmo tem nome: **Selection Sort**.

### Bubble Sort

Note que a abordagem usada anteriormente é dependente de conhecermos o estado da lista de forma ampla, a partir de um elemento em diante. Mas que tal se só olhássemos apara o elemento vizinho? 

Considere o código a seguir:

```cpp
void bubbleSort(vector<int>& lista) {
    int tamanho = lista.size();

    for (int i = 0; i < tamanho - 1; i++) {
        for (int j = 0; j < tamanho - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                swap(lista[j], lista[j + 1]);
            }
        }
}
```

O método que acabou de ser mostrado consiste no **Bubble Sort**.

Perceba que o `Selection Sort` ordenava diretamente, ou seja, se preocupando que o menor elemento estivesse no começo da lista.

<details>
<summary>O que as duas abordagens vistas até o momento têm em comum?</summary>
<ul>
    Ambas acumulam a lista parcialmente ordenada em uma das pontas
</ul>
</details>

#### Exercício
Implemente a função `swap` para poder rodar esses algoritmos.
<!-- Questionar:
        - assinatura(para inteiros),
        - por que precisa ter referência?
        - desenhar a pilha de memória
        - fazer versão para chars
        - polimorfizar -->

<!-- void swap_ints(int& x, int& y) -->
<!-- void swap_chars(char& x, char& y) -->

 <!--
 template<typename T> void swap(T& left, T& right) {
	T tmp(left);
	left = right;
	right = tmp;
} -->

<!-- tangente sobre iteradores/endereços de memória
#include <iostream>

using namespace std;

int main() {
	int arr[4] = {3,8,5,12};

	cout << arr << endl;
	cout << *arr << endl;

	cout << arr + 1 << endl;
	cout << *(arr + 1) << endl;

	cout << arr[0] << endl;
	cout << *(arr + 0) << endl;

    //generalizando...
    //a[i] = *(a+i)
    //     = *(i+a)
    //     = i[a]
	return 0;
}-->

### Merge Sort

#### Dividir Para Conquistar

Perceba que os algoritmos que vimos até o momento fazem muitas comparações repetidas, o que os torna muito lentos quando precisamos organizar muitos dados. Mas e se a gente pensasse um pouco mais como Júlio César ([divide et impera](https://pt.wikipedia.org/wiki/Dividir_para_conquistar))?

Essa abordagem poder ser feita através de recursão e seguindo dois passos:

1. Descubra o caso-base.
2. Divida seu problema até que ele se torne o caso-base.

#### Exemplo

Vamos tentar ordenar `[8, 6, 4, 2, 5, 1, 2, 7]` com essa técnica.

<details>
<summary>Qual é o caso-base em que tenho certeza que a lista estará ordenada?</summary>
<ul>
   A resposta é uma lista de 1 elemento. Se você tem um vetor como [8], ele já está perfeitamente ordenado, pois não há com quem compará-lo.
</ul>
</details>

`Fase 1`: Quebrar o problema pela metade até sobrar 1 elemento.
```text
                             [8, 6, 4, 2, 5, 1, 2, 7]
                                         |
                     -----------------------------------------
                     |                                       |
              [8, 6, 4, 2]                            [5, 1, 2, 7]
                     |                                       |
             -----------------                       -----------------
             |               |                       |               |
          [8, 6]          [4, 2]                  [5, 1]          [2, 7]
             |               |                       |               |
          -------         -------                 -------         -------
          |     |         |     |                 |     |         |     |
         [8]   [6]       [4]   [2]               [5]   [1]       [2]   [7]
```

`Fase 2`: Mesclar as partes garantindo que fiquem ordenadas.
```text
         [8]   [6]       [4]   [2]               [5]   [1]       [2]   [7]
          |     |         |     |                 |     |         |     |
          -------         -------                 -------         -------
             |               |                       |               |
          [6, 8]          [2, 4]                  [1, 5]          [2, 7]
             |               |                       |               |
             -----------------                       -----------------
                     |                                       |
              [2, 4, 6, 8]                            [1, 2, 5, 7]
                     |                                       |
                     -----------------------------------------
                                         |
                             [1, 2, 2, 4, 5, 6, 7, 8]
```

O processo que acabamos de ver é o funcionamento do algoritmo conhecido como `Merge Sort`. Ele utiliza recursão para dividir o problema continuamente em dois, com cada parte contendo metade da lista original.

```cpp
void mergeSort(vector<int>& arr, int left, int right) {
    // Caso base: Se a sublista tiver 1 ou 0 elementos, ela já está ordenada.
    if (left >= right) {
        return;
    }

    // Encontra o meio do vetor para dividi-lo em duas metades
    int mid = left + (right - left) / 2;

    // Chama a recursão para a metade esquerda
    mergeSort(arr, left, mid);

    // Chama a recursão para a metade direita
    mergeSort(arr, mid + 1, right);

    // Mescla as duas metades que já voltaram ordenadas
    merge(arr, left, mid, right);
}
```
Porém, para que tudo isso funcione, precisamos declarar a função merge primeiro, que é a responsável pela `Fase 2` (a junção).

```cpp
void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1; // Tamanho da metade esquerda
    int n2 = right - mid;    // Tamanho da metade direita

    // Cria vetores temporários para armazenar essas metades
    vector<int> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0; // Índice inicial do vetor esquerdo 
    int j = 0; // Índice inicial do vetor direito 
    int k = left; // Índice inicial do vetor original 

    // Mescla os vetores temporários de volta para arr[left..right]
    while (i < n1 && j < n2) {
        // Compara o topo das duas metades e pega o menor valor
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++; // Avança a posição no vetor principal
    }

    // Se ainda sobrarem elementos na metade esquerda, copia todos
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Se ainda sobrarem elementos na metade direita, copia todos
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
```

<details>
<summary><strong>Por que o Merge Sort seria mais eficiente que os métodos vistos antes?</strong></summary>
<ul>
   <li>Os métodos mais simples comparam praticamente cada elemento com todos os outros. Se a lista dobra de tamanho, o trabalho quadruplica.</li>
   <li>Na <code>Fase 2</code>, ele só precisa olhar para o "topo" de cada metade e pegar o menor, fundindo as duas partes em uma única passada rápida, sem precisar reavaliar quem já está no lugar certo.</li>
</ul>
</details>

#### Exercício

Dadas 2 strings, diga se elas são anagramas.

<!-- 

 -->

### Quick Sort?

### Comparação?

## Métodos da STL

Já dá pra imaginar diversos usos para os algoritmos de ordenação, certo? Pense, por exemplo, em organizar a sequência de músicas que vão tocar em um reprodutor de áudio ou fazer a ordenação alfabética das palavras em um editor de texto (spoilers?).

É importante saber que, no entanto, quando estamos resolvendo questões como essas e queremos um algoritmo de ordenação, não precisamos fazê-lo do zero. Podemos usar as funções já implementadas e otimizadas da STL - Standard Template Library (Biblioteca Modelo Padrão).

(Mas mesmo que usemos funções já prontas para ordenar, lembre-se de tentar entender como esses algoritmos que passamos funcionam!!)

Essa função de _sort_ é implementada com o Intro Sort - que usa alguns _sorts_ que não vimos (como o quicksort e o heapsort), mas também usa o insertion sort em casos específicos, devido ao seu melhor caso linear!

A sintaxe que usaremos para adicioná-los no código é a seguinte:

```cpp

sort(array, array + n) // para arrays

sort(vector.begin(), vector.end()) // para vectors


```

Note que também é possível ordenar a partir de uma função personalizada! Uma das maneiras de fazer isso é criando essa função como uma que retorna um booleano.

```cpp

bool comparar(int a, int b) {
	return a > b;
}
```

E depois passando-a como o terceiro argumento da função de _sort_!

```cpp

sort(arr, arr+n, comparar);

sort(vector.begin(), vector.end(), comparar);

```

Agora que sabemos como ordenar nossos dados usando de forma rápida e eficiente, o que podemos fazer com isso? A resposta é: muita coisa! Ter uma lista ordenada abre portas para estratégias muito mais espertas de busca e manipulação de dados.

## Algumas Abordagens de Resolução

Muitas vezes, ao nos depararmos com problemas de programação mais simples, nós conseguimos imaginar uma saída trivial. Pense na seguinte situação: 

>Você está trabalhando em um caixa de supermercado, e tem diversas notas de valores diferentes. Um cliente te paga com uma nota maior, e precisa que você o reembolse com o seu devido troco. Mas como notas estão mais escassas hoje em dia, o seu chefe quer que você economize: pague-o com exatamente 2 notas de qualquer valor.

<details>
<summary><strong>O que exatamente este problema está pedindo?</strong></summary>
<ul>
   Dado um array de inteiros (as notas disponíveis no caixa) e um número alvo (o troco necessário), você deve encontrar e retornar dois números que, somados, resultem no valor alvo.
</ul>
</details>

### Força Bruta

Uma possibilidade imediata que temos para resolver isso é testar todas as combinações! Ou seja, tentar somar cada número da nossa lista com todos os outros.

```cpp
void achaTroco(vector<int>& arr, int m){
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == j) continue;
            if (arr[i] + arr[j] == m) { // achamos nosso resultado!
                cout << "as notas são de " << arr[i] << " e " << arr[j] << " reais\n";
                return 0;
            }
        }
    }
}
```

<details>
<summary><strong>Qual é o custo (complexidade) desse algoritmo?</strong></summary>
<ul>
   Para cada nota de dinheiro no caixa, o algoritmo tenta formar um par com todas as outras notas. Assim, se houver 4 notas, ele fará até 16 verificações; se houver 8 notas, fará 64. O número de operações cresce de forma quadrática, ou seja, a complexidade é n².
</ul>
</details>


### Two Pointers

Agora, vamos utilizar os conhecimentos que vimos anteriormente. Após ordenar os valores, garantimos uma propriedade essencial: todo elemento à esquerda será menor ou igual ao atual, enquanto todo número à direita será maior ou igual.

Aproveitando essa propriedade, inicializamos nossos ponteiros nos dois extremos do vetor (o menor e o maior valor possíveis). A partir daí, a regra é simples:

- Se a soma for **maior** que o alvo: Movemos o segundo ponteiro para a esquerda (para diminuir a soma).

- Se a soma for **menor** que o alvo: Movemos o primeiro ponteiro para a direita (para aumentar a soma).

Dessa forma, tentamos sempre nos aproximar do valor esperado $m$! Se os dois ponteiros se encontrarem (apontarem para o mesmo índice), significa que esgotamos as possibilidades e a soma exata não existe no vetor.

#### Prova

Digamos que estamos com as nossas setas apontando para os números $a$ e $b$:

```
     |         |
     v         v
[... a ....... b ...]
```

Agora vamos provar que, caso $a + b < m$ e o nosso algoritmo tenha sido seguido fielmente, **não** devemos mover a segunda seta para a direita, mas sim a primeira.

Para isso, vamos analisar cada um dos casos para concluir com certeza de que o nosso algoritmo funciona (essa etapa é importante para conseguirmos nos convencer da corretude do que fizemos).

**A segunda seta não deve avançar**

- **Caso $b$ seja o maior número da nossa lista**, ele será o último. Logo, é impossível mover a nossa seta para a direita.

- **Caso contrário**, existem números à direita de $b$. Vamos denotar o número imediatamente à direita de $b$ de $b'$. Então nosso vetor tem uma cara parecida com essa:

  ```
       |     |
       v     v
  [... a ... b b' ..]
  ```

Dá pra perceber que, para chegar nesse estado (já que seguimos as nossas regras até aqui), temos duas opções:

**(1)** Viemos de uma configuração como essa:

  ```
       |        |
       v        v
  [... a ... b  b' ..]
  ```

**(2)** Existe um $a' < a$ e viemos de uma configuração como essa:

  ```
       |        |
       v        v
  [... a' a ... b b'...]
  ```

- Se viemos da **configuração (1)**: já comparamos $a + b'$ e deu errado ($a + b' > m$). Logo, não faz sentido comparar os mesmos dois números de novo.

- Se viemos da **configuração (2)**: como há um $b' > b$, temos que viemos do $b'$ em algum momento, já que a nossa segunda seta aponta para $b$.

Para algum $a'' \leq a'$, ocorreu que $a'' + b' > m$, e movemos a nossa segunda seta para a direita.

Assim, como $a' > a''$:
$$a' + b' > a'' + b' > m$$

Logo, não faz sentido avançar a seta para a direita de novo, visto que a soma será maior que a desejada de qualquer forma.

    ```
                |        |
                v        v
    [... a" ... a' a ... b  b' ...]
    ```

**A primeira seta não deve retroceder**

A prova para a primeira seta não voltar para a esquerda é análoga ($a + b > m$):

```
     |     |
     v     v
[... a ... b ...]
```

- **Caso $a$ seja o primeiro número** (não há nenhum número menor que ele), não é possível mover a nossa seta para a esquerda.

- **Caso contrário**, existe um número $a'$ à esquerda de $a$. Pela condição de ordenação, temos $a' < a$. Logo, o vetor parecerá com isso:

  ```
           |     |
           v     v
  [... a'  a ... b ...]
  ```

Da mesma forma, podemos ter vindo de duas configurações diferentes para a atual, já que só movemos uma seta por vez:

**(1)** Viemos de uma configuração como essa:

  ```
       |         |
       v         v
  [... a'  a ... b...]
  ```

**(2)** Existe $b' > b$ e viemos de uma configuração como essa:

  ```
           |        |
           v        v
  [... a'  a ... b  b' ...]
  ```

- No **caso (1)**: já comparamos $a'$ com $b$ (e temos que $a' + b < m$), então não adianta testar a mesma coisa mais uma vez.

- No **caso (2)**: já que a nossa primeira seta aponta para $a$, em algum momento viemos do $a'$ (já que $a'$ existe).

A partir disso, temos que, para algum $b'' > b'$, chegamos à conclusão de que $a' + b'' < m$, e movemos a primeira seta para a direita.

Logo, como $b < b''$:
$$a' + b < a' + b'' < m$$
    
Dessa forma, a comparação entre esses dois números não é necessária, e as condições que estabelecemos sempre vão nos guiar para a resposta certa!

    ```
             |        |
             v        v
    [... a'  a ... b  b' ... b" ...]
    ```

---

Agora vamos analisar o código para entender o que estamos fazendo:

```cpp
int p1 = 0, p2 = n - 1;

while (p1 != p2) {

    if (arr[p1] + arr[p2] == m) {
        cout << "as notas são de " << arr[p1] << " e " << arr[p2] << " reais\n";
        return 0;
    }

    else if (arr[p1] + arr[p2] > m) {
        p2--;
    }

    else { // a única opção restante é arr[p1] + arr[p2] < m
        p1++;
    }

}

cout << "a soma não é possível";
```

O `two pointers` é um algoritmo muito comum na área de programação competitiva, mas essa modelagem não se prende só a isso! Esse nome pode se referir a várias implementações diferentes, desde que incluam a ideia de guardar índices e avançá-los estrategicamente (de forma *gulosa*) para atingir uma boa solução.

#### Exercício 

Um palíndromo é uma palavra que é escrita e lida da mesma forma de trás para frente (como "arara", "radar" ou "osso").

Usando a técnica dos Dois Ponteiros, como você escreveria um código eficiente para verificar se uma string recebida é um palíndromo?


<!-- questoes: sum of two values (codeforces), books (codeforces), -->

<!-- ### Fontes
* [Merge Sort](https://www.geeksforgeeks.org/dsa/merge-sort/)
* [Questão do Triângulo](https://www.geeksforgeeks.org/dsa/maximum-perimeter-triangle-from-array/)
* [Conteúdo Complementar](https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews) 

[125. Valid Palindrome]https://leetcode.com/problems/valid-palindrome/description/
-->

<!-- ## Análise de Melhor e Pior Caso

## Projetos -->
