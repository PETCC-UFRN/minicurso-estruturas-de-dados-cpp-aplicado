---
layout: layoutGit
title: "Minicurso de Estruturas de Dados: C++ Aplicado"
---


# TAD x ED

Na aula de hoje, vamos nos aprofundar em um dos conflitos conceituais mais importantes da Computação: Tipos Abstratos de Dados (TAD) x Estruturas de Dados (ED). Compreender corretamente esses 
conceitos é fundamental para expandirmos nossa noção sobre algoritmos e entendermos como o mundo das estruturas de dados funciona.

## O que são Tipos Abstratos de Dados?

TAD, ou Tipo Abstrato de Dado, é formalmente definido como um conjunto de objetos aliado à um conjunto de operações. Na prática, é uma _interface conceitual_ que define o comportamento para um conjunto de dados. A especificação de um TAD determina, principalmente, duas informações principais: como o conjunto de dados se comporta e o conjunto de regras (ou operações) que podem ser realizadas sobre ele. Algumas das operações mais comuns de serem citadas são:

- Criação da estrutura

- Inclusão de um elemento

- Exclusão de um elemento

- Acesso a um elemento

- Verificar vazio

Dessa maneira, o TAD priva o acesso aos dados e restringe a manipulação deles apenas através das operações. Perceba que o TAD, contudo, não é responsável por especificar como essas operações vão ser implementadas ou como os dados vão ser armazenados na memória. O foco aqui está na abstração, ou seja, em definir um comportamento e não uma especificação prática para o conjunto de dados.

### Exemplo prático: TAD Ponto

Para entender melhor o conceito de TAD, vamos definir de um novo TAD arbitrário chamado `Ponto`, que define uma estrutura abstrata responsável por representar pontos no plano cartesiano, e armazena duas coordenadas X e Y. Para ele, vamos, tal qual solicitado na definição do conceito, definir algumas operações básicas:

- `create(x, y)` - Cria um novo ponto com as coordenadas x e y;

- `delete(p)` - Deleta o ponto;

- `set_coord(p, x, y)` - Seta as coordenadas x e y para um ponto p;

- `distance(p1, p2)` - Calcula a distância entre dois pontos;

Inicialmente, vamos utilizar para a implementação desse TAD uma estrutura já bem conhecida por vocês:

```cpp
//.cpp

struct Ponto {
    float x;
    float y;
};

Ponto* create(float x, float y) {
    Ponto* p = new Ponto;
    p->x = x;
    p->y = y;
    return p;
}

void delete_ponto(Ponto* p) {
    delete p;
}

[...]
```

Porém, a definição do `TAD Ponto` não especifica uma implementação fixa, ou seja, nós podemos explorar outras alternativas na representação prática dele:

```cpp

//Utilizando, por exemplo, o array clássico, onde ponto[0] = x e ponto[1] = y.
int ponto[2];

--------------------------

//Ou utilizando dois vetores separados
std::vector<float> coord_x;
std::vector<float> coord_y;

--------------------------

```

Ou, da maneira mais convencional, através do uso de classes:

```cpp

class Ponto { 
    private:
    int x;
    int y;

    public:
    Ponto(int x, int y);

    void set_coord(int nx, int ny);

    float distance(const Ponto& outro) const;

    int get_x() const;
    int get_y() const;
};

```

Perceba, porém, que a liberdade que a abstração nos dá vem com um preço: garantir que o funcionamento da estrutura e o comportamento das operações se mantenha intacto. Contudo, mantendo essas condições, podemos explorar a nossa criatividade para a implementação dos mais diversos TAD's.

## O que são Estruturas de Dados?

Dentro desse contexto, as Estruturas de Dados são estruturas concretas que organizam, armazenam e manipulam dados na _memória_ do computador, permitindo a realização de operações sobre dados de maneira adequada e correta. A Estrutura de Dado, diferente do TAD, se preocupa principalmente com a maneira como os dados são representados e organizados _internamente_, estabelecendo uma relação lógica e visando a eficiência dos dados, se atentando para aspectos como:

1. Uso eficiente de memória;
2. Tempo de execução;

As estruturas de dados são as responsáveis por *materializar* as implementações dos Tipos Abstratos de Dados, ou seja, transformam uma abstração conceitual em uma implementação prática. Elas podem ser divididas em algumas categorias:

- **Lineares**: os elementos ficam dispostos em sequência, um após o outro — cada um com um antecessor e um sucessor bem definidos (array, vetor, lista encadeada, pilha e fila);
- **Associativas**: guardam pares _chave → valor_ (ou apenas chaves) e priorizam a busca rápida por conteúdo, sem uma ordem posicional (tabelas hash / dicionários, como o `std::unordered_map`, e conjuntos, como o `std::set`);
- **Hierárquicas**: organizam os dados em relações de _pai e filho_, formando uma hierarquia (as **árvores**, como a árvore binária de busca ou a _heap_);
- **Entre outras**, há estruturas ainda mais gerais, como os **grafos**, que modelam conexões arbitrárias entre os elementos.

Hoje vamos focar nas **lineares**; as associativas e as hierárquicas são temas dos próximos dias!


## Estruturas de Dados Lineares!

Ontem, para entendermos sobre ordenação, vimos um pouco sobre heap, stack, alocação estática e alocação dinâmica.
Hoje nos aprofundaremos um pouco mais nessa parte e veremos estruturas de dados e suas implementações!

### Array

Vocês provavelmente já estão acostumados a usar essa estrutura de dados, né?
É uma das primeiras estruturas que aprendemos a usar, já que ela é muito simples: ela consegue guardar _N_ instâncias de um tipo primitivo (inteiro, booleano, double, etc.)

Mas como isso acontece?

```cpp

const int n = 10;

int arr[n]; // declaração com a sintaxe do C

array<int, n> arr2;

```

Quando você declara um array dessa forma, o computador "entende" que você quer alocar 10 espaços de inteiros na sua memória - nesse caso, na stack (lembre-se que esse N precisa ser uma constante conhecida em tempo de compilação — uma vez definido, o tamanho é fixo!).
Como vimos ontem, o acesso à stack é extremamente rápido, mas tem tamanho limitado. Então o array é uma estrutura muito otimizada e rápida para usarmos, mas não podemos abusar da nossa querida stack criando um array de tamanho 10⁹, como talvez possamos nos sentir inclinados a fazer.


Agora vamos analisar as complexidades assintóticas de cada operação sobre um array.

#### Acesso

Como a estrutura é guardada toda junta na memória (e considerando que você tem acesso ao endereço inicial de memória), todo o acesso é O(1).

```cpp

cout << arr[5]

```

Isso acontece porque, tendo o ponto inicial da nossa estrutura, podemos só adicionar a quantidade de "casinhas" (equivalente à quantidade de bits que o tipo guardado no array ocupa) que vamos pular e chegar ao endereço que queremos acessar. Por isso, qualquer operação de acesso ou atualização é constante, o que se torna muito bom para nós!

Além do acesso por índice, a versão da *STL* (`std::array`) oferece funções prontas como `front()`, `back()`, `size()` e `swap()` — coisas que a versão do C, por estar fora da STL, não tem:

```cpp

array<int, 5> arr = {1, 2, 3, 4, 5};

cout << arr.front() << "\n";

cout << arr.back() << "\n";

cout << arr.size() << "\n";

```

Saída:

```
1
5
5
```

#### Inserção e remoção

Note que não é possível fazer uma remoção ou uma anexação ao pé da letra do nosso array, porque o tamanho é fixo! Então mesmo se eu quiser muito adicionar mais um número ao meu array de tamanho 10, eu não vou conseguir :( . Isso é uma das maiores diferenças dessa estrutura para várias outras que usamos e vemos por aí. Por isso, ao criar um array, você precisa ter *certeza* do número máximo de coisas que você vai guardar.

De forma geral, é uma estrutura rápida e que te faz ter muito controle e noção do que você está fazendo o tempo todo. Eu pessoalmente acredito na soberania do array em todas as situações que o vector não é estritamente necessário (como em assuntos como grafos e, às vezes, na chamada de funções - mas não vamos ver nada disso aqui!), mas isso é para *você* decidir ao longo dessas aulas!

|                 | Acesso | Inserção no fim | Remoção no fim | Inserção no meio | Remoção no meio  |
|-----------------|--------|-----------------|----------------|------------------|------------------|
| Array           | O(1)   | O(1)¹           | O(1)           | O(n)             | O(n)             |

_¹ Desde que ainda haja espaço livre — o array tem tamanho fixo e não realoca. Note que "inserir no meio" exige deslocar os elementos seguintes, por isso O(n)._

Então, vamos seguir adiante para o vector!






### Vector

Agora já entramos no mundo da STL! o vector, ou vetor, é outra das estruturas mais populares e comumente utilzadas por toda a base usuária do C++ - mas ele não é nada mais que um array "embalado" (ou "encapsulado", para os mais chiques).

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/ahehhhhhhhhhhhhh.gif" alt="vector-meu-malvado-favorito" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Vector<br /></em></p>
</div>

```cpp

vector<int> vetor;

vector<int> vetor2(10);

```

Ele funciona da mesma forma que um array funcionaria, mas com alguns grandes diferenciais: O espaço que é alocado quando declaramos a estrutura é separado na Heap (então temos mais espaço!), e o seu tamanho é variável.

Vamos pensar no vector como um struct do C: É uma caixa que guarda alguns atributos e indica onde estão guardados os nossos valores. Então poderíamos imaginar essa implementação como algo assim:

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/vector.png" alt="vector-meu-malvado-favorito" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Vector<br /></em></p>
</div>


Esses atributos podem parecer meio desnecessários, mas são *extremamente* úteis para quase todas as funcionalidades do vector - eles que dão as informações necessárias para a realocação de espaço de memória.

Primeiramente, temos o valor capacity. Ele indica o tamanho do array alocado dinamicamente - a quantidade de objetos que podemos guardar ao total nessa estrutura. A seguir, temos o atributo "end"; ele, por outro lado, vai indicar o "final lógico" da nossa lista. Ou seja, podemos ter quantidades diferentes nesses valores, desde que a capacidade seja maior ou igual ao número de objetos comportados atualmente (capacity >= end). O último valor é um ponteiro, que, como vimos anteriormente, aponta para o primeiro endereço de memória que guarda as nossas _data_ . Esse controle que temos a partir dessas informações é que vai nos permitir alocar tamanhos menores ou maiores de memória dependendo da situação em que nos encotramos.

Uma possível implementação desses atributos de um vetor é essa aqui (feita por mim em 2024 e adaptada para vocês entenderem melhor).

```cpp
class vector {

	private:

  		int end;      		// indica o tamanho "real" do vetor, o final lógico
  		int capacity; 		// indica a capacidade do vetor
  		int * storage;        	// ponteiro para onde os valores estão
  		
 	 // [...]
  
};


```
<details>
<summary> <b>Curiosidade</b> </summary>
Note que, em classes no C++, nós podemos deixar coisas "privadas" - o que significa que estamos escondendo ela do usuário! Temos funções que retornam o tamanho e a capacidade do vector (.size(), .capacity()), mas uma pessoa qualquer não consegue mudar o valor de end e confundir a nossa lógica, ou deletar o storage e apagar todos os nossos dados (vocês aprenderão um pouco mais sobre POO e o princípio do encapsulamento quando pagarem P1!).
</details>

OK! Agora que modelamos tudo que será necessário para o nosso vetor, vamos ver um pouquinho sobre as principais funções e suas especificidades e complexidades!




#### Acesso

Como a nossa estrutura é implementada a partir de arrays (no qual um bloco contíguo de memória nos é reservado), o acesso ao número em cada índice também é imediato! Assim, podemos recuperar o valor de algum objeto em tempo constante, ou O(1). A função implementada pode ficar algo tão simples quanto isso:

```cpp

int & at(int idx){
    if(idx < 0 or idx >= size()){			 // retorna erro caso o índice for negativo (impossível) ou passar do tamanho lógico
      throw std::out_of_range("Index out of range!");
    }
    return storage[idx];				// retorna o valor
  }
  
int & operator[](int idx) {
   return storage[idx];				// retorna o valor
  }

```



#### Redimensionamento

Assim que declaramos um vector da STL, um "construtor" é chamado. Ele vai "preparar" o chão pra o que vem por aí - setar o tamanho lógico pra zero e pode alocar ou não algum espaço inicial (isso depende da implementação! Na STL, não é alocado nenhum espaço de cara). Ele pode parecer algo assim:

```cpp

  vector(){
    end = 0;
    capacity = 2;
    storage = new int[2];
  }

```

Mas se inicializamos o nosso array dinâmico como algo tão pequeno, como vamos usar ele para guardar uma quantidade grande de objetos? É aqui que entra a mágica do _redimensionamento_ !

A função `reserve()`, como o nome sugere, "reserva" uma quantidade de espaço para o nosso vetor - aumenta a sua capacidade, o que nos vai ser bem útil daqui a pouco. De maneira geral, ela vai ser usada quando queremos inserir itens e a nossa estrutura já está cheia - isso é, o nosso end e o nosso capacity já estão iguais - ou quando sabemos quantos objetos vamos inserir ao total.

O argumento passado pela chamada da função é exatamente o tamanho do novo bloco de memória que vamos reservar pra o nosso novo array. Então a primeira coisa que devemos fazer é verificar se essa capacidade nova é maior que a capacidade atual - caso não, não faz sentido usar essa função, já que ela é feita para aumentar a capacidade do nosso vetor! Depois disso, vamos alocar o novo e maior array, copiar todos os valores antigos para o novo e desalocar o array antigo.

Então o código dessa função poderia ser algo assim:


```cpp

void reserve(int new_cap){

    if (new_cap <= capacity) { // se a capacidade nova é menor, não fazemos nada
      return;
    }

    else {
      int* temp = new int[new_cap];	// aloca espaço novo
      
      std::copy(storage, storage + end, temp);		// copia os valores antigos para o novo espaço
      
      delete[] storage;				// liberar a memoria antiga
      
      storage = temp;				// faz storage apontar pra a nova memoria ampliada
      
      capacity = new_cap;			// aumentar a capacidade
    }
  }

```

conseguem imaginar a complexidade dessa operação?

<details>
<summary> <b>Spoiler</b> </summary>
A complexidade é O(n)! (nesse caso, O(new_cap)). Ela está escondida na função de copy, que copia todos os n valores, um a um, para o novo array.
</details>

Mas essa função não é tããão utilizada no dia a dia por nós - só por trás dos panos.


#### Inserção

A inserção em um vetor pode ser feita com funções como `push_back()` ou `emplace_back()`, e vai receber o objeto que você quer adicionar na sua lista.

```cpp
vector<int> vetor;
vetor.push_back(10)
```

Esse valor, como indica o nome da função, vai ser sempre inserido no fim da nossa lista - ou seja, estamos aumentando o final lógico em 1. Em uma análise trivial, poderíamos apenas valorar storage[end] com o valor que nos é passado, aumentar o valor lógico e seguir em frente.

```cpp

void push_back(valor) {
	storage[end] = valor;
	end++;
}

```

...Mas isso pode resultar em um erro se a capacidade do nosso vetor já for igual à quantidade de valores guardados: Estaremos acessando um espaço fora do permitido - o que vai gerar uma falha de segmentação. Para evitar isso, podemos usar a função `resize()` que vimos antes.

```cpp
 
  void push_back(int value) {

    if (end >= capacity) {
      reserve(2 * capacity);
    }

    storage[end++] = value;
  }

```

Assim, já que a função de `resize()` é O(n), `push_back` no pior caso também é O(n).

Como você pode observar na implementação acima, sempre que "estouramos" o tamanho, reservamos duas vezes a capacidade atual. Assim, se fizermos push_back muitas vezes, sempre que chegarmos a uma potência de 2, teremos que copiar todos os valores um a um.

Logo, a complexidade de algo como o código abaixo, ainda que pareça , não é necessariamente linear!

```cpp
cin >> n;
int a;

for (int i = 0; i < n; i++){

	cin >> a;
	vetor.push_back(a);
}

```
No entanto, como já sabemos a quantidade de números que vamos inserir nesse caso, podemos reservar todo esse espaço ao invés de deixar o push back ir aumentando a cada potência de 2:

```cpp

cin >> n

vector<int> vetor;
vetor.reserve(n);

for (int i = 0; i < n; i++){
	cin >> a;
	vetor.push_back(a);
}

```

Nesse código, a complexidade da inserção será linear!

É interessante também mencionar que existem várias outras maneiras de declarar vectors (que "chamam" outros construtores) que podem reservar a quantidade certa de memória durante a sua criação!

```cpp
vector<int> vetor(n); // cria um vetor de n espaços
vector<int> vetor2(n, 0) // cria um vetor de n espaços e preenche todos eles com 0
```


#### Remoção

Muitas vezes, é de nosso interesse deletar algum número em um vetor. Caso o número seja o último, temos até uma função feita pra esse caso especificamente (o `pop_back()`)!

No caso em que isso não ocorre, - o número que queremos deletar é no meio do vetor - nós não podemos simplesmente deixar um buraco no vetor, ou marcar o espaço como "não utilizado". Toda a nossa lógica de acesso a objetos depende da continuidade do nosso bloco de memória. Então a única solução que temos é, infelizmente, mover todos os números após o objeto removido para a esquerda e diminuir o nosso tamanho em um.

Então a nossa função de remoção poderia parecer algo assim:

```cpp

void erase(int idx){
    if(idx < 0 or idx >= size()){
      throw std::out_of_range("Erase - Index out of range!"); // não é possível remover um número que tenha o índice negativo ou maior que o final lógico!
    }

    for(int i = idx; i < size() - 1; ++i){ // movendo todos os objetos para a "esquerda", um a um
      storage[i] = storage[i+1];
    }
    
    end--; // diminuindo o final lógico
  }



```

Como vocês provavelmente imaginam, a complexidade dessa operação também é O(n), devido à necessidade de mover todos os objetos de índices seguintes ao indicado.

Note também que sempre que vemos essas implementações, parece que estamos _"babyproofing"_ uma casa: fazendo condicionais para pegar cada caso de borda, cada exceção. Mas é exatamente assim que as estruturas na STL são pensadas: elas precisam ser robustas de forma que o usuário desinformado (nós!) não consiga quebrá-las. E é por isso que é algo tão bom quando estamos programando! É algo previsível, meticulosamente testado, que garatidamente vai retornar erros ao invés de nos deixar acabar com a estrutura que estamos tentando acessar.


|                 | Acesso | Inserção no fim | Remoção no fim | Inserção no meio | Remoção no meio  |
|-----------------|--------|-----------------|----------------|------------------|------------------|
| Vetor           | O(1)   |O(n) se realocar |O(1)            | O(n)             | O(n)             |


### Lista Encadeada

Agora vamos ver uma maneira um pouco mais diferente de guardar informações na nossa memória. Todas as estruturas que vimos até aqui funcionam pelo fato de toda a memória estar junta - Por isso que temos sempre acesso imediato ao que queremos, é só somar a quantidade de endereços de memória. E nesse sentido, essas estruturas são muito boas, mas elas sempre precisam de um bloco de memória ininterrupto para que coloquemos todas as nossas informações. E é aí que a lista encadeada entra como algo diferente! ela salva vários pequenos blocos de memória que apontam sempre para o próximo bloco - como se fosse aquelas estruturas de arvorismo! (reconheço que essa metáfora não é das melhores, mas não consegui imaginar nada mais preciso 😭😭😭😭)

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/arvorismo.jpg" alt="estruturas-de-arvorismo" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Estruturas de Arvorismo<br /></em></p>
  </div>

Então esse comportamento nos deixa alocar memórias fisicamente distantes, aumentando muito a nossa gama de possibilidades de estruturas de dados (como em árvores! mas isso é conteúdo do dia de amanhã)

Mas como isso funciona?

Ao invés de um só bloco de memória, teremos vários pacotinhos independentes que apontam um para o outro - usando, como vocês podem já ter imaginado, ponteiros! Cada pacotinho desse, chamado de Nó ou Node, guarda, então, um espaço para informação (pode ser um inteiro, um booleano, um caractere), um ponteiro apontando para o próximo nó da lista  e um ponteiro apontando para o nó anterior. Seu código se assemelha a isso:

```cpp
struct Node {

    int data;
    Node* next;
    Node* prev;

};
```
Mas isso nos gera outra pergunta: Se sempre temos um ponteiro apontando para o próximo número, como encontramos o fim?

Simples! quando declaramos essa nossa lista encadeada, apontamos o ponteiro do último número para _nullptr_ . Isso, de maneira bem superficial, faz o ponteiro ser nulo ou não apontar para nada (por razões históricas e práticas, ele geralmente aponta para o endereço 0x0, mas ele nunca será modificável nem nada). Logo, sempre que tiver algum ponteiro em direção a esse endereço, sabemos que não há informações guardadas nesse lugar e que chegamos ao fim da nossa lista encadeada.

No entanto, em uma lista duplamente encadeada, temos algumas informações extras guardadas

Nesse caso, como estamos implementando uma lista duplamente encadeada, teremos um nó de início e um nó de fim (então não precisaremos necessariamente estar comparando com nullptr, mas veremos como isso funciona daqui a pouco!) chamados `head` e `tail` . Eles vão permitir o acesso rápido às extremidades da nossa lista, facilitando a implementação de vários valores


#### Construindo uma lista duplamente encadeada

Primeiramente, precisamos do nosso nó

```cpp
Node() { // construtor!
    this->next = nullptr;
    this->prev = nullptr;
}

Node(int new_data) { // construtor que inicializa o valor!
    this->data = new_data;   // define o valor do nó
    this->next = nullptr;
    this->prev = nullptr;
}
```

Observação: this->data é equivalente a *(this).data

E também precisamos declarar as variáveis que vamos usar para identificar o head e o tail;

```cpp
class linkedlist {

    int length;
    Node* head;
    Node* tail;

};
```

Além disso, precisamos fazer uma função que vai construir a nossa lista encadeada. A primeira coisa que precisamos fazer é criar os nossos dois nós base - o head e o tail! É importante, então, fazer com que eles apontem um para o outro e para nullptr!

```cpp
linkedlist() { // construtor -->

    head = new Node(); // aloco os nós sentinela dinamicamente
    tail = new Node();

    head->prev = nullptr;  // o head não tem anterior
    head->next = tail;     // o next do head aponta para o tail

    tail->prev = head;     // o prev do tail aponta para o head
    tail->next = nullptr;  // o tail não tem próximo

    length = 0;
}
```


Não se preocupem tanto com entender as minúcias dos códigos dessa parte aqui. O importante é vocês entenderem os passos que estão sendo feitos e porque o algoritmo funciona!

Então agora que já conseguimos construir a nossa lista, vamos ver como funcionam as suas operações!

#### Acesso

Diferentemente das 2 outras estruturas, não temos acesso a onde está o nosso valor imediatamente - só ao primeiro valor! Por isso, para conseguir acessar o enésimo valor da nossa lista, temos que passar por todos os anteriores - o que faz essa operação ser O(n).

```cpp
int find_at_index(int index) const {

    if (index < 0 || index >= length) {
        throw std::out_of_range("Index out of range!"); // índice fora do intervalo da lista!
    }

    Node* temp = head->next;   // primeiro nó real (head é sentinela)
    int atual = 0;

    while (atual != index) {
        temp = temp->next;
        atual++;               // agora avançamos o contador de fato!
    }

    return temp->data;
}
```

#### Inserção

Por outro lado, a inserção em uma lista encadeada é muito eficiente (contanto que seja nas pontas!). Em um array, nunca conseguíamos aumentar o tamanho da nossa lista. Em um vetor, aumentar o seu tamanho era sempre O(n). Aqui, podemos simplesmente inicializar um novo nó e ligá-lo ao fim ou ao início (lembrando de atualizar os valores de head e tail!)

Inserção no início:

```cpp
void push_front(int novo_valor) {

    Node* novo = new Node(novo_valor);

    // primeiro conectamos o novo nó à lista

    novo->prev = head;
    novo->next = head->next;

    // depois conectamos a lista ao nó

    head->next->prev = novo; // antigo primeiro (agora segundo) nó aponta para o novo
    head->next = novo;       // o novo passa a ser o primeiro da lista

    length++; // aumentando o comprimento

}
```

Note que é muito importante "conectar o nó" (sem que o resto da lista saiba) para depois atualizar o prev do antigo primeiro nó e o next do head.

Se mudássemos direto o head, note que perderíamos a informação do antigo primeiro nó da lista e todos os nós seguintes (porque estamos sobrescrevendo! tipo o exemplo de Gabriel com as garrafas ontem)

De forma análoga, conseguimos fazer inserções no fim da fila (dessa vez, a partir do tail)

Inserção no fim:

```cpp
void push_back(int novo_valor) {

    Node* novo = new Node(novo_valor);

    // primeiro conectamos o novo nó à lista

    novo->next = tail;
    novo->prev = tail->prev;

    // depois conectamos a lista ao nó

    tail->prev->next = novo; // antigo último (agora penúltimo) nó aponta para o novo
    tail->prev = novo;       // o novo passa a ser o último da lista

    length++; // aumentando o comprimento

}
```

Note, então, que a complexidade assintótica da inserção de um novo valor no início ou no fim da lista é O(1)!

No entanto, note que uma inserção no meio da lista seria O(n), já que precisaríamos primeiro achar a posição ( O(n) ) para depois inserir o valor ( O(1) ).


#### Remoção

Da mesma forma que a inserção, a remoção nas pontas passa a ser O(1), já que temos acesso ao head e tail! Dessa forma, reorganizamos os nossos ponteiros e depois deletamos o espaço alocado dinamicamente pelo nosso nó. Os códigos vão parecer algo assim:

```cpp
void pop_front() {

    if (length == 0) return;

    Node* hmm = head->next;         // guarda o endereço do nó que queremos apagar

    head->next = head->next->next;  // redirecionamos o início da lista
    head->next->prev = head;        // fazemos o novo primeiro apontar para o head

    delete hmm;                     // apagamos o espaço alocado dinamicamente

    length--;                       // diminui o tamanho da lista

}
```

```cpp
void pop_back() {

    if (length == 0) return;

    Node* hmm = tail->prev;         // guarda o endereço do nó que queremos apagar

    tail->prev = tail->prev->prev;  // redireciona o fim da lista (pula o apagado)
    tail->prev->next = tail;        // fazemos o novo último apontar para o tail

    delete hmm;                     // apagamos o espaço alocado dinamicamente

    length--;                       // diminui o tamanho da lista
}
```


De maneira geral, dá pra ver que esse tipo de lista é muito eficiente para a implementação de TADs que só inserem / deletam nas extremidades (como uma lista ou uma fila!), mas não é muito legal para guardar vários valores que você precisa visitar de maneira recorrente. Listas encadeadas não aparecem muito por si só em questões ou modelagens no dia a dia, mas vários desses conceitos aqui apresentados são usados em estruturas bem mais populares (como árvores!). Aqui está a tabela de complexidade.


|                 | Acesso | Inserção no fim | Remoção no fim | Inserção no meio | Remoção no meio  |
|-----------------|--------|-----------------|----------------|------------------|------------------|
| Lista Encadeada | O(n)   |O(1)             |O(1)            | O(n)             | O(n)             |


Mas bom, essas são as estruturas de dados que vamos ver por enquanto! Vamos partir para os diferentes TADs?

# Tipos abstratos de dados e suas implementações

## TAD Lista (List)

### Descrição

O TAD Lista é uma das estruturas conceituais fundamentais na Ciência da Computação para a representação de coleções ordenadas de elementos. Diferentemente da Fila e da Pilha, a Lista não impõe políticas de acesso (como FIFO e LIFO), provendo principalmente flexibilidade de acesso e fácil manipulação de seus elementos.

Na prática, uma Lista é definida como uma sequência linear de elementos organizados de acordo com uma determinada ordem. Cada elemento, por sua vez, possui uma posição bem definida dentro da sequência, podendo ser identificado por um índice ( utilizando colchetes `[i]` ) ou por sua relação com outros elementos (como predecessor e sucessor), conforme a especificação adotada para a estrutura. 

<details>
<summary> <b>Spoiler</b> </summary>
Convencionalmente, uma especificação do TAD Lista que opta por acesso a elementos por meio de índices tende a se alinhar com o uso de vetores. Da mesma maneira, uma especificação que opte por acesso através de relações de vizinhança - predecessor e sucessor - tende a se alinhar com o uso de listas encadeadas.
</details>

Novamente, a descrição da Lista descreve apenas um comportamento lógico - um guia comportamental - para a coleção de dados, não dependendo da forma como os dados são organizados na memória, ou seja, é uma definição que independe de estruturas de dados específicas.

### Modelagem

Como dito acima, a escolha da estrutura de dados para a modelagem da Lista é livre. Portanto, de primeiro momento, vamos optar pela implementação estática utilizando  _array_, por ser uma das formas mais simples de visualizar o funcionamento interno da estrutura. 

Na prática, porém, veremos que a STL oferece implementações prontas e modernas do TAD Lista, como o `std::vector`, que se baseia em um array dinâmico redimensionável (como visto anteriormente) ou como a `std::list`, implementada por meio de uma lista duplamente encadeada, favorecendo operações de inserção e remoção (como veremos adiante).

Aqui reaproveitamos exatamente a ideia de _capacity_ (espaço reservado em memória) e _size_ (tamanho lógico) que já detalhamos na seção do vector; a única diferença é que, nesta modelagem estática com array, a `capacity` é fixa. Se esses termos ainda soam estranhos, vale reler aquele trecho.

```cpp

const int CAPACITY = 100;

struct Lista {
    int data[CAPACITY]; // armazenamento físico
    int size;           // tamanho lógico
};

```

Para esse exemplo de modelagem, teremos um construtor parecido com isso:

```cpp

void inicializar(Lista& l) {
    l.size = 0;
}

```

### Operações básicas

#### Acesso

Aqui, a vantagem do acesso à elementos é a simplicidade: Por se tratar de um array estático e contíguo, o acesso a elementos pode ser realizado de maneira extremamente simples e direta, utilizando índices ( `[i]` ). Logo, podemos imaginar que a eficiência dessa operação implica em complexidade O(1).

```cpp

int get(const Lista& l, int pos) {

    if (pos < 0 || pos >= l.size) {              
        throw std::out_of_range("Posição inválida");
    }                                               // caso posição fora do intervalo

    return l.data[pos];
}

```

#### Inserção

Como visto antes, a Lista é extremamente flexível na hora da manipulação de seus elementos, o que nos permite realizar a inserção em qualquer posição válida da sequência (desde que estejamos respeitando a capacidade máxima da estrutura). Porém, essa liberdade vem com um custo: realizar a inserção de um elemento em um local diferente do fim da lista implica na necessidade de deslocamento de todos os elementos subsequentes, a fim de preservar a ordem da lista. Isso resulta em uma operação custosa e ineficiente, com complexidade linear O(n).

Todavia, para inserções no fim da lista, a necessidade de deslocamento some, e a operação pode ser realizada em O(1).

```cpp

bool insert(Lista& l, int pos, int valor) {
    
    if (l.size >= CAPACITY)
        return false;                       // caso lista cheia

    if (pos < 0 || pos > l.size)
        return false;                       // caso posição inválida


    // deslocamento à direita
    for (int i = l.size; i > pos; i--) {
        l.data[i] = l.data[i - 1];
    }

    l.data[pos] = valor;
    l.size++;

    return true;
}

```

Detalhe: o pior caso é a inserção no _início_ da lista, que obriga a deslocar todos os _n_ elementos existentes uma posição à direita.

#### Remoção

A remoção segue uma lógica semelhante à inserção: realizar essa operação em qualquer posição diferente do final também implicará no deslocamento dos elementos, o que, novamente, vai tornar a operação custosa, resultando em complexidade O(n).

Perceba que, assim como na inserção, a complexidade dessa operação também depende da posição escolhida, crescendo conforme a proximidade com o início da lista, ou seja, nem todas as inserções vão executar _n_ passos. Novamente, para remoções no fim da lista, nos basta reduzir o tamanho lógico da estrutura, resultando em complexidade O(1).

```cpp

bool remove(Lista& l, int pos) {
    if (pos < 0 || pos >= l.size)
        return false;                       // caso posição inválida

    // deslocamento à esquerda
    for (int i = pos; i < l.size - 1; i++) {
        l.data[i] = l.data[i + 1];
    }

    l.size--;

    return true;
}

```


### Aplicações

Justamente por causa da sua flexibilidade, a Lista é amplamente empregada em aplicações que precisam representar coleções ordenadas de dados, onde consultas e modificações podem ocorrer a qualquer momento e em qualquer posição da sequência. Editores de Texto, que modelam um determinado conteúdo por meio de uma lista de linhas ou caracteres (e que podem realizar inserções e remoções em qualquer local) ou Sistemas de Gerenciamento, que necessitam realizar constamente o acesso por índice no conjunto, são exemplos bem comuns de cenários que pedem por uma estrutura que preserve a ordem lógica dos elementos e que permita a fácil manipulação dos dados, tal qual a Lista.


E se, em vez do array, modelássemos a mesma Lista com uma **lista encadeada**? Aí ganharíamos eficiência nas operações de inserção e remoção nas extremidades ( viram O(1) ), mas perdemos eficiência na operação de acesso ( vira O(n) ). Evitamos o deslocamento de elementos, mas envolvemos o uso de ponteiros na manipulação da lista.

Colocando as duas implementações lado a lado, o trade-off fica evidente:

| Implementação   | Acesso | Inserção no fim | Remoção no fim | Inserção no meio | Remoção no meio  |
|-----------------|--------|-----------------|----------------|------------------|------------------|
| Lista com array | O(1)   | O(1)            | O(1)           | O(n)             | O(n)             |
| Lista encadeada | O(n)   | O(1)            | O(1)           | O(n)             | O(n)             |

Repare que a diferença decisiva está no _acesso por índice_: a lista com array acessa qualquer posição em O(1), enquanto a lista encadeada precisa caminhar até ela.

Logo, percebam que o intuito é exatamente o de identificar que a escolha da estrutura de dados durante a implementação deve se adequar aos nossos objetivos enquanto usuários da TAD. Cada implementação tem as suas vantagens e desvantagens, e cabe a nós julgar corretamente qual estrutura usar.

## TAD Fila (Queue)

### Descrição

O Tipo Abstrato de Dados (TAD) Fila, conhecido na literatura como Queue, é uma das estruturas conceituais mais importantes da Ciência da Computação. Seu princípio fundamental é a política de acesso FIFO (First-In, First-Out), segundo a qual o primeiro elemento inserido é também o primeiro a ser removido. Esse comportamento reflete diversos processos naturais e computacionais, tornando a fila um modelo essencial para a organização temporal de dados.

Enquanto TAD, a fila descreve o comportamento lógico da estrutura, independentemente de como ela é implementada em memória. Como já vimos antes no estudo da diferença entre TAD e ED.

Em uma fila, os elementos são inseridos em uma extremidade, usualmente chamada de final, e removidos da outra extremidade, chamada de início. Não há acesso direto ou aleatório aos elementos intermediários, o que reforça a ideia de processamento sequencial e ordenado (temporal).

### Modelagem

Como a Fila também independe de estrutura de dados, vamos modelá-la sobre um _array_. A ideia mais ingênua — manter dois índices, `inicio` e `fim`, sempre andando para a direita — funciona, mas desperdiça espaço: à medida que removemos do início, as primeiras posições do vetor ficam inutilizadas. Para evitar isso, tratamos o array como **circular**, fazendo os índices "darem a volta" ao chegar no fim, com o operador `%`.

Guardamos, então, os índices de início e fim, o `tamanho` lógico e a `capacidade` máxima:

```cpp
class fila {

    private:
    int inicio;      // posição do primeiro elemento
    int fim;         // posição do próximo espaço livre
    int tamanho;     // quantidade de elementos atualmente na fila
    int capacidade;  // capacidade máxima
    int* storage;

};
```

O construtor apenas prepara o vetor e zera os controles:

```cpp
fila(int cap) {
    capacidade = cap;
    storage = new int[cap];
    inicio = 0;
    fim = 0;
    tamanho = 0;
}
```

Na prática, você raramente vai implementar isso à mão: a STL já oferece o `std::queue` (cabeçalho `<queue>`), um adaptador construído sobre o `std::deque` ou a `std::list` que respeita a semântica FIFO e esconde todos esses detalhes internos.

### Operações básicas

Diferentemente da Lista, a Fila não permite acesso aleatório: só conseguimos enxergar e alterar as suas extremidades. Suas três operações essenciais são o acesso ao início (`front`), a inserção no fim (`enqueue`) e a remoção do início (`dequeue`) — todas em O(1).

#### Acesso

O único elemento visível é o do início da fila, observado com `front` (às vezes chamado de `peek`), sem removê-lo:

```cpp
int front() {
    return storage[inicio]; // apenas observa o primeiro elemento
}
```

#### Inserção

A inserção, chamada `enqueue`, coloca um novo elemento no fim da fila. Repare no `% capacidade`: é ele que faz o índice "dar a volta" quando chega ao fim do vetor, reaproveitando os espaços já liberados no início.

```cpp
void enqueue(int valor) {
    if (tamanho == capacidade) {
        throw std::out_of_range("Fila cheia!");
    }
    storage[fim] = valor;
    fim = (fim + 1) % capacidade; // avança de forma circular
    tamanho++;
}
```

#### Remoção

A remoção, chamada `dequeue`, retira e devolve o elemento do início, avançando o índice `inicio` (também de forma circular):

```cpp
int dequeue() {
    if (tamanho == 0) {
        throw std::out_of_range("Fila vazia!");
    }
    int valor = storage[inicio];
    inicio = (inicio + 1) % capacidade; // avança de forma circular
    tamanho--;
    return valor;
}
```

### Aplicações

Filas aparecem naturalmente sempre que há processamento ordenado por tempo de chegada — quando várias entidades competem por um recurso compartilhado e devem ser atendidas na ordem em que chegaram. Exemplos clássicos incluem o escalonamento de processos em sistemas operacionais (a fila de processos prontos aguardando a CPU), o gerenciamento de buffers de entrada e saída, o controle de requisições em servidores e a busca em largura (BFS) em grafos.


## TAD Pilha (Stack)

### Descrição

Assim como a fila, a pilha é de extrema importância na Ciência da Computação como um TAD crucial à modelagem de situações específicas. Seu maior princípio é a ideia do "LIFO" (Last In, First Out) - os primeiros elementos a sair da nossa estrutura de dados são sempre aqueles que chegaram por último. Podemos imaginar esse TAD como vários objetos e ideias do dia a dia: um dispenser de gurdanapos de uma lanchonete - A única maneira de adicionar guardanapos é empurrando pela única entrada, que também serve de saída - ou até uma rua sem saída bem estreita - onde um carro, caso não tenha sido o último a entrar, não consegue sair imediatamente! Em geral, é como uma pilha de objetos de fato, na qual você só pode retirar o objeto no topo (se não a pilha cai!)


<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/guardanapos.png" alt="guardanapos" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Guardanapos<br /></em></p>
</div>

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/ruasemsaida.png" alt="crua-sem-saida" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Rua sem saída<br /></em></p>
</div>

De maneira geral, existem muitas aplicações para essa modelagem (bem mais do que imaginamos), e vamos ver isso logo após a implementação.

### Modelagem

Como sabemos que um TAD independe da estrutura de dados, vamos imaginar a explicação em um array devido à simplicidade. Mas lembre-se, ela também pode ser implementada sobre outras EDs! As suas funções devem apenas corretamente guardar e atualizar as variáveis extras que vamos criar que nos ajudam a definir quais operações são possíveis. Na STL, por exemplo, ela é implementada com uma estrutura de dados mais sofisticada chamada _deque_

No caso de um array estático simples, deveremos guardar apenas duas informações a mais: O final e o tamanho da nossa pilha. Diferentemente da fila, que sofre alterações dos dois lados, a pilha só pode sofrer remoções ou inserções a partir de uma mesma posição: a última. Dessa forma, podemos "empacotar" nosso array junto a essas duas variáveis para a modelagem da nossa _stack_ .

Note que estamos usando a mesma ideia vista no vector de um "final lógico", já que a nossa pilha tem uma capacidade constante mas está vazia.

```cpp
class stack {

    private:
    int size;      // capacidade máxima da pilha
    int end;       // final lógico (posição do primeiro espaço livre)
    int* storage;

};
```

Podemos imaginar o seu construtor como algo assim:

```cpp
stack(int n) {
    size = n;
    storage = new int[n];
    end = 0;
}
```

Obs.: Assim como implementado em diversos outros lugares, estamos usando aqui um intervalo fechado aberto - ou seja, o lugar no qual o nosso _end_ aponta para é o primeiro lugar livre, em que podemos adicionar objetos!


### Operações básicas

#### Acesso

Uma coisa interessante desse tipo abstrato é justamente a nossa falta de acesso ao resto da nossa pilha. Como só podemos inserir e remover do topo, só temos acesso à função `top()` ao invés de conseguir fazer mais através do uso dos colchetes [ e ]. Assim, ela é a nossa única maneira de acessar qualquer informação da pilha - e enquanto não fizermos outra operação, não conseguimos saber de nenhum outro número!

Como você já deve imaginar, o acesso dessa forma é O(1).

```cpp
int top() {
    return storage[end - 1];
}
```

#### Inserção

Como já vimos, a inserção só pode ser realizada no topo da nossa pilha, pela função `push()`. E o que ela fará é bem previsível: Caso a nossa estrutura não esteja cheia, ela irá adicionar o elemento no topo da pilha e aumentar o contador de tamanho; Caso contrário, o seu comportamento vai depender, de novo, da estrutura que é realizada sobre - E em nosso caso, não poderá fazer nada, já que é um tamanho estático. Caso fosse um vector ou um deque, poderíamos alocar um espaço maior para incluir mais espaços!

O código de uma operação pode parecer com isso:

```cpp
void push(int novo) {

    if (end == size) {
        throw std::out_of_range("Pilha cheia!");
    }

    storage[end] = novo; // insere como o novo topo da pilha
    end++;

}
```

E sua complexidade também é O(1)


#### Remoção

De maneira similar, só podemos remover o objeto do topo, através do `pop()`. Então o código dessa operação acaba extremamente simples (e também O(1))

```cpp
void pop() {
    if (end == 0) return; // pilha vazia: não há o que remover
    end--;
}
```
Imagino que você veja isso e fique um pouco confuso, já que não fizemos nada com o nosso array _storage_! Mas no fim das contas, o que vale para nós é o que. Não temos nenhuma maneira de "apagar" uma das "casas" do nosso array sem mudar a alocação de memória - então podemos só esquecer o valor ali, já que qualquer inserção que for usar esse endereço substituirá o valor! É como se ele fosse um lixo de memória.


### Aplicações

Como eu falei mais cedo, a implementação de uma pilha pode variar muito (na STL, ela é implementada com um deque, estrutura que não veremos aqui!), mas elas seguem os mesmos princípios gerais.

No início, pode parecer um pouco contra intuitivo usar pilhas pra problemas no dia a dia. É como se ela "dificultasse a nossa vida", não nos deixando ter acesso a informações que tínhamos antes. Mas é exatamente isso que a pilha simula muito bem: uma situação em que precisamos resolver um problema mais novo antes de passar para um mais antigo.

Na prática, pilhas aparecem em toda parte: no mecanismo de **desfazer/refazer** (undo/redo) de editores, na **pilha de chamadas** de funções durante a execução de um programa, na avaliação de expressões e _parsers_ (como o de parênteses), e no histórico de navegação do navegador.

## Acompanhamento do Projeto Final — Missão 2

Antes de encerrarmos o dia, vamos reservar um tempo para acompanhar o andamento do **projeto final**. Agora que temos TADs, listas, filas e pilhas na nossa caixa de ferramentas, a **Missão 2** é o momento de aplicar essas estruturas no projeto de vocês: revisitar a modelagem, escolher a estrutura de dados mais adequada para cada parte e destravar as dúvidas que surgiram até aqui.

<!-- ToDO: detalhar a Missão 2 do projeto final (trilhas Spetify / NotePET) -->

<script>
    const dataLiberacao = new Date("2026-08-05T00:00:00");
    const agora = new Date();

    if (agora < dataLiberacao) {

        alert("A pressa não traz o amanhã mais rápido.");
        window.location.href = "/"; 
    }
</script>

