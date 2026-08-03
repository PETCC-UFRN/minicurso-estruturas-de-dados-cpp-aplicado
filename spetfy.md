---
layout: home
title: "Minicurso de Estruturas de Dados: C++ Aplicado"
centralizar: true
---

# PETMusicPlayer (SPETIFY)

Um player de música para terminal, escrito em C++20, com interface interativa construída com [FTXUI](https://github.com/ArthurSonzogni/ftxui). O projeto foi desenvolvido como parte de um minicurso de Estruturas de Dados organizado pelo Programa de Educação Tutorial do Bacharelado em Ciência da Computação da UFRN, e usa conceitos como `unordered_set`, ordenação (Insertion Sort), busca linear e ponteiros inteligentes (`shared_ptr`/`weak_ptr`) para gerenciar uma biblioteca de músicas e uma fila de reprodução.

<div class="flex justify-center my-8">
  <a href="https://github.com/PETCC-UFRN/NotePET" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md">
    <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
    Ver projeto no GitHub
  </a>
</div>

---

## Funcionalidades

- Biblioteca de músicas carregada a partir de um arquivo `.csv`.
- Fila de reprodução: adicionar, remover, limpar, embaralhar e ordenar músicas.
- Busca por título na biblioteca.
- Ordenação da biblioteca e da fila por título ou duração.
- Reprodução real de arquivos `.mp3` via `libmpg123` + `libao`.
- Play/pause, avançar e retroceder faixa.

## Dependências

Antes de compilar, você precisa ter instalado no sistema:

- Um compilador com suporte a **C++20** (g++ 10+ ou clang 12+).
- **CMake** (versão recente — o projeto declara `cmake_minimum_required(VERSION 4.2)`, então use a versão mais atual disponível para o seu sistema).
- **libao** (biblioteca de saída de áudio).
- **libmpg123** (decodificador de MP3).

As bibliotecas **argparse** e **ftxui** são baixadas e compiladas automaticamente pelo CMake através de `FetchContent`, então você não precisa instalá-las manualmente — apenas garanta que você tem conexão com a internet na primeira vez que compilar o projeto.

### Instalando as dependências (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install build-essential cmake libao-dev libmpg123-dev
```

### Instalando as dependências (Arch Linux)

```bash
sudo pacman -S base-devel cmake libao mpg123
```

### macOS (via Homebrew)

```bash
brew install cmake libao mpg123
```

## Configurando os assets (obrigatório antes de rodar)

O player **não vem com músicas incluídas**. Para funcionar, você precisa montar sua própria biblioteca dentro da pasta `assets/`:

1. **Arquivos `.mp3`**: coloque dentro de `assets/` cada música em formato MP3. O nome do arquivo deve ser exatamente igual ao título que você vai cadastrar no `database.csv` (veja abaixo), seguido da extensão `.mp3`. Por exemplo, uma música com título `Crush` deve existir como:

   ```
   assets/Crush.mp3
   ```

2. **Arquivo `database.csv`**: também dentro de `assets/`, crie (ou edite) um arquivo chamado `database.csv` listando cada música, uma por linha, no seguinte formato:

   ```
   Título, Gênero, Duração, Ano
   ```

   - **Título**: o nome da música (e do arquivo `.mp3` correspondente, sem a extensão).
   - **Gênero**: o gênero musical (texto livre).
   - **Duração**: no formato `M.SS` (minutos ponto segundos), e não em minutos decimais. Por exemplo, uma música de 5 minutos e 58 segundos deve ser escrita como `5.58`, e uma música de apenas 40 segundos deve ser escrita como `0.40`.
   - **Ano**: o ano de lançamento (número inteiro).

   Exemplo de `database.csv`:

   ```
   Blood Eagle, Progressive Metalcore, 5.58, 2019
   CHVRCH BVRNER, Progressive Metalcore, 3.40, 2019
   Crush, Progressive Metalcore, 6.49, 2019
   ```

   Nesse exemplo, o player espera encontrar os arquivos `assets/Blood Eagle.mp3`, `assets/CHVRCH BVRNER.mp3` e `assets/Crush.mp3`.

> **Atenção:** a comparação entre CSV e nomes de arquivo é sensível a maiúsculas/minúsculas e a espaços — mantenha o título no CSV idêntico ao nome do arquivo (sem a extensão `.mp3`).

## Compilando o projeto (CMake)

A partir da raiz do projeto:

```bash
# 1. Cria a pasta de build (fora do código-fonte)
mkdir -p build
cd build

# 2. Gera os arquivos de build com o CMake
cmake ..

# 3. Compila o projeto
cmake --build .
```

Isso vai:

- Baixar e compilar `argparse` e `ftxui` automaticamente (só na primeira vez, ou quando o cache do CMake for limpo).
- Compilar todos os arquivos `.cpp` do projeto (raiz + `ui/`).
- Copiar a pasta `assets/` (com o seu `database.csv` e seus `.mp3`) para dentro da pasta de build, ao lado do executável.

O binário final se chama `petmpc` e fica dentro da pasta `build/`.

### Recompilando após alterar código

Sempre que você alterar algum `.cpp`/`.hpp`, basta rodar de dentro da pasta `build/`:

```bash
cmake --build .
```

Não é necessário rodar `cmake ..` novamente, a menos que você tenha adicionado/removido arquivos-fonte ou alterado o `CMakeLists.txt`.

## Executando

De dentro da pasta `build/` (para que o executável encontre a pasta `assets/` copiada ao lado dele):

```bash
./petmpc
```

O programa não aceita argumentos de linha de comando; qualquer argumento extra fará com que ele mostre a mensagem de uso e encerre.

## Controles

| Tecla(s)          | Ação                                              |
|-------------------|----------------------------------------------------|
| `↑` / `↓`         | Navegar entre os itens da lista (biblioteca ou fila) |
| `←` / `→`         | Alternar entre as abas "Biblioteca" e "Fila de Reprodução" |
| `Enter` (na Biblioteca) | Adicionar a música selecionada à fila         |
| `Enter` (na Fila) | Tocar a música selecionada                        |
| `p`               | Tocar / Pausar                                    |
| `q`               | Sair do programa                                  |
| `s`               | Abrir modal de ordenação (por título ou duração)  |
| `r`               | Embaralhar a fila                                 |
| `/`               | Abrir modal de busca por título na biblioteca     |
| `c`               | Limpar a fila de reprodução                       |
| `d`               | Remover da fila a música atualmente selecionada   |
| `l`               | Carregar fila de reprodução salva                 |
| `e`               | Salvar fila de reprodução atual para o arquivo    |
| `Ctrl` + `→`      | Avançar para a próxima faixa da fila              |
| `Ctrl` + `←`      | Retroceder para a faixa anterior da fila          |

## Estrutura do projeto

```
petmpc/
├── CMakeLists.txt       # configuração de build (CMake + FetchContent)
├── main.cpp             # ponto de entrada
├── mplayer.{hpp,cpp}    # camada de reprodução de áudio (libao + libmpg123)
├── msession.{hpp,cpp}   # sessão do player: biblioteca, fila, busca e ordenação
├── music.hpp            # struct Music (representa uma faixa)
├── utils.h              # tipos utilitários e formatação de duração
├── sortingLib/
│   └── sorting.hpp      # algoritmos de ordenação (Insertion Sort / Merge Sort)
├── ui/
│   ├── window.{hpp,cpp} # interface de terminal (FTXUI)
└── assets/
    └── database.csv     # biblioteca de músicas (você monta a sua!)
```

## Problemas comuns

- **"couldn't find the database file 'assets/database.csv'"**: você está rodando o executável de fora da pasta `build/`, ou esqueceu de criar o `database.csv` dentro de `assets/`. Rode `./petmpc` de dentro de `build/`.
- **A música aparece na lista mas não toca**: confira se existe um arquivo `.mp3` em `assets/` com o nome **exatamente igual** ao título cadastrado no CSV (incluindo maiúsculas/minúsculas e espaços).
- **Erro de compilação relacionado a `ao/ao.h` ou `mpg123.h` não encontrados**: as bibliotecas de desenvolvimento `libao` e `libmpg123` não estão instaladas no sistema — veja a seção de dependências acima.