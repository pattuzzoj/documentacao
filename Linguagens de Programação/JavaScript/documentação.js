

"use strict";

// Palavras Reservadas
debugger: causa uma interrupção no código;

var: "Eu sou uma variável irrestrita";
let: "Eu sou uma variável restrita ao bloco em que fui criada";
const: "Eu sou uma variável de valor constante";

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
Objeto: variável = {chave : valor,} ou new Object()
Array: variável = [valores] ou new Array(valores)
Map:
Set:


Symbol()
Symbol.for()
Symbol.keyFor()


// Caracteres de Escape
Escapa caracteres pelo seu código Unicode: \u
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
Se senão se ternário: (condição) ? expressão_verdadeira:expressão_falsa
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
String(valor) converte um valor em string
Number(valor) converte um valor em número
Boolean(valor) converte um valor em booleano

numero..toString(base) transforma o número em uma string na base numérica indicada
numero.toFixed(n) especifica a (n) quantidade de casas decimais de um número.
isNaN(valor) verifica se um valor não é um número
isFinite(valor) verifica se um valor é finito
Object.is(valor, valor) verifica se dois valores são iguais
parseInt(string, base) analisa uma string e retorna um número inteiro, se encontrado, na base númerica opcional
parseFloat(string, base) analisa uma string e retorna um número decimal, se encontrado, na base númerica opcional

charAt(posição) retorna o valor de uma string na posição indicada.
toUpperCase() transforma uma string em letras maiúsculas
toLowerCase() transforma uma string em letras minúsculas
indexOf(substring, posição_inicial) verifica se uma string contém uma substring e retorna o seu índice, senão retorna -1
lastIndexOf(substring, posição_inicial) verifica em ordem inversa se uma string contém uma substring e retorna o seu índice, senão retorna -1
includes(substring, posição_inicial) verifica se uma string contém uma substring e retorna booleano
startsWith(substring, posição_inicial) verifica se uma string começa com uma substring
endsWith(substring, posição_inicial) verifica se uma string termina com uma substring
slice(posição_inicial, posição_final) retorna uma substring começando da posição inicial até a posição final menos 1
substring(posição_inicial, posição_final) igual a função slice(), porém, a posição inicial pode ser maior que a posição final, neste caso começa da posição inicial menos 1 até a posição final
substr(posição_inicial, comprimento) retorna uma substring começando da posição inicial até um comprimento
codePointAt(posição) verifica um caracter na posição indicada e retorna o código UTF correspondente
String.fromCodePoint(código) retorna um caracter conforme o código UTF indicado
repeat(quantidade) retorna um produto de string repetida em uma quantidade de vezes
trim() remove os espaços de uma string
.length retorna o próximo índice em uma cadeia de valores, string, array
split(delimitador) verifica uma string e a transforma em uma array separando os elementos inserindo uma vírgula no delimitador indicado

isArray([]) verifica se um valor é uma array
join(delimitador) verifica uma array e a transforma em uma string separando os elementos pelo delimitador indicado
at(posição) retorna o valor de uma array na posição indicada
unshift(valor) adiciona um valor ao início do array
shift() remove o primeiro valor do array
push(valor) adiciona um valor ao final do array
pop() remove o último valor do array
splice(posição_inicial, quantidade, valores) modifica uma array, adicionando, removendo pela quantidade indicada ou modificando
slice(posição_inicial, posição_final) retorna uma subarray começando da posição inicial até a posição final menos 1
concat(valores) retorna uma nova array concatenando os valores indicados com uma array
forEach(função) permite a execução de uma função sobre cada valor de uma array
indexOf(valor, posição_inicial) verifica se uma array contém um valor e retorna o seu índice, senão retorna -1
lastIndexOf(valor, posição_inicial) verifica em ordem inversa se uma array contém um valor e retorna o seu índice, senão retorna -1
includes(valor, posição_inicial) verifica se uma array contém um valor e retorna booleano
find(condição) retorna o primeiro valor que atender a condição
filter(condição) retorna uma array com os valores que atender a condição
findIndex(condição) retorna o índice do primeiro valor que atender a condição
findLastIndex(condição) verifica em ordem inversa e retorna o índice do primeiro valor que atender a condição
map(função) retorna uma array com os resultados da função
sort(função) modifica uma array ordenando-a de acordo com a função indicada
reverse() inverte a ordem dos elementos em uma array
reduce()
reduceRight()

Math.trunc() remove a parte decimal
Math.floor() arredondamento para baixo
Math.ceil() arredondamento para cima
Math.round() arredonda para o inteiro mais próximo
Math.random() retorna um número aleatório de 0 a 1 (sem incluir o 1)
Math.max() retorna o maior número de uma lista seperada por vírgula.
Math.min() retorna o menor número de uma lista seperada por vírgula.
Math.pow() retorna um valor elevado a uma dada potência






console.log(): é uma função de saída que exibe valores no console.
alert(): é uma função de saída que exibe valores em uma janela interativa.
confirm(): é uma função de entrada e saída, onde há o pedido de confirmação de um dado ao usuário em uma janela interativa.
prompt(): é uma função de entrada e saída, onde há uma saída e o usuário pode inserir dados em uma janela interativa.

setTimeout(func, delay, args...) especifica um delay ao chamar uma função.
setInterval(func, delay, args...) especifica um delay ao chamar uma função e a repete no mesmo intervalo.
clearTimeout(id) cancela a execução de um temporizador pelo ID indicado.