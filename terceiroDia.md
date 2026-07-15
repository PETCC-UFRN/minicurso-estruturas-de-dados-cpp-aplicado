---
layout: layoutGit
title: Minicurso de Estruturas de Dados e Algoritmos
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

Dessa maneira, o TAD priva o acesso aos dados e restringe a manipulação deles apenas através das operações. Perceba que o TAD, contudo, não é responsável por especificar como essas operações vão ser implementadas ou como os dados vão ser armazenados na memória. O foco aqui está na abstração, ou seja, em definir um guia comportamental e não uma especificação prática para o conjunto de dados.

### Exemplo prático: TAD Ponto

Para entender melhor o conceito de TAD, vamos trabalhar com a definição de um novo TAD arbitrário chamado `Ponto`, que define uma estrutura responsável por representar pontos e armazena duas coordenadas X e Y. Para ele, vamos, tal qual solicitado na definição do conceito, definir algumas operações básicas, como:

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
}

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

Porém, a definição do `TAD Ponto` não especifica uma implementação fixa, ou seja, nós podemos explorar outras alternativas na representação prática do TAD:

```cpp

int ponto[2]; //Utilizando, por exemplo, o array clássico, ponto[0] = x , ponto[1] = y.

--------------------------

std::vector<float> coord_x; //Ou utilizando dois vetores separados
std::vector<float> coord_y;

--------------------------

```

Ou, da maneira mais convencional, através do uso de classes:

```cpp

class Ponto { // Utilizando classes
    private:
    int x;
    int y;

    public:
    Ponto(int x, int y);

    void set_coord(int nx, int ny);

    float distance(const Ponto& outro) const;

    int get_x() const;
    int get_y() const;
}

```

Perceba, porém, que a liberdade que a abstração nos dá vem com um preço: garantir que o funcionamento da estrutura e o comportamento das operações se mantenha intacto. Porém, mantendo essas condições, podemos explorar a nossa criatividade para a implementação dos mais diversos TAD's.

## O que são Estruturas de Dados?

Dentro desse contexto, as Estruturas de Dados são estruturas concretas que organizam, armazenam e manipulam dados na _memória_ do computador, permitindo a realização de operações sobre dados de maneira adequada e correta. A Estrutura de Dado, diferente do TAD, se preocupa principalmente com a maneira como os dados são representados e organizados _internamente_, estabelecendo uma relação lógica e visando a eficiência dos dados, se atentando para aspectos como:

1. Uso eficiente de memória;
2. Tempo de execução;

As estruturas de dados são as responsáveis por *materializar* as implementações dos Tipos Abstratos de Dados, ou seja, transformam uma abstração conceitual em uma implementação prática. Elas podem ser divididas em algumas categorias:

- Estruturas de dados lineares
- Estruturas de dados associativas
- Estruturas de dados hierárquicas
- Entre outras

Agora, antes de nos aprofundarmos em algumas estruturas de dados conhecidas, vamos rever alguns pontos importantes sobre ponteiros.


## Estruturas de Dados Lineares!

Ontem, para entendermos sobre ordenação, vimos um pouco sobre heap, stack, alocação estática e alocação dinâmica.
Hoje nos aprofundaremos um pouco mais nessa parte e veremos estruturas de dados e suas implementações!

### Array

Vocês provavelmente já estão acostumados a usar essa estrutura de dados, né?
É uma das primeiras estruturas que aprendemos a usar, já que ela é muito simples: ela consegue guardar _N_ instâncias de um tipo primitivo (inteiro, booleano, double, etc.)

Mas como isso acontece?

```cpp

int n = 10;

int arr[n]; // declaração com a sintaxe do C

array<int, n> arr2;

```

Quando você declara um array dessa forma, o computador "entende" que você quer alocar 10 espaços de inteiros na sua memória - nesse caso, na stack (lembre-se que esse N que declara o tamanho pode variar!).
Como vimos ontem, o acesso à stack é extremamente rápido, mas tem tamanho limitado. Então o array é uma estrutura muito otimizada e rápida para usarmos, mas não podemos abusar da nossa querida stack criando um array de tamanho 10⁹, como talvez possamos nos sentir inclinados a fazer.


Vamos analizar as particularidades e complexidades assintóticas de cada operação sobre um array

Como a estrutura é guardada toda junta na memória (e considerando que você tem acesso ao endereço inicial de memória), todo o acesso é O(1).

```cpp

cout << arr[5]

```

Isso acontece porque, tendo o ponto inicial da nossa estrutura, podemos só adicionar a quantidade de "casinhas" (equivalente à quantidade de bits que o tipo guardado no array ocupa) que vamos pular e chegar ao endereço que queremos acessar. Por isso, qualquer operação de acesso ou atualização é constante, o que se torna muito bom para nós!

Note também que não é possível fazer uma remoção ou uma anexação ao pé da letra do nosso array, porque o tamanho é fixo! Então mesmo se eu quiser muito adicionar mais um número ao meu array de tamanho 10, eu não vou conseguir :( . Isso é uma das maiores diferenças dessa estrutura para várias outras que usamos e vemos por aí. Por isso, ao criar um array, você precisa ter *certeza* do número máximo de coisas que você vai guardar.

Como vimos anteriormente, temos a versão do C do array e a do C++. A versão do C, diferentemente do que vamos ver um pouco mais adiante, está fora da nossa biblioteca *STL*. Mas o que isso significa, na prática? Nós não temos funções específicas para a nossa estrutura como veremos para as outras. Já na versão da *STL*, teremos funções como `front()`, `back()`, `size()` e `swap()`.

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

De forma geral, é uma estrutura rápida e que te faz ter muito controle e noção do que você está fazendo o tempo todo. Eu pessoalmente acredito na soberania do array em todas as situações que o vector não é estritamente necessário (como em assuntos como grafos e, às vezes, na chamada de funções - mas não vamos ver nada disso aqui!), mas isso é para *você* decidir ao longo dessas aulas!


|                 | Acesso | Inserção no fim | Deleção no fim | Inserção no meio | Deleção no meio  |
|-----------------|--------|-----------------|----------------|------------------|------------------|
| Array           | O(1)   |O(n) se realocar |O(1)            | O(1)             | O(1)             |


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

Primeiramente, temos o valor capacity. Ele indica o tamanho do array alocado dinamicamente - a quantidade de objetos que podemos guardar ao total nessa estrutura. A seguir, temos o atrtipoibuto "end"; ele, por outro lado, vai indicar o "final lógico" da nossa lista. Ou seja, podemos ter quantidades diferentes nesses valores, desde que a capacidade seja maior ou igual ao número de objetos comportados atualmente (capacity >= end). O último valor é um ponteiro, que, como vimos anteriormente, aponta para o primeiro endereço de memória que guarda as nossas _data_ . Esse controle que temos a partir dessas informações é que vai nos permitir alocar tamanhos menores ou maiores de memória dependendo da situação em que nos encotramos.

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
Note que, em classes no C++, nós podemos deixar coisas "privadas" - o que significa que estamos escondendo ela do usuário! Temos funções que retornam o tamanho e a capacidade do vector (.size(), .capacity()), mas uma pessoa qualquer não consegue mudar o valor de m_end e confundir a nossa lógica, ou deletar o m_storage e apagar todos os nossos dados (vocês aprenderão um pouco mais sobre POO e o princípio do encapsulamento quando pagarem P1!).
</details>

OK! Agora que modelamos tudo que será necessário para o nosso vetor, vamos ver um pouquinho sobre as principais funções e suas especificidades e complexidades!




*Acesso*
Como a nossa estrutura é implementada a partir de arrays (no qual um bloco contíguo de memória nos é reservado), o acesso ao número em cada índice também é imediato! Assim, podemos recuperar o valor de algum objeto em tempo constante, ou O(1). A função implementada pode ficar algo tão simples quanto isso:
tipo

```cpp

int & at(int idx){
    if(idx < 0 or idx >= size()){			 // retorna erro caso o índice for negativo (impossível) ou passar do tamanho lógico
      throw std::out_ofter_range("Index out of range!");
    }
    return m_storage[idx];				// retorna o valor
  }
  
int & operator[](int idx) {
   return m_storage[idx];				// retorna o valor
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
      pointer temp = new value_type[new_cap];	// aloca espaço novo
      
      std::copy(begin(), end(), temp);		// copia os valores antigos para o novo espaço
      
      delete[] storage;				// liberar a memoria antiga
      
      storage = temp;				// fazer m_apontar pra a nova memoria ampliada
      
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
 
  void push_back(const_reference value) {

    if (size() >= capacity()) {
      reserve( 2 * capacity());
    }

    m_storage[m_end++] = value;
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


#### Deleção

Muitas vezes, é de nosso interesse deletar algum número em um vetor. Caso o número seja o último, temos até uma função feita pra esse caso especificamente (o `pop_back()`)!

No caso em que isso não ocorre, - o número que queremos deletar é no meio do vetor - nós não podemos simplesmente deixar um buraco no vetor, ou marcar o espaço como "não utilizado". Toda a nossa lógica de acesso a objetos depende da continuidade do nosso bloco de memória. Então a única solução que temos é, infelizmente, mover todos os números após o objeto removido para a esquerda e diminuir o nosso tamanho em um.

Então a nossa função de deleção poderia parecer algo assim:

```cpp

void erase(int idx){
    if(idx < 0 or idx >= size()){
      throw std::out_of_range("Erase - Index out of range!"); // não é possível remover um número que tenha o índice negativo ou maior que o final lógico!
    }

    for(size_type i = idx; i < size() - 2; ++i){ // movendo todos os objetos para a "esquerda", um a um
      storage[i] = storage[i+1];
    }
    
    end--; // diminuindo o final lógico
  }



```

Como vocês provavelmente imaginam, a complexidade dessa operação também é O(n), devido à necessidade de mover todos os objetos de índices seguintes ao indicado.

Note também que sempre que vemos essas implementações, parece que estamos _"babyproofing"_ uma casa: fazendo condicionais para pegar cada caso de borda, cada exceção. Mas é exatamente assim que as estruturas na STL são pensadas: elas precisam ser robustas de forma que o usuário desinformado (nós!) não consiga quebrá-las. E é por isso que é algo tão bom quando estamos programando! É algo previsível, meticulosamente testado, que garatidamente vai retornar erros ao invés de nos deixar acabar com a estrutura que estamos tentando acessar.


|                 | Acesso | Inserção no fim | Deleção no fim | Inserção no meio | Deleção no meio  |
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

	int valor;
	int * next;
	int * prev;

}

```
Mas isso nos gera outra pergunta: Se sempre temos um ponteiro apontando para o próximo número, como encontramos o fim?

Simples! quando declaramos essa nossa lista encadeada, apontamos o ponteiro do último número para _nullptr_ . Isso, de maneira bem superficial, faz o ponteiro ser nulo ou não apontar para nada (por razões históricas e práticas, ele geralmente aponta para o endereço 0x0, mas ele nunca será modificável nem nada). Logo, sempre que tiver algum ponteiro em direção a esse endereço, sabemos que não há informações guardadas nesse lugar e que chegamos ao fim da nossa lista encadeada.

No entanto, em uma lista duplamente encadeada, temos algumas informações extras guardadas

Nesse caso, como estamos implementando uma lista duplamente encadeada, teremos um nó de início e um nó de fim (então não precisaremos necessariamente estar comparando com nullptr, mas veremos como isso funciona daqui a pouco!) chamados `head` e `tail` . Eles vão permitir o acesso rápido às extremidades da nossa lista, facilitando a implementação de vários valores


#### Contruindo uma lista duplamente encadeada

Primeiramente, precisamos do nosso nó

```cpp

Node() { // construtor!
        this->next = nullptr;
        this->prev = nullptr;
    }

Node(int new_data) { // construtor que inicializa o valor!
        this->data = new_data; //define 
        this->next = nullptr;
        this->prev = nullptr;
    }
    
```

Observação: this->data é equivalente a *(this).data

E também precisamos declarar as variáveis que vamos usar para identificar o head e o tail;

```cpp

class linkedlist() {

	int length;
	Node * head;
	Node * tail;
	
}

```

Além disso, precisamos fazer uma função que vai construir a nossa lista encadeada. A primeira coisa que precisamos fazer é criar os nossos dois nós base - o head e o tail! É importante, então, fazer com que eles apontem um para o outro e para nullptr!

```cpp

linkedlist() { // construtor -->

	int length;
	Node * new_head; // aponta para o primeiro elemento da nossa lista
	Node * new_tail; // aponta para o último elemento da nossa lista

	new_head = new Node(); // aloco os nós dinamicamente
    	new_tail = new Node();
    	
    	head->prev = nullptr;  	// aponto o prev do head para o nada
    	head->next = m_tail;	// aponto o next do head para o tail

    	tail->prev = head;	// aponto o prev de tail para head
    	tail->next = nullptr;	// aponto o next de tail para o nada
    	m_len = 0;

}


```


Não se preocupem tanto com entender as minúcias dos códigos dessa parte aqui. O importante é vocês entenderem os passos que estão sendo feitos e porque o algoritmo funciona!

Então agora que já conseguimos construir a nossa lista, vamos ver como funcionam as suas operações!

#### Acesso

Diferentemente das 2 outras estruturas, não temos acesso a onde está o nosso valor imediatamente - só ao primeiro valor! Por isso, para conseguir acessar o enésimo valor da nossa lista, temos que passar por todos os anteriores - o que faz essa operação ser O(n).

 ```cpp
  
  int find_at_index(int index) const {
  
    if (index > m_size) {
    	throw std::out_ofter_range("Index out of range!"); // o index é maior do que a quantidade de elementos na nossa lista!!
    
    }
    
    Node * temp = head;
    int dummie = 0;

    while(dummie != index) {
      temp = temp->next;
    }
    
    return temp->valor;
  }
 
 
 ```

#### Inserção

Por outro lado, a inserção em uma lista encadeada é muito eficiente (contanto que seja nas pontas!). Em um array, nunca conseguíamos aumentar o tamanho da nossa lista. Em um vetor, aumentar o seu tamanho era sempre O(n). Aqui, podemos simplesmente inicializar um novo nó e ligá-lo ao fim ou ao início (lembrando de atualizar os valores de head e tail!)

Inserção no início:

```cpp

  void push_front(int novo_valor) {
  
    Node * novo = new Node(novo_valor);
    
    novo->data = novo_valor;
    
    // primeiro conectamos o novo no à lista
    
    novo->prev = head;
    novo->next = head->next;


    // depois podemos conectar a lista ao nó

    head->next->prev = novo; // antigo primeiro (agora segundo) nó aponta para o novo
    head->next = novo; // o novo passa a ser considerado o primeiro da lista

    m_len++; // aumentando o comprimento

    // agora o node passou a ser o primeiro da lista !

  }

```

Note que é muito importante "conectar o nó" (sem que o resto da lista saiba) para depois atualizar o prev do antigo primeiro nó e o next do head.

Se mudássemos direto o head, note que perderíamos a informação do antigo primeiro nó da lista e todos os nós seguintes (porque estamos sobrescrevendo! tipo o exemplo de Gabriel com as garrafas ontem)

De forma análoga, conseguimos fazer inserções no fim da fila (dessa vez, a partir do tail)

Inserção no fim:

```cpp

  void push_back(int novo_valor) {
  
    Node * novo = new Node(novo_valor);
    
    novo->data = novo_valor;
    
    // primeiro conectamos o novo no à lista
    
    novo->next = tail;
    novo->prev = tail->prev;


    // depois podemos conectar a lista ao nó

    tail->prev->next = novo; // antigo último (agora penúltimo) nó aponta para o novo
    tail->prev = novo; // o novo passa a ser considerado último

    m_len++; // aumentando o comprimento

    // agora o node passou a ser o último !

  }


```

Note, então, que a complexidade assintótica da inserção de um novo valor no início ou no fim da lista é O(1)!

No entanto, note que uma remoção no meio da lista seria O(n), já que precisaríamos achar um index ( O(n) ) para depois inserir o valor ( O(1) ).


#### Deleção

Da mesma forma que a inserção, a deleção nas pontas passa a ser O(1), já que temos acesso ao head e tail! Dessa forma, reorganizamos os nossos ponteiros e depois deletamos o espaço alocado dinamicamente pelo nosso nó. Os códigos vão parecer algo assim:

```cpp

  void pop_front() {

    if (m_len == 0) return;

    Node * hmm = head->next; 		// guarda o endereço do nó que queremos apagar

    head->next = head->next->next; 	// redirecionamos o início da lista
    head->next->prev = head; 		// fazemos o novo primeiro apontar para o head

    delete hmm;				// apagamos o espaço alocado dinamicamente

    m_len--;				// diminui o tamanho da lista
	
  }

```

```cpp

  void pop_back() {

    if (m_len == 0) return;

    Node * hmm = m_tail->prev; 		// guarda o endereço do nó que queremos apagar

    tail->prev = tail->prev->prev; 	// redireciona o fim da lista (pula o apagado)
    m_tail->prev->next = m_tail;	// fazemos o novo último apontar para o tail

    delete hmm;				// apagamos o espaço alocado dinamicamente

    m_len--;				// diminui o tamanho da lista
  }

```


De maneira geral, dá pra ver que esse tipo de lista é muito eficiente para a implementação de TADs que só inserem / deletam nas extremidades (como uma lista ou uma fila!), mas não é muito legal para guardar vários valores que você precisa visitar de maneira recorrente. Listas encadeadas não aparecem muito por si só em questões ou modelagens no dia a dia, mas vários desses conceitos aqui apresentados são usados em estruturas bem mais populares (como árvores!). Aqui está a tabela de complexidade.


|                 | Acesso | Inserção no fim | Deleção no fim | Inserção no meio | Deleção no meio  |
|-----------------|--------|-----------------|----------------|------------------|------------------|
| Lista Encadeada | O(n)   |O(n)             |O(n)            | O(n)             | O(n)             |


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

### Modelagem e Operações Básicas

Como dito acima, a escolha da estrutura de dados para a modelagem da Lista é livre. Portanto, de primeiro momento, vamos optar pela implementação estática utilizando  _array_, por ser uma das formas mais simples de visualizar o funcionamento interno da estrutura. 

Na prática, porém, veremos que a STL oferece implementações prontas e modernas do TAD Lista, como o `std::vector`, que se baseia em um array dinâmico redimensionável (como visto anteriormente) ou como a `std::list`, implementada por meio de uma lista duplamente encadeada, favorecendo operações de inserção e remoção (como veremos adiante).

Com essa implementação, alguns conceitos importantes merecem destaque: semelhantemente a o que vimos anteriormente com vector, teremos _capacity_, um valor fixo que vai definir o espaço reservado em memória, ou seja, a quantidade máxima de elementos que podemos armazenar, enquanto _size_ controlará o tamanho lógico que a estrutura tem em determinado momento, ou seja, a quantidade de elementos que realmente estão na lista.

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

### Acesso

Aqui, a vantagem do acesso à elementos é a simplicidade: Por se tratar de um array estático e contíguo, o acesso a elementos pode ser realizado de maneira extremamente simples e direta, utilizando índices ( `[i]` ). Logo, podemos imaginar que a eficiência dessa operação implica em complexidade O(1).

```cpp

int get(const Lista& l, int pos) {

    if (pos < 0 || pos >= l.tamanho) {              
        throw std::out_of_range("Posição inválida");
    }                                               // caso posição fora do intervalo

    return l.dados[pos];
}

```

### Inserção

Como visto antes, a Lista é extremamente flexível na hora da manipulação de seus elementos, o que nos permite realizar a inserção em qualquer posição válida da sequência (desde que estejamos respeitando a capacidade máxima da estrutura). Porém, essa liberdade vem com um custo: realizar a inserção de um elemento em um local diferente do fim da lista implica na necessidade de deslocamento de todos os elementos subsequentes, a fim de preservar a ordem da lista. Isso resulta em uma operação custosa e ineficiente, com complexidade linear O(n).

Todavia, para inserções no fim da lista, a necessidade de deslocamento some, e a operação pode ser realizada em O(1).

```cpp

bool insert(Lista& l, int pos, int valor) {
    
    if (l.tamanho >= CAPACIDADE)
        return false;                       // caso lista cheia

    if (pos < 0 || pos > l.tamanho)
        return false;                       // caso posição inválida


    // deslocamento à direita
    for (int i = l.tamanho; i > pos; i--) {
        l.dados[i] = l.dados[i - 1];
    }

    l.dados[pos] = valor;
    l.tamanho++;

    return true;
}

```

Detalhe: Qual seria o pior caso na inserção?

### Remoção

A remoção segue uma lógica semelhante à inserção: realizar essa operação em qualquer posição diferente do final também implicará no deslocamento dos elementos, o que, novamente, vai tornar a operação custosa, resultando em complexidade O(n).

Perceba que, assim como na inserção, a complexidade dessa operação também depende da posição escolhida, crescendo conforme a proximidade com o início da lista, ou seja, nem todas as inserções vão executar _n_ passos. Novamente, para remoções no fim da lista, nos basta reduzir o tamanho lógico da estrutura, resultando em complexidade O(1).

```cpp

bool remove(Lista& l, int pos) {
    if (pos < 0 || pos >= l.tamanho)
        return false;                       // caso posição inválida

    // deslocamento à esquerda
    for (int i = pos; i < l.tamanho - 1; i++) {
        l.dados[i] = l.dados[i + 1];
    }

    l.tamanho--;

    return true;
}

```


### Exemplos práticos

Justamente por causa da sua flexibilidade, a Lista é amplamente empregada em aplicações que precisam representar coleções ordenadas de dados, onde consultas e modificações podem ocorrer a qualquer momento e em qualquer posição da sequência. Editores de Texto, que modelam um determinado conteúdo por meio de uma lista de linhas ou caracteres (e que podem realizar inserções e remoções em qualquer local) ou Sistemas de Gerenciamento, que necessitam realizar constamente o acesso por índice no conjunto, são exemplos bem comuns de cenários que pedem por uma estrutura que preserve a ordem lógica dos elementos e que permita a fácil manipulação dos dados, tal qual a Lista.


#### Mas e a Lista Encadeada?

Aqui, é importante percebermos como ganhamos eficiência nas operações de inserção e remoção ( viram O(1) ), mas perdemos eficiência na operação de acesso ( viram O(n) ). Evitamos o deslocamento de elementos, mas envolvemos o uso de ponteiros na manipulação da lista.

Logo, percebam que o intuito é exatamente o de identificar que a escolha da estrutura de dados durante a implementação deve se adequar aos nossos objetivos enquanto usuários da TAD. Cada implementação tem as suas vantagens e desvantagens, e cabe a nós julgar corretamente qual estrutura usar.

## TAD Fila (Queue)

### Descrição

O Tipo Abstrato de Dados (TAD) Fila, conhecido na literatura como Queue, é uma das estruturas conceituais mais importantes da Ciência da Computação. Seu princípio fundamental é a política de acesso FIFO (First-In, First-Out), segundo a qual o primeiro elemento inserido é também o primeiro a ser removido. Esse comportamento reflete diversos processos naturais e computacionais, tornando a fila um modelo essencial para a organização temporal de dados.

Enquanto TAD, a fila descreve o comportamento lógico da estrutura, independentemente de como ela é implementada em memória. Como já vimos antes no estudo da diferença entre TAD e ED.

Em uma fila, os elementos são inseridos em uma extremidade, usualmente chamada de final, e removidos da outra extremidade, chamada de início. Não há acesso direto ou aleatório aos elementos intermediários, o que reforça a ideia de processamento sequencial e ordenado (temporal).

### Operações Básicas

O TAD Fila é definido por um conjunto restrito, porém suficiente, de operações fundamentais. A operação de inserção, tradicionalmente denominada enqueue, adiciona um novo elemento ao final da fila. A operação de remoção, chamada dequeue, remove e retorna o elemento que se encontra no início da fila, respeitando a ordem FIFO.

Além dessas operações centrais, é comum que a fila ofereça uma operação de consulta ao primeiro elemento, geralmente chamada de front ou peek, que permite observar o elemento do início sem removê-lo. Operações auxiliares, como a verificação de fila vazia (isEmpty) e a obtenção do número de elementos armazenados (size), também são amplamente utilizadas, especialmente em contextos algorítmicos e de implementação.

Em implementações com capacidade limitada, como aquelas baseadas em vetores estáticos, pode ainda existir a operação isFull, responsável por indicar se a fila atingiu sua capacidade máxima.

### Como implementar

A implementação de uma fila pode variar significativamente, desde estruturas simples até abordagens mais sofisticadas. A escolha da implementação impacta diretamente aspectos como uso de memória, desempenho e flexibilidade, embora o comportamento externo do TAD permaneça o mesmo.

#### Implementação 1

Uma das implementações mais diretas da fila utiliza vetores (arrays). Nessa abordagem, dois índices são mantidos: um para indicar a posição do início da fila e outro para indicar a posição do final. A inserção ocorre no índice do final, enquanto a remoção ocorre no índice do início.

Em sua forma mais simples, essa implementação apresenta um problema clássico: o desperdício de espaço. À medida que elementos são removidos do início, posições iniciais do vetor tornam-se inutilizadas, mesmo que ainda exista espaço disponível no final.

```cpp
#include <iostream>
using namespace std;

class FilaEstatica {
private:
    int* dados;
    int inicio;
    int fim;
    int capacidade;

public:
    FilaEstatica(int cap) {
        capacidade = cap;
        dados = new int[capacidade];
        inicio = 0;
        fim = 0;
    }

    ~FilaEstatica() {
        delete[] dados;
    }

    bool isEmpty() const {
        return inicio == fim;
    }

    bool isFull() const {
        return fim == capacidade;
    }
 
    void enqueue(int valor) {
        if (isFull()) {
            cout << "Fila cheia" << endl;
            return;
        }
        dados[fim++] = valor;
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Fila vazia" << endl;
            return -1;
        }
        return dados[inicio++];
    }
};
```

#### Implementação 2

Para resolver o problema de desperdício de memória da implementação anterior, introduz-se a fila circular. Nessa abordagem, o vetor é tratado de forma lógica como circular, permitindo que os índices retornem ao início do vetor quando atingem o limite máximo.

A fila circular garante melhor aproveitamento do espaço disponível e mantém todas as operações básicas com complexidade de tempo constante, O(1). Essa implementação é amplamente utilizada em sistemas que exigem eficiência e previsibilidade, como buffers e sistemas embarcados.

```cpp
#include <iostream>
using namespace std;

class FilaCircular {
private:
    int* dados;
    int inicio;
    int fim;
    int tamanho;
    int capacidade;

public:
    FilaCircular(int cap) {
        capacidade = cap;
        dados = new int[capacidade];
        inicio = 0;
        fim = 0;
        tamanho = 0;
    }

    ~FilaCircular() {
        delete[] dados;
    }

    bool isEmpty() const {
        return tamanho == 0;
    }

    bool isFull() const {
        return tamanho == capacidade;
    }

    void enqueue(int valor) {
        if (isFull()) {
            cout << "Fila cheia" << endl;
            return;
        }
        dados[fim] = valor;
        fim = (fim + 1) % capacidade;
        tamanho++;
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Fila vazia" << endl;
            return -1;
        }
        int valor = dados[inicio];
        inicio = (inicio + 1) % capacidade;
        tamanho--;
        return valor;
    }
};
```

### Fila na STL do C++

A biblioteca padrão do C++ fornece uma implementação pronta do TAD Fila por meio do contêiner std::queue, definido no cabeçalho <queue>. Essa implementação segue rigorosamente a semântica FIFO e abstrai completamente os detalhes internos da estrutura.

Internamente, o std::queue é um adaptador de contêiner, geralmente implementado sobre estruturas como std::deque ou std::list. O programador interage apenas com as operações essenciais, como inserção no final, remoção do início e acesso ao elemento frontal, reforçando o conceito de TAD e incentivando boas práticas de encapsulamento.

### Onde usar Filas

#### Overview

Filas são amplamente empregadas em sistemas computacionais sempre que há necessidade de processamento ordenado por tempo de chegada. Elas surgem naturalmente em contextos nos quais múltiplas entidades competem por um recurso compartilhado ou aguardam processamento sequencial.

Exemplos clássicos incluem escalonamento de processos em sistemas operacionais, gerenciamento de buffers de entrada e saída, controle de requisições em servidores e algoritmos de busca em grafos.

#### Exemplo prático 1

Em sistemas operacionais, filas são utilizadas para organizar processos prontos para execução. O escalonador do sistema mantém uma fila de processos aguardando tempo de CPU, garantindo que cada processo seja atendido de forma justa, de acordo com a política de escalonamento adotada.

Nesse contexto, a fila assegura previsibilidade e organização, sendo fundamental para o funcionamento correto do sistema.



## TAD Pilha (Stack)

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

### Modelagem e operações básicas

Como sabemos que um TAD independe da estrutura de dados, vamos imaginar a explicação em um array devido à simplicidade. Mas lembre-se, ela também pode ser implementada sobre outras EDs! As suas funções devem apenas corretamente guardar e atualizar as variáveis extras que vamos criar que nos ajudam a definir quais operações são possíveis. Na STL, por exemplo, ela é implementada com uma estrutura de dados mais sofisticada chamada _deque_

No caso de um array estático simples, deveremos guardar apenas duas informações a mais: O final e o tamanho da nossa pilha. Diferentemente da fila, que sofre alterações dos dois lados, a pilha só pode sofrer remoções ou inserções a partir de uma mesma posição: a última. Dessa forma, podemos "empacotar" nosso array junto a essas duas variáveis para a modelagem da nossa _stack_ .

Note que estamos usando a mesma ideia vista no vector de um "final lógico", já que a nossa pilha tem uma capacidade constante mas está vazia.

```cpp
class queue {
	
	private:
	int size;
	int end;
	int * storage;

}

```

Podemos imaginar o seu construtor como algo assim:

```cpp

queue(int n) {
	size = n;
	storage = int[n];
	end = 0;
}
```

Obs.: Assim como implementado em diversos outros lugares, estamos usando aqui um intervalo fechado aberto - ou seja, o lugar no qual o nosso _end_ aponta para é o primeiro lugar livre, em que podemos adicionar objetos!


#### Acesso

Uma coisa interessante desse tipo abstrato é justamente a nossa falta de acesso ao resto da nossa pilha. Como só podemos inserir e remover do topo, só temos acesso à função `top()` ao invés de conseguir fazer mais através do uso dos colchetes [ e ]. Assim, ela é a nossa única maneira de acessar qualquer informação da pilha - e enquanto não fizermos outra operação, não conseguimos saber de nenhum outro número!

Como você já deve imaginar, o acesso dessa forma é O(1).

```cpp
int top() {
	return storage[end-1];
}
```

#### Inserção

Como já vimos, a inserção só pode ser realizada no topo da nossa pilha, pela função `push()`. E o que ela fará é bem previsível: Caso a nossa estrutura não esteja cheia, ela irá adicionar o elemento no topo da pilha e aumentar o contador de tamanho; Caso contrário, o seu comportamento vai depender, de novo, da estrutura que é realizada sobre - E em nosso caso, não poderá fazer nada, já que é um tamanho estático. Caso fosse um vector ou um deque, poderíamos alocar um espaço maior para incluir mais espaços!

O código de uma operação pode parecer com isso:

```cpp

push(int novo) {

if (end == size-1) {
	throw std::out_of_range("Erase - Index out of range!");
}

storage[end] = novo; // insere como o mais novo número na lista
end++;

}

```

E sua complexidade também é O(1)


#### Remoção

De maneira similar, só podemos remover o objeto do topo, através do `pop()`. Então o código dessa operação acaba extremamente simples (e também O(1))

```cpp

void pop() {
	end--;
}

```
Imagino que você veja isso e fique um pouco confuso, já que não fizemos nada com o nosso array _storage_! Mas no fim das contas, o que vale para nós é o que. Não temos nenhuma maneira de "apagar" uma das "casas" do nosso array sem mudar a alocação de memória - então podemos só esquecer o valor ali, já que qualquer inserção que for usar esse endereço substituirá o valor! É como se ele fosse um lixo de memória.


### Aplicações

Como eu falei mais cedo, a implementação de uma pilha pode variar muito (na STL, ela e implementada com um deque, estrutura que não veremos aqui!), mas elas seguem os mesmos princípios gerais. Mas agora que já entendemos essa parte, vamos tentar fazer algumas questões!

No início, pode parecer um pouco contra intuitivo usar pilhas pra problemas no dia a dia. É como se ela "dificultasse a nossa vida", não nos deixando ter acesso a informações que tínhamos antes. Mas é exatamente isso que a pilha simula muito bem: uma situação em que precisamos resolver um problema mais novo antes de passar para um mais antigo.

Uma questão emblemática de pilha pode nos ajudar:


#### Para fazermos juntos

Imagine que você está construindo um parser pra sequências de parênteses. Então você quer, de alguma forma, descrobrir se sequências específicas são válidas ou não. Imaginam alguma maneira de fazer isso?

Pra nos ajudar a entender a situação, vamos ver algumas sequências de parênteses que são válidas e inválidas.

Algo como isso é valido:

```
(()())()
```

Mas algo assim é inválido:
```
()()(
```

Daí, podemos tirar uma conclusão: A quantidade de parênteses precisa ser par. Mas não só isso! É claro que olhando uma sequência inválida como essa:

```
()))
```

Percebemos que metade dos nossos parênteses devem abrir e metade fechar.


Mas é aí que está o pulo do gato: Isso não é o único fato que importa! Podemos ter a quantidade de parênteses certa, mas uma organização errada. Algo assim:

```
)()()(
```

Então fica claro que só contar os parênteses não nos ajuda em muita coisa. Então vamos tentar entender mais a fundo como a lógica dos parênteses funciona

Você concorda que, a cada parêntese que abrimos, "entramos" em mais um problema? Pra fechar qualquer parêntese mais externo, precisamos fechar todos os parênteses internos antes (se não, nem conseguimos chegar nele!). E é exatamente isso que uma pilha modela! A ideia de sempre precisar se preocupar com o problema mais novo ao invés do mais antigo.

Então sempre que encontrarmos um parêntese, nós podemos colocar na nossa pilha (como se estivéssemos entrando em uma recursão) pra resolver sempre o problema mais interno - ou seja, fechar o par de parêntese mais de dentro.

Assim, quando encontrarmos um parêntese fechando, significa que conseguimos fechar um par. Logo, podemos tirar o topo da nossa pilha, já que nós já validamos esse par (ele passa a não ser mais um problema!)

No caso de não ter nada na nossa pilha, chegamos justamente em um dos casos em que a sequência é inválida: Nós estamos tentando fechar um parêntese que não abre, então é impossível a sequência ser correta.

No fim das contas, se terminarmos uma pilha, a nossa quantidade de caracteres abrindo é exatamente igual à de caracteres fechando - porque todos que foram inseridos foram retirados mais à frente.

Portanto, com essas duas condições satisfeitas, a nossa pilha consegue "simular" perfeitamente um parser de parênteses.

<details>
<summary> <b>Curiosidade</b> </summary>
Nessa questão específica, o uso da pilha não é a única forma de resolver (podemos adicionar e subtrair uma única variável de maneira estratégica!), mas a solução mostrada nos traz um entendimento interessante de como uma pilha funciona.
</details>

#### Para fazermos juntos (#2)

Agora vamos pensar em uma situação um pouco diferente:

Você está ajudando um super cientista a montar uma maquina inovadora de viagem temporal! ...mas ele é muito desorganizado 💔
Por isso, os cabos + e - da máquina, ligados a pontos diferentes, passam por cima um do outro diversas vezes, e podem estar embaraçados! Você, como um bom ajudante, quer ajudá-lo a ser mais organizado, desembaraçando os cabos. Mas, como a máquina já está ligada, você não queria ter que desconectar nenhuma das pontas para alcançar essa façanha. Como conseguimos descobrir se o desembaraçamento é alcançável?

As imagens originais da questão são um pouco enganadoras, então aqui estão as produzidas pelo próprio PET (por mim, especificamente)



Note que *a todo momento* os dois cabos trocam de lugar, então os '+' e '-' na entrada indicam apenas qual cabo está passando por cima!

E aí, alguma ideia?

Vamos tentar analizar o comportamento dos cabos. Vamos supor (sem perda de generalidade) que o cabo azul (-) passou por cima no primeiro cruzamento deles.

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/cables1.png" alt="cabos-1" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Exemplificação 1<br /></em></p>
</div>

E aí, os cabos estão embaraçados ou desembaraçados?

Nenhum dos dois! eles só cruzarm, ainda não sabemos se eles estão embaraçados ou não - isso vai depender da próxima troca:

Caso o azul passe por cima novamente, note que nada se embaraçou, os cabos só trocaram de lugar sem se enrolar.

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/cables2.png" alt="cabos-2" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Exemplificação 2<br /></em></p>
</div>

No entanto, se o vermelho passasse por cima, teríamos cabos embaraçados.

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/cables3.png" alt="cabos-3" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Exemplificação 3<br /></em></p>
</div>

Note, então, que só embaraçamos os fios ao alternar (+ e -) qual passa por cima.

Seguindo nesse último caso, nós também temos 2 opções:

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/cables4.png" alt="cabos-4" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Exemplificação 4<br /></em></p>
</div>

Ou o cabo vermelho passa por cima e desembaralha o último nó (e retornamos à situação anterior!!!)

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/cables5.png" alt="cabos-5" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Exemplificação 5<br /></em></p>
</div>

Ou o cabo vermelho passa por baixo e piora mais ainda a nossa situação.

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/cables6.png" alt="cabos-6" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Exemplificação 6<br /></em></p>
</div>

Note que, da mesma forma que ocorreu na questão passada, não conseguimos desembaraçar os primeiros nós sem primeiro desembaraçar o último. Então também podemos usar uma pilha para representá-la! A grande diferença está nas nossas condicionais de empilhar. Nesse caso, nós só conseguimos desembaraçar um nó (e desemplilhar a nossa pilha) se o símbolo do próximo cruzamento for igual ao do topo da pilha (+ e + ou - e -).

Então o código poderia ficar algo mais ou menos assim:

```cpp

string s;

cin >> string;

stack<char> pilha;

for (int i = 0; i < s.size(); i++) {

    if (pilha.size()) { // se o tamanho da pilha eh diferente de 0 --> se tem algúem na pilha

        if (pilha.top() == string[i]) { // se conseguimos desembaralhar

            pilha.pop(); // não nos preocupamos mais!
        }

        else {
            pilha.push(string[i]); // caso contrário, é o novo problema que precisamos resolver
        }

    }

    else {
        pilha.push(string[i]); // em caso de a string estar vazia, apenas adicionamos um novo problema
    }

}

if (pilha.size()) { // ainda tem algum nó embaraçado
    cout << "No\n";
    return 0;
}

cout << "Yes\n"; // tudo está livre!

```


#### Para fazer sozinho

Agora que você já entendeu como essas TADs funcionam, vamos tentar fazer uma questão sozinho?

Você está ajudando na organização do desfile de carnaval desse ano e precisa organizar a entrada no sambódromo. Mas a ordem de chegada das escolas de samba foi diferente da que está planejada, então você tem a tarefa de tentar reorganizar as alegorias. Só tem um problema: a rua é estreita demais para permitir qualquer ultrapassagem. A sua única ferramenta é uma ruela sem saída, na qual os carros que você indicar podem entrar e depois sair de ré, seguindo direto para a entrada do local. Sabendo que nenhum dos carros, após sair da ruela, pode voltar para antes dela, como conseguimos verificar se é possível chegar à organização desejada?


<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/stpar1.png" alt="Representação-visual-stpar-1" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Representação visual 1<br /></em></p>
</div>

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/stpar2.png" alt="Representação-visual-stpar-2" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Representação visual 2<br /></em></p>
</div>

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/stpar3.png" alt="Representação-visual-stpar-3" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Representação visual 3<br /></em></p>
</div>

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/stpar4.png" alt="Representação-visual-stpar-4" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Representação visual 4<br /></em></p>
</div>

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/stpar5.png" alt="Representação-visual-stpar-5" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Representação visual 5<br /></em></p>
</div>

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/dia3/stpar6.png" alt="Representação-visual-stpar-6" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Representação visual 6<br /></em></p>
</div>


<details>e a 
<summary> <b>Spoiler!</b> </summary>
A saída dessa questão é pela simulação da rua como uma fila e da ruela sem saída como uma pilha!

<p/>
A todo o momento, você sabe exatamente qual carro deve seguir para a entrada. Então concorda que se em algum momento ele não estiver na frente da pilha, ele precisa estar em alguma posição futura da fila? Então você itera pela fila, movendo os carros para a rua sem saída. Se você não tiver mais carros na fila, o que você procura deve ser o primeiro da pilha. Se não, a solução é impossível!

</details>



Vamos seguir para o [Vjudge](https://vjudge.net/group/meda?r=ifo2QZRofQuVN2TjpPDM) para fazer algumas questões?


<!-- vjudge!! -->

