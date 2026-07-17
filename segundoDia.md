---
layout: layoutGit
title: Minicurso de Algoritmos e Estruturas de Dados
---

# Busca e Ordenação 

Na computação, frequentemente armazenamos dados que, mais tarde, precisarão ser recuperados. Nesta seção, veremos algoritmos projetados para organizar e localizar essas informações.

## Busca

Os algoritmos de busca estão entre os conceitos mais fundamentais da programação e, por isso, são um dos primeiros tópicos a serem estudados. Afinal, a necessidade de encontrar um dado específico no meio de tantos outros é uma das tarefas mais comuns no desenvolvimento de software.

A seguir, conheceremos as estratégias de **Busca Linear** e **Busca Binária**, analisando as vantagens e o desempenho de cada uma. Antes, porém, vamos formalizar o problema que ambas se propõem a resolver:

>Dado um conjunto de elementos $V$ de tamanho $n$ e um valor alvo $k$, quero encontrar a posição exata $i$ dentro de $V$ onde o elemento armazenado seja igual a $k$. Se o valor $k$ não estiver presente em nenhuma posição do conjunto, o algoritmo deve garantir e informar que a busca falhou (retornando $-1$).

### Busca Linear 

Para implementar essa busca, vamos assumir que o conjunto $V$ está armazenado em uma estrutura sequencial indexada, como um array.

Uma forma simples de resolver esse problema é percorrer o conjunto $V$ desde o primeiro elemento (índice $0$) até o último (índice $n-1$). Para cada um desses elementos, fazemos uma comparação com o valor alvo. Se for o valor que procuramos, retornamos imediatamente a sua posição.

```cpp
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

### Busca Binaria 

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

### Comparação e Noções de Complexidade

Se $n = 1000$, o algoritmo de busca linear executará, no pior caso, até 1000 comparações. Já o algoritmo de busca binária executará apenas cerca de 10 comparações no pior caso.

O logaritmo de base 2 aparece justamente porque, a cada passo, dividimos o intervalo de busca ao meio:

$$1000 \to 500 \to 250 \to 125 \to 63 \to 32 \to 16 \to 8 \to 4 \to 2 \to 1$$

**E se $n$ = 1 bilhão?** Busca binária executará cerca de **30 comparações**.

Porém, o algoritmo de busca binária assume que os valores já estão ordenados. Caso o vetor não esteja ordenado, será necessário ordená-lo antes, o que também tem um custo computacional.

## Ordenação

Ordenação se trata de um dos problemas mais abordados na área da computação. Comummente é um exemplo bastante associado para introduzir a análise assintótica, mas além disso, também é um tópico que estimula de maneira criativa a busca por soluções para um problema. 

Dada uma lista `A` de tamanho `n`, sabemos que ela está ordenada quando a seguinte solução é satisfeita:

$$
{a_0 \leq a_1 \leq a_2 \leq ... \leq a_{n-2} \leq a_{n-1}}
$$

Retomando o conceito de análise assintótica, notamos que a verificação acaba em algum dos seguintes casos:

- Quando encontramos o primeiro elemento que não satisfaz a desigualdade, nesse caso retornamos `false`, pois `A` não está ordenada
- Quando chegamos ao fim da lista sem encontrar um elemento assim, nesse caso retornamos `true`, pois `A` está ordenada

#### Exercício

>Implemente uma função que verifica se uma lista está ordenada ou não.

<details>
<summary>Spoiler!</summary>
No pior dos casos será necessário percorrer a lista toda para descobrir se ela é ordenada ou não. Sendo assim, sua complexidade é <b>O(n)</b>. Mas para os algoritmos a seguir vamos desconsiderar a verificação da ordenação, considerando no seu custo apenas a ordenação em si.
</details>

### Uma Abordagem Comum

Caso você precisasse ordenar um grupo de pessoas por altura, como faria? A única restrição é que só se pode mover uma pessoa por vez, e não pode exagerar nas trocas. Uma das abordagens mais comuns seria percorrer o grupo inteiro e verificar quem é a menor pessoa encontrada naquela iteração. Considere o exemplo a seguir:

```cpp
void ordenar(vector<int> &lista) {
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

Vamos analisar em tempo real o que acontece quando executamos esse código.

#### Atenção na tela!
<!-- Rodar o script de visualização -->

Agora vamos analisar a complexidade desse algoritmo, partindo de um exemplo do pior cenário. Considere a lista `[7,6,5,4,3,2,1]`.
#### Atenção no quadro!
<!-- T(7) = 7 + 6 + 5... -->
<!-- T(4) = 4 + 3 + 2... -->
<!-- T(n) = \sum_{i=1}^{n} i-->
<!-- Criança insuportável chamada friedrich gauss -->
<!-- Mostrar q sempre vai precisar de n(n+1)/2 iterações -->
<!-- Mostrar a ideia dos pares -->
<!-- = O(n²) -->

<details>
<summary>Spoiler!</summary>
Temos $7 + 6 + 5 + 4 + 3 + 2 + 1$ iterações. Logo <b>O(n²)</b>.
</details>

<details>
<summary>Spoiler 2!</summary>
Esse algoritmo tem nome. <b>Selection Sort</b>.
</details>

Note que a abordagem usada anteriormente é dependente de conhecermos o estado da lista de forma ampla, a partir de um elemento em diante. E isso é necessário pois toda troca é "semi-definitiva", isso pois um dos elemento não vai sair mais daquela posição. Mas será que precisamos mesmo que toda a alteração feita tenha que ser definitiva?

Antes de responder isso, que tal pensarmos no escopo que precisamos ter noção para tomar uma decisão. E se só olhassemos apara o elemento vizinho? Perderíamos o escopo do `Selection Sort`, certo? Mas isso necessariamente é ruim?

Considere o código a seguir:

```cpp
void sort(vector<int>& lista) {
    int tamanho = arr.size();

    for (int i = 0; i < tamanho - 1; i++) {
        for (int j = 0; j < tamanho - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                swap(lista[j], lista[j + 1]);
            }
        }
}
```

Perceba que o `Selection Sort` ordenava diretamente, ou seja, se preocupando que o menor elemento estivesse no começo da lista. O que as duas abordagens vistas até o momento têm em comum?

<!-- Ambas acumulam a lista parcialmente ordenada em uma das pontas -->

#### Atenção na tela
<!-- Rodar o script de visualização -->

<details>
<summary>Spoiler!</summary>
O método que acabou de ser mostrado consiste no <b>Bubble Sort</b>
</details>

#### Exercício
Implemente a `swap` para poder rodar esses algoritmos.
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

### Mudando um pouco a abordagem

Perceba que os algoritmos que vimos até o momento são todos **O(n²)**, mas será que ordenar sempre se trata de algo custoso assim? Com essa abordagem, sim. Mas e se a gente pensasse um pouco mais como [Júlio César](https://pt.wikipedia.org/wiki/J%C3%BAlio_C%C3%A9sar) ou [Napoleão Bonaparte](https://pt.wikipedia.org/wiki/Napole%C3%A3o_Bonaparte)?

<div  class="figure"  style="flex: 1; text-align: center;">
    <img  src="assets/images/dia2/divideandconquer.png"  alt="stack example"  style="display: block; max-width: 70%; margin: 0 auto; border-radius: 8px;"  />
    <p  style="margin: 0.5rem auto 0; text-align: center;"><em><br  /></em> <a href="https://www.youtube.com/watch?v=f4v_JMKihOs">Fonte</a></p>

</div>

#### Atenção no quadro
Vamos ordenar `[8,6,4,2,5,1,2,7]` com uma abordagem diferente.

#### Exercício

>Qual a complexidade do algoritmo?

<!-- quando n < 2 a lista já está ordenada, logo O(1) -->
<!-- caso contrário, temos merge(mergesort(left), mergesort(right))-->
<!-- qual a complexidade da merge? ela precisa passar por todos os elementos das 2 listas, logo linear -->
<!-- qual a complexidade da mergesort nesse caso? é intuitivo pensar que T(n/2) para cada lista, ou seja, 2T(n/2) -->
<!-- Logo T(n) = { O(1), se n < 2. O(n) + 2T(n/2), c.c. } -->
<!-- Qual complexidade pertence a qual função? merge linear & mergesort log -->

```cpp
void merge(vector<int>& arr, int left, int mid, int right){
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temp vectors
    vector<int> L(n1), R(n2);

    // Copy data to temp vectors L[] and R[]
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0;
    int k = left;

    // Merge the temp vectors back 
    // into arr[left..right]
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], 
    // if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], 
    // if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(vector<int>& arr, int left, int right){
    if (left >= right)
        return;

    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}
```
<!-- chamar como mergeSort(arr, 0, arr.size() - 1); -->

#### Exercício

> Dada uma lista de inteiros positivos descubra qual o perímetro do maior triângulo que pode ser formado por esses valores. Caso não seja possível formar um triângulo, retorne `-1`.

<!-- bool triangle(const int& a, const int& b, const int& c) {
    return a + b > c && b + c > a && c + a > b;
    // necessário checar todas as possibilidades pq não tenho garantia dos valores estarem ordenados
}

int maxPerimeter(vector<int> &arr) {
    int n = arr.size();
    int ans = -1;

    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {
            for(int k = j + 1; k < n; k++) {
                if(triangle(arr[i],arr[j],arr[k])) {
                    ans = max(ans, arr[i] + arr[j] + arr[k]);
                }
            }
        }
    }

    return ans;
}

int main() {
    vector<int> arr = {6, 1, 6, 5, 8, 4};
    cout << maxPerimeter(arr);
    return 0;
} -->

<!-- qual a complexidade da abordagem acima? -->

<!-- int maxPerimeter(vector<int> &arr) {
    int n = arr.size();

    mergesort(arr, 0, n-1);

    for(int i = 0; i < n - 2; i++) {
        // só preciso checar a desigualdade uma vez agora que sei que estão ordenados
        if(arr[i] < arr[i + 1] + arr[i + 2]) {
            return arr[i] + arr[i + 1] + arr[i + 2];
            // nem preciso ver os valores seguintes, pois sei que vão ser menores ou iguais ao atual
        }
    }

    return -1;
} -->

<!-- ordenação + busca => O(n*log(n)) + O(n) => O(n*log(n)) -->

> Dadas 2 strings, diga se elas são anagramas.

<!-- void merge(vector<string>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    vector<string> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1)
        arr[k++] = L[i++];

    while (j < n2)
        arr[k++] = R[j++];
}

void mergeSort(vector<string>& arr, int left, int right) {
    if (left >= right)
        return;

    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
} -->


## Sorting em algoritmos

Já dá pra imaginar diversos usos pra esses algoritmos de ordenação, né? Mas com certeza tem muitos mais usos do que você imagina. Os algoritmos que nós vamos focar em atualmente são de uma linha chamada _greedy_ (gulosos). Neles, a partir de algum tipo de ordenação ou organização das nossas informações, tentamos sempre alcançar a melhor solução global através da tomada de decisões menores consideradas "ótimas" - ou seja, pra alcançar uma solução ótima, tomamos sempre a decisão ótima naquele momento. Talvez isso ainda soe confuso, mas vamos aprender mais sobre isso com exemplos e situações problema.

É importante saber que, no entanto, quando estamos resolvendo questões como essas e queremos um algoritmo de ordenação, não precisamos fazê-lo do zero! Já pensou ter que _codar_ um `Merge Sort` sempre que você quiser ordenar um conjunto, um array ou um vetor? Mesmo com a ideia concreta na sua cabeça, você ainda pode traduzir isso errado pro código: Erros de indexação, segmentação, ou até chamadas erradas de diferentes funções podem causar uma grande dor de cabeça na hora de debugar um código que deveria ser algo prático (já que é tão importante!)

Por isso, usamos a funções já implementadas e otimizadas da STL - Standard Template Library (Biblioteca Modelo Padrão)! 

(Mas mesmo que usemos funções já prontas para ordenar, lembre-se de tentar entender como esses algoritmos que passamos funcionam!! Esse entendimento é algo essencial não só para você saber _codar_ um sort do zero caso precise, mas também para o seu desenvolvimento na área da computação e entendimento mais profundo de futuros algoritmos e estruturas de dados que se embasam em princípios parecidos :) )

Essa função de _sort_ é implementada com o Intro Sort - que usa alguns _sorts_ que não vimos (como o quicksort e o heapsort), mas também usa o insertion sort em casos específicos, devido ao seu melhor caso linear!

A sintaxe que usaremos para adicioná-los no código é a seguinte:

```cpp

sort(array, array + n) // para arrays

sort(vector.begin(), vector.end()) // para vectors


```

note que também é possível ordenar a partir de uma função personalizada! uma das maneiras de fazer isso é criando essa função como uma que retorna um booleano

```cpp

bool comparar(int a, int b) {
	return a > b;
}
```

e depois passando ela como o terceiro argumento da função de _sort_!

```cpp

sort(arr, arr+n, comparar);

sort(vector.begin(), vector.end(), comparar);

```

Agora sim estamos preparados para aprender sobre algoritmos!

## Two Pointers

Essa ideia que a gente tentou alcançar de maneira intuitiva é chamada de "two pointers"! Um ponteiro é um conceito que vamos ver mais pra frente no curso, mas podemos imaginá-lo, nesse caso, como uma seta ou um índice para o número que estamos considerando (além de que, na maioria das vezes, nem usamos ponteiros na implementação desse algoritmo!)

A ideia é a seguinte:

Após ordenar os números, temos sempre certeza de que todo número à esquerda será menor, enquanto que todo número à direita será maior. Assim, inicializamos as nossas setas nos dois extemos da nossa estrutura de dados. Caso a soma dos nossos números seja maior do que queremos, movemos o segundo ponteiro para a esquerda. Caso a soma dos números seja pequena demais, movemos o primeiro ponteiro para a direita. Assim, tentamos sempre nos aproximar da soma esperada! Se as duas setas, a qualquer momento, apontarem para um mesmo número, nós não conseguiremos atingir a nossa soma.

Convencidos da nossa ideia? Tá tudo bem, eu também não estaria. Porque sempre movemos a primeira seta para a direita quando o número está pequeno ao invés de poder mover a segunda também? Vamos tentar provar isso de uma maneira mais formal para tentar te convencer de que esse é o caso!



Digamos que estamos com as nossas setas apontando para os números a e b.

```cpp
     |     |
     v     v
[... a ... b ...]
```

Agora vamos provar que, caso a + b < m e o nosso algoritmo tenha sido seguido fielmente, não devemos mover a segunda seta para a direita, mas sim a primeira.

Para isso, vamos analisar cada um dos casos para concluir com certeza de que o nosso algoritmo funciona! (essa etapa é importante para conseguirmos nos convencer da corretude do que fizemos)

Caso b seja o maior número da nossa lista, ele será o último. logo, é impossível mover a nossa seta para a direita.

Caso não, existem números à direita de b. vamos denotar o número imediatamente à direita de b de b'. Então nosso vetor tem uma cara parecida com essa:

```cpp
     |     |
     v     v
[... a ... b b' ..]
```

dá pra perceber que, para chegar nesse estado (já que seguimos as nossas regras até aqui), temos 2 opções:


viemos de uma configuração como essa (1)

```cpp
     |        |
     v        v
[... a ... b  b' ..]
```


ou existe um a' < a e viemos de uma configuração como essa (2)

```cpp
     |        |
     v        v
[... a' a ... b b'...]
```


caso viemos da configuração 1, já comparamos a + b' e deu errado! (a + b' > m) logo, não faz sentido comparar os mesmos dois números de novo.

caso viemos da configuração 2:

como há um b' > b, temos que viemos do b' em algum momento, já que a nossa segunda seta aponta pra b.

para algum a" <= a', ocorreu que a" + b' > m, e movemos a nossa segunda seta para a direita

assim, como a' > a", a' + b' > a" + b' > m

logo, não faz sentido avançar a seta para a direita de novo, visto que a soma será maior que a desejada de qualquer forma

```cpp
            |        |
            v        v
[... a" ... a' a ... b  b' ...]
```



a prova para a primeira seta não voltar para a esquerda é análoga! (a + b > m)

```cpp
     |     |
     v     v
[... a ... b ...]
```

caso o a seja o primeiro número (não há nenhum número menor que ele), não é possível mover a nossa seta para a esquerda.

caso haja um número a' à esquerda de a, temos que ele será menor que a, pela condição da ordenação. Logo, o vetor parecerá com isso.

```cpp
         |     |
         v     v
[... a'  a ... b ...]
```

da mesma forma, podemos ter vindo de duas configurações diferentes para a atual, já que só movemos uma seta por vez:


ou de uma configuração como essa (1)

```cpp
     |         |
     v         v
[... a'  a ... b...]
```


ou existe b' > b e viemos de uma configuração como essa (2)

```cpp
         |        |
         v        v
[... a'  a ... b  b' ...]
```

no caso (1), nós já comparamos a' com b, (e temos que a' + b < m) então não adianta testar a mesma coisa mais uma vez.

no caso (2), já que a nossa primeira seta aponta para a, em algum momento viemos do a' (já que a' existe).

A partir disso, temos que, para algum b" > b', chegamos à conclusão que a' + b" < m, e movemos a primeira seta para a direita.

Logo, como b < b", é lógico que a' + b < a' + b" < m.

Dessa forma, a comparação entre esses dois números não é necessária e as condições que estabelecemos sempre vão nos guiar para a resposta certa!

```cpp
         |        |
         v        v
[... a'  a ... b  b' ... b" ...]
```

Espero que agora você esteja convencido!

Agora vamos analisar o código pra entender saber o que estamos fazendo

```cpp
int p1 = 0, p2 = n-1;

while (p1 != p2) {

	if (arr[p1] + arr[p2] == m) {
		cout << "as notas são de " << arr[i] << " e " << arr[j] << " reais\n";
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

O _two pointers_ é um algoritmo muito comum na área de programação competitiva, mas essa modelagem não se prende a só isso sempre! esse nome é um nome que pode se referir a várias implementações diferentes, desde que incluam a ideia de guardar índices e avançá-los estrtegicamente (de forma _gulosa_) para atingir uma boa solução.

vamos ver mais um exemplo de uso de two pointers!

### Para treinarmos juntos

Aqui, você tem t minutos e quer ir à biblioteca para ler o máximo possível de livros! Existem livros mais grossos e mais finos, então cada livro leva um tempo a_i para ser lido. Mas eles já estão organizados em uma ordem que faz sentido para o leitor, então você não quer embaralhar essa ordem e se confundir mair. Então, a única coisa que você pode fazer é escolher em qual livro você começa. Qual a maior quantidade de livros que você pode ler em t minutos?

Primeiro, vamos tentar entender de fato a questão: Ela quer que você escolha um subarray contíguo da sua lista de livros para ler todos eles - mas a soma não pode passar de t! E já que não podemos mudar a ordem dos livros, aquela ideia de ordenar os livros por tempo gasto e pegar sempre os menores vai pro beleléu :(

De novo, poderíamos testar todas os intervalos possíveis e "brutar" a questão, mas queremos uma saída eficiente! Então como já demos spoiler e você sabe que estamos falando de two pointers, alguma ideia lhe vem à mente?

Primeiramente, podemos perceber que estamos tentando montar o intervalo mais extenso possível dentro desse nosso vetor de valores com soma igual a ou menor o nosso t. Então, podemos tentar passar uma única vez iterando pela nossa lista de valores, verificando o maior intervalo possível que pode ser construído começando em cada valor!


Mas agora tentando simplificar um pouco o nosso problema: dado um intervalo que estamos avaliando, você concorda que, caso a soma seja menor que t, podemos verificar se conseguimos terminá-lo mais à frente? Se todos os nossos livros juntos somarem 20, que é menor que o nosso t = 30, podemos verificar se ainda é possível ler mais um livro!


E se você também pensar mais um pouquinho, fica claro que o contrário também ocorre: se a soma for grande demais, não dá para começar o nosso intervalo no lugar onde ele está atualmente!! Ainda para um t = 30, se levamos 50 minutos para ler nossa lista atual de livros, não podemos ler todos eles - teremos, então, que começar nosso intervalo mais à frente, cortando alguns livros.


Então nessa nossa modelagem do problema, podemos inicializar os nossos dois ponteiros no início, ao invés de separados como no problema passado. Assim, quando a soma do nosso intervalo for menor que o t estabelecido, podemos tentar avançar o final do nosso intervalo. No entanto, quando a soma for grande demais, devemos avançar o ponteiro do início, para tentar diminuir a soma dos nossos tempos.



```cpp
t = 7

  | fim
  v
  | inicio
  v
[ 5  3  1  2  1  3 ]  soma = 5, qtd = 1

     | fim
     v
  | inicio
  v
[ 5  3  1  2  1  3 ]  soma = 8

     | fim
     v
     | inicio
     v
[ 5  3  1  2  1  3 ]  soma = 3, qtd = 1

        | fim
        v
     | inicio
     v
Mas, como já mencionamos, ideias gulosas se apresentam de formas diferentes. Agora vamos 
[ 5  3  1  2  1  3 ]  soma = 4, qtd = 2

           | fim
           v
     | inicio
     v
[ 5  3  1  2  1  3 ]  soma = 6, qtd = 3

              | fim
              v
     | inicio
     v
[ 5  3  1  2  1  3 ]  soma = 7, qtd = 4

                 | fim
                 v
     | inicio
     v
[ 5  3  1  2  1  3 ]  soma = 10


                 | fim
                 v
        | inicio
        v
[ 5  3  1  2  1  3 ]  soma = 7, qtd = 4
```



Note que devemos manter uma variável de soma, na qual vamos subtrair ou adicionar valores dependendo do avanço dos nossos ponteiros, como uma soma acumulada! Caso não fizéssemos isso e precisássemos passar por todo o intervalo sempre, voltaríamos a O(n²).


No entanto, note também que podemos fazer perguntas similares às que fizemos no exemplo passado: porque avançamos a seta da frente quando a soma está pequena e o de trás quando está grande demais?


Porque a nossa estratégia é tentar avaliar o maior subarray que conseguimos somar para cada espaço! Você percebe que, se atingirmos um valor pequeno demais e queiramos voltar para trás, estaremos avaliando o mesmo intervalo de novo? pegue o exemplo de cima!
```cpp
     | fim
     v
  | inicio
  v
[ 5  3  1  2  1  3 ]  soma = 8
```

quando estamos nessa posição, já avaliamos que a soma é grande demais, logo, avançamos a seta do início

```cpp
     | fim
     v
     | inicio
     v
[ 5  3  1  2  1  3 ]  soma = 3, qtd = 1
```

quando a soma passa a ser pequena demais, caso voltássemos a primeira seta, estaríamos voltando à situação anterior e ficaríamos presos em um loop


Agora, em relação à seta final nunca voltar para trás... Eu menti para vocês 😁

Não sobre ela nunca voltar pra trás, - isso é verdade mesmo - mas sobre estarmos sempre verificando o maior subintervalo possível para cada "casinha". Mas vou te mostrar agora porque que não adianta mover a seta final para trás quando a soma ficar grande demais. Imagine o seguinte:

```cpp
t = 9
              | fim
              v
     | inicio
     v
[ 5  3  1  2  1  50 ]  soma = 7, qtd = 4
```

Nesse exemplo, podemos tentar avançar o final, porque ainda temos espaço para tentar mais um livro!

```cpp
t = 9
                 | fim
                 v
     | inicio
     v
[ 5  3  1  2  1  50 ]  soma = 7, qtd = 4
 [0][1][2][3][4][5]
```

Mas assim que avançamos, ficamos com uma soma imensa: 57. E, caso avancemos o início, não vamos conseguir formar nenhum intervalo começando nos índices 2, 3 ou 4 devido ao nosso 50 na última casa!
Então, nesse caso, poderíamos tentar voltar a segunda seta para trás, para ir verificando a maior soma que ainda é possível em todos os índices.


```cpp
t = 9
              | fim
              v
     | inicio
     v
[ 5  3  1  2  1  50 ]  soma = 7, qtd = 4
 [0][1][2][3][4][5]
Mas, como já mencionamos, ideias gulosas se apresentam de formas diferentes. Agora vamos 

              | fim
              v
        | inicio
        v
[ 5  3  1  2  1  50 ]  soma = 4, qtd = 3
 [0][1][2][3][4][5]
```
E assim por diante.

Mas você percebe que, independente de quantos intervalos antes do número 50 eu tentar avaliar, a quantidade de livros que você vai ler será sempre menor do que 4?

Antes de eu avançar a seta para o 50, esperançosa pela ideia de ler mais um livro nos meus 2 minutos restantes, eu tinha um intervalo de que ía do índice 1 até o índice 4. Então qualquer subintervalo que eu tentar montar que ainda não inclua o 50 vai ser obrigatoriamente menor do que ele, porque termina no mesmo lugar e começa mais à frente! Por isso, nós não precisamos avaliar o maior subintervalo para cada índice sempre: Só os que podem ser maiores do que o nosso maior atual 😁

Então o nosso código poderia ficar mais ou menos assim:

```cpp
int soma = 0, qtd = 0, fim = 0, inicio = 0;

while (final != n) {


	if (soma <= t) {
		qtd = max(qtd, fim - inicio+1); // conto o intervalo válido
		fim++;
		soma+= livros[fim]; // incremento a soma e o índice final
	}
	
	else if (inicio == fim) { // precisamos colocar esse caso para a nossa seta do início
				  // nunca passar a nossa seta do fim!!
		fim++;
		soma+= livros[fim];
	}
	
	else if (soma > t) {
		soma -=livros[inicio]; // subtraio 
		inicio++; // incremento o índice inicial
	}


}


```


O [Vjudge do minicurso](https://vjudge.net/group/meda?r=ifo2QZRofQuVN2TjpPDM) já tem todas essas questões! Sigam para lá se quiserem fazê-las :)


<!-- questoes: sum of two values (codeforces), books (codeforces), 


-->

---

### Fontes
* [Merge Sort](https://www.geeksforgeeks.org/dsa/merge-sort/)
* [Questão do Triângulo](https://www.geeksforgeeks.org/dsa/maximum-perimeter-triangle-from-array/)
* [Conteúdo Complementar](https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews)

## Análise de Melhor e Pior Caso

## Projetos
