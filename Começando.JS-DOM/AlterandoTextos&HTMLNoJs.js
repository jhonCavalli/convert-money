/*

alteando textos e HTML no JavaScript

textContent > altera o texto de um elemento, sem interpretar tags HTML/ Pega tudo
o conteudo de texto, incluindo espaços e quebras de linha.

innerText > altera o texto de um elemento, interpretando tags HTML/ Pega o conteudo visível,
 ignorando espaços e quebras de linha./ Pega APENAS o texto.

innerHTML > altera o conteúdo HTML de um elemento, 
interpretando tags HTML/ Pega todo o conteudo, incluindo tags HTML./ Permite adicionar
HTML e texto.



*/
<html>
    <head>

    </head>

    <body>
        <div class="elemento">
            <h1>Olá, mundo!</h1>
            <p>Este é um parágrafo de exemplo.</p>]
            <input type="text" value="Texto do input"/>

                <button>Click me</button>


        </div>

    </body>
</html>

const element = document.querySelector('.elemento');

console.log(element.textContent); // Pega todo o conteudo, incluindo tags HTML./SO HTML
console.log(element.innerText); // Pega APENAS o texto visível./ LEVA EM CONTA O CSS
console.log(element.innerHTML); // Pega todo o conteudo, incluindo tags HTML./PERMITE ADICIONAR HTML