---
layout: layoutGit
title: Minicurso de Matemática aplicada à Computação
---
<div id="sumario" class="sumario-git">
    <details>
        <summary><a href="#introdução-à-algoritmos">Introdução à Algoritmos</a></summary>
        <ul>
            <li><a href="#definição-de-algoritmos">Definição de Algoritmos</a></li>
            <li><a href="#história-e-evolução-dos-algoritmos"> História e Evolução dos Algoritmos </a></li>
                <ul>
                    <li><a href="#antiguidade"> Antiguidade</a></li>
                    <li><a href="#idade-de-ouro-islâmica-século-ix"> Idade de Ouro Islâmica (Século IX)</a></li>
                    <li><a href="#século-xix"> Século XIX</a></li>
                    <li><a href="#década-de-1930"> Década de 1930</a></li>
                </ul>
        </ul>        
    </details>  
    <details>
        <summary><a href="#breve-visão-de-estruturas-de-dados">Breve visão de Estruturas de Dados</a></summary>
        <ul>
            <li><a href="#tipos-abstrados-de-dados-tad"> Tipos Abstratos de Dados (TAD) </a></li>
            <li><a href="#definição-de-estruturas-de-dados"> Definição de Estruturas de Dados</a></li>
        </ul>
    </details>
    <details>
        <summary><a href="#por-que-estudar-algoritmos-e-estruturas-de-dados"> Por que Estudar Algoritmos e Estruturas de Dados </a></summary>
            <ul>
                <li><a href="#eficiência-e-escalabilidade"> Eficiência e Escalabilidade </a></li>
                <li><a href="#processos-seletivos-mercado-de-trabalho"> Processos Seletivos (Mercado de Trabalho)</a></li>
                <li><a href="#exemplo-prático-two-sum"> Exemplo Prático: Two Sum </a></li>
            </ul>
    </details>
    <details>
         <summary><a href="#revisão-de-c">Revisão de C++</a></summary>
        <ul>
            <li><a href="#motivação">Motivação</a></li>
                <ul>
                    <li><a href="#porém-por-que-nós-iremos-utilizar-c-ao-invés-de-c-e-rust"> Porém, por que nós iremos utilizar C++ ao invés de C e rust?</a></li>
                </ul>
            <li><a href="#c-x-c">C++ x C</a></li>
            <li><a href="#comandos-simples">Comandos Simples</a></li>
                <ul>
                    <li><a href="#variáveis-condicionais-loops-e-funções"> Variáveis, Condicionais, Loops e Funções </a></li>
                        <ul>
                            <li><a href="#variáveis"> Variáveis</a></li>
                            <li><a href="#condicionais"> Condicionais</a></li>
                            <li><a href="#loops"> Loops </a></li>
                            <li><a href="#funções"> Funções </a></li>
                        </ul>
                    <li><a href="#recursão"> Recursão </a></li>
                        <ul>
                            <li><a href="#exemplos"> Exemplos </a></li>
                        </ul>    
                    <li><a href="#biblioteca-padrão-do-c"> Biblioteca Padrão do C++ </a></li>
                        <ul>
                            <li><a href="#como-utilizar-a-biblioteca-padrão"> Como Utilizar a Biblioteca Padrão </a></li>
                            <li><a href="#iostream"> Iostream</a></li>
                            <li><a href="#namespaces"> Namespaces </a></li>
                                <ul>
                                    <li><a href="#como-criamos-namespaces"> Como criamos Namespaces?</a></li>
                                </ul>
                                <li><a href="#stl"> STL </a></li>
                                <li><a href="#algorithm"> Algorithm </a></li>
                                <ul><li><a href="#min--max"> Min & Max </a></li></ul>
                                <li><a href="#string"> String</a></li>
                                <li><a href="#array"> Array</a></li>
                        </ul>
                </ul>
        </ul>
    </details>
    <details>
        <summary><a href="#análise-de-complexidade-de-algoritmos"> Análise de Complexidade de Algoritmos</a></summary>
        <ul>
            <li><a href="#propondo-dois-algoritmos-para-resolver-um-pequeno-jogo"> Propondo dois algoritmos para resolver um pequeno jogo</a></li>
            <ul>
                <li><a href="#o-jogo"> O jogo </a></li>
                <li><a href="#algoritmo-1"> Algoritmo 1 </a></li>
                <li><a href="#algoritmo-2"> Algoritmo 2 </a></li>
                <li><a href="#comparando-o-crescimento-dos-dois-algoritmos"> Comparando o crescimento dos dois algoritmos</a></li>
            </ul>
            <li><a href="#o-que-aprender-com-esses-dois-algoritmos"> O que aprender com esses dois algoritmos</a></li>
            <li><a href="#o-que-é-a-complexidade-do-algoritmo"> O que é a complexidade do algoritmo</a></li>
        </ul>
        <ul>
            <li><a href="#como-é-estimada-a-complexidade-temporal"> Como é estimada a complexidade temporal</a></li>
            <ul>
                <li><a href="#modelo-ram"> Modelo Ram</a></li>
                <li><a href="#função-de-complexidade-de-tempo"> Função de Complexidade de Tempo</a></li>
                <ul>
                    <li><a href="#melhor-caso"> Melhor Caso </a></li>
                    <li><a href="#pior-caso"> Pior Caso</a></li>
                    <li><a href="#caso-médio"> Caso Médio </a></li>
                </ul>
                <li><a href="#o-que-entender-com-os-três-casos"> O que entender com os três casos</a></li>
            </ul>
            <li><a href="#análise-assintótica"> Análise Assintótica </a></li>
            <ul>
                <li><a href="#como-as-funções-de-complexidade-temporal-são-classificadas"> Como essas funções são classificadas</a></li>
                <li><a href="#notações-assintóticas"> Notações Assintóticas </a></li>
                <ul>
                    <li><a href="#notação-θ"> Notação θ </a></li>
                    <li><a href="#notação-o"> Notação O </a></li>
                    <li><a href="#notação-ω"> Notação Ω </a></li>
                </ul>
            </ul>
            <li><a href="#classes-de-complexidade"> Classes de complexidade </a></li>
            <ul>
                <li><a href="#complexidade-o1"> Complexidade O(1) </a></li>
                <li><a href="#complexidade-ologn"> Complexidade O(log n)</a></li>   
                <li><a href="#complexidade-on"> Complexidade O(n) </a></li>
                <li><a href="#complexidade-on-1"> Complexidade O(n²) </a></li>
                <li><a href="#complexidade-onlogn"> Complexidade O(n*log n) </a></li>
                <li><a href="#complexidade-o2n"> Complexidade O(2^n) </a></li>
            </ul>
        </ul>
    </details>
    <summary><a href="#exercícios">Exercícios</a></summary>
    

  <button class="toggle-button" id="toggle-button">
      Esconder Sumário
  </button>
</div>
<br>


# Introdução à Complexidade Assintótica

## Introdução à Algoritmos  


### Definição de Algoritmos

De forma informal, um **algoritmo** pode ser definido como qualquer procedimento computacional bem definido, que recebe um valor (ou conjunto de valores) como **entrada** e produz um valor (ou conjunto de valores) como **saída** (Cormen, 2002).

Outra forma de enxergar algoritmos é como ferramentas para **resolver problemas computacionais específicos**. Nessa perspectiva, o algoritmo descreve a relação **entrada-saída** de um programa (Cormen, 2002).

Assim, pode-se entender um algoritmo como um **conjunto de instruções** destinadas a realizar uma tarefa.

**Exemplo:**  
Dada a sequência `<4, 6, 2, 7, 8>` como entrada, um algoritmo de ordenação pode seguir os seguintes passos:
1. Comparar os elementos da sequência;
2. Identificar pares fora de ordem;
3. Trocar esses elementos de posição;
4. Repetir o processo até que não existam mais elementos fora de ordem.

Assim, o algoritmo retorna `<2, 4, 6, 7, 8>` como saída.

---

### História e Evolução dos Algoritmos

#### Antiguidade

- **Algoritmo de Euclides (300 a.C.)**  
  Técnica para encontrar rapidamente o **MDC** (máximo divisor comum) de dois inteiros.

#### Idade de Ouro Islâmica (Século IX)

- **Muhammad ibn Musa al-Khwarizmi**, matemático que contribuiu para o desenvolvimento da álgebra.  
- Para resolver equações matemáticas, al-Khwārizmī seguia sistematicamente uma sequência de passos, conceito fundamental de **algoritmo**.  
- Após ser traduzido para o latim, seu livro sobre numerais hindus recebeu o título *Algorithmi de Numero Indorum*, origem da palavra *algoritmo*.

#### Século XIX

- **Ada Lovelace** criou o que é considerado o **primeiro algoritmo de computador**, projetado para calcular números de Bernoulli na máquina analítica de Babbage.

#### Década de 1930


- **Alan Turing**: Formalizou o conceito de computação com a **Máquina de Turing**, estabelecendo a base teórica da ciência da computação moderna.
- Introduziu a noção de “computável”.

<!-- 
Acho que essa parte pode ser no final
-->

## Breve visão de Estruturas de Dados

Para compreender o conceito de Estruturas de Dados, é fundamental conhecer primeiro os Tipos Abstratos de Dados (TADs). Esses dois conceitos estão diretamente relacionados, mas não são a mesma coisa.


### Tipos Abstratos de Dados (TAD)
Um TAD é formado por:
- um **conjunto de dados**
- um **conjunto de operações** para manipular esses dados

Um mesmo TAD pode ter várias implementações.

### Definição de Estruturas de Dados
Uma Estrutura de Dados é a implementação concreta de um TAD em uma linguagem de programação, usando algoritmos.

As estruturas estabelecem:
- a forma que os dados são dispostos na memória
- como as operações são realizadas

## Por que estudar Algoritmos e Estruturas de Dados?

### Eficiência e Escalabilidade

Quando criamos programas que vão trabalhar com poucos dados, qualquer código roda instantaneamente. Mas no mundo real, lidamos com Ordens de Magnitude gigantescas.

Um algoritmo ruim pode rodar em 0.1 segundos para 100 usuários, mas demorar 100 anos para rodar se tiver 1 milhão de usuários. 

Estudar algoritmos nos ensina a sair da "Força Bruta" (tentar todas as combinações possíveis) e encontrar caminhos inteligentes para resolver problemas.

### Processos Seletivos (Mercado de Trabalho)

As maiores empresas de tecnologia do mundo utilizam problemas de Algoritmos e Estruturas de Dados como filtro em suas entrevistas.

Tecnologias e frameworks (React, Django, Spring) mudam o tempo todo. Mas a base da lógica computacional e a capacidade de resolver problemas complexos com performance permanecem.

### Exemplo Prático: Two Sum

Um clássico de entrevistas (famoso no LeetCode) é o problema **Two Sum**:

> "Dado um array de inteiros e um número alvo (target), retorne os índices dos dois números que somados resultam no alvo."

**Força Bruta**: Testamos cada número com todos os outros números.

```
Função TwoSum(lista_numeros, alvo):
    n = tamanho(lista_numeros)
    
    Para i de 0 até n - 1:
        Para j de i + 1 até n - 1:
            
            soma = lista_numeros[i] + lista_numeros[j]
            
            Se soma == alvo:
                Retornar (i, j)
                
    Retornar Nulo
```
Se tivermos 1 milhão de números, o computador fará trilhões de operações. Isso travaria o servidor.

**Abordagem Eficiente**: Se usarmos uma estrutura adequada (como um Hash Map), podemos resolver esse problema passando pelo array apenas uma vez.

Mesmo em um problema simples, a diferença entre uma solução ingênua e uma solução eficiente pode ser enorme.


##  Revisão de C++
### Motivação             <!-- Explicar por que estamos usando C++-->

Uma dúvida comum sobre as matérias introdutórias de Algoritmos e Estruturas de Dados é sobre a linguagem utilizada, tanto que raramente vemos aulas utilizando linguagens de alto nível como Python e Java, mesmo que as aplicações estejam presentes nos dois.

O motivo disso é o controle de memória poderoso que as linguagens de baixo nível como C, C++ e Rust possuem. Por exemplo, por que nós deveríamos implementar listas em Java, sendo que C++ permite a manipulação direta de memória (além de ser BEM mais rápido...).
No fim, utilizamos linguagens de baixo nível para matérias como essas por conta de sua praticidade em torno do controle de memória, onde, mesmo não impedindo a implementação em linguagens de alto nível, definitivamente é a opção mais eficiente.


#### Porém, por que nós iremos utilizar C++ ao invés de C e Rust?

Excelente pergunta!

<details>
<summary> SPOILER! </summary>

    Simplicidade :)

</details>

Escolhemos o C++ principalmente por conta de seu alto uso em disciplinas de graduação e pela sua grande versatilidade de ferramentas, tornando esse curso uma porta de entrada mais segura para disciplinas futuras.


### C++ x C

Como o nome já diz, o C++ tem como objetivo principal adicionar novas funcionalidades para o C, sendo as principais adições: 

* Suporte para programação orientada ao objeto (POO).

* Inclusão do STL (Standard Template Library). 

* Sistema de gerenciamento de memória mais seguro.

Essas mudanças não tornam C++ uma linguagem "superior" ao C, mas diferenciam o principal uso das duas. Veremos a seguir as principais "diferenças" entre cada sintaxe, de forma a se preparar para analisar alguns algoritmos em C++.


### Comandos Simples

#### Variáveis, Condicionais, Loops e Funções

Pelo incrivel que pareça, a sintaxe de C++ é extremamente similar à sintaxe de C (um pouco óbvio, mas é bom assentuar).

Em geral, todas essas estruturas irão funcionar exatamente da mesma forma em C++, logo, revisaremos cada uma delas de forma rápida.

##### Variáveis 

A declaração de variáveis segue o padrão `tipo` + `nome da variável`:

```cpp

int main() {

    int inteiro;
    float flutuante;
    long  woooooooow;
    bool booleano;
    char caractere1, caractere2; // Ao colocar a vírgula, estamos declarando 2 (duas) variáveis do tipo char.


    return 0;
}

```

Do mesmo jeito, as operações vistas nos tipos int, float, long em C funcionam exatamente da mesma forma em C++:

```cpp

int main(){

    int num1, num2, num3, num4;
    num1 = 2;
    num2 = 5;
    num3 = 10;

    
    num1 += num2 // num1 = 2 + 5 = 7 
    num4 = num2 * num3; // num4 = 5 * 10 = 50
    num2 -= 1; // num2 = 5 - 1 = 4
    
    
    // (...)

    return 0;
}

```

##### Arrays

Embora arrays também sejam tipos, separamos em outro sub-tópico por ser importante para tópicos futuros.

Arrays são apenas "coleções ordenadas" de elementos de algum tipo. Declaramos algum array da seguinte forma:

`tipo` + `nome do array[tamanho do array]`.

Cada elemento de um array pode ser acessado após a declaração, apenas colocando sua posição dentro dos colchetes:

```cpp
int arrayInt[4];

arrayInt[0] // Primeiro elemento do array
arrayInt[1] // Segundo elemento do array
arrayInt[2] // Terceiro elemento do array
arrayInt[3] // Quarto elemento do array


```

Após isso, podemos atribuir seus valores de duas maneiras, individualmente (atribuindo um por um), ou de forma direta (igualando à alguma lista de mesmo tamanho durante a declaração):

```cpp

// podemos "encher" um array das seguintes formas:

int arrayInt[4];


arrayInt[0] = 0;
arrayInt[1] = 1;
arrayInt[2] = 2;
arrayInt[3] = 3;


// ou também podemos atribuir seu valor durante a declaração:

int arrayInt[] = {0, 1, 2, 3}

```

##### Condicionais

As condicionais serão, como o nome sugere, estruturas que irão executar alguma ação com base em alguma condição, onde será dada por um booleano, ou uma expressão que retorne um booleano.

Iremos utilizar, similar ao C, o comando `if` (se) e `else`(senão) para representar essa estrutura, tendo como padrão:
```cpp

if(condição){
    //(...)
}

//ou, caso queira utilizar um caso contrário:

if(condição){
    //(...)
}
else{
    //(...)
}

```

Caso você queira encontrar algum caso que não seja exatamente o contrário de sua condição, você pode juntar os dois comandos, formando um `else if`, como visto abaixo:


```cpp

if(condição1){
    //(...)
}
else if(condição2){     // note que o que irá acontecer nesse "else if" apenas acontece se a 
                        // condição 1 for falsa e a condição 2 for verdadeira
    //(...)
}

```

Podemos utilizar condicionais para garantir que um pedaço de nosso programa funcione de formas específicas para cada caso:

```cpp

int main() {

    int num1, num2, num3, num4;

    num1 = 5
    num2 = 5;
    num3 = 10;
 
    if(num1 == num2){             // 5 == 5
        num4 = num1;              // num4 = 5
    }
    else if(num1 == num2 * num3){ // 5 != 50
        num4 = num3;
    }
    else{
        num4 = 0;
    }                            

    return 0;
}

```

Lembrando que, pela condição ser um **booleano**, podemos também utilizar operadores lógicos como **&& (ou and)** e &#124; &#124; **(ou or)** dentro de nossas estruturas.


```cpp

int main(){

    int num = 5;
    int num2;
    
    bool booleano = true;

    if(num == 3 || num == 1){
        num2 = 10;              //caso num = 3 ou num = 1
    }
    else if(num == 5 && booleano){
        num2 = 2;               // caso num = 5 e booleano = true
    }
    else{                       // caso default
        num2 = 0;
    }

    //como booleano = true e num == 5, num2 = 2.

    return 0;
}

```

Existe também outra estrutura em C++ que é o switch case. Ele irá funcionar de forma similar ao `if`, porém ao invés de escolher um caso com base em uma proposição, ela irá escolher com base no valor de alguma variável.

O comando `switch` segue o padrão:

```cpp

tipo variavel;

switch(variavel) {

    case(valor1):
        //(...)
        break;
    case(valor2):
        //(...)
        break;

    //(...)

    default:        //default é um "caso padrão", mas é opcional.
        //(...)
}

```
Geralmente o uso do switch case é focado em números inteiros, principalmente para ver casos onde algum número se iguala a outro.

```cpp

int main(){

    int dia;
    dia = 2;
    switch(dia){
        case 1:
            // é domingo
            break;
        case 2:
            // é segunda
            break;
        case 3:
            // é terça
            break;
        case 4:
            // é quarta
            break;
        case 5:
            // é quinta
            break;
        case 6:
            // é sexta
            break;
        case 7:
            // é sábado
            break
    }
    
    return 0;
}

```

##### Loops

Os loops tem 3 (três) "tipos de estrutura" principais, onde cada uma tem algum uso específico.
Elas seguem, respectivamente, os seguintes padrões de escrita: 

```cpp

    for(variavel de controle; condição ; contador)

    while(condição)

    do{
        //(...)
    }while(condição)


```

O `for` também possui o padrão chamado de **for each**, utilizado para percorrer contêineres, mantendo as informações de cada variável que foi iterada:

```cpp

for(variável : contêiner)


// exemplo:

int main(){
    
    int arr[5] = {1, 2, 3, 4, 5};
    int soma = 0;

    for(int var : arr){
        soma += var; // cada elemento de arr será somado em soma
    }

    // soma = 1 + 2 + 3 + 4 + 5 = 15

    return 0;
}

```


Caso você nunca tenha visto C ou C++, talvez esteja se perguntando: `qual a diferença entre eles?`, o que é bem normal.

Em geral, cada um deles possuem pequenas coisas que os tornam diferentes e "melhores" em determinados casos:

```c++

for() := Quando você precisa saber qual passo do loop você está

for() each := Quando você precisa analizar todos os elementos de um contêiner igualmente.

while() := Quando você não precisa saber o passo que você está.

do{}while() := Quando você quer realizar uma ação antes da condição acontecer.

```

No fim, você até consegue utilizar qualquer um deles de forma análoga, porém por questões de boas práticas e performance, o recomendado é utilizar cada um em seu respectivo contexto.


```cpp 

int main(){

    int array[5];

    for(int i = 0; i < 5; i += 1){
        array[i] = i;
    }

    return 0;
    }


```

Você sabe dizer o que esse loop faz?

<details>
<summary> SPOILER! </summary>

    transforma o array em {0, 1, 2, 3, 4}, passando por cada posição dele.

</details>


##### Funções

Em geral, funções são basicamente blocos de codigos que retornam algum valor. Nelas, podemos passar valores (que chamamos de parâmetros ou argumentos), esses valores não tem quantidade máxima e podem ser alterados dentro das funções, porém, retornam ao valor inicial após ela terminar.

Futuramente iremos descobrir como fazer essas funções alterarem permanentemente os parâmetros, porém, por agora assumiremos que elas são "funções puras" que não afetam eles.

As funções são declaradas da seguinte forma:

```cpp
tipo nome_da_função(){
    // conteúdo da função
    //(...)
    return valor // esse valor é do tipo da função.
}

//para adicionar parâmetros, basta declara-los em seus parênteses:

tipo nome_da_função(tipo1 valor1, tipo2, valor2){
    // conteúdo da função
    //(...)
    return valor // esse valor é do tipo da função.
}

```

Após a declaração e definir o que está na função, você poderá chamá-la em qualquer corpo, apenas colocando o nome dela e seus parâmetros:

```cpp

int modulo(int a){
    if(a < 0){
        return -a;
    }
    
    return a;
    
}

int main(){

    int valor1, valor2;

    valor1 = -9;
    valor2 = modulo(valor1);
                            // valor2 será 9.
    return 0;
}

```

#### Tipos Estruturados

Em geral, tipos estruturados (ou structs), são como "tipos definidos por nós", podendo armazenar outros tipos dentro dela. Elas seguem o seguinte padrão de escrita:

```cpp

struct TipoEstruturado {

    tipo1 valor1;
    tipo2 valor2;

    //(...)
}

```

Podemos também acessar cada um desses valores dentro de nosso código, por exemplo:

```cpp

struct Par{
    int direita;
    int esquerda;
}


int main(){

    Par parzinho;         //declara uma variável do "tipo" Par

    parzinho.direita = 1;   
    parzinho.esquerda = 2;

    return 0;
}

```

Mas, isso vocês já devem saber.

O grande diferencial entre structs em C e C++ é a possibilidade de colocar funções dentro delas!

Chamaremos essas "funções dentro do struct" de métodos, e eles podem ser acessados da mesma forma que uma variável é acessada.

```cpp

struct Par {
    int direita;
    int esquerda;


    int soma_dos_dois(){
        return direita + esquerda;
    }

    void adicionar_na_direita(int valor){
        direita += valor;
    }
}


int main(){

    Par parzinho;
    int soma;

    parzinho.direita = 1;
    parzinho.esquerda = 2;

    soma = parzinho.soma_dos_dois(); // soma = 1 + 2 = 3.

    parzinho.adicionar_na_direita(soma) // parzinho.direita = 1 + 3 = 4.


    return 0;
}

```

### Recursão

A recursão é uma técnica de programação em que uma função se chama para resolver um problema.
Geralmente ela é utilizada em problemas onde para chegar na esposta precisa se dividir em pequenos sub-problemas.

Para criar uma função recursiva, primeiro precisamos definir dois casos principais:


Caso de parada : caso onde a função irá parar de se chamar.

Caso recursivo : caso onde a função irá se chamar com um sub-problema menor.


```cpp

int fatorial(int n){

    if(n <= 1){     // caso de parada: n <= 1
        return 1;
    }
    else{           // caso recursivo: n > 1
        return n * fatorial(n - 1); // chamada recursiva
    }
}


int main(){

    int fat = fatorial(3); // fat = 3 * 2 * 1.

    return 0;
}

```


#### Exemplos

Teoricamente seria apenas isso, mas vamos ver em prática como que a recursão funciona:


Iremos analisar a função **fatorial**:

Inicialmente na função main, chamamos fatorial(3):

```cpp

fatorial(3);

if(3 <= 1) return 1; // como 3 > 1, passa para o else.

else{
    return 3 * fatorial(3 - 1); // Retorno de fatorial(3)
}

```
Logo, teremos que ver o retorno de fatorial(3 - 1).

```cpp
fatorial(3 - 1) = fatorial(2)

if(2 <= 1) return 1; // como 2 > 1, passa para o else:

else{
    return 2 * fatorial(2 - 1); // Retorno de fatorial(2)
}

```
Logo, teremos que ver o retorno de fatorial(2 - 1).

```cpp
fatorial(2 - 1) = fatorial(1)

if(1 <= 1) return 1; // como 1 = 1, fatorial(1) = 1

```
<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/Recursão-1-exemplo.png" alt="representação-visual-recursão" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Representação visual<br /></em></p>
</div>


Então, fatorial(3) = 6.


Outro exemplo comum está na **Sequência de Fibonacci**.

Utilizaremos o seguinte código para exemplificar:

```cpp

int fibo(int n){

    if(n <= 1)return 1;
    else return fibo(n - 1) + fibo(n - 2);
}


int main(){

    int fib = fibo(5);

    return 0;
}

```

A função `fibo` é um pouco diferente da função `fatorial`, principalmente por possuir duas chamadas recursivas. Então, vamos analisar como ela chega no resultado de `fibo(5)`.

Inicialmente, temos que definir o caso recursivo e o caso de parada da função `fibo()`:

```cpp

int fibo(int n){
    // Caso de parada: n <= 1
    if(n <= 1)return 1;

    // Caso recursivo: n > 1
    return fibo(n - 1) + fibo(n - 2);
}

```

Após isso, veremos o que acontece após a declaração `fibo(5)`:

```cpp

fibo(5);

if(5 <= 1) return 1; // como 5 > 1, passa para o else.

else return fibo(5 - 1) + fibo(5 - 2) // retorno de fibo(5)

```

Logo, temos que `fibo(5) = fibo(4) + fibo(3)`. Veremos a seguir o valor de `fibo(4)`.

``` cpp

fibo(4);

if(4 <= 1) return 1; // como 4 > 1, passa para o else.

else return fibo(4 - 1) + fibo(4 - 2) // retorno de fibo(4)

```

Logo, temos que `fibo(4) = fibo(3) + fibo(2)`. Veremos a seguir o valor de `fibo(3)`.

```cpp

fibo(3);

if(3 <= 1) return 1; // como 3 > 1, passa para o else.

else return fibo(3 - 1) + fibo(3 - 2) // retorno de fibo(3)

```

Logo, temos que `fibo(3) = fibo(2) + fibo(1)`. Veremos a seguir o valor de `fibo(2)`.

```cpp

fibo(2);

if(2 <= 1) return 1; // como 2 > 1, passa para o else.

else return fibo(2 - 1) + fibo(2 - 2) // retorno de fibo(2)

```
Logo, temos que `fibo(2) = fibo(1) + fibo(0)`. Veremos a seguir o valor de `fibo(1)`.

```cpp

fibo(1);

if(1 <= 1) return 1; // como 1 <= 1, retorna 1.

```

Logo, temos que `fibo(1) = 1`. Analogamente, `fibo(0)` também será igual à 1 (0 <= 1). Por fim, iremos realizar a soma para chegar em `fibo(5)`.

```cpp

fibo(5) = fibo(4) + fibo(3);
fibo(5) = fibo(3) + fibo(2) + fibo(3);
fibo(5) = fibo(2) + fibo|(1) + fibo(2) + fibo(2) + fibo(1);
fibo(5) = fibo(1) + fibo(0) + fibo(1) + fibo(1) + fibo(0) + fibo(1) + fibo(0) + fibo(1);
fibo(5) = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1;
fibo(5) = 8;

```

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/Recursão-2-exemplo.png" alt="Representação-visual-fibonacci" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>Representação visual<br /></em></p>
  </div>


Finalmente, descobrimos que `fibo(5) = 8` !

Definitivamente isso demorou mais do que deveria, será que temos como "melhorar" esse código...?

### Biblioteca padrão do C++

A Biblioteca padrão é uma coleção de classes e funções pré-montadas (chamadas de Headers) com o foco em facilitar o programador. A biblioteca padrão do C++ incorpora a biblioteca padrão do C, além de diversas adições que a linguagem trouxe.

Não iremos abordar todas as funcionalidades da biblioteca do C++ (até por que poderia durar o minicurso inteiro kk), mas mostraremos alguns usos interessantes durante o curso.

#### Como utilizar a biblioteca padrão?

Inicialmente, colocamos no topo do nosso código o comando `#include` para "chamar" o conteúdo de algum header para o nosso código.
Esse comando é utilizado para (literalmente) copiar e colar o conteúdo de algum arquivo dado o diretório do próprio.

Utilizamos o `#include` de duas formas:

```cpp

#include <alguma_coisa>// podemos chamar o arquivo com angle brackets <>
#include "outra_coisa" // ou com aspas ""

```

A diferença entre os dois está no propósito de cada um.
As aspas `""` são usadas para achar arquivos em diretórios específicos do usuário (o que é desnecessário durante este minicurso), enquanto os angle brackets `<>` são utilizados para chamar headers da biblioteca.

Além disso, para diferenciar possiveis funções de mesmo nome, também devemos colocar o prefixo `std::` antes de nossas classes/funções recebidas.

#### Iostream

Esse header é o verdadeiro substituto do clássico **printf()** do C.

O Iostream é a junção de outros 4 templates básicos, sendo os principais o **Istream** e o **Ostream**. O nome deles vem da junção da primeira letra de (I)nput e (O)utput, somado à Stream (fluxo), ou seja:

* **istream** : fluxo de entrada (controla a leitura de dados colocados pelo usuário).

* **ostream** : fluxo de saída   (controla a saída de informações gerados pelo programa).

Logo, o Iostream será basicamente o header que armazena as funções de entrada e saída do programa.
Nele, temos os seguintes comandos principais:

* **std::cin** : "função" que será utilizada para a entrada de dados.

* **std::cout** : "função" que será utilizada para a saída de dados.

* **std::endl** : "constante" que será utilizada para iniciar outra linha na saída (similar ao "/n").


obs: note as aspas que coloquei em cada "definição" dos comandos, apenas chamarei daquelas formas para facilitar o entendimento.


```cpp

#include <iostream> // chamada do header

int main() {

    int var;

    std::cin >> var;                 // comando para entrada de variáveis.
    std::cout << var << std::endl;   // comando para a saída do programa.

    return 0;
}               

```

Note que, utilizaremos os brackets para relacionar a entrada e saída de cada comando, usando `>>` para a entrada e `<<` para a saída.

Em geral, sempre que precisarmos trabalhar com entrada/saída de programas, utilizaremos esse header.

Mas vocês não acham que escrever sempre `std::` é cansativo?

#### Namespaces

Como dito anteriormente: "**para diferenciar possiveis funções de mesmo nome, também devemos colocar o prefixo std:: antes de nossas classes/funções recebidas**". O motivo disso é por que a biblioteca padrão está dentro de um namespace.

Namespaces são uma "artimanha" criada para evitar repetições de nomes em projetos grandes, mas, que em projetos pequenos irritam alguns programadores. Nesse caso, acabaram criando um namespace chamado `std` (STandarD) para afunilar suas classes e funções.

##### Como criamos Namespaces?

Na verdade isso é até bem fácil...

Apenas devemos declarar um espaço com o comando `namespace nome_do_namespace` e escrever nosso código nele :) .


```cpp

#include <iostream>

namespace heitor {     

    void chamarMeuNome(){  //função dentro do meu namespace
        std::cout << "Heitor" << std::endl;
    }

}



int main(){

    heitor::chamarMeuNome(); // saída: Heitor

    return 0;
}


```

Porém, note que caso eu não use o prefixo `heitor::`, o código daria erro.

```cpp

int main(){

    chamarMeuNome(); // erro: chamarMeuNome não está no escopo.

    return 0;
}

```

Como namespaces não são muito utilizados em projetos pequenos, também temos a possibilidade de não ter que sempre escrever o prefixo deles!

Para isso, utilizamos o comando `using namespace nome_do_namespace`.

```cpp
#include <iostream>

using namespace std;

int main(){

    int var;
    
    cin >> var;          // nesse caso não precisamos do std::
    cout << var << endl;

    return 0;
}


```

A partir de agora, por simplicidade, todos os nossos exemplos utilizando a biblioteca de c++ terão esse comando.

#### STL

A STL (Standard Template Library) é uma "pequena biblioteca" dentro da biblioteca padrão do C++. Ela foi uma das principais adições ao C++, transformando completamente a biblioteca padrão da linguagem.

O grande diferencial dela está no próprio nome: **Standard Template**. Basicamente, por conta dos templates da biblioteca, ela se torna uma biblioteca extremamente genérica, podendo utilizar suas classes/funções para a maioria das tipagens do C++. Não só isso, mas torna a linguagem extremamente rápida, mesmo com tantas adições.  

Os componentes da STL se dividem em 3 tipos:

<div class="figure" style="flex: 1; text-align: center;">
    <img src="assets/images/STL-divisões.png" alt="Tipos em STL" style="display: block; max-width: 90%; margin: 0 auto; border-radius: 8px;" />
    <p style="margin: 0.5rem auto 0; text-align: center;"><em>STL -> tipo do componente -> explicação<br /></em></p>
  </div>


Um erro comum é a confusão entre "Biblioteca padrão" e "STL", então tomem muito cuidado com isso!

#### Algorithm

O Algorithm é um dos maiores headers da STL, contendo mais de 100 algoritmos de busca, ordenação, contagem, manipulação e comparação de elementos em contêineres.

Nele, apresentarei apenas 2 funções importantes, Min e Max.

##### Min & Max

Essas duas funções tem objetivos claros, verificar 2 elementos e retornar o maior ou menor valor dentre os dois. Não só isso, mas as duas também podem receber um contêiner como parâmetro e retornar o maior ou menor elemento dentro do mesmo.

```cpp
#include <iostream>
#include <algorithm>

using namespace std;


int main(){

    int valor1 = 2;
    int valor2 = 5;

    cout << min(valor1, valor2) << endl; // saída: 2.
    cout << max(valor1, valor2) << endl; // saída: 5.

    cout << min({2, 5, 10, 3, 1}) << endl; // saída: 1.
    cout << max({2, 5, 10, 3, 1}) << endl; // saída: 10.

    return 0;
}

```

#### String

Ao contrário de C, a STL oferece uma biblioteca completa que adiciona o tipo **String** sem ter que criar um array de caracteres. Além disso, a biblioteca também fornece diversas funções internas que facilitam o uso dos objetos do tipo `string`.

```cpp 
#include <iostream>
#include <string>

using namespace std;


int main(){

    string nome = "Heitor";

    cout << nome << endl; // saída: Heitor
    
    return 0;
}
```

Porém, podemos também verificar elementos de strings dado seu índice, similar ao C:

```cpp
#include <iostream>
#include <string>

using namespace std;


int main(){

    string hoje = "Segunda-feira";

    cout << hoje[0] << endl; // saída: S

    return 0;
}
```

Dentre as diferenças principais de strings nas duas linguagens, a principal está no gerenciamento de memória. Ao contrário de C, em C++ não precisamos nos preocupar em alocar o tamanho exato da string durante sua declaração, pois as strings crescem ou diminuem dinâmicamente conforme o necessário.

Outra diferênça importante ocorre na manipulação das strings, onde em C++ elas possuem métodos internos e operadores mais intuitivos.
Por exemplo, temos funções como `size()` e `empty()` internamente, além de utilizarmos o operador "+" para concatenar e o operador `==` para comparar strings.

```cpp
#include <iostream>
#include <string>

using namespace std;


int main(){

    string nome = "Heitor";
    string sobrenome = "Campos";

    string nomeCompleto = "";

    if(!nome.empty() and !sobrenome.empty()){ // caso o nome e o sobrenome tenham elementos
        nomeCompleto = nome + " " + sobrenome; // nomeCompleto = Heitor Campos
    }
    

    cout << nomeCompleto << endl;



    return 0;
}
```

Algumas funções disponíveis para as strings são:


* **size()** : retorna um inteiro que corresponde ao tamanho da string.

* **empty()** : retorna um booleano que corresponde se a string está vazia ou não.

* **begin()** : retorna um iterador que aponta para o primeiro elemento da string.

* **end()** : retorna um iterador para o a posição após o último elemento da string.



#### Array

Ao contrário dos últimos headers, este foi adicionado na versão C++11.


**obs: chamarei o array do header de std::array e o array com colchetes ([]) de array clássico.**


Sim, o `std::array` funciona de forma bem parecida com os arrays clássicos, mas possui vantagens nítidas sobre seu irmão mais velho.

Embora tenhamos que escrever um pouco mais, o `std::array` fornece algumas funções internas, funcionalidades extras e suporte completo para outros algoritmos da STL.


A declaração do `std::array` é um pouco diferente do convencional. Além de declarar colocando `std::array` no começo, também utilizamos os angle brackets para definir o tipo e o tamanho do array.

```cpp
#include <array>

using namespace std;

int main(){

    array<int, 5> arr = {1, 2, 3, 4, 5}; // declaração

    return 0;
}

```

Além disso, como não temos colchetes, acessamos os elementos com a função interna `at(índice)`:

```cpp

#include <array>

using namespace std;

int main(){

    array<int, 5> arr = {1, 2, 3, 4, 5}; 

    cout << arr.at(2) << endl; //saída: 3  

    return 0;
}

```

Essa mudança torna o acesso de elementos mais seguro, possuindo tratamento adequado caso o índice esteja fora do tamanho do array.

Outro problema "resolvido" pelo `std::array` é na cópia entre arrays.
Originalmente, não podemos copiar dois arrays clássicos sem funções externas (criadas pelo usuário ou por outras bibliotecas), mas, que são feitas de forma instantânea na `std::array` com o operador `=`.

```cpp
#include <array>

using namespace std;

int main(){

    array<int, 5> arr = {1, 2, 3, 4, 5}; 

    array<int, 5> arr2;

    arr2 = arr; // arr2 = {1, 2, 3, 4, 5}

    return 0;
}
```

Além disso, o `std::array` também providencia comandos similares aos vistos em strings, como:

* **size()** : retorna o tamanho do array.

* **empty()**: retorna um booleano que corresponde se o array está vazio ou não.

* **begin()**: retorna um iterador que aponta para o primeiro elemento do array.

* **end()**  : retorna um iterador para o a posição após o último elemento do array.

* **front()** : retorna o primeiro elemento do array.

* **back()** : retorna o último elemento do array.


## Análise de Complexidade de Algoritmos

Na computação, a principal forma de resolver problemas reais é com o desenvolvimento de algoritmos. Nesse sentido, surge a necessidade de classificar algoritmos pelas suas características objetivas, como tempo de execução, uso de memória, uso de recursos computacionais, entre outros. Dessa forma, a **análise de complexidade de algoritmos** se mostra como uma habilidade essencial para programadores que almejam desenvolver softwares rápidos e funcionais.

Para exemplificar a importância de saber analisar algoritmos será proposto um jogo e 2 formas diferentes de resolver o problema apresentado pelo jogo.

### Propondo dois algoritmos para resolver um pequeno jogo
#### O jogo

```
Takahashi estava explorando as ruínas da antiga civilização Logônia, até 
que se deparou com uma porta trancada e uma máscara falante que o desafiou 
para um jogo 

A máscara disse: "Pensarei em um número de 1 a 100 e terás de adivinhá-lo
em até 7 chutes. A cada chute errado direi se o teu número é maior ou menor
que o número correto. Para venceres uma rodada, terás de acertar o número.
Somente abrirei a porta se acertares o número em 5 rodadas consecutivas"

Nossa tarefa é ajudar Takahashi a vencer no jogo da máscara 
```
#### Algoritmo 1.

##### O algoritmo:
 Nós vamos chutar números em sequência. Começamos chutando 1. Se 1 não for o número certo, chutamos 2 e assim vai. Vamos sempre chutando os números sequencialmente.
##### Analisando o algoritmo
O algoritmo tem uma ideia simples. É possível verificar que ele vai encontrar o número em algum momento, pois testará todas as opções exaustivamente. Infelizmente, o preço que se paga por essa simplicidade é a quantidade exagerada de chutes, em média, necessários para descobrir o número secreto.

Em casos ideais o número secreto estará entre os 7 primeiros números da sequência. Assim, com sorte o suficiente, conseguiriamos vencer o jogo.
O problema é que nos piores casos nós precisariamos de até 100 chutes para acertar o número. Considerando que todos valores de 1 a 100 tem a mesma chance de serem escolhidos, temos uma chance de 7% de o número estar entre 1 a 7.
##### Quantos chutes, em média, precisamos para acertar dessa forma?
 Utilizando o conceito de valor esperado, conceito da probabilidade e estatística, é possível calcular que Takahashi precisaria de, em média, 50,5 chutes para acertar o número
 
##### E se fossem números de 1 a 1.000, ou 1 a 1.000.000, ou 1 a 1.000.000.000, etc?
O valor esperado crescerá proporcionalmente à quantidade de números possíveis. Então para 1.000 será 500,5, para 1.000.000 será 500.000,5, com a proporção se mantendo

##### 	Visualizando o crescimento da quantidade de casos em média

<div  class="figure"  style="flex: 1; text-align: center;">
<img  src="assets/images/grafico_linear.png"  alt="grafico linear"  style="display: block; max-width: 40%; margin: 0 auto; border-radius: 8px;"  />
<p  style="margin: 0.5rem auto 0; text-align: center;"><em>A quantidade média cresce como uma função de primeiro grau<br  /></em></p>
</div>

#### Algoritmo 2.
##### Utilizando as informações que temos ao nosso favor
A cada tentativa, a máscara vai nos informar se o número secreto é maior ou menor que o nosso chute. Podemos usar isso ao nosso favor.
Chutando que o número é 20. Se a máscara disser que 20 é menor que o número secreto, nós sabemos que o número não será 19, nem 18 e nem qualquer número menor ou igual a 20. Então podemos chutar um número maior que 20 e, de preferência, um número que vá eliminar a maior quantidade de candidatos possíveis.
##### O algoritmo
Nós vamos sempre chutar um número que está no meio e vamos fazer o seguinte dependendo da resposta:
Se ele falar que o número secreto é maior que nosso número, vamos procurar o número do meio para os números maiores que nosso chute
Se ele falar que o número secreto é menor que nosso número, vamos procurar o número do meio para os números menores que nosso chute
Se não for maior nem menor, nós encontramos o número correto!
##### Como encontrar o número do meio?
Como estamos procurando um número no intervalo de 1 a 100, vamos escolher o número fazendo a média dos dois. Então o número escolhido será 50, considerando que números não inteiros serão arredondados para baixo. Se o número secreto for maior que 50, nós podemos excluir 50, e todos os números menores que ele do nosso intervalo. Com isso, na segunda etapa ficamos com o intervalo [51, 100] e o próximo número a ser testado será 75. Alternativamente, se o número secreto for menor que 50, nosso intervalo seria reduzido para [1, 49] e o próximo número a ser testado seria 25.
##### Analisando o algoritmo
O funcionamento desse algoritmo é mais complexo que o do anterior. O ganho de eficiência dele vem porque ele está continuamente removendo metade dos valores possíveis até encontrar o resultado. Na primeira etapa do algoritmo existem 100 valores possíveis, após isso metade dos valores serão descartados por serem maiores ou menores que o número secreto.

##### Quantas etapas são necessárias para encontrar o número?
Pensando no pior caso, quando é preciso dividir o intervalo o máximo de vezes, nós precisamos de apenas 7 etapas. Esse número é surpreendente quando se pensa no algoritmo anterior, que precisa de mais de 50 chutes em média ou até 100 chutes no pior caso, para encontrar o número secreto.
##### Como chegar nesse resultado
Temos 100 números inicialmente e vamos dividir essa quantidade de números por 2 uma quantidade x de vezes até que sobre apenas 1 elemento.
Esse problema pode ser representado pela equação 1:

1:  $100 \cdot \frac{1}{2^x} = 1$

Multiplicando $2^x$ nos dois lados ficamos com a equação 2:

2: $100 = 2^x$ 

Para descobrir o valor de x precisamos resolver essa equação exponencial. Isso é feito tirando o logaritmo dos dois lados na equação 3:

3: $\log_2(100) = \log_2(2^x)$

Que pelas propriedades do logaritmo vira

4: $\log_2(100) = x\cdot\log_2(2)$

O log de 2 na base 2 é igual a 1, então

5: $\log_2(100) = x$

O log de 100 na base 2 é aproximadamente 6,64, ou seja, em 6,64 passos teremos apenas um número sobrando. Mas como estamos trabalhando com números inteiros, por se tratar da quantidade de passos em um algoritmo, a conclusão que nós temos é que em 6 ainda há valores possíveis e em 7 o valor foi encontrado 
##### E se fossem números de 1 a 1.000, ou 1 a 1.000.000, ou 1 a 1.000.000.000, etc?
No algoritmo anterior foi notado que a quantidade de etapas do algoritmo crescia na mesma proporção que a quantidade de elementos no intervalo.
O diferencial do algoritmo 2 é que o crescimento dele é muito lento quando comparado à quantidade de elementos no intervalo.
Anteriormente, chegamos no resultado de que a quantidade de etapas para 100 elementos no intervalo era aproximadamente o $\log_2(100)$. Se o intervalo tivesse 1000 elementos, a quantidade de passos seria $\log_2(1000)\approx10$ passos. Para 1 bilhão de elementos seriam apenas 30 passos. Esse é o verdadeiro poder da divisão sucessiva e do lento crescimento logaritmo.

#### Comparando o crescimento dos dois algoritmos
No seguinte gráfico estamos comparando o crescimento dos piores casos dos dois algoritmos

<div  class="figure"  style="flex: 1; text-align: center;">
<img  src="assets/images/grafico_log.png"  alt="grafico log"  style="display: block; max-width: 40%; margin: 0 auto; border-radius: 8px;"  />
<p  style="margin: 0.5rem auto 0; text-align: center;"><em><br  /></em></p>
</div>

A diferença de crescimento é tão grande que fica até dificil de visualizar a curva em roxo que representa a função log

### O que aprender com esses dois algoritmos
Esses dois algoritmos apresentados são duas formas diferentes de resolver o mesmo problema. A maior diferença entre os dois está na classe de complexidade de cada um enquanto o primeiro tem uma complexidade que cresce como uma função de primeiro grau, complexidade linear, o segundo algoritmo cresce como a função logaritmo, complexidade logarítmica. O crescimento de complexidade mais lento do algoritmo 2 é o que possibilita que ele resolva o problema da máscara sem precisar de casos ideais.


### O que é a complexidade do algoritmo?

Nas soluções apresentadas para o jogo da máscara, a complexidade de cada algoritmo foi medida com base na quantidade de chutes necessários para conseguir acertar o número secreto. De forma similar, a complexidade temporal dos algoritmos é medida com uma estimativa da quantidade de passos que algoritmo leva para concluir. Além disso, existe a complexidade espacial, que estima quanto de memória determinado algoritmo vai utilizar em sua execução.

### Como é estimada a complexidade temporal

#### Modelo RAM


Uma forma simples de medir a eficiência de um algoritmo é por meio da medição do tempo de execução. No entanto, essa abordagem é fortemente influenciada por fatores externos, como o hardware utilizado, a quantidade de memória disponível, o compilador e o sistema operacional, o que dificulta comparações justas entre algoritmos.

  

Para contornar esse problema, utiliza-se uma **abstração do modelo de computação**, chamada **RAM (_Random Access Machine_)**. Nesse modelo, assume-se que o algoritmo é executado em uma máquina ideal que possui instruções aritméticas, de movimentação de dados e de controle, e que cada instrução leva um tempo constante para ser executada.

  

#### Função de Complexidade de Tempo
  

A função de complexidade de tempo, denotada por $T(n)$, representa o tempo necessário para a execução de um algoritmo em função do tamanho da entrada `n`, considerando o modelo RAM. Essa função permite analisar como o custo do algoritmo cresce à medida que o tamanho da entrada aumenta. No caso do jogo da máscara, esse `n` pode ser entendido como a quantidade de números no intervalo

  

**Exemplo:**

Observe esse algoritmo para encontrar o menor elemento dentro de um vetor.

```cpp
int menorElemento(int v[], int n){

	int i;

	int menor = v[0];

	for(i = 1; i < n; i++){
		if(v[i] < menor){
		
		menor = v[i];
		
		}
	}
	return menor;
}
```

A função de complexidade de tempo desse algoritmo é dada pelo número de comparações entre os elementos do vetor `v[]`. Como o laço realiza uma comparação para cada elemento, exceto o primeiro, temos:



$T(n) = n - 1$.

  

Nesse caso, o tempo de execução é **uniforme** para qualquer entrada de tamanho `n`, ou seja, independe da ordem ou dos valores dos elementos.

  
Como foi visto nos algoritmos anteriores, nem sempre o tempo de execução dos algoritmos vai depender exclusivamente do tamanho da entrada. Muitas vezes ele depende de como a entrada está organizada. Para exemplificar isso, vamos mostrar a **busca sequencial**, o algoritmo 1 para o jogo da máscara. 

  

**Exemplo:**

  

```cpp
int buscaSequencial(int v[], int n, int chave){
	for (int i = 0; i < n; i++){

		if(v[i] == chave){

		return i;
		
		}
	}
	return -1;
}
```

Nesse algoritmo, identificam-se **três casos de análise**: o melhor caso, o pior caso e o caso médio.

  

##### Melhor Caso

  

O melhor caso ocorre quando o valor que estamos procurando (`chave`) se encontra no primeiro elemento do vetor. Nesse cenário, apenas uma comparação é realizada. Logo:

  
$T(n) = 1$

  

##### Pior Caso

  

O pior caso ocorre quando o valor `chave` se encontra no último elemento do vetor ou não está presente. Nesse caso, é necessário percorrer todo o vetor`v[]`, realizando n comparações. Assim:

  

$T(n) = n$.

  

##### Caso Médio
  

O **caso médio** representa o tempo de execução esperado do algoritmo considerando **todas as possíveis posições** do elemento procurado no vetor. Isso, com base nas probabilidades da entrada. Assumindo que cada posição tem **a mesma probabilidade** de conter a chave buscada.

  

Na busca sequencial, se o elemento `chave` estiver presente no vetor `v[]`, ele pode estar em qualquer uma das `n` posições com probabilidade igual a `1/n`. Nesse caso, o número de comparações realizadas será igual à posição do elemento no vetor (considerando indexação iniciando em 1).

  

Assim, o tempo médio é dado pela **média aritmética** do número de comparações necessárias em cada posição:

  

$T(n) = \frac{1 + 2 + 3 + \dots + n}{n}$

  

Sabemos que a soma dos primeiros `n` números naturais é:

  

$1 + 2 + \dots + n = \frac{n(n + 1)}{2}$

  

Substituindo na expressão do tempo médio, temos:

  

$T(n) = \frac{\frac{n(n + 1)}{2}}{n}$

  

$T(n) = \frac{n + 1}{2}$

##### O que entender com os três casos

Para analisar com precisão a complexidade de um algoritmo, é preciso entender que cada um desses três casos (melhor caso, pior caso e caso médio) geram uma função de complexidade temporal. No caso da busca pelo menor elemento, as funções são iguais, mas elas podem ser diferentes como no caso da busca sequêncial

### Análise assintótica

#### Como as funções de complexidade temporal são classificadas

Acabamos de mostrar como a função de complexidade de tempo é calculada para um determinado algoritmo. Mas a questão que fica é como comparar funções com complexidades temporais diferentes. 

#### Notações Assintóticas

Para resolver esse problema utilizamos a notação assintótica para descrever a complexidade temporal de um algoritmo. Ela classifica as funções de complexidade temporal com base no crescimento do custo de execução do algoritmo de acordo com a entrada.
  
Existem 3 classificações assintóticas tipicamente usadas e todas elas seguem a mesma ideia, ou seja, conseguindo entender uma delas, se entende as 3


#### Notação Θ

Essa notação define que dadas duas funções de complexidade f(n) e g(n), f(n) é Θ(g(n)) se, e somente se, f(n) e g(n) tem o mesmo crescimento assintótico

Definição formal:

"Uma função $f(n)$ é dita $O(g(n))$ se existem constantes positivas c1, c2 e n₀ tais que:
$ c1 \cdot g(n) ≤ f(n) ≤ c2 \cdot g(n), \forall n ≥ n₀.$"

Outra definição que pode ser usada para a notação O é uma que utiliza limites:

"Uma função $f(n)$ é dita $O(g(n))$ se, e somente se $\lim_{n\rightarrow\infty} f( n )/g( n ) = k$, tal que $k$ seja um número real maior que 0"

##### Exemplo visual

<div  class="figure"  style="flex: 1; text-align: center;">
<img  src="assets/images/exemplo_theta.png"  alt="grafico log"  style="display: block; max-width: 40%; margin: 0 auto; border-radius: 8px;"  />
<p  style="margin: 0.5rem auto 0; text-align: center;"><em><br  /></em> Exemplo extraído do geeks4geeks</p>
</div>

##### Exemplos

Nos seguintes exemplos responda se f(n) é Θ(g(n)) 

a) f(n) = n+30 e g(n) = 30n 

b) f(n) = n² + 1 e g(n) = 20n + 10

c) f(n) = $log_3(n)$ e g(n) = $log_2(n)$

#### Notação O

Essa notação define que dadas duas funções de complexidade temporal f(n) e g(n), f(n) será O(g(n)) se, e somente se, o crescimento da função f for o mesmo, ou for menor que o crescimento da função g

Definição formal:

"Uma função $f(n)$ é dita $O(g(n))$ se existem constantes positivas $c$ e $n₀$ tais que: $f(n) ≤ c \cdot g(n), \forall n ≥ n₀.$"

Outra definição que pode ser usada para a notação O é uma que utiliza limites:

"Uma função $f(n)$ é dita $O(g(n))$ se, e somente se $\lim_{n\rightarrow\infty} f( n )/g( n ) = k$, tal que $k$ seja um número real maior ou igual a 0"


##### Exemplos

Nos seguintes exemplos responda se f(n) é O(g(n))

a) f(n) = 2n+1 e g(n) = 2n+3

b) f(n) = $log_2(n)$ e g(n) = n

c) f(n) = 3n³ e g(n) = n!



#### Notação Ω

Essa notação define que dadas duas funções de complexidade temporal f(n) e g(n), f(n) será Ω(g(n)) se, e somente se, o crescimento da função f for o mesmo, ou for maior que o crescimento da função g

Definição formal:

"Uma função $f(n)$ é dita $Ω(g(n))$ se existem constantes positivas $c$ e $n₀$ tais que: $f(n) ≥ c \cdot g(n), \forall n ≥ n₀.$"

Outra definição que pode ser usada para a notação Ω é uma que utiliza limites:

"Uma função $f(n)$ é dita $Ω(g(n))$ se, e somente se $\lim_{n\rightarrow\infty} f( n )/g( n ) = k$, tal que $k$ seja um número real maior que 0 ou k seja infinito"

##### Exemplos

Nos seguintes exemplos responda se f(n) é Ω(g(n))

a) f(n) = 2n+1 e g(n) = 10

b) f(n) = n³ e g(n) = n²

### Classes de complexidade 

<div  class="figure"  style="flex: 1; text-align: center;">
<img  src="assets/images/bigO_graph.jpg"  alt="grafico log"  style="display: block; max-width: 40%; margin: 0 auto; border-radius: 8px;"  />
<p  style="margin: 0.5rem auto 0; text-align: center;"><em><br  /></em> Tabela de comparação de complexidades</p>
</div>

#### Complexidade O(1)

Algoritmos dessa classe tem uma complexidade que não cresce com o tamanho n da entrada. Eles são chamados de constantes

##### Exemplo

Operações aritméticas, ou acessos de memória em posições determinadas são feitas em tempo constante

```cpp
//Essa função vai somar o elemento do array que está em indice com o valor de val
void somar_ao_array(int array[], int tam_array, int indice, int val){
	if(indice < tam_array){
		array[indice] = array[indice]+val;
	}
}

```

#### Complexidade O(logn)

Classe dos algoritmos cuja complexidade cresce proporcionalmente ao logaritmo do tamanho da entrada. É importante ressaltar que essa complexidade vale para qualquer tipo de logaritmo indepentemente da base.

##### Exemplo

Esses algoritmos tipicamente fazem divisões sucessivas para ter essa complexidade. Por causa disso, é mais difícil de identificar se um algoritmo pertence à essa classe
O algoritmo 2 do jogo da máscara é um algoritmo O(logn). Ele é uma variação do famoso algoritmo de busca binária

```cpp
//Essa função vai retornar o indice do valor procurado se ele estiver no vetor
//para ela funcionar o vetor tem que estar ordenado previamente
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
#### Complexidade O(n)

Classe dos algoritmos cuja complexidade cresce linearmente com o tamanho da entrada

##### Exemplo

Tipicamente são algoritmos que percorrem um vetor inteiro para fazer um operação. O algoritmo 1 do jogo da máscara era O(n).

```cpp
//Essa função vai retornar o indice do valor procurado se ele estiver no vetor
int busca_sequencial(array<int> &arr, int x){
	for(int i=0;i<arr.size();i++){
		if(arr[i] == x){
			return i;
		}
	}
	return -1;
}
```

#### Complexidade O(n²)

Classes dos algoritmos cuja complexidade cresce de acordo com o quadrado do tamanho da entrada

##### Exemplo 

Algoritmos O(n²) geralmente funcionam com dois laços for aninhados. Para testar todos os pares de elementos possíveis em um vetor se utiliza um algoritmo O(n²)

```c++
//Esse algoritmo encontra a maior soma de dois elementos de um array com tamanho maior que 1
//para simplificar a contagem, ele também considera pares de elementos repetidos como (1, 1) ou (2, 2)
int maior_soma_array(int *array, int n){
	if(n < 2){
		return 0;
	}
	int max_sum = array[0]+array[1];
	for(int i=0;i<n;i++){
		for(int j=i;j<n;j++){
			if(array[i]+array[j] > max_sum){
				max_sum = array[i]+array[j];
			}
		}
	}
    return max_sum;
}
```
#### Complexidade O(n*logn)

Algoritmos dessa complexidade tem crescimento um pouco maior que o de um algoritmo linear, mas ainda é muito mais eficiente que um algoritmo O(n²)

##### Exemplo

Algoritmos ficam com essa complexidade quando uma das etapas de um algoritmo linear executa um algoritmo logn. Para um exemplo didático, esse algoritmo executa uma busca binária para todos elementos do próprio array

```cpp
void didatico(int arr, int n){
	for(int i=0;i<n;i++){
		busca_binaria(arr, n, arr[i]);
	}
}
```
O loop de for com uma operação básica como somar elementos, ou acessar elementos de um array, fariam o algoritmo ser O(n), pois as essas operações são O(1), mas como a operação que está sendo executada é um algoritmo O(logn), a complexidade do algoritmo inteiro vira O(n*logn). É importante entender que é feito o produto das complexidades.

#### Complexidade O(2^n)

São algoritmos com crescimento exponencial. Eles são alguns dos mais lentos possíveis.

##### Exemplo

Essa complexidade é tipicamente encontrada em algoritmos recursivos com relações de recorrência. Um exemplo clássico é uma implementação recursiva simples do número de fibonacci.

```cpp
//retorna o n-ésimo número de fiboacci
long long fibonacci(int n){
	if(n == 0 || n == 1){
		return 0;
	}
	return fibonacci(n-1) + fibonacci(n-2);
}

```

## Exercícios

E para fechar, vamos botar tudo que aprendemos em prática e nos familiarizarmos com a **sintaxe do C++** fazendo [**essa lista**](https://judge.beecrowd.com/en/problems/index/1).
