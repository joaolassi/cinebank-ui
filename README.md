Para fazer este projeto rodar

1 - Baixe o código, seja clonando ou baixando o zip
2 - Abra o projeto no seu editor de texto (Recomendo o VS code)
3 - Abra o terminal do VS code aperte ctrl+shift+' para abrir um novo terminal ou clique em terminal na aba de ferramentas e em seguida novo terminal.
4 - Instale o angular na pasta do projeto com npm install @angular/cli
5 - Instale os componentes do PrimeNG, são eles:
6 - npm install primeng --save
7 - npm install primeicons --save
8 - npm install primeflex --save
9 - Vá até o arquivo angular.json e adicione em styles estas linhas de código:

"node_modules/primeicons/primeicons.css",
"node_modules/primeflex/primeflex.css",
"node_modules/primeng/resources/themes/saga-blue/theme.css",
"./node_modules/primeng/resources/primeng.css"

10 - Instale o angular jwt com o comando npm install @auth0/angular-jwt
11 - Inicia a aplicação com ng serve
12 - Login
12.1 - Para logar na api como administrador utilize "admin@printwayy.com" como e-mail e "admin" como senha.
12.2 - PAra logar como usuário sem premissões de cadastro e remoção utilize "nobody@printwayy.com" e "jhondoe" como senha.
