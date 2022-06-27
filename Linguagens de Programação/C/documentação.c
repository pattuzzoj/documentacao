// Linguagem de Programação
A linguagem de programação C é uma linguagem de alto nível.


// Palavras Reservadas
auto struct, typedef, enum, static, union

asm: Indica instruções Assembly

const: Define uma variável constante
volatile: Define uma variável alterável
unsigned: Define uma variável positiva
signed: Define uma variável positiva e negativa
register: Solicita o armazenamento nos registradores
extern: Indica uma variável declarada em outro arquivo

char: Tipo de dados caractere
int: Tipos de dados inteiro
float: Tipos de dados decimal
double: Tipos de dados decimal duplo

long: Aumenta a precisão de dados númericos
short: Diminui a precisão de dados númericos

if: Define uma estrutura de condição SE
else: Define uma estrutura de condição SENÃO
switch: Define uma estrutura de condição de caso correspondente
case: Define um caso correspondente
default: Define um caso padrão

for: Define uma estrutura de repetição PARA
while: Define uma estrutura de repetição ENQUANTO
do: Define uma estrutura de repetição FAÇA

continue: Sai de um ciclo da estrutura
break: Sai de uma estrutura
goto: Sai de um trecho de código

void: Indica uma função sem retorno
return: Retorna o valor de uma função

sizeof: Retorna o tamanho de um dado em bytes


// Paradigmas
Programação Estruturada;
Programação Imperativa;
Programação Procedural;


// Tradução
A linguagem C é compilada.


// Comentários
Linha: // conteúdo
Multi-linha: /* conteúdo */


// Variáveis
Constante: const


// Tipagem
Estática
Fraca


// Tipos de Dados
Caractere: char - 1 byte
Inteiro: int - 2 ou 4 bytes
Decimal: float - 4 bytes
Decimal duplo: double 8 bytes

// Estruturas de Dados
Vetor: nome_da_variável[quantidade] = {valores}
Matriz: nome_da_variável[linhas][colunas] = {valores}
Matriz 3D: nome_da_variável[linhas][colunas][profundidade] = {valores}


// Caracteres de Escape
Próxima linha: \n
Tabulação: \t
Barra: \\   
Apóstrofo: \'
Aspas: \"
'


// Tipos de Formatos
Caractere: %c
Caracteres: %s
Inteiro: %d ou %i
Inteiro sem sinal: &u
Inteiro longo: %ld
Inteiro octal: %o
Inteiro hexadecimal: %x ou %X
Decimal: %f
Decimal duplo: %lf
Decimal duplo longo: %LF
Notação científica: %e ou %E
Ponteiro endereço: %p
Ponteiro inteiro: %n


// Funções de Entrada e Saída de Dados
Entrada: scanf()
Saída: printf()


// Operadores Aritméticos
Adição: +
Subtração: -
Multiplicação: *
Divisão: /
Resto: %
Incremento: ++
Decremento: --

// Operadores Lógicos
Negação: !
Conjunção: &&
Disjunção: ||
Negação em binário: ~
Conjunção em binário: &
Disjunção em binário: |
Disjunção exclusiva em binário: ^
Deslocamento direito em binário: >>
Deslocamento esquerdo em binário: <<

// Operadores de Atribuição
Atribuição: =
Atribuição com adição: +=
Atribuição com subtração: -=
Atribuição com multiplicação: *=
Atribuição com divisão: /=
Atribuição com resto: %=
Atribuição conjuntiva em binário: &=
Atribuição disjuntiva em binário: |=
Atribuição disjuntiva exclusiva em binário: ^=
Atribuição com deslocamento direito em binário: >>=
Atribuição com deslocamento esquerdo em binário: <<=

// Operadores Relacionais
Igual: ==
Diferente: !=
Maior que: >
Menor que: <
Maior ou igual >=
Menor ou igual: <=


// Estruturas de Condição
Se: if (condição) {código}
Senão se: else if (condição) {código}
Senão: else {código}
Se senão ternário: (condição) ? expressão_verdadeira:expressão_falsa
Interruptor: switch (expressão) {case correspondente: código; default: código}

// Estruturas de Repetição
Enquanto: while (condição) {código}
Faça enquanto: do {código} while (condição)
Para: for (declaração_de_variável, condição, manipulação_de_variável) {código}


// Função
Função: tipo_de_valor_de_retorno nome_da_função(parâmetro) {código}


// Funções Built-in


// Bibliotecas
#include <nome_da_biblioteca>

Lista de algumas bibliotecas:
stdlib.h: contém funções variadas.
stdio.h: contém funções de entrada e saída de dados.
string.h: contém manipuladores de strings.
limits.h: contém constantes que especificam valores máximos e mínimos para tipos de dados diferentes.
math.h: contém funções matemáticas
time.h: contém funções de tempo.


// Usos
A linguagem de programação C é de uso geral, mas o ideal é que seja utilizada em aplicações que requerem velocidade em acesso ao hardware, como drivers e sistemas operacionais.