>Desafio feito pela Defesa Civil do Amazonas

Como está sendo feito o Desafio:

## Sobre o Programa:

- O desafio é criar uma aplicação em React Native, no caso utilizei o Expo por saber como utilizalo, que faça requisições HTTP para a API do GitHub, criando uma tela de login para simular uma autenticação de usuário.
- Comecei fazendo uma interface atraente e intuitiva dividida em 3 partes na pasta Pages: Welcome, Signin e UserList.

## O que é cada Parte?
- Welcome, é a parte que estarei falando o que o programa ira fazer para você e lhe dar uma primeira impressão do programa.
- SignIn, ira pegar o seu username do GitHub para fazer a pesquisa da informações que iremos precisar para a proxima tela, ah e não precisa se preocupar com a senha so digitar o que se pede.
- UserList, vai te mostrar todos os repositorios que o username pesquisado tem, mostrando nome, descrição e se um repositório é privado ou não.

## Como funciona ?
- Primeiro e recebido o seu username para adicionar a url 'https://api.github.com/users/nome_do_usuario/repos', aonde o nome_do_usuario sera o username pesquisado.
- Através do axios é recebido a url que pega as infomações.
- E então através das informações recebidas o programa divide cada repositorio mostrando o nome, descrição e se o repositorio é privado ou não.

## Tecnologias:
- Git
- JavaScript
- React Native
- Expo

## Contato
walderwilliam@gmail.com
