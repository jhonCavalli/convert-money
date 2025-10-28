

<html>

<head>
    <meta charset="UTF-8">
    <title>Alterando CSS no JS</title>
 <style>
    .botao {
        background-color: #4CAF50;
        color: white;
    }
 </style>
</head>

<body>  

<h1 id="titulo">Olá, Mundo!</h1>
     <button class="botao">Mudar Estilo</button>

</body>
</html>



const button = document.querySelector('button');

button.style.color = 'yellow';
/*
ou 
*/

button.style.backgroundColor = 'blue';