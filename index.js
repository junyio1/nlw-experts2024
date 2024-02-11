const perguntas = [ //Array ou vetores [] Como se fosse um armario de supermecado onde pode ser colocado muitos produtos = valores.Agrupando tudo.
  { // dentro de {} eu posso atribuir a uma variavel que pode ter uma propriedade e valores, por exemplo: celular tem: cor, tamanho, peso. (e para acessar ele usa-se pelo pontinho (.))

  //Na criação de "alert" você cria da seguinte mandeira:
  // alert(perguntas[0].respostas[2]) então aqui ele está selecionando um alerta da seguinte mandeira: dentro de perguntas[0] no caso a primeira pergunta, eu quero um alerta da resposta [2] no caso a terceira resposta, desta maneira o alerta vai mostrar para mim a mensagem: "um aplicativo de mensagens"
    pergunta: "O que é JavaScript?",
    respostas: [ // Aqui está sendo criado outro array, dentro do array citado acima.
      "Uma linguagem de programação de alto nível",
      "Um tipo de café",
      "Um aplicativo de mensagens",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a sintaxe correta para comentários de linha única em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "' Este é um comentário",
    ],
    correta: 0
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "variável = myVar;",
      "declara myVar;",
    ],
    correta: 0
  },
  {
    pergunta: "Qual destes é um tipo de dados primitivo em JavaScript?",
    respostas: [
      "Array",
      "Object",
      "String",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "O que faz o método 'push()' em um array em JavaScript?",
    respostas: [
      "Remove o último elemento do array",
      "Adiciona um novo elemento no final do array",
      "Inverte a ordem dos elementos no array",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
    respostas: [
      "Seleciona um elemento HTML pela sua classe",
      "Seleciona um elemento HTML pelo seu ID",
      "Seleciona um elemento HTML pelo seu tipo",
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma função de callback em JavaScript?",
    respostas: [
      "Uma função que é executada após um intervalo de tempo",
      "Uma função que é passada como argumento para outra função e é executada depois que algum evento ocorre",
      "Uma função que chama a si mesma recursivamente",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador de negação em JavaScript?",
    respostas: [
      "&&",
      "!",
      "||",
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'toFixed()' faz em JavaScript?",
    respostas: [
      "Arredonda um número para o inteiro mais próximo",
      "Retorna o valor absoluto de um número",
      "Formata um número usando notação de ponto fixo",
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz'); //# é o ID que vai procurar a tag lá no html
const template = document.querySelector('template'); // QuerySelector é uma função de pesquisa e ele vai pesquisar seletor,
                                                      // poderia ser uma div, mas neste caso é o template que vem lá do html.
const corretas = new Set(); // o set serve para guardar uma informação sem que ele seja repetido
const TotalDePerguntas = perguntas.length; // Length ele vai fazer a soma de todos
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true); // QuizItem é o template.contente, para clonar um nó,
                                                      // no caso (cada tag se eu quiser),
                                                      // no caso ele vai estar clonando o conteúdo inteiro que está dentro do template do html.
                                                      // Usando true (verdadeiro)
  quizItem.querySelector('h3').textContent = item.pergunta; // Aqui ele está pesquisando o h3,
                                                              // e vai "textContent", e vai atribuir um novo valor,
                                                              // que no caso é o "item.pergunta"

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true); // dt = sub-item do html.
                                                                  // Aqui ele está clonando tudo que está na dt, que é filho da dl.

    dt.querySelector('span').textContent = resposta; // dentro do dl, vai ter um span,
                                                    // e vai ser colocado um "textContent"

    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta);
    // Valor = item respostas é uma array, procurar a resposta do momento, do índice: 0,1,2
    // Ele vai guardar as repostas de cada índice. Desta forma ele vai responder o valor correspondente.
    // Roda 0,1,2 vai para a próxima loop.

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas;
    };

    quizItem.querySelector('dl').appendChild(dt); // Ele está colocando um filho "item" (appendChild) do dt.
  }

  quizItem.querySelector('dl dt').remove(); // Essa função remove o "resposta A" porque acima ele já rodou 3x

  // Coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
