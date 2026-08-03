---
layout: home
title: "Minicurso de Estruturas de Dados: C++ Aplicado"
centralizar: true
---
# NotePET

**NotePET** é um editor de texto de terminal (estilo *nano*/*micro*), escrito em C++17, desenvolvido como projeto prático de um **minicurso de Estruturas de Dados** organizado pelo **PET (Programa de Educação Tutorial) do Bacharelado em Ciência da Computação da UFRN**.

O editor roda diretamente no terminal (raw mode, sequências ANSI/VT100) e serve como estudo de caso: cada funcionalidade do NotePET é a aplicação prática de uma estrutura de dados ou algoritmo clássico — vetores dinâmicos, pilhas, árvores binárias de busca, tabelas hash, busca linear/binária e algoritmos de ordenação — dentro de um programa real e interativo, e não apenas em exercícios isolados.

Este material foi preparado para ser apresentado aos **calouros participantes do minicurso**, servindo tanto como editor funcional quanto como material de estudo do código-fonte.

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

Cada funcionalidade abaixo corresponde a uma "Missão" do minicurso e à estrutura de dados/algoritmo que ela exercita:

| Missão | Funcionalidade | Estrutura/Algoritmo |
|---|---|---|
| 1.1 | Carregamento inicial do arquivo (`RawLineStore`) | Array dinâmico no heap (`unique_ptr<string[]>`) |
| 1.2 | Busca de texto (Ctrl+F) | Busca linear por substring |
| 1.3 | Busca por linha exata em buffer ordenado | Busca binária |
| 1.4 | Ordenação alfabética das linhas | Insertion sort |
| 2.1 | Inserir/remover linhas | TAD de linhas sobre `std::vector<string>` |
| 2.2 | Edição de caracteres e navegação do cursor | Iteradores da STL |
| 3.1 | Realce de sintaxe (syntax highlighting) para `.cpp` | Analisador léxico (tokenizer) |
| 3.2 | Validação de escopo (parênteses/colchetes/chaves) | Pilha (`std::stack<char>`) |
| 3.3 | Indexação de identificadores/variáveis | Árvore Binária de Busca (BST) |
| 4.1 | Desfazer/Refazer (Undo/Redo) | Duas pilhas de comandos (padrão *Command*) |
| 4.2 | Ordenação alfabética (Ctrl+O) | Merge sort |
| 4.3 | Autocompletar por prefixo | Busca por prefixo na BST |
| 4.4 | Painel de estatísticas do texto (Ctrl+W) | Tabela hash (`unordered_map`) + ordenação |

Funcionalidades adicionais de infraestrutura do editor:

- **Temas de cores** (Monokai, Dracula, Light) com paleta truecolor (ANSI 24 bits), alternáveis em tempo real (Ctrl+T).
- **Salvar / Salvar como**, com modo interativo de nomeação de arquivo quando o editor é aberto sem um arquivo.
- **Gutter (calha lateral)** com numeração de linhas de largura dinâmica.
- **Scroll vertical automático** (viewport) conforme o cursor se move pelo buffer.
- **Barra de status** com modo atual, nome do arquivo, posição do cursor (linha/coluna) e validação de escopo em tempo real.
- Leitura de arquivos tolerante a `CRLF`; gravação sempre em `LF`.

---

## Dependências

O projeto **não possui dependências externas** — usa apenas a *standard library* do C++ e a API POSIX do sistema.

- **Compilador:** g++ com suporte a **C++17**
- **make**
- **Sistema operacional:** Linux (ou outro POSIX) — o projeto usa `termios.h` e `sys/ioctl.h` para controle do terminal, portanto **não funciona nativamente no Windows** (é necessário WSL, Linux ou um terminal POSIX compatível)
- Um **emulador de terminal com suporte a ANSI/VT100 e truecolor** (a maioria dos terminais modernos: GNOME Terminal, Konsole, iTerm2, Windows Terminal com WSL, etc.)

---

## Como compilar

O projeto usa um `Makefile` já configurado com as flags `-std=c++17 -Wall -Wextra -Wpedantic -O2`.

Na raiz do projeto, execute:

```bash
make
```

Isso irá:
1. Criar a pasta `build/` (se não existir);
2. Compilar cada arquivo de `src/*.cpp` em um objeto `.o` dentro de `build/`;
3. Linkar tudo em um executável chamado **`NotePET`** na raiz do projeto.

### Limpando os artefatos de build

```bash
make clean
```

Remove a pasta `build/` e o executável `NotePET`.

---

## Como executar

O NotePET pode ser executado com ou sem um arquivo já existente:

**Abrindo um arquivo existente (ou criando um novo com esse nome ao salvar):**
```bash
./NotePET caminho/para/arquivo.cpp
```

**Abrindo sem especificar um arquivo** (o editor pedirá o nome na primeira vez que você salvar, via Ctrl+S):
```bash
./NotePET
```

> **Dica:** o realce de sintaxe só é ativado para arquivos com extensão `.cpp`.

---

## Modo de uso e controles

O editor possui três modos: **Edição** (padrão), **Busca** e **Salvar Como**. O modo atual é sempre exibido na barra de status inferior.

### Controles gerais (modo de edição)

| Tecla | Ação |
|---|---|
| `↑ ↓ ← →` | Move o cursor |
| `Enter` | Insere nova linha (quebra a linha atual no ponto do cursor) |
| `Backspace` | Apaga o caractere anterior (ou mescla com a linha de cima, se estiver no início da linha) |
| `Tab` | Insere 2 espaços |
| Qualquer caractere imprimível | Insere o caractere na posição do cursor |
| `Ctrl+Q` | Sai do editor |
| `Ctrl+S` | Salva o arquivo (ou entra em modo "Salvar Como" se ainda não houver nome de arquivo) |
| `Ctrl+F` | Entra no modo de Busca |
| `Ctrl+U` | Desfazer (Undo) |
| `Ctrl+R` | Refazer (Redo) |
| `Ctrl+O` | Ordena todas as linhas do buffer alfabeticamente (merge sort) |
| `Ctrl+T` | Alterna o tema de cores (Monokai → Dracula → Light → ...) |
| `Ctrl+W` | Mostra/esconde o painel de estatísticas do texto |

### Modo de Busca (`Ctrl+F`)

| Tecla | Ação |
|---|---|
| Digitar texto | Define o termo de busca |
| `Enter` | Vai para a próxima ocorrência (com wraparound, volta ao início ao chegar no fim) |
| `Backspace` | Apaga o último caractere digitado |
| `Esc` | Cancela a busca e volta ao modo de Edição |

### Modo Salvar Como (ativado automaticamente ao pressionar `Ctrl+S` sem arquivo aberto)

| Tecla | Ação |
|---|---|
| Digitar texto | Define o nome do arquivo |
| `Enter` | Confirma e salva com o nome digitado |
| `Backspace` | Apaga o último caractere digitado |
| `Esc` | Cancela e volta ao modo de Edição sem salvar |

### Recursos automáticos (sem atalho, sempre ativos)

- **Autocompletar:** enquanto você digita um identificador, sugestões de nomes já usados no texto aparecem na barra de status inferior (baseado na BST de variáveis).
- **Validação de escopo:** a barra de status mostra `Escopo: OK` (verde) ou `Erro de Escopo` (vermelho) com detalhes, verificando o balanceamento de `()`, `[]` e `{}` em tempo real.

---

## Estrutura do projeto

```
notepet/
├── Makefile                # Regras de build (g++, C++17)
├── include/
│   ├── Syntax.hpp           # Temas, tokenizer, realce de sintaxe,
│   │                        # validação de escopo, BST de variáveis,
│   │                        # autocomplete e estatísticas de texto
│   ├── Terminal.hpp         # Raw mode, leitura de teclado (KeyEvent),
│   │                        # dimensões do terminal e renderização de frames
│   └── TextBuffer.hpp       # Buffer de texto (linhas/cursor), array dinâmico
│                            # didático (RawLineStore), buscas, ordenação
│                            # e histórico de undo/redo (padrão Command)
└── src/
    ├── main.cpp              # Loop principal do editor, UI e tratamento de teclas
    ├── Syntax.cpp            # Implementação de Syntax.hpp
    ├── Terminal.cpp          # Implementação de Terminal.hpp
    └── TextBuffer.cpp        # Implementação de TextBuffer.hpp
```

**Resumo dos módulos:**

- **`Terminal`**: camada mais baixa — coloca o terminal em *raw mode* (via RAII com `TerminalGuard`), lê teclas/sequências ANSI e desenha a tela inteira em uma única chamada de `write()` (para evitar flicker).
- **`TextBuffer`**: o "documento" em si — armazena as linhas de texto, a posição do cursor, e implementa inserção/remoção de linhas e caracteres, buscas (linear e binária), ordenações (insertion sort e merge sort) e o histórico de undo/redo.
- **`Syntax`**: tudo relacionado à análise e apresentação do texto — tokenização e cores do realce de sintaxe, paletas de tema, validação de parênteses/chaves via pilha, indexação de identificadores em uma BST (com autocomplete) e cálculo de estatísticas do texto via tabela hash.
- **`main.cpp`**: orquestra tudo — monta a interface (calha lateral, barra de status, painel de estatísticas), gerencia os modos (Edição/Busca/Salvar Como) e conecta as teclas às operações dos módulos acima.

---

## Sobre o minicurso

O NotePET foi criado como projeto-guia do minicurso de **Estruturas de Dados** do **PET Computação (UFRN)**. A ideia é que, ao explorar o código, os(as) calouros(as) enxerguem estruturas de dados clássicas (vetores dinâmicos, pilhas, árvores binárias de busca, tabelas hash) e algoritmos (busca linear, busca binária, insertion sort, merge sort) resolvendo problemas concretos de um programa real — em vez de apenas exercícios teóricos isolados.
