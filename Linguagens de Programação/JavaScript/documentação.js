"use strict";

// Palavras Reservadas
debugger: causa uma interrupção no código;

var variavel = "Eu sou uma variável irrestrita";
let nome_da_variavel = "Eu sou uma variável restrita ao bloco em que fui criada";
const nome_da_variavel = "Eu sou uma variável de valor constante";

if: "Em Português: se, define uma estrutura de condição: SE CONDIÇÃO É VERDADEIRA, ENTÃO FAÇA.";
else if: "Em Português: senão se, define uma estrutura de condição: SENÃO, SE CONDIÇÃO É VERDADEIRA, ENTÃO FAÇA.";
else: "Em Português: senão, define uma estrutura de condição: SENÃO, ENTÃO FAÇA.";


switch: "Define uma estrutura de condição: KEY, CASO KEY, ENTÃO FAÇA"; 
case: Define um caso correspondente;
default: Define um caso padrão;

try
throw
catch
finally

for: Define uma estrutura de repetição PARA
while: Define uma estrutura de repetição ENQUANTO
do: Define uma estrutura de repetição FAÇA

continue: Sai de um ciclo da estrutura
break: Sai de uma estrutura

return: Retorna o valor de uma função

// Tipos de Dados
String: caracteres
Number: números inteiros ou decimais
BigInt: números inteiros de comprimento arbitrário
Boolean: true e false
Symbol: representa um identificador único
undefined: indefinido
null: nulo
Object: objeto

'' e "" formam strings em linha, enquanto `` forma uma string multi-linha.

// Representações Numéricas
1000 == 1_000
1e3 == 1000
1000e-3 == 1
0x: prefixo para escrita hexadecimal
0o: prefixo para escrita octal
0b: prefixo para escrita binária


// Estruturas de Dados
Objeto: variável = {chave : valor,}
Symbol()
Symbol.for()
Symbol.keyFor()


// Caracteres de Escape
Próxima linha: \n
Tabulação: \t
Barra: \\   
Apóstrofo: \'
Aspas: \"
'


// Operadores Aritméticos
Adição: +
Subtração: -
Multiplicação: *
Exponenciação: **
Divisão: /
Resto: %
Incremento: ++
Decremento: --

// Operadores Lógicos
Negação: !
Conjunção: &&
Disjunção: ||
Coalescência: ??
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
Igual ao valor e ao tipo: ===
Diferente: !=
Diferente do valor e do tipo: !==
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
Para em: for (index in object) {código}
Para de: for (valor of object) {código}

// Função
Função: function nome_da_função(parâmetros) {código}
Expressão de Função: variável = function (parâmetros) {código}
Função de seta: (parâmetros) => {código}


// Bibliotecas
Math: contém funções matemáticas

// Funções Built-in
String() transforma o valor em string
Number() transforma o valor em número
Boolean() transforma o valor em booleano
numero..toString(base) transforma o número em uma string na base numérica indicada
numero.toFixed(n) especifica a (n) quantidade de casas decimais de um número.
isNaN() verifica se um valor não é um número
isFinite() verifica se um valor é finito
Object.is() verifica se dois valores são iguais
parseInt() analisa uma string e retorna um número inteiro se encontrado
parseFloat() analisa uma string e retorna um número decimal se encontrado
charAt() retorna o valor de uma string na posição indicada.
toUpperCase() transforma uma string em letras maiúsculas.
toLowerCase() transforma uma string em letras minúsculas.

Math.trunc() remove a parte decimal
Math.floor() arredondamento para baixo
Math.ceil() arredondamento para cima
Math.round() arredonda para o inteiro mais próximo
Math.random() retorna um número aleatório de 0 a 1 (sem incluir o 1)
Math.max() retorna o maior número de uma lista seperada por vírgula.
Math.min() retorna o menor número de uma lista seperada por vírgula.
Math.pow() retorna um valor elevado a uma dada potência