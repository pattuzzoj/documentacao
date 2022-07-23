<h1>CONCEITOS DE PROGRAMAÇÃO</h1>

<article>
<h3>Linguagem de Programação:</h3>
<p>Uma linguagem de programação é uma linguagem formal; sustentada pela Matemática, ela possui sintaxe e semântica, que regem e definem o uso de palavras reservadas à linguagem, permitindo a criação de algoritmos que visam solucionar algum problema.</p>
<p>- Linguagem de Alto Nível: uma linguagem de programação que se aproxima da linguagem humana, como o Portugol, uma linguagem de programação focada no ensino.<br>
- Linguagem de Baixo Nível: uma linguagem de programação que se aproxima da linguagem de máquina, como o Assembly.<br>
- Linguagem de Máquina: a linguagem de máquina é composta pelos dígitos 1 e 0. A combinação desses números formam bytes, que definidos, formam as instruções internas do processador.</p>
</article>

<article>
    <h3>Algoritmo:</h3>
    <p>Um algoritmo é formado por um ou mais passos lógicos que visa a obtenção de um resultado. São exemplos de algoritmos as operações aritméticas, onde se segue regras para a realização de cálculos matemáticos.</p>
</article>

<article>
    <h3>Palavras Reservadas:</h3>
    <p>Palavras reservadas funcionam como blocos de construção e estruturam as linguagens de programação. São palavras reservadas para uso pela linguagem, portanto não podem ser utilizadas para a criação de variáveis ou funções.</p>
</article>

<article>
    <h3>Sintaxe e Semântica:</h3>
    <p>A sintaxe define um conjunto de regras que visa o uso correto das palavras reservadas na criação de código. Depois do código ser escrito, uma verificação é feita para checar se a sintaxe está de acordo com o esperado. <br>
    A semântica trata-se do significado agregado às palavras reservadas da linguagem e a relação que possuem entre si.</p>
</article>

<article>
    <h3>Código-fonte:</h3>
    <p>O código-fonte é a versão do código em seu estado puro, formado por algoritmos e estruturado utilizando as palavras reservadas da linguagem.</p>
</article>

<article>
    <h3>Paradigmas de Programação</h3>
    <p>Paradigmas de Programação são formas de classificar as linguagens de programação baseando em suas caracteristícas e funcionalidades. As linguagens podem ser definidas e agrupadas em diferentes paradigmas e possuir mais de um paradigma.</p>
    <h5>Alguns exemplos são:</h5>
    
    imperativo - no paradigma imperativo as instrunções são codificadas de forma sequencial, seguindo uma ordem lógica
    funcional - no paradigma funcional as instruções são codificadas dentro de funções
    orientada a objetos - no paradigma orientada a objetos a codificação é inteiramente voltada a contrução e manipulação de objetos
</article>

<article>
    <h3>Depurador</h3>
    O depurador é um programa que analisa o código-fonte e verifica a existência de inconsistências (erros) nas intruções, como palavras reservadas usadas de forma incorreta.
</article>

<article>
    <h3>Interpretador e Compilador:</h3>
    <p>Tanto o interpretador quanto o compilador são programas que analisam e traduzem o código-fonte de uma linguagem de programação de alto nível para a linguagem de máquina. Geralmente uma linguagem de programação é interpretada ou compilada, mas há casos onde ocorre a compilação para uma linguagem intermediária e depois a interpretação para a linguagem de máquina.</p>
    <p>A diferença entre o interpretador e o compilador, é que o interpretador traduz e executa a cada linha de instrução, perdendo sua tradução anterior; enquanto o compilador traduz todas as instruções primeiro e depois executa, salvando a tradução.</p>
</article>

<article>
    <h3>Comentários:</h3>
    Comentários em um código-fonte servem para descrever trechos de código para facilitar o seu entendimento e sua posterior manutenção, pelo próprio programador ou por outro.
</article>

<article>
    <h3>Escopo:</h3>
    O escopo são áreas do código e delimitam até onde certas instruções são "visíveis", como variáveis e funções.
</article>

<article>
    <h3>Variáveis:</h3>
    <p>Variáveis, em arquitetura de computadores, são etiquetas (nomes) que estão associadas a um endereço na memória principal (nos computadores comuns é a memória RAM); esta é uma definição mais técnica do que é uma variável, veremos agora uma definição mais tangível.<br>
    Variáveis são como contêineres de navios. Possuem um identificador (em nosso caso, um nome); um tamanho e um tipo específico de mercadoria, o qual entendemos como "tipo de dado". Nós abrimos a porta do container e atribuimos um dado a variável com o operador de atribuição (o sinal de '=' é geralmente utilizado para isso nas linguagens modernas).</p>
    <h4>Tipos de Variáveis:</h4>

    variável - representa uma variável de valor dinâmico
    constante - representa uma variável de valor constante
</article>

<article>
    <h3>Sistema de Tipos</h3>
    <p>Sistema de tipos se refere ao conjunto de regras associadas ao processo de atribuição de tipo às estruturas da linguagem, como variáveis e funções. Esse conjunto de regras define que tipo de valores as estruturas podem guardar e/ou retornar.</p>
    
<h4>Tipagem:</h4>

    estática - na tipagem estática o tipo é declarado em tempo de codificação
    dinâmica - na tipagem dinâmica o tipo é associado em tempo de interpretação/compilação e/ou execução
    forte - na tipagem forte, uma variável só pode receber um valor que corresponda ao seu tipo
    fraca - na tipagem fraca, uma variável pode receber qualquer valor, mesmo já tendo sido declarada com um tipo anteriormente

<h4>Tipos de Dados:</h4>
    <p>Os tipos de dados podem ser primitivos ou compostos; tipos primitivos formam os tipos básicos da linguagem, enquanto os tipos compostos dependem de dois ou mais tipos primitivos em conjunto (não necessariamente tipos diferentes entre si).</p>
<h5>Tipos Primitivos</h5>

    caractere - representa um caractere
    string - representa uma cadeia de caracteres
    inteiro - representa um número
    ponto flutuante - representa um número decimal 
    booleano - representa um valor booleano

<h5>Tipos Compostos</h5>

    lista - representa uma coleção de dados acessíveis por um índice
    conjunto - representa uma coleção de dados sem repetição
    objeto - representa uma abstração de um objeto, formado por atributos, valores e métodos
</article>

<article>
    <h3>Estruturas de dados:</h3>
    <p>Estruturas de dados representam uma coleção de valores e são uma forma de armazenar e gerir.</p>
</article>

<article>
    <h3>Caractere e Sequência de Escape:</h3>
    <p>Um caractere de escape é um caractere utilizado para alterar o significado do caractere sucessor a ele; no JavaScript e em algumas outras linguagens, este caractere é a barra invertida (\). Já sequência de escape se refere ao subconjunto de caracteres com o caractere de escape que tem o seu significado modificado.</p>
    
    \\ - insere uma barra
    \t - insere uma tabulação
    \n - insere uma quebra de linha
</article>

<article>
    <h3>Entrada e Saída de Dados:</h3>
    Entrada e saída de dados se refere ao processo de captura ou inserção e de transmissão ou exibição de dados. Eletrônicos podem fazê-lo utilizando sensores ou paineis de controle, e na programação temos algumas funções básicas, como:
    
    input() - função de captura
    print() - função de exibição

<p>Exemplo em Python.</p>
</article>

<article>
    <h3>Operadores:</h3>
    <p>Operadores agem como funções e operam sobre operandos (valores) realizando operações(cálculos, comparações etc).<p>
    <p>Operador unário: possui 1 operando<br>
    Operador binário: possui 2 operandos<br>
    Operador ternário: possui 3 operandos</p>

    Operador de negação: !false vira true - operador unário.
    Operador de soma: 5 + 4 vira 10 - operador binário.
    Operador ternário: (3 > 2) ? instrução : instrução - operador ternário, verifica uma condição ()
    e executa a primeira instrução se verdadeira, senão executa a segunda
</article>

<article>
    <h3>Estruturas de Condição:</h3>
    <p>Estruturas condicionais são estruturas que controlam o fluxo de execução de um programa, permitindo a bifurcação no fluxo de execução; ou seja, permite o controle e permite a execução de trechos de códigos diferentes dependendo da condição.</p>
    <br>
    <p>estrutura SE: identificada pela palavra reservada (if), possui uma condição a ser analisada e um trecho de código a executar se a condição for verdadeira.</p>
    <p>estrutura SENÃO SE: identificada pela palavra reservada (else if), possui uma condição a ser analisada e um trecho de código a executar se as estruturas anteriores não executarem e a condição for verdadeira.</p>
    <p>estrutura SENÃO: identificada pela palavra reservada (else), possui um trecho de código a executar se as estruturas anteriores não executarem.</p>
    <br>
    <p>A condição na estrutura SE é analisada e SE for verdadeira, a instrução interna é executada; SENÃO, a condição na estrutura SENÃO SE é analisada e SE for verdadeira, a instrução interna é executada; SENÃO, a instrução interna da estrutura SENÃO é executada, em último caso.</p>

    if (condição) {
        instrução
    }
    else if (condição) {
        instrução
    }
    else {
        instrução
    }

<br>
<p>estrutura SE, SENÃO: identificada pelo símbolo (?), possui uma condição a ser analisada e um trecho de código a executar se a condição for verdadeira e se a condição for falsa.</p>
<p>A condição na estrutura SE, SENÃO é analisada e SE for verdadeira, a primeira instrução após o símbolo (?) é executada; SENÃO, a última instrução é executada.</p>

    (condição) ? instrução : instrução

<br>
<p>estrutura SWITCH: identificada pela palavra reservada (switch), possui um valor de caso a ser comparado em sua estrutura interna.</p>
<p>Se um dos valores internos corresponder ao caso, a instrução interna desse valor é executada; senão, a instrução padrão é executada.</p>

    switch (caso) {
        valor:
            instrução
        valor:
            instrução
        default:
            instrução
    }
</article>

<article>
    <h3>Estruturas de Repetição:</h3>
    <p>Estruturas de repetição são estruturas que permitem a repetição de instruções.<p>
    <p>estrutura ENQUANTO: identificada pela palavra reservada (WHILE), possui uma condição a ser analisada e um trecho de código a executar enquanto a condição é verdadeira.</p>
    <p>A condição é analisada, se a condição é verdadeira, a instrução interna é executada e enquanto a condição for verdadeira a instrução se repetirá:</p>

    while (condição) {
        instrução
    }
<br>
<p>estrutura FAÇA-ENQUANTO: identificada pela palavra reservada (DO WHILE), possui uma condição a ser analisada após a primeira execução e executa este mesmo trecho de código enquanto a condição é verdadeira.</p>
<p>A instrução interna é executada e em seguida analisada a condição; caso a condição seja verdadeira, a instrução é executada novamente, reiniciando o loop:</p>

    do {
        instrução
    } while (condição)

<br>
<p>estrutura PARA: identificada pela palavra reservada (FOR), possui uma condição a ser analisada e um trecho de código a executar enquanto a condição é verdadeira.</p>
<p>Para a variável interna, enquanto a condição é verdadeira, a instrução interna é executada e a variável interna é modificada:</p>

    for (variável interna, condição, manipulação da variável interna) {
        instrução
    }
<br>
<p>estrutura PARA EM: identificada pela palavra reservada (FOR IN).</p>
<p>Para cada índice de uma lista, a instrução interna é executada:</p>

    for (index in lista) {
        instrução
    }
<br>
<p>estrutura PARA DE: identificada pela palavra reservada (FOR OF).</p>
<p>Para cada valor de uma lista, a instrução interna é executada:</p>

    for (valor of lista) {
        instrução
    }
</article>

<article>
    <h3>Funções e Parâmetros:</h3>
    <p>Funções são sub-rotinas, ações programadas para execução conforme demanda, tendo ou não parâmetros especificados na sua chamada; formada por um conjunto de instruções, elas realizam tarefas pré-determinadas.
    Parâmetros são variáveis locais definidas entre os parênteses no tempo de declaração e representam as características passíveis de alteração.
    Argumentos são os valores passados para a função e representam os parâmetros.</p>
    <h4>Funções Built-in:</h4>
    <p>Funções "Built-in" são funções embutidas na linguagem, prontas para uso pelo programador, como funções de entrada e saída e conversores de tipos de dados, entre outras.</p>
</article>

<article>
    <h3>Classes:</h3>
    <h4>Objetos:</h4>
    <p>Objeto é uma classe de dados que faz referência a um molde para um objeto real ou ficcional. Assim como objetos da vida real, os objetos na programação possuem atributos (que se refere as propriedades do objeto, como altura) e métodos (que se refere as ações desse objeto). Um exemplo de objeto em JavaScript seria:</p>
    
    carro = {
        marca: "FIAT", - A marca é um atributo do objeto carro e possui como valor FIAT
        acelerar() - acelerar() é um método do objeto carro que faz o carro ganhar mais velocidade
    }
    
<article>
    <h4>Programação Orientada a Objetos:</h4>
    <p>A programação orientada a objetos é um paradigma de programação que utiliza objetos na criação de algoritmos, chamada POO (em Português) ou OOP, Object-Oriented Programming, é um paradigma muito utilizado em jogos ou em aplicações que requerem maior aproximação com o mundo real.</p>
</article>

<article>
    <h4>Métodos:</h4>
</article>

<article>
    <h4>Construtores:</h4>
</article>

<article>
    <h4>Encapsulamento:</h4>
</article>

<article>
    <h4>Herança:</h4>
</article>

<article>
    <h4>Polimorfismo</h4>
</article>
</article>

<article>
    <h3>Testes:</h3>
</article>

<article>
    <h3>Frameworks:</h3>
    <p>Frameworks são pedaços de códigos que oferecem funcionalidades genéricas.</p>
</article>

<article>
    <h3>Bibliotecas:</h3>
    <p>Bibliotecas podem ser entendidas como uma coleção de subprogramas para utilização nas mais diversas aplicações.</p>
</article>

<article>
    <h3>Linguagens e Seus Usos:</h3>
    
    JavaScript - Desenvolvimento web front-end, Desenvolvimento de jogos, Aplicações web
    
    PHP - Desenvolvimento web, Aplicações desktop, Programas de computador
    
    C# - Aplicações web, Aplicações móveis, Desenvolvimento de jogos e desenvolvimento de softwares de realidade virtual, Aplicações Linux e Mac
    
    Python - Desenvolvimento web back-end, Aplicações desktop, Ciência de dados, Automação, Aplicações de deep learning, Machine learning e computação científica
 
    C++ - Programas de computador, Sistemas operacionais, Desenvolvimento de aplicativos móveis, Desenvolvimento de videogames, Desenvolvimento de aplicações server-side e client-side, Machine learning
</article>

Pessoal, aqui vos apresento uma documentação básica sobre os conceitos presentes em linguagens de programação:
https://github.com/pattuzzoj/documentacao/blob/main/Linguagens%20de%20Programa%C3%A7%C3%A3o/Conceitos%20de%20Programa%C3%A7%C3%A3o.md

Acessem e deem um feedback.