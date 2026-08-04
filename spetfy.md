---
layout: home
title: "Minicurso de Estruturas de Dados: C++ Aplicado"
centralizar: true
---

# PETMusicPlayer (SPETIFY)

Um player de música para terminal, escrito em C++20, com interface interativa construída com [FTXUI](https://github.com/ArthurSonzogni/ftxui). O projeto foi desenvolvido como parte de um minicurso de Estruturas de Dados organizado pelo Programa de Educação Tutorial do Bacharelado em Ciência da Computação da UFRN, e usa conceitos como `unordered_set`, ordenação (Insertion Sort), busca linear e ponteiros inteligentes (`shared_ptr`/`weak_ptr`) para gerenciar uma biblioteca de músicas e uma fila de reprodução.

<div class="flex justify-center my-8">
  <a href="https://github.com/luis-rochoso/petmpc/tree/master" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md">
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