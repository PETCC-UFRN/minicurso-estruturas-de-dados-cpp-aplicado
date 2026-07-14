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
  <button class="toggle-button" id="toggle-button">
      Esconder Sumário
  </button>
</div>
<br>

# Introdução à Estruturas de Dados

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

## Memória

Quando um programa é compilado sabemos que é necessário espaço na memória para que ele possa ser executado, mas afinal, de qual espaço estamos falando? Quando somos introduzidos aos tipos de dados de C/C++ aprendemos que `int` ocupa 4 bytes, `char` ocupa 1 byte e por aí vai. Mas será que esses dados ficam jogados de qualquer forma dentro da memória RAM? A resposta é **não**. A memória usada para rodar um programa pode ser dividida em duas partes.

### Stack

Essa parte da memória leva este nome por seguir o padrão [LIFO](https://pt.wikipedia.org/wiki/LIFO), que empilha memória conforme lê as linhas do programa. Ela é responsável por armazenar tudo cujo **tamanho** é sabido em **tempo de compilação** e cujo **tempo de vida** é ditado conforme o escopo.

<div  class="figure"  style="flex: 1; text-align: center;">
    <img  src="assets/images/dia2/stack.png"  alt="stack example"  style="display: block; max-width: 70%; margin: 0 auto; border-radius: 8px;"  />
    <p  style="margin: 0.5rem auto 0; text-align: center;"><em><br  /></em> Imagem gerada por IA</p>
</div>

Dentro da Stack cada função tem seu **StackFrame**, que é o espaço dedicado para as **variáveis locais** de cada função, cujo acesso é permitido apenas dentro daquele escopo.

#### Exercício

> Ilustre a Stack do seguinte programa

```cpp
float hello() {
    std::cout << "hello world" << std::endl;

    return 12.5;
}

bool inverse(bool b) {
    return !b;
}

int main() {
    int a;

    std::cin >> a;

    if (inverse(true)) {
        int b = 1000;
    }

    return 0;
}
```

<!-- cada thread possue uma stack, mas como estamos trabalhando com programas de single thread... -->

#### Atenção na tela

Que tal resolvermos esse [exercício](https://judge.beecrowd.com/en/problems/view/1176) juntos?
<!-- fazer a solução recursiva e... ué, pq dá erro? -->
<!-- desenhar a stack empilhando várias chamadas da fibonacci -->
<!-- stack overflow -->
<!-- cuidado com a profundidade da recursão em linguagens strict -->

### Heap

A região de memória em questão trabalha de forma complementar à **Stack**, armazenando todos os dados que tornariam o acesso menos performático nesta. Isso é, tudo que precisa ter um espaço reservado mas cujo tamanho só é conhecido em **tempo de execução**. Além disso, aqui temos mais liberdade de gerenciar a memória do programa, entretanto, a natureza dinâmica dessa abordagem faz com que ela seja naturalmente **menos performática**.

```cpp
int main() {
    int n;

    std::cin >> n;

    std::vector<int> vec(n, -1); // mora na stack, e seu conteúdo na heap

    int* a = &n;                 // mora na stack, e seu conteúdo também
    char* b = new char[n];       // mora na stack, seu conteúdo na heap

    delete[] b;                  // necessário desalocar manualmente

    return 0;
}
```

<!-- diferente da stack, a heap é compartilhada entre as threads -->

<div  class="figure"  style="flex: 1; text-align: center;">
    <img  src="assets/images/dia2/heap.png"  alt="stack example"  style="display: block; max-width: 70%; margin: 0 auto; border-radius: 8px;"  />
    <p  style="margin: 0.5rem auto 0; text-align: center;"><em><br  /></em> <a href="https://youtu.be/2r_3f6L2EHw?si=qYhQWRItzEqZr63t">Exemplo de Stack e Heap de Programa</a></p>
</div>

#### Exercício

> Ilustre a Stack e Heap do seguinte programa

```cpp
#include <iostream>
#include <vector>
#include <string>

void func(int x) {
    int a = 10;
    int* p = new int(20);
    std::string s = "abc";
    std::vector<int> v(3, 5);
    static int counter = 0;

    delete p;
}

int main() {
    int n = 5;
    int arr[5] = {1,2,3,4,5};
    int* arr2 = new int[n];

    func(n);

    delete[] arr2;
    return 0;
}
```


<!-- stack - n, arr, arr2(conteúdo na heap)
    daí outro stackframe é criado acima de main
    stack - a, p(p* na heap), "s" ...
        como "s" é um literal pequeno fica na stack, mas se tiver 20/30 chars ficaria na heap(small string optimization - sso)
    ... v(conteúdo na heap)
   counter fica... -->

### Variáveis Estáticas

Além das duas regiões de memória citadas anteriormente, determinados elementos de um programa possuem uma característica particular, particular o suficiente a ponto de justificar um espaço na memória dedicado exclusivamente para eles. Essa característica é o `static`, e ela é responsável desvincular o tempo de vida de um elemento ao escopo de onde ele é declarado, tornando-o válido durante toda a execução do programa. Usemos um exemplo para elucidar melhor como isso funciona.

Podemos formalizar dizendo que `static` é um [Especificador de Classe de Armazenamento](https://en.cppreference.com/w/cpp/language/storage_duration.html), e existem outros além dele: `auto`, `extern`, `mutable`, etc.

<div  class="figure"  style="flex: 1; text-align: center;">
    <img  src="assets/images/dia2/static-stack-heap.png"  alt="static memory example"  style="display: block; max-width: 70%; margin: 0 auto; border-radius: 8px;"  />
    <p  style="margin: 0.5rem auto 0; text-align: center;"><em><br  /></em> <a href="https://stackoverflow.com/questions/32418750/stack-and-heap-locations-in-ram/32418775">Exemplo de camadas do programa</a></p>
</div>

No mais, apesar dessa representação não ser completamente fiel a como as coisas acontecem dentro da memória, se trata de uma abstração que favorece o entendimento de um programador sobre como o código dele funciona.

---

## Operações com a memória

Como explicado acima, a memória é o espaço onde são armazenadas as informações para que o computador consiga utilizá-la. Cada espaço de memória possui um identificador único chamado endereço de memória.

No momento em que declaramos uma variável no nosso programa, o computador reserva uma região da memória para armazenar seu valor. Por exemplo:

```cpp
int idade = 21;
```

A variável `idade` possui um valor associado (21), mas também ocupa uma posição específica na memória. Podemos imaginar a memória da seguinte forma:

| Endereço | Conteúdo |
|----------|----------|
| 0x1000   | 21       |

A variável `idade` representa o conteúdo armazenado nesse endereço, porém o computador também precisa saber onde esse dado está localizado, ou seja, seu endereço.

Quando começamos na programação, manipulamos apenas os valores das variáveis, sem precisar conhecer os seus endereços. Por exemplo:

```cpp
cout << idade;
```

Porém, conforme a evolução no estudo da programação, vão aparecer situações em que conhecer e manipular endereços de memória será necessário. Estruturas de dados como listas encadeadas, árvores e grafos dependem da capacidade de armazenar referências para outros elementos. Além disso, a manipulação direta da memória permite criar programas mais eficientes e controlar melhor a utilização dos recursos disponíveis.

É nesse contexto que surgem os **ponteiros**, uma variável capaz de armazenar o endereço de memória de outra variável. Enquanto uma variável comum guarda um dado, como um número ou um caractere, um ponteiro guarda a localização onde esse dado está armazenado.

Note que a variável ponteiro tem o seu próprio endereço, não se esqueça que ela é uma variável como qualquer outra, mas que necessariamente armazenará o endereço de uma outra variável, nesse caso, da variável valor.

Apesar de serem extremamente úteis, os ponteiros também exigem cuidado. Um ponteiro incorreto pode acessar uma região inválida da memória, causando erros difíceis de encontrar ou até encerrando a execução do programa. Por esse motivo, compreender como a memória funciona é fundamental antes de utilizar ponteiros de forma adequada.

## Ponteiros

Um ponteiro é declarado utilizando um asterisco `*` junto ao tipo da variável, por exemplo:

```cpp
int *p;
```

Nesse caso, `p` é um ponteiro capaz de armazenar o endereço de uma variável do tipo `int`.

Outros exemplos:

```cpp
float *p_tamanho;
char *p_caractere;
double *p_tamanho;
```

O tipo do ponteiro é importante porque indica qual tipo de dado será encontrado no endereço armazenado. Um ponteiro para `int`, por exemplo, deve apontar para uma variável inteira.

### O operador de endereço (&)

O operador `&` é utilizado para obter o endereço de memória de uma variável.

Exemplo:

```cpp
int numero = 5;
cout << &numero;
```

O resultado será um endereço de memória semelhante a:

```
0x7ffee4a2
```

Esse número em hexadecimal representa a localização onde a variável número está armazenada. E, sendo um ponteiro uma variável que armazena esse tipo de endereço, podemos fazer uma atribuição, veja o exemplo abaixo onde `ptr` recebe o endereço de número:

```cpp
int numero = 5;
int *ptr = &numero;
```

### O operador de desreferência (*)

O operador `*` também possui outro significado quando utilizado sobre um ponteiro. Nesse contexto, ele é chamado de **operador de desreferência** e permite acessar o valor armazenado no endereço apontado.

```cpp
int numero = 5;
int *ptr = &numero;
cout << *ptr;
```

A saída será:

```
5
```

- `numero` → armazena o valor 15;
- `&numero` → representa o endereço de memória de x;
- `ptr` → armazena esse endereço;
- `*ptr` → representa e assume o valor armazenado naquele endereço;

Também é possível alterar o valor utilizando o ponteiro:

```cpp
*ptr = 10;
```

### Ponteiros como parâmetros de funções

Em C++, quando uma função recebe um parâmetro normalmente ocorre uma cópia do valor enviado.

Exemplo:

```cpp
void altera(int x){
    x = 100;
}

int main(){
    int valor = 10;
    altera(valor);
    cout << valor;
}
```

Saída: `10`

Isso aconteceu porque além de ser uma função que não retorna nada, ela recebeu como parâmetro apenas uma cópia de valor, a variável original não foi modificada. Mas uma vez que se utiliza ponteiros, ou seja, é enviado como parâmetro de uma função uma cópia do endereço daquela variável, então poderemos sim, alterá-la.

```cpp
void altera(int *x){
    *x = 100;
}

int main(){
    int valor = 10;
    altera(&valor);
    cout << valor;
}
```

Agora a saída será: `100`

A função recebeu o endereço de `valor` e conseguiu modificar diretamente seu conteúdo. Esse mecanismo é fundamental para a construção de estruturas de dados, pois permite que diferentes partes do programa acessem e alterem os mesmos dados.

### Ponteiros nulos (nullptr)

Um ponteiro deve sempre indicar um endereço válido antes de ser utilizado. Caso contrário, ele pode apontar para uma região desconhecida da memória, causando comportamentos inesperados. Para evitar isso, podemos representar um ponteiro que não aponta para nenhum endereço válido, utiliza-se o valor `nullptr`.

Exemplo:

```cpp
int *p = nullptr;
```

Nesse caso, `p` existe, mas ainda não aponta para nenhuma variável. Antes de acessar o conteúdo de um ponteiro, é importante verificar se ele possui um endereço válido:

```cpp
if(p != nullptr){ //sua implementação
}
```

---

## Iteradores

### O que é um iterador?

Muitas vezes, ao trabalhar com estruturas de dados, precisamos percorrer todos os elementos armazenados. Por exemplo, em um vetor com vários valores, podemos desejar acessar cada elemento para realizar alguma operação. Uma forma comum de fazer isso é utilizando índices:

```cpp
int valores[5] = {10, 20, 30, 40, 50};

for(int i = 0; i < 5; i++)
{
    cout << valores[i];
}
```

Nesse caso, funcionou pois o programa sabe que os elementos se encontram em posições consecutivas na memória, e por isso, podem ser acessados por índice. Entretanto, nem todas as estruturas de dados funcionam dessa forma. Uma lista encadeada, por exemplo, não armazena seus elementos em posições consecutivas da memória. Para percorrê-la, é necessário percorrer de nó em nó através das referências.

Para resolver esse problema, surgem os **iteradores**.

Um iterador é um objeto que permite ao programador percorrer suas estruturas de dados sem necessariamente conhecer o modo como ela foi implementada. Podemos pensar em um iterador como um ponteiro que aponta para um elemento de uma coleção e permite avançar para o próximo elemento de maneira padronizada.

### Iteradores e a biblioteca STL

A biblioteca padrão do C++ (STL - Standard Template Library) possui diversas estruturas de dados prontas, chamadas de containers, como: Vector, List, Set, Maps entre outros. Cada uma dessas estruturas possui uma forma própria de armazenar seus elementos, e portanto, uma forma própria de percorrê-los. O iterador sabe encontrar um elemento acessível numa estrutura de dados. O uso de iteradores permite que todas elas sejam percorridas com comandos semelhantes (do ponto de vista do programador), veja no exemplo:

O `std::vector` é um contêiner da biblioteca padrão do C++ que funciona como um array dinâmico redimensionável. Ao contrário dos arrays tradicionais, ele pode crescer ou diminuir automaticamente em tempo de execução à medida que elementos são adicionados ou removidos (JOHNSTON, 2017).

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main(){    
    vector<int> numeros = {10, 20, 30, 40};  
    vector<int>::iterator it;
    for(it = numeros.begin(); it != numeros.end(); it++){
       cout << *it << endl;
    }
}
```

### Vamos ao passo a passo

Vamos analisar passo a passo como utilizar um iterador em uma estrutura da STL. Para isso, utilizaremos como exemplo um `std::vector`, uma das estruturas mais utilizadas em C++.

Primeiramente, precisamos declarar um iterador compatível com o tipo de estrutura que desejamos percorrer:

```cpp
std::vector<int>::iterator it;
```

Podemos interpretar esse trecho como a declaração de uma variável chamada `it` do tipo `iterator`, que será utilizada para percorrer uma estrutura do tipo `std::vector<int>`.

É importante observar que o iterador possui uma relação direta com o tipo de container utilizado. Um iterador criado para um `vector<int>` não pode ser utilizado para percorrer, por exemplo, um `vector<string>` ou uma lista encadeada, pois cada estrutura possui suas próprias regras internas de armazenamento e navegação.

Agora, considere o seguinte vetor:

```cpp
std::vector<int> numeros = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
```

Temos uma estrutura contendo dez elementos. Para acessar esses elementos utilizando um iterador, precisamos primeiro posicioná-lo no início do vetor. Isso é feito utilizando a função `begin()`:

```cpp
it = numeros.begin();
```

O `begin()` retorna um iterador que aponta para o primeiro elemento armazenado no vetor.

Podemos visualizar:

```
   it
    |
    v
| 10 | 20 | 30 | 40 | 50 |
```

Nesse momento, o iterador `it` está associado ao elemento 10, pois ele está em primeiro. Assim como os ponteiros, você não vai conseguir acessar seu valor apenas com o nome da variável; para acessar o valor apontado pelo iterador, utilizamos novamente o operador de desreferenciação `*`.

```cpp
std::cout << *it;
```

A saída será:

```
10
```

### Percorrendo o vetor com um iterador

Um iterador pode ser movimentado para acessar os próximos elementos da estrutura. Para isso, utilizamos o operador de incremento:

```cpp
it++;
```

Após isso, o iterador passa a apontar para o próximo elemento:

Antes:
```
  it
   |
   v
| 10 | 20 | 30 | 40 | 50 |
```

Depois de `it++`:
```
          it
           |
           v
| 10 | 20 | 30 | 40 | 50 |
```

Agora, o valor obtido por:

```cpp
std::cout << *it;
```

será:

```
20
```

Dessa forma, podemos avançar elemento por elemento até chegar aonde quisermos na estrutura.

### Objetivo do percurso

Para saber quando parar a movimentação do iterador, podemos utilizar o `end()`:

```cpp
numeros.end();
```

O método `end()` retorna um iterador especial que representa a posição logo após o último elemento do vetor. Por exemplo:

```
| 10 | 20 | 30 | 40 | 50 |
                          ^
                          |
                        end()
```

Observe que `end()` não aponta para um elemento válido, ele é exclusivo (no sentido de excluir mesmo) e serve de marcação de que a estrutura chegou ao fim. A partir daí, utilizamos operações matemáticas para identificar onde queremos chegar no nosso percurso — por exemplo, o último elemento da nossa estrutura pode ser identificado por `numeros.end() - 1`.

Veja a forma tradicional de se percorrer uma estrutura utilizando iteradores:

```cpp
for(it = numeros.begin(); it != numeros.end(); it++)
{
    std::cout << *it << std::endl;
}
```

O funcionamento desse laço é:

1. O iterador recebe a posição inicial através do `begin()`.
2. Enquanto o iterador for diferente de `end()`, ainda há elementos que não foram acessados.
3. O operador `*` acessa o valor atual.
4. O operador `++` move o iterador para o próximo elemento.

A execução ocorre da seguinte forma:

| Iteração | it   |
|----------|------|
| 1        | 10   |
| 2        | 20   |
| 3        | 30   |
| 4        | 40   |
| 5        | 50   |
| Próximo passo | end() |

Quando `it` chega ao valor retornado por `end()`, a condição do `for` encerra o loop.


## Exercícios

E para fechar, vamos botar tudo que aprendemos em prática e nos familiarizarmos com a **sintaxe do C++** fazendo [**essa lista**](https://judge.beecrowd.com/en/problems/index/1). ///// TODO: ELABORAR NOVO EXERCÍCIO
